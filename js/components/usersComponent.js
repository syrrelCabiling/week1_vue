import userComponent from "./userComponent.js";

export default {
    template: `
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h1 class="user-message"> {{ message }} </h1>
                    <!-- render our users here -->
                    <user v-for="user in userList" :liveuser="user"></user>
                </div>
            </div>
        </div>
    `,

    created: function() {
        //this will fire when the component gets built 
        this.fetchAllUsers();
    },

    data: function() {
        return {
            message: "Whos using Roku?",
            userList: []
        }
    },

    methods: {
        fetchAllUsers() {
            let url = `./includes/index.php?getUsers=true`;

            fetch(url)
            .then(res => res.json())
            .then(data => {this.userList = data})
            .catch((err) => { console.error(err)})
        }
    },
    components: {
        user: userComponent
    }
}