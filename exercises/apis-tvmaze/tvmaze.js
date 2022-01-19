const MISSING_IMAGE_URL = "http://tinyurl.com/tv-missing";

async function searchShows(query) {
  let showArray = [];
  try {
    const res = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${query}`
    );
    showArray = res.data.map((shows) => {
      const show = shows.show;
      return {
        id: show.id,
        name: show.name,
        summary: show.summary,
        image: show.image ? show.image.original : MISSING_IMAGE_URL,
      };
    });
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
  const query = $("#search-query").val();
  if (!query) {
    return;
  }
  $("#episodes-area").hide();
  const shows = await searchShows(query);
  populateShows(shows);
});

async function getEpisodes(id) {
  let episodes = [];
  try {
    const res = await axios.get(`https://api.tvmaze.com/shows/${id}/episodes`);
    episodes = res.data.map((episode) => {
      return {
        id: episode.id,
        name: episode.name,
        season: episode.season,
        number: episode.number,
      };
    });
  } catch (error) {
    console.log(error);
  }
  return episodes;
}

function populateEpisodes(episodes) {
  const $episodesList = $("#episodes-list");
  $episodesList.empty();

  for (let episode of episodes) {
    let $item = $(
      `<li>${episode.name} (season ${episode.season}, episode number ${episode.number})</li>`
    );

    $episodesList.append($item);
  }
  $("#episodes-area").show();
}

$("#shows-list").on(
  "click",
  "#list-episodes",
  async function handleEpisodeClick(event) {
    let showId = $(event.target).closest(".Show").data("show-id");
    populateEpisodes(await getEpisodes(showId));
  }
);
