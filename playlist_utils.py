from flask import request
import config
import spotipy
import spotipy.util as util
from spotipy.oauth2 import SpotifyClientCredentials
from random import sample, shuffle

SPOTIPY_CLIENT_ID = config.SPOTIPY_CLIENT_ID
SPOTIPY_CLIENT_SECRET = config.SPOTIPY_CLIENT_ID
SPOTIPY_REDIRECT_URI = config.SPOTIPY_REDIRECT_URI

username = 's0rxn0lrvbtx9div9v2zun024';
scope = "playlist-modify-public"

# SPOTIPY_CLIENT_ID = "YOUR SPOTIPY_CLIENT_ID HERE"
# SPOTIPY_CLIENT_SECRET = "YOUR SPOTIPY_CLIENT_SECRET HERE"
# SPOTIPY_REDIRECT_URI = "YOUR SPOTIPY_REDIRECT_URI HERE"t

# username = 'YOUR USERNAME HERE'
# scope = "playlist-modify-public"

client_credentials_manager = SpotifyClientCredentials(SPOTIPY_CLIENT_ID, SPOTIPY_CLIENT_SECRET)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

token = util.prompt_for_user_token(username, scope, SPOTIPY_CLIENT_ID, SPOTIPY_CLIENT_SECRET, SPOTIPY_REDIRECT_URI)
sp = spotipy.Spotify(auth=token)

def get_desired_artist(data):
  desired_artist = data["desired_artist"]
  desired_artist_results = sp.search(q="artist:" + desired_artist, type="artist")
  return desired_artist_results

def get_artist_info(desired_artist_results):
  desired_artist_entry = desired_artist_results["artists"]["items"][0]
  artist_name = desired_artist_entry["name"]
  artist_uri = desired_artist_entry["uri"]
  artist_image_url = desired_artist_entry["images"][0]["url"]

  return (artist_name, artist_uri, artist_image_url)

def add_top_tracks_to_list(artist_uri):
  artist_top_tracks = sp.artist_top_tracks(artist_uri)
  track_list = []
  random_top_tracks = sample(artist_top_tracks["tracks"], 10)

  for track in random_top_tracks:
    track_id = track["id"]
    track_name = track["name"]
    artist_name = track["artists"][0]["name"]
    track_list.append((track_id, track_name, artist_name))
  return track_list

def add_related_tracks_to_list(track_list, artist_uri):
  related_artists = sp.artist_related_artists(artist_uri)
  related_artist_count = 0
  for artist in related_artists["artists"]:
    if related_artist_count < 10:
      related_artist_uri = artist["uri"]
      related_artist_top_tracks = sp.artist_top_tracks(related_artist_uri)
      related_artist_random_top_tracks = sample(related_artist_top_tracks["tracks"], 3)
      for track in related_artist_random_top_tracks:
        track_id = track["id"]
        track_name = track["name"]
        artist_name = track["artists"][0]["name"]
        track_list.append((track_id, track_name, artist_name))
      related_artist_count += 1
  return track_list

def create_playlist(artist_name):
  playlist_name = "Inspired by " + artist_name
  sp.trace = False
  playlist = sp.user_playlist_create(username, playlist_name)
  playlist_id = playlist["id"]
  return (playlist_name, playlist, playlist_id)

def parse_tracklist_ids(track_list):
  track_ids = []
  for track in track_list:
    track_ids.append(track[0])
  return track_ids

def parse_tracklist_name_artist(track_list):
  track_artist_list = []
  for track in track_list:
    track_artist_list.append({ "track": track[1], "artist": track[2]})
  return track_artist_list

def add_tracks_to_playlist(playlist_id, track_list):
  sp.user_playlist_add_tracks(username, playlist_id, track_list)

def randomize_track_list_order(track_list):
  list_len = len(track_list)
  return sample(track_list, list_len)

def create_playlist_iframe(playlist_id):
  playlist_iframe_href = "https://open.spotify.com/embed?uri=spotify:user:" + username + ":playlist:" + playlist_id + "&theme=black"
  return playlist_iframe_href

def get_playlist_link(playlist_id):
  playlist_data = sp.playlist(playlist_id)
  playlist_link = playlist_data['external_urls']['spotify']
  return playlist_link