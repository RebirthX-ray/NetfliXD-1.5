var CLIENT_ID = 'http://131979807256-s94vium5cvpklf1eiqbqtalmg98t672g.apps.googleusercontent.com'; // Replace with your client ID obtained from the Google Cloud Console
var SCOPES = 'https://www.googleapis.com/auth/drive.file';

function handleAuthClick() {
  gapi.auth.authorize(
    {
      client_id: CLIENT_ID,
      scope: SCOPES,
      immediate: false
    },
    handleAuthResult
  );
}

function handleAuthResult(authResult) {
  if (authResult && !authResult.error) {
    loadDriveApi();
  } else {
    console.error('Authorization failed.');
  }
}

function loadDriveApi() {
  gapi.client.load('drive', 'v3', function() {
    document.getElementById('filePicker').style.display = 'inline';
    document.getElementById('filePicker').addEventListener('change', uploadFile);
  });
}

function uploadFile(event) {
  var file = event.target.files[0];
  var metadata = {
    name: file.name,
    mimeType: file.type
  };

  var reader = new FileReader();
  reader.onload = function(e) {
    var content = reader.result;
    var data = btoa(content);
    var boundary = '-------' + Date.now();
    var delimiter = '\r\n--' + boundary + '\r\n';
    var closeDelim = '\r\n--' + boundary + '--';

    var multipartRequestBody =
      delimiter +
      'Content-Type: application/json\r\n\r\n' +
      JSON.stringify(metadata) +
      delimiter +
      'Content-Type: ' + file.type + '\r\n\r\n' +
      data +
      closeDelim;

    var request = gapi.client.request({
      'path': '/upload/drive/v3/files',
      'method': 'POST',
      'params': {
        'uploadType': 'multipart'
      },
      'headers': {
        'Content-Type': 'multipart/related; boundary=' + boundary + ''
      },
      'body': multipartRequestBody
    });

    request.execute(function(file) {
      console.log('File ID:', file.id);
    });
  };

  reader.readAsBinaryString(file);
}

