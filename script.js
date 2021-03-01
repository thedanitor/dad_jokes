// div with joke text
const jokeEl = document.getElementById("joke");
// button
const jokeBtn = document.getElementById("jokeBtn");

// when joke button clicked, run generateJoke function
jokeBtn.addEventListener("click", generateJoke);

// call function when page loads
generateJoke();

// *** USING ASYNC/AWAIT ***
// need async if using await inside function
async function generateJoke() {
  // config variable to specify json data request
  // fetch request more readable by using config var instead of having headers object in request
  const config = {
    // include headers
    headers: {
      // accept as key, application/json as value
      Accept: "application/json",
    },
  };

  // since fetch returns promise, use await keyword
  const response = await fetch("https://icanhazdadjoke.com/", config);
  // res.json() returns promise, so use await
  const data = await response.json();
  // once data received replace html in jokeEl with data.joke
  jokeEl.innerHTML = data.joke;
}

// *** USING FETCH API w/ .THEN() ***
// function generateJoke() {
//     // config variable to specify json data request
//     // fetch request more readable by using config var instead of having headers object in request
//     const config = {
//         // include headers
//         headers: {
//             // accept as key, application/json as value
//             "Accept": "application/json"
//         }
//     }
//     //make fetch request to URL, use config variable
//     fetch("https://icanhazdadjoke.com/", config)
//     //once promise returned, specify as json data
//     .then(res => res.json())
//     // once data received replace html in jokeEl with data.joke
//     .then(data => {
//         jokeEl.innerHTML = data.joke;
//     });
// }