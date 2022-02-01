"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

// submit story
function newStorySubmission(title, author, url) {
  console.debug("newStorysubmitted!");
  StoryList.addStory(currentUser, { title, author, url });
}

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story) {
  // console.debug("generateStoryMarkup", story);

  const hostName = story.getHostName();

  return $(`
       <li id="${story.storyId}">
         <a href="${story.url}" target="a_blank" class="story-link">
           ${story.title}
         </a>
         <small class="story-hostname">(${hostName})</small>
         ${currentUser ? getStarHTML(story, story.username) : ""}
         <small class="story-author">by ${story.author}</small>
         <small class="story-user">posted by ${story.username}</small>
       </li>
     `);
}

/** Make favorite/not-favorite star for story in UI on login */

function getStarHTML(story, user) {
  const isFavorite = currentUser.isFavorite(story); // boolean value returned
  const starType = isFavorite ? "fas" : "far";
  return `
      <span class="star">
          <i class="${starType} fa-star"></i>
      </span>`;
}
// <i class="far fa-star"></i>
/** Gets list of stories from server, generates their HTML, and puts on page. */

/** Handle favorite/un-favorite a story */

async function toggleStoryFavorite(evt) {
  console.debug("toggleStoryFavorite");

  const $tgt = $(evt.target);
  const $closestLi = $tgt.closest("li");
  const storyId = $closestLi.attr("id");
  const story = storyList.stories.find((s) => s.storyId === storyId);

  // see if the item is already favorited (checking by presence of star)
  if ($tgt.hasClass("fas")) {
    // currently a favorite: remove from user's fav list and change star
    await User.removeFavorite(story);
    $tgt.closest("i").toggleClass("fas far");
  } else {
    // currently not a favorite: do the opposite
    await User.addFavorite(story);
    $tgt.closest("i").toggleClass("fas far");
  }
}

// $storiesList.on("click", ".star", toggleStoryFavorite);
$allStoriesList.on("click", ".star", toggleStoryFavorite);

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }
  $allStoriesList.show();
}
