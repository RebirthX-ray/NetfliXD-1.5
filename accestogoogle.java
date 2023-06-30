function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

function initClient() {
  gapi.client.init({
    clientId: 'YOUR_CLIENT_ID',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
    scope: 'https://www.googleapis.com/auth/drive.file',
  }).then(function() {
    // Handle the authentication flow.
    // You can check if the user is signed in using `gapi.auth2.getAuthInstance().isSignedIn.get()`
  });
}
