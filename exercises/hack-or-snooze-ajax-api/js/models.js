"use strict";

const BASE_URL = "https://hack-or-snooze-v3.herokuapp.com";

/*

NOTES + RESOURCES:
static keyword definition: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#static_methods_and_properties
"The static keyword defines a static method or property for a class"

Clear cache for Brave Browser to see truly updated work: command + shift + r

*/

/******************************************************************************
 * Story: a single story in the system
 */

class Story {
  /** Make instance of Story from data object about story:
   *   - {title, author, url, username, storyId, createdAt}
   */
  constructor({ storyId, title, author, url, username, createdAt }) {
    this.storyId = storyId;
    this.title = title;
    this.author = author;
    this.url = url;
    this.username = username;
    this.createdAt = createdAt;
  }

  /** Parses hostname out of URL and returns it. */

  getHostName() {
    // UNIMPLEMENTED: complete this function!
    return `${this.url}`;
  }
}

function printToConsole(arg) {
  console.log(arg);
}

/******************************************************************************
 * List of Story instances: used by UI to show story lists in DOM.
 */

class StoryList {
  constructor(stories) {
    this.stories = stories;
  }

  /** Generate a new StoryList. It:
   *
   *  - calls the API
   *  - builds an array of Story instances
   *  - makes a single StoryList instance out of that
   *  - returns the StoryList instance.
   */

  static async getStories() {
    // Note presence of `static` keyword: this indicates that getStories is
    //  **not** an instance method. Rather, it is a method that is called on the
    //  class directly. Why doesn't it make sense for getStories to be an
    //  instance method?

    // query the /stories endpoint (no auth required)
    const response = await axios({
      url: `${BASE_URL}/stories`,
      method: "GET",
    });

    // turn plain old story objects from API into instances of Story class
    const stories = response.data.stories.map((story) => new Story(story));

    // build an instance of our own class using the new array of stories
    return new StoryList(stories);
  }

  /** [✓] Adds story data to API, [✓] makes a Story instance, [✓] adds it to story list.
   * - user - the current instance of User who will post the story
   * - obj of {title, author, url}
   *
   * Returns the new Story instance
   */

  // TEST DATA
  // static newStoryData = {
  //   title: "Buy Bitcoin",
  //   author: "Jobe",
  //   url: "https://bitcoin.org/en/",
  // };

  // NOTE: "undefined" errors went away after changing addStory to static so that I could call the method outside of the class
  static async addStory(currentUser, { title, author, url }) {
    const res = await axios.post(`${BASE_URL}/stories`, {
      token: currentUser.loginToken,
      story: { title, author, url },
    });
    const storyToAdd = await new Story(res.data.story);
    storyList.stories.push(storyToAdd); // object with an array of story objects
    return storyToAdd;
  }
}

/******************************************************************************
 * User: a user in the system (only used to represent the current user)
 */

class User {
  /** Make user instance from obj of user data and a token:
   *   - {username, name, createdAt, favorites[], ownStories[]}
   *   - token
   */

  constructor(
    { username, name, createdAt, favorites = [], ownStories = [] },
    token
  ) {
    this.username = username;
    this.name = name;
    this.createdAt = createdAt;

    // instantiate Story instances for the user's favorites and ownStories
    this.favorites = favorites.map((s) => new Story(s));
    this.ownStories = ownStories.map((s) => new Story(s));

    // store the login token on the user so it's easy to find for API calls.
    this.loginToken = token;
  }

  static async addFavorite(story) {
    const res = await axios.post(
      `${BASE_URL}/users/${currentUser.username}/favorites/${story.storyId}`,
      {
        token: currentUser.loginToken,
      }
    );
    currentUser.favorites.push(story); // push onto favorites list
    console.log(currentUser.favorites);
  }

  static async removeFavorite(story) {
    const options = {
      method: "DELETE",
      url: `https://hack-or-snooze-v3.herokuapp.com/users/${currentUser.username}/favorites/${story.storyId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic Og==",
      },
      data: {
        token: currentUser.loginToken,
      },
    };

    const res = await axios.request(options);
    // if given story id matches any of the story id's in the favorites list, remove it
    for (let i = 0; i < currentUser.favorites.length; i++) {
      // for (const s of currentUser.favorites) {
      if (currentUser.favorites[i].storyId === story.storyId) {
        // console.log(s);
        currentUser.favorites.splice(i, 1);
      }
    }
  }

  static async deleteStory(story) {
    const options = {
      method: "DELETE",
      url: `https://hack-or-snooze-v3.herokuapp.com/stories/${story.storyId}`,
      headers: { "Content-Type": "application/json" },
      data: {
        token: `${currentUser.loginToken}`,
      },
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    });
  }

  /** Register new user in API, make User instance & return it.
   *
   * - username: a new username
   * - password: a new password
   * - name: the user's full name
   */

  static async signup(username, password, name) {
    const response = await axios({
      url: `${BASE_URL}/signup`,
      method: "POST",
      data: { user: { username, password, name } },
    });

    let { user } = response.data;

    return new User(
      {
        username: user.username,
        name: user.name,
        createdAt: user.createdAt,
        favorites: user.favorites,
        ownStories: user.stories,
      },
      response.data.token
    );
  }

  /** Login in user with API, make User instance & return it.

   * - username: an existing user's username
   * - password: an existing user's password
   */

  static async login(username, password) {
    const response = await axios({
      url: `${BASE_URL}/login`,
      method: "POST",
      data: { user: { username, password } },
    });

    let { user } = response.data;

    return new User(
      {
        username: user.username,
        name: user.name,
        createdAt: user.createdAt,
        favorites: user.favorites,
        ownStories: user.stories,
      },
      response.data.token
    );
  }

  /** When we already have credentials (token & username) for a user,
   *   we can log them in automatically. This function does that.
   */

  static async loginViaStoredCredentials(token, username) {
    try {
      const response = await axios({
        url: `${BASE_URL}/users/${username}`,
        method: "GET",
        params: { token },
      });

      let { user } = response.data;

      return new User(
        {
          username: user.username,
          name: user.name,
          createdAt: user.createdAt,
          favorites: user.favorites,
          ownStories: user.stories,
        },
        token
      );
    } catch (err) {
      console.error("loginViaStoredCredentials failed", err);
      return null;
    }
  }

  /** Return true/false if given Story instance is a favorite of this user. */

  isFavorite(story) {
    return currentUser.favorites.some((s) => s.storyId === story.storyId);
  }
}
