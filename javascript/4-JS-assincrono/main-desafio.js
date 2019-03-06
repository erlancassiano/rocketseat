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

// axios
//   .get("https://api.github.com/users/erlancassiano")
//   .then(function(response) {
//     console.log(response.data.avatar_url);
//   })
//   .catch(function(error) {
//     console.warn(error);
//   });

//exe 1
function checaIdade(idade) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      return idade >= 18 ? resolve() : reject();
    }, 2000);
  });
}

checaIdade(16)
  .then(function() {
    console.log("Maior que 18");
  })
  .catch(function() {
    console.log("Menor que 18");
  });

/// exe 2
//////////////////////////////////////////////////

var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

function renderRepos(repos) {
  listElement.innerHTML = "";
  for (repo of repos) {
    var repoElement = document.createElement("li");
    var repoText = document.createTextNode(JSON.stringify(repo));

    repoElement.appendChild(repoText);
    listElement.appendChild(repoElement);
  }
}

function renderLoading() {
  listElement.innerHTML = "";
  var textElement = document.createTextNode("Carregando...");
  var loadingElement = document.createElement("li");

  loadingElement.appendChild(textElement);
  listElement.appendChild(loadingElement);
}

function renderError() {
  listElement.innerHTML = "";
  var textElement = document.createTextNode("Erro!");
  var loadingElement = document.createElement("li");

  loadingElement.appendChild(textElement);
  listElement.appendChild(loadingElement);
}

function searchRepo() {
  var user = inputElement.value;

  if (!user) return;

  renderLoading();

  axios
    .get("https://api.github.com/users/" + user + "/repos")
    .then(function(response) {
      renderRepos(response.data);
    })
    .catch(function(error) {
      renderError();
      console.warn(error);
    });
}

buttonElement.onclick = searchRepo;
