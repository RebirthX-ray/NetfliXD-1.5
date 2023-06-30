function listFiles() {
  gapi.client.drive.files.list({
    pageSize: 10,
    fields: 'nextPageToken, files(id, name)',
  }).then(function(response) {
    var files = response.result.files;
    // Process the files accordingly
  });
}
