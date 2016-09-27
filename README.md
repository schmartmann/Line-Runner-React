
# LineRunner

This app aims to allow users to upload a text file, and then convert that text to speech using a JS plugin.

# Screenshot: 

![](http://i.imgur.com/ToaGkRa.png)

# Tech Used: 
1. React.js (front-end created via react-bootstrap npm)
2. Redux to house session data, and store all data fetched from the API server. 
3. Express.js and pSQL to create the API server. 
4. ResponsiveVoice.js: external JS plugin that converts text-to-speech and DOESN’T (always) sounds like the Singularity.
5. Ngrok to allow front end (deployed on Heroku) to access API server (hosted on localhost)
6. Multer.js: very easy express.js file uploading tool. 
7. Axios: really simple React-friendly http requesting tool. 

# Approach
I took a two-pronged approach to this app, and created two standalone servers: one express.js server that contained all my database logic, and acted as an API for the front end of my app, which was hosted on a second, standalone server. 

The idea of ingesting large amounts of text that were then to be called up, and operated on in some capacity seemed like a good fit for Redux, since importing data directly into the state would allow it to be accessible across the whole app, and would avoid making lots of GET requests to my API. 

All user/session authentication, and file uploading/fetching is handled as requests to the API server I set up, which kept routing pretty neat. 

# Installation
Download, and then run: 
```
npm install
```

# User Stories
A user should be able to upload a piece of text to the database, save it under a project name, and retrieve it. 

A user should be able to have that text be read out loud back to the user. 

A user could be interested in this service because she/he is an actor looking to run lines but lacks a scene partner, someone rehearsing a speech who needs to hear it out loud, someone who is proofreading copy, or someone who finds the halting, alienating tone of an artificial robot voice somehow comforting. 

# Wire Frame
1. Front end design: ![](http://i.imgur.com/Ly2YkT8.jpg)
2. Back End logic part 1: ![](http://i.imgur.com/fCxaIFs.jpg)
3. Back End logic part 2: ![](http://i.imgur.com/FIv09ly.jpg)


# Unsolved Problems / Hurdles: 
1. Redux definitely increased the learning curve’s slope, and my one, major unsolved issue is how to map a state to props that’s an array of objects - React has a hangup about that, and I was unable to solve it. Therefore, once a user tries to retrieve a script from the database, it can’t actually be rendered as a component, which sort of defeats the whole purpose. 