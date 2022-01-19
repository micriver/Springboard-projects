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
  // TODO: Make an ajax request to the searchShows api.  Remove
  // hard coded data. Make sure you're traversing the returned json so that each object (each show) has the four pieces of information extrapolated
  let showArray = [];
  try {
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${query}`
    );
    for (show of data) {
      let obj = {
        id: show.show.id,
        name: show.show.name,
        summary: show.show.summary,
        image: show.show.image ? show.show.image.original : MISSING_IMAGE_URL, // missing image check
      };
      showArray.push(obj);
    }
  } catch (error) {
    console.log("This is the error: ", error);
  }
  return showArray;
}

/** Populate shows list:
 *     - given list of shows, add shows to DOM
 *      - it recieves an array of objects (shows), loops through them in a for loop and creates div cards of each on the DOM
 *      - each card is appended to the div in the dom with the id shows-list inside the for loop
 */

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
         </div>
       </div>
      `
    );

    $showsList.append($item);
  }
}

function populateEpisodes(episodes) {
  const $episodes = $("episodes-area");
  $episodes.empty();

  for (let show of shows) {
    let $item = $(
      `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
         <div class="card" data-show-id="${show.id}">
          <img class="card-img-top" src="${show.image}">
           <div class="card-body">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.summary}</p>
           </div>
         </div>
       </div>
      `
    );

    $showsList.append($item);
  }
}

/** Handle search form submission:
 *    - hide episodes area
 *    - get list of matching shows and show in shows list
 */

$("#search-form").on("submit", async function handleSearch(evt) {
  evt.preventDefault();

  // make variable from search query
  let query = $("#search-query").val();
  // search query check
  if (!query) return;

  // if there are episodes already, hide them
  $("#episodes-area").hide();

  // populate an array of show objects from the api
  let shows = await searchShows(query);

  // show them all on the DOM
  populateShows(shows);
});

/** Given a show ID, return list of episodes:
 *      { id, name, season, number }
 */

async function getEpisodes(id) {
  // TODO: get episodes from tvmaze
  //       you can get this by making GET request to
  //       http://api.tvmaze.com/shows/SHOW-ID-HERE/episodes
  // TODO: return array-of-episode-info, as described in docstring above
  const episodes = [];
  try {
    const { data } = await axios.get(
      // `https://api.tvmaze.com/shows/${id}/episodes`
      `https://api.tvmaze.com/shows/5/episodes`
    );
    // console.log(data[0].id); // data is an array of episode objects with episode information
    for (episode of data) {
      let episodeObj = {
        id: episode.id,
        name: episode.name,
        season: episode.season,
        number: episode.number,
        // number: episode.number ? show.show.image.original : MISSING_IMAGE_URL, // missing image check
      };
      console.log(episodeObj);
      episodes.push(episodeObj);
    }
  } catch (error) {
    console.log("This is the error: ", error);
  }
  return episodes;
}
