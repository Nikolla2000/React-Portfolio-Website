const { google } = require('googleapis');

// Create an OAuth2 client and set the access token
const OAuth2 = google.auth.OAuth2;
const oAuth2Client = new OAuth2();
oAuth2Client.setCredentials({ access_token: 'YOUR_ACCESS_TOKEN' });

// Initialize the Gmail API
const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

// Function to list Gmail labels
function listLabels() {
  gmail.users.labels.list({ userId: 'me' }, (err, res) => {
    if (err) {
      console.error('The API returned an error:', err);
      return;
    }
    const labels = res.data.labels;
    if (labels.length) {
      console.log('Labels:');
      labels.forEach((label) => {
        console.log(`- ${label.name}`);
      });
    } else {
      console.log('No labels found.');
    }
  });
}

// Call the function to list labels
listLabels();
