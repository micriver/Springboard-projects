"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

// [✓] called when users submit the form.
// [✓] get the data from the form
// [✓] call the .addStory method you wrote
// [✓] and then put that new story on the page.
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

  currentUser
    ? console.log("is logged in!")
    : console.log("no user logged in ");
  // if (currentUser) {
  //   console.log("logged in!");
  // } else {
  //   console.log("no user logged in");
  // }
  const hostName = story.getHostName();
  return $(`
      <li id="${story.storyId}">
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>
    `);
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

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
