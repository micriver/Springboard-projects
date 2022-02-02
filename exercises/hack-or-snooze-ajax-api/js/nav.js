"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show submit new story page after click on "submit" */
function submitClick(evt) {
  hidePageComponents();
  $(".favorites-message").hide();
  $newStoryForm.show();
}

$navSubmit.on("click", submitClick);

/** Show list of favorited stories*/
function favoritesClick(evt) {
  hidePageComponents();
  if (currentUser.favorites.length >= 1) {
    $(".stories-container").remove();
    putFavoritesOnPage();
  } else {
    console.debug("user has no favorites!");
    hidePageComponents();
    $(".stories-container").append(
      "<h2 class='favorites-message' >You don't have any favorite stories yet!</h2>"
    );
  }
}

$navFavorites.on("click", favoritesClick);

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
  $navSubmit.show();
  $navFavorites.show();
  $navUserProfile.text(`${currentUser.username}`).show(); // shows username using string literal
}
