const $form = $("#form");
const $searchTerm = $("#searchTerm");
const $deleteButton = $("#delete");
const $gifContainer = $("#gif-container");
const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

// create gif element and append to container
function appendGIF(url) {
  let $newCol = $("<div>");
  let $newGif = $("<img>", {
    src: url,
  });
  $newCol.append($newGif);
  $gifContainer.append($newCol);
}

$form.on("submit", async function (event) {
  event.preventDefault();
  const res = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${$searchTerm.val()}&api_key=${API_KEY}`
  );
  let random = Math.floor(Math.random() * 50);
  const url = res.data.data[random].images.original.url;
  appendGIF(url);
});

$deleteButton.on("click", function () {
  $gifContainer.empty();
});
