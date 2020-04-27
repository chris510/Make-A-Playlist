from twilio.rest import Client

account_sid = 'AC6d673beb13f407a8892c1bb7538cab0e'
auth_token = '5b585b922a51d27ee45cfbc5c5ec9ba7'

# account_sid = 'YOUR ACCOUNT_SID HERE'
# auth_token = 'YOUR AUTH TOKEN HERE'

client = Client(account_sid, auth_token)

def parse_data(data):
	playlist_name = data["playlist_name"]
	playlist_link = data["playlist_link"]
	phone_number = data["phone_number"]

	return (playlist_name, playlist_link, phone_number)

def parse_into_message(name, link):
	return f'{name} - {link}'

def sendTxtMessage(message, number):
	message = client.messages \
							.create(
										body=message,
										from_='+14422693966',
										to='+1' + number
								)
	return message

# def get_track_artist_list(data):
#   	return data["track_artist_list"]

# def parse_list_into_string(track_artist_list):
#   	str_list = ""
# 	lenList = len(track_artist_list)
# 	for i, track in enumerate(track_artist_list):
#   		track_name = track["track"]
# 		artist_name = track["artist"]
# 		str_list += f'{track_name} - {artist_name}'
# 		if i != lenList - 1: 
# 			str_list += ', '
# 	return str_list


