import json
from flask import Flask


app = Flask(__name__)

@app.route('/')
def hello():
    mailboxes = ["a@mail.com", "b@mail.com"]
    with open('/code/shared/mailboxes.json', 'w') as outfile:
        json.dump(mailboxes, outfile)

    return 'Provisioning'


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)