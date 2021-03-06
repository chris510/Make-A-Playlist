from flask import Flask, request, jsonify, redirect
from flask_restful import Resource, Api
from flask_cors import CORS
from random import shuffle
import config

from playlist_utils import (
  get_desired_artist,
  get_artist_info,
  add_top_tracks_to_list,
  add_related_tracks_to_list,
  create_playlist,
  parse_tracklist_ids,
  parse_tracklist_name_artist,
  add_tracks_to_playlist,
  create_playlist_iframe,
  randomize_track_list_order,
  get_playlist_link
)

from message_utils import (
  parse_data,
  parse_into_message,
  sendTxtMessage
)

app = Flask(__name__, )
CORS(app)
api = Api(app)

@app.route("/") 
def home_view(): 
  return "<h1>Welcome to the Make-A-Playlist API!</h1>"
 
class Playlist(Resource):
  def post(self):
    desired_artist_results = get_desired_artist(request.get_json())

    if len(desired_artist_results["artists"]["items"]) == 0:
      return {"message": "Cannot find artist!"}

    artist_name, artist_uri, artist_image_url = get_artist_info(desired_artist_results)

    track_list = add_top_tracks_to_list(artist_uri)
    track_list = add_related_tracks_to_list(track_list, artist_uri)
    track_list = randomize_track_list_order(track_list)

    track_ids = parse_tracklist_ids(track_list)
    track_artist_list = parse_tracklist_name_artist(track_list)
    playlist_name, playlist, playlist_id = create_playlist(artist_name)

    add_tracks_to_playlist(playlist_id, track_ids)
    playlist_iframe_href = create_playlist_iframe(playlist_id)

    playlist_link = get_playlist_link(playlist_id)

    return {
      # 'track_ids': track_ids,
      # 'track_artist_list': track_artist_list,
      'playlist_name': playlist_name,
      'playlist_link': playlist_link,
      'playlist_iframe_href': playlist_iframe_href
    }, 200

class Message(Resource):
  def post(self):
    playlist_name, playlist_link, phone_number = parse_data(request.get_json())
    message = parse_into_message(playlist_name, playlist_link)

    sendTxtMessage(message, phone_number)
    return { 
      'text_message': message,
      'phone_number': phone_number
    }, 200

api.add_resource(Playlist, "/playlist")
api.add_resource(Message, "/message")

if __name__ == "__main__":
  app.run()


