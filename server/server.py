from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/mentorlogin', methods=['POST'])
def mentor_login():
    if request.method == 'POST':
        data = request.get_json() 
        email = data.get('email')
        password = data.get('password')

        return jsonify({'email': email, 'password': password}), 200

if __name__ == '__main__':
    app.run(debug=True) 