// // TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
// var requestUrl = 'https://api.github.com/repos/twitter/chill/issues';

// fetch(requestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log('Github Repo Issues \n----------');
//     console.log(data);
//     // TODO: Loop through the response
//     // TODO: Console log each issue's URL and each user's login
//   });


var requestUrl = "https://api.github.com/orgs/nodejs/repos"

fetch(requestUrl).then(handleJson).then(handleData);

function handleJson(res){
 for(var i in data){
   console.log(data[i].owner.avatar_url)
 }

}