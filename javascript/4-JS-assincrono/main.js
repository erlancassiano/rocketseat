//AJAX

// var xhr = new XMLHttpRequest();

// xhr.open("GET", "https://api.github.com/users/erlancassiano");
// xhr.send(null);

// xhr.onreadystatechange = function() {
//   if (xhr.readyState === 4) {
//     console.log(JSON.parse(xhr.responseText));
//   }
// };

//PROMISSES

// var minhaPromise = function() {
//   return new Promise(function(resolve, reject) {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://api.github.com/users/erlancassiano");
//     xhr.send(null);

//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           resolve(JSON.parse(xhr.responseText));
//         } else {
//           reject("Erro na requisiçao");
//         }
//       }
//     };
//   });
// };

// minhaPromise()
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.warn(error);
//   });

//AXIOS

axios
  .get("https://api.githu333b.com/users/erlancassiano")
  .then(function(response) {
    console.log(response.data.avatar_url);
  })
  .catch(function(error) {
    console.warn(error);
  });
