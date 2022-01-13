const form = document.getElementById("form");
const searchTerm = document.getElementById("searchTerm");
const deleteButton = document.getElementById("delete");
const $gifContainer = $("#gif-container");
const gifContainer = document.getElementById("gif-container");
const API_KEY = "UmuVZr1n33kAMgNVHktiz1MNDm2PNOUk";

async function getGIFs(searchTerm) {
  const res = await axios.get(
    // "http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}`
  );
  //   const url = res.data.data[0].url;
  const url = res.data.data[0].images.original.url;
  //   const url = res.data.data[0].images.original.mp4;
  //   console.log(url);
  appendGIF(url);
}

// create gif element and append to container
function appendGIF(url) {
  const gif = document.createElement("img");
  gif.src = url;
  gif.className = "gif";
  gifContainer.append(gif);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  getGIFs(searchTerm.value);
});

// $("#delete").on("click", function () {
//   $gifContainer.empty();
// });

deleteButton.addEventListener("click", function (event) {
  //   remove all children of an element
  while (gifContainer.firstChild) {
    gifContainer.removeChild(gifContainer.firstChild);
  }
});
