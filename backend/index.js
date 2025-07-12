const express = require('express');
// This imports the Express framework (a simple backend web server) so you can create routes and handle HTTP requests.
const cors = require('cors');
// This imports the cors middleware, which allows your frontend (e.g. http://localhost:5173) to talk to your backend (http://localhost:5000) — Cross-Origin Resource Sharing.
const app = express();
// This creates an instance of your Express application. Think of app as your web server.
const PORT = 5000;
// This sets the port number for your server. Your backend will run on http://localhost:5000. Port no. can be changed.

app.use(cors());
// This tells your server to accept cross-origin requests (e.g., from your frontend running on a different port).
// By default, the browser blocks such cross-origin calls for security reasons.
// but this line says that its okay to accept it

app.use(express.json());
// This middleware allows your server to read incoming JSON data in POST requests.

app.get('/', (req, res) => {
  res.send('Welcome to Tunez backend!');
});
// This defines a GET endpoint at /.
// If you visit http://localhost:5000/, you’ll get the response:
// ➝ "Welcome to Tunez backend!"

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// This starts your server and listens on port 5000.
// Once it runs, you'll see the message in the terminal, confirming it's live.

// --------------------------------------------------------------------
//  What Happens When You Run npm start
// npm looks into package.json
// Finds "start": "node index.js"
// Runs index.js with Node.js
// Your server starts on port 5000
// You can now call it from your frontend or browser at http://localhost:5000/