// todo => use a key to track the current video, or just pass the video in as a ref to the function and grab its source

var vm = new Vue({
  el: "#app", //d

  data: {

    // mock up the user - this well eventually come from the database UMS (user management system)
    user: {
      // isAdmin: false,//FROM DATABASE BUT WE DONT NEED THESE ANYMORE
      // avatar: "thor.png", //FROM DATABASE BUT WE DONT NEED THESE ANYMORE
      
      isLoggedIn: true, //assuming user has logged in [ THIS IS A STATIC USER]
      settings: {}
  
    },

    // this data would also come from the database, but we'll just mock it up for now
    videodata: [
      { name: "Star Wars The Force Awakens", 
      thumb: "forceawakens.jpg", 
      vidsource: "forceawakens.mp4", 
      description: "yet another star wars movie" },

      { name: "Stranger Things", 
      thumb: "strangerthings.jpg", 
      vidsource: "strangerthings.mp4", 
      description: "don't get lost in the upside down" },

      { name: "Marvel's The Avengers", 
      thumb: "avengers.jpg", 
      vidsource: "avengers.mp4", 
      description: "will they make black widow action figures this time?" }
    ],

    videotitle: "video title goes here",
    vidsource: "",
    videodescription: "",

    showDetails: false
  },

  created: function() {
    // run a fetch call and get the user data
    console.log('created lifecycle hook fired here, ho get user data');
    this.getUserData();
  },

  methods: { //functionality that you can run in vue
    getUserData() {
      const url = './includes/index.php?getUser=1';
      fetch(url) //get data from DB
      .then(res => res.json()) //translate JSON to plain object
      .then(data => { //use the plain data object (the user)
          console.log(data); //log it to the console (testing)
          
          this.user.settings = data[0]; //pointing user object inside user property. 0 is from the database
      })
      .catch((error) => console.error(error))
    },

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

    userAvatar() { //for avatar if switched
      this.user.avatar = (this.user.avatar) ? false : true; //this is a ternary statemnet -> shorthand for if/else
    },

    showMovieDetails({name, vidsource, description}) {
      //console.log('show these details: ', movie); //when posters are clicked...
      this.videotitle = name;
      this.vidsource = vidsource;
      this.videodescription = description;

      //make the movie details show up
      showDetails = true;
    }

  }
});