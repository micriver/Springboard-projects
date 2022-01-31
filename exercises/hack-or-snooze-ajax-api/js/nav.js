"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show submit new story page after click on "submit" */
function submitClick(evt) {
  hidePageComponents();
  $newStoryForm.show();
}

$navSubmit.on("click", submitClick);

/** Show stories on page */
function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $loginForm.hide();
  $signupForm.hide();
  $navLogin.hide(); // hide login/register button
  $navLogOut.show(); // show (logout) button
  $navUserProfile.text(`${currentUser.username}`).show(); // shows username using string literal
}
