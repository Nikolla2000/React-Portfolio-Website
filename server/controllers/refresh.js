const { google } = require('googleapis');
const fs = require('fs');
const readline = require('readline');
const { OAuth2Client } = require('google-auth-library');

const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];
const TOKEN_PATH = 'token.json'; // You can specify your own path.

// Load client secrets from a file you downloaded from the Google API Console.
const credentials = require('./client_secret_913435642460-k3oldlgku4mkqub5qhpq8mi9j9a3jeur.apps.googleusercontent.com.json');

// Access properties under the "web" object
const { client_id, client_secret, redirect_uris } = credentials.web;

// Create an OAuth2 client
const oAuth2Client = new OAuth2Client(client_id, client_secret, redirect_uris[0]);

// Check if we have previously stored a token.
fs.readFile(TOKEN_PATH, (err, token) => {
  if (err) {
    getNewToken(oAuth2Client);
  } else {
    oAuth2Client.setCredentials(JSON.parse(token));
    // Here, you can use oAuth2Client to get an access token and refresh token as needed.
  }
});

function getNewToken(oAuth2Client) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this URL:', authUrl);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Enter the code from the page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
    });
  });
}
