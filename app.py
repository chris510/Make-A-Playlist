from flask import Flask, request
from flask_restful import Resource, Api

from playlist_utils import (
  get_desired_artist,
  get_artist_info,
  add_top_songs_to_list,
  add_related_songs_to_list,
  create_playlist,
  add_tracks_to_playlist
)

app = Flask(__name__)
api = Api(app)

class Playlist(Resource):
  def post(self):
    desired_artist_results = get_desired_artist(request.get_json())

    if len(desired_artist_results['artists']['items']) == 0:
      return {'message': 'Cannot find artist!'}

    artist_name, artist_uri, artist_image_url = get_artist_info(desired_artist_results)

    track_list = add_top_songs_to_list(artist_uri)
    track_list = add_related_songs_to_list(track_list, artist_uri)

    # playlist_name, playlist, playlist_id = create_playlist(artist_name)

    # add_tracks_to_playlist(username, playlist_id, track_list)

    return { 
      # 'related_artists' : related_artists,
      # 'desired_artist_results' : desired_artist_results,
      # 'desired_artist_entry': desired_artist_entry,
      'artist_name': artist_name,
      'artist_uri': artist_uri,
      'artist_image_url': artist_image_url,
      'track_list' : track_list
    }, 200
    
api.add_resource(Playlist, '/playlist')

app.run(port=5000, debug=True)
