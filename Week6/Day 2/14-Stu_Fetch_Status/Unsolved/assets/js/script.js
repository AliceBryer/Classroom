var requestUrl = 'https://api.github.com/orgs/nodejs/oreps?per_page=5';

var responseText = document.getElementById('response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      // Check the console first to see the response.status
      console.log(response.status);

if (response.status == "404") {
  responseText.textContent = response.status;
    }
 })
  .then(function (data) {
      console.log(data);
  
    return response.json
    });
}

getApi(requestUrl);
