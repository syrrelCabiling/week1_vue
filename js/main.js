// todo => use a key to track the current video, or just pass the video in as a ref to the function and grab its source

var vm = new Vue({
  el: "#app", //d

  data: {

    // mock up the user - this well eventually come from the database UMS (user management system)
    user: {
      isAdmin: false,
      avatar: "thor.png",
      isLoggedIn: true //assuming user has logged in
    },

    // this data would also come from the database, but we'll just mock it up for now
    videodata: [
      { name: "Star Wars The Force Awakens", thumb: "forceawakens.jpg", vidsource: "forceawakens.mp4", description: "yet another star wars movie" },
      { name: "Stranger Things", thumb: "strangerthings.jpg", vidsource: "strangerthings.mp4", description: "don't get lost in the upside down" },
      { name: "Marvel's The Avengers", thumb: "avengers.jpg", vidsource: "avengers.mp4", description: "will they make black widow action figures this time?" }
    ],

    showDetails: false
  },

  methods: { //functionality that you can run in vue
    setUserPrefs() {
      //this is the preferences control or the gear, hit the api when ready (or use a component)
      console.log('set user prefs here');
    },
    userLogin() {
      //call the login route, or load the login component
      console.log('Logging in...or Logging out');

      //this expression evacuates to true or false - if its true set the value equal to the left of the colon. If false, set the value equal to the right.
      this.user.isLoggedIn = (this.user.isLoggedIn) ? false : true; //this is a ternary statemnet -> shorthand for if/else
    },
    userAvatar() {
      this.user.avatar = (this.user.avatar) ? false : true; //this is a ternary statemnet -> shorthand for if/else
    }
  }
});
