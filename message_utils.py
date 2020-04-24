# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'AC6d673beb13f407a8892c1bb7538cab0e'
auth_token = 'ba58277c52b03461d55e1f6dfc45579a'

account_sid = 'YOUR ACCOUNT_SID HERE'
auth_token = 'YOUR AUTH TOKEN HERE'

client = Client(account_sid, auth_token)

message = client.messages \
                .create(
                     body="Join Earth's mightiest heroes. Like Kevin Bacon.",
                     from_='+14422693966',
                     to='+15105072779'
                 )

print(message.sid)
