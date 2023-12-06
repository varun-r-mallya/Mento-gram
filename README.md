<h1>Mento-gram</h1>
This is my Winter Of Code project under the mentorship of SDSLabs, IIT Roorkee

<h2>Project Information:</h2>

<h3>Description:</h3>
MentoGram will allow organisations/clubs/institutions to set up their own personal mentoring sites where a new entrant can be matched with a mentor. This will allow them to communicate over the website using video chat. I will also be adding a collaborative code editor with real time editing access to both the mentor and the mentee. There will also be a persistent text chat in the app. The code that is added can be stored in the database accessible by the mentor and the mentees.

<h3>Use Cases:</h3>
MentoGram has a wide variety of use cases.
It can be used 
- by clubs/institutions which mentor students to code. 
- by educators who teach coding to solve doubts one on one.
- to take online coding rounds of interviews.
- to do collaborative coding during hackathons.

<h3>Context (With respect to SDSLabs):</h3>
MentoGram can be used by clubs like SDSLabs which mentor people new to coding and development. It provides a much cleaner way to code collaboratively by bunching together video chat along with text chat and collaborative code editing. I think this will serve SDSLabs well in the future when they mentor the participants of WoC.

### Impact:
This will help the mentors reach their mentees better and the final project comes out much better than expected due to the added layer of collaborative coding. This will also help the mentee learn very fast and would add to the convenience of both the mentor and the mentee.

### Primary goals:
-Making a registration and login system for the mentor who will be allowed to create accounts for their mentees. The mentees will be able to change the password set by the mentor.
-The mentees and the mentors will be able to upload files. These files can be saved, edited and downloaded.
-The editor should allow for real time collaboration where each user’s cursor shows up on either user’s screen with their name tags like Google Docs.
-There should be a video chat facility where either user can call the other.
-There should be an upload button for both users to upload their files and (for primary goal only) the file currently on the screen gets downloaded onto both computers and the new file is displayed. 
-Add interpreter support for Python.

### Secondary Goals (To be done after accomplishing primary):
-The mentees and mentors will have access to a common file manager which will store all their uploaded files and can be viewed like VS Code.
-The text editor can have the support to edit more than one file at a time using tabs like VS Code.
-There should be a text chat facility which is persistent and gets stored.
-A way for more than two users to be on the same chat can be added. 
-If mentor and mentee are typing in the same place at the same time, the mentor’s text should be given priority and get typed.
-Possibly adding online compilers to the web app to make it a complete online IDE.
-Add a questions storage folder and a point system where mentees are awarded points on solving the questions posed by the mentor.


### Tentative Tech stack(s) to achieve primary goals:
-Flask on Python to handle backend.
-MongoDB connected to Flask using PyMongo as the database.
-React.JS as front end along with required libraries for code editing, file management and file display.
-“socket.io” as the real time data transfer library using WebSocket to transfer text for the code editor.
-If I can, I will try to make the server HTTPS instead of plain old HTTP.
-I chose Flask for this project because I wanted to learn Python properly and I wanted this project to be my maiden project in Python.
-I will be using the Ace Code Editor Project to add the multiple cursor support and the real time code editing. https://ace.c9.io/. This library has built in support for multiple cursors which I will be adding in the flask backend.
-Socket IO will be used to transfer the cursor locations in real time and the python server will handle all the updates on the server side. Socket IO will be -used inside Flask on the server side and on the front end on the client’s side, it will be used as a library in React.
-To stream live video from both sides, I will be using WebRTC to send the audio and video streams live from one client to a server and then back to another client.
-For the Video chat support, I will be using the react-webcam library.
-I will be hashing the passwords using bcrypt, a Python library.
-I will only be providing Python interpreter support because I would have to implement each interpreter/compiler for several languages. This would be impractical for one person to do and Python would serve as a proof of concept that it can be done.
-To make the file manager, I will be tentatively using https://chonky.io/ as the primary file selector and manager while I will be using https://pqina.nl/filepond/ for uploading the files. FilePond optimises image uploads and even text file uploads to make them faster. I’ll also be using https://github.com/pqina/react-filepond to get drag and drop support.
-The Python interpreter will be Web Based and will be a ReactJS library https://github.com/elilambnz/react-py which is demonstrated here https://elilambnz.github.io/react-py/docs/examples/basic-example. Since this example uses Ace-Editor, the integration with my own site will be much easier. 


### Timeline for project completion:

-December 2nd: INITIAL CONNECT
-December 2nd to December 3rd: Setting up my new laptop and installing all the required OSes and development environment and troubleshooting the development environment to make everything easy later.
-December 4th to December 12th: Learning React.JS in detail and making small projects with Flask to familiarise myself with the environment. Same for MongoDB.
-December 12th to 15th: Making the login and registration pages along with their respective forms, setting up the password hashing and the file system in the database for each user.
-December 16th to 20th: Making the code editor as a separate module and integrating it to the main website as shown in the user flow section along with adding the upload file functionality to the website.
-December 20th to 24th: Adding the collaborative coding part with the highlighted cursors of each user to the code editor and troubleshooting the entire system.
-December 24th to 28th: Adding the video chat feature to the website according to the user flow section. 
-December 28th: MID EVALUATION
-January 2nd to 5th: Fixing Bugs in the primary project and starting with the secondary goal of adding text chat.
-January 6th to 10th: Adding the file manager as part of the secondary goal. Also adding the interpreter support at this stage.
-January 10th to 14th: Buffer period to fix random bugs.
-January 14th: FINAL EVALUATION
