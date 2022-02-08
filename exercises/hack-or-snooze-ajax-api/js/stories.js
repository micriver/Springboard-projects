"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

// submit new story
function newStorySubmission(title, author, url) {
  console.debug("newStorysubmitted!");
  const story = StoryList.addStory(currentUser, { title, author, url });
  $allStoriesList.append(story);
}

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
  const hostName = story.getHostName();

  return $(`
       <li id="${story.storyId}">
         <a href="${story.url}" target="a_blank" class="story-link">
           ${story.title}
         </a>
         <small class="story-hostname">(${hostName})</small>
         ${currentUser ? getStarHTML(story, story.username) : null}
         <small class="story-author">by ${story.author}</small>
         <small class="story-user">posted by ${story.username}
          ${
            currentUser && currentUser.isOwnStory(story)
              ? `<span class="trashcan"><i class="fa fa-trash" aria-hidden="true"></i></span></small>`
              : null // try returning "null" for things that are empty
          }
       </li>
     `);
}

/** favorite/not-favorite star logic for story in UI on login */
function getStarHTML(story, user) {
  const isFavorite = currentUser.isFavorite(story); // boolean value returned
  const starType = isFavorite ? "fas" : "far";
  return `
      <span class="star">
          <i class="${starType} fa-star"></i>
      </span>`;
}

/** Handle favorite/un-favorite a story */
async function toggleStoryFavorite(evt) {
  console.debug("toggleStoryFavorite");

  const $tgt = $(evt.target);
  const $closestLi = $tgt.closest("li");
  const storyId = $closestLi.attr("id");
  const story = storyList.stories.find((s) => s.storyId === storyId);

  if ($tgt.hasClass("fas")) {
    await User.removeFavorite(story);
    $tgt.closest("i").toggleClass("fas far");
  } else {
    await User.addFavorite(story);
    $tgt.closest("i").toggleClass("fas far");
  }
}

/** Gets list of stories from server, generates their HTML, and puts on page. */
$allStoriesList.on("click", ".star", toggleStoryFavorite);

async function deleteStory(evt) {
  console.debug("deleteStory");
  const $tgt = $(evt.target);
  const $closestLi = $tgt.closest("li");
  const storyId = $closestLi.attr("id");
  const story = storyList.stories.find((s) => s.storyId === storyId);
  if (await User.deleteStory(story)) {
    debugger;
    $closestLi.remove();
  }
}
$allStoriesList.on("click", ".fa-trash", deleteStory);

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

// show favorited stories page
function putFavoritesOnPage() {
  console.debug("putFavoritesOnPage");

  $allStoriesList.empty();

  // loop through all of user's favorited stories and place them
  for (let story of currentUser.favorites) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }
  debugger;
  $allStoriesList.show();
}
