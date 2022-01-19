/** Given a query string, return array of matching shows:
 *     { id, name, summary, episodesUrl }
 */

/** Search Shows
 *    - given a search term, search for tv shows that
 *      match that query.  The function is async- it
 *       will be returning a promise.
 *
 *   - Returns an array of objects. Each object should include
 *     following show information:
 *    {
        id: <show id>,
        name: <show name>,
        summary: <show summary>,
        image: <an image from the show data, or a default imege if no image exists, (image isn't needed until later)>
      }
 */

const MISSING_IMAGE_URL = "http://tinyurl.com/tv-missing";

async function searchShows(query) {
  let showArray = [];
  try {
    const res = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${query}`
    );
    for (showInfo of res.data) {
      const { show } = showInfo;
      let obj = {
        id: show.id,
        name: show.name,
        summary: show.summary,
        image: show.image ? show.image.original : MISSING_IMAGE_URL, // user experience more than anything
      };
      showArray.push(obj);
    }
  } catch (error) {
    console.log(error);
  }
  return showArray;
}

function populateShows(shows) {
  const $showsList = $("#shows-list");
  $showsList.empty();

  for (let show of shows) {
    let $item = $(
      `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
         <div class="card" data-show-id="${show.id}">
          <img class="card-img-top" src="${show.image}">
           <div class="card-body">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.summary}</p>
           </div>
           <button class="btn btn-primary" id="list-episodes" >Show episodes</button>
         </div>
       </div>
      `
    );

    $showsList.append($item);
  }
}

$("#search-form").on("submit", async function handleSearch(evt) {
  evt.preventDefault();

  // make variable from search query
  const query = $("#search-query").val();
  // search query check
  if (!query) {
    return;
  }
  // if there are episodes already, hide them
  $("#episodes-area").hide();

  // populate an array of show objects from the api
  const shows = await searchShows(query); // "wait here until this promise comes in"

  // show them all on the DOM
  populateShows(shows);
});

async function getEpisodes(id) {
  const episodes = [];
  try {
    const { data } = await axios.get(
      // `https://api.tvmaze.com/shows/${id}/episodes`
      `https://api.tvmaze.com/shows/5/episodes` // placeholder show
    );
    for (episode of data) {
      let episodeObj = {
        id: episode.id,
        name: episode.name,
        season: episode.season,
        number: episode.number,
      };
      episodes.push(episodeObj);
    }
  } catch (error) {
    console.log("This is the error: ", error);
  }
  console.log(episodes);
  return episodes;
}

function populateEpisodes(episodes) {
  const $episodesList = $("episodes-list");
  $episodesList.empty();

  for (let episode of episodes) {
    let $item = $(
      `<li>${episode.name} (season ${episode.season}, number ${episode.number})</li>`
    );

    $episodesList.append($item);
  }
}

console.log($("#list-episodes"));
// $("#list-episodes").on("click", function () {
//   console.log("episodes!");
// });
