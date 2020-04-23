from flask import Flask, request
from flask_restful import Resource, Api
import spotipy
import spotipy.util as util
from spotipy.oauth2 import SpotifyClientCredentials

SPOTIPY_CLIENT_ID = "YOUR SPOTIPY_CLIENT_ID HERE"
SPOTIPY_CLIENT_SECRET = "YOUR SPOTIPY_CLIENT_SECRET HERE"
SPOTIPY_REDIRECT_URI = "YOUR SPOTIPY_REDIRECT_URI HERE"

username = 'YOUR USERNAME HERE'
scope = "playlist-modify-public"

client_credentials_manager = SpotifyClientCredentials(SPOTIPY_CLIENT_ID, SPOTIPY_CLIENT_SECRET)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

token = util.prompt_for_user_token(username, scope, SPOTIPY_CLIENT_ID, SPOTIPY_CLIENT_SECRET, SPOTIPY_REDIRECT_URI)
sp = spotipy.Spotify(auth=token)

def get_desired_artist(data):
  desired_artist = data['desired_artist']
  desired_artist_results = sp.search(q='artist:' + desired_artist, type='artist')
  return desired_artist_results

def get_artist_info(desired_artist_results):
  desired_artist_entry = desired_artist_results["artists"]["items"][0]
  artist_name = desired_artist_entry["name"]
  artist_uri = desired_artist_entry["uri"]
  artist_image_url = desired_artist_entry["images"][0]["url"]

  return (artist_name, artist_uri, artist_image_url)

def add_top_songs_to_list(artist_uri):
  artist_top_tracks = sp.artist_top_tracks(artist_uri)
  track_list = []
  main_artist_song_count = 0

  for track in artist_top_tracks['tracks']:
    if main_artist_song_count < 5:
      track_list.append(track['id'])
      main_artist_song_count += 1
    else:
      break

  return track_list

def add_related_songs_to_list(track_list, artist_uri):
  related_artists = sp.artist_related_artists(artist_uri)
  related_artist_count = 0
  related_song_count = 0
  for artist in related_artists["artists"]:
    if related_artist_count < 10:
      related_artist_uri = artist["uri"]
      related_artist_top_tracks = sp.artist_top_tracks(related_artist_uri)
      for track in related_artist_top_tracks["tracks"]:
        if related_song_count < 3:
          track_list.append(track["id"])
          related_song_count += 1
      related_artist_count += 1
      # Reset related_song_count for next artist
      related_song_count = 0
  return track_list

def create_playlist(artist_name):
  playlist_name = "Inspired by " + artist_name
  sp.trace = False
  playlist = sp.user_playlist_create(username, playlist_name)
  playlist_id = playlist["id"]
  return (playlist_name, playlist, playlist_id)

def add_tracks_to_playlist(username, playlist_id, track_list):
  sp.user_playlist_add_tracks(username, playlist_id, track_list)