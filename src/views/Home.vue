<template>
    <div class="onboarding-page">
        <div class="nav">
            <div class="logo">
                <router-link to="/"><img src="../assets/images/moovetv-logo.svg"></router-link>
            </div>
            <div class="signin">
                <!-- Modal for Content Partners starts -->
                <b-button v-b-modal.modal-1 class="signin-btn animated pulse">Sign In</b-button>

                <b-modal id="modal-1" hide-footer>
                    <div class="text-center">
                        <img src="../assets/images/moovetv-blue.svg" class="ad-icon">
                    </div>
                    <form class="click-animations" @submit.prevent="Login">
                        <div class="modal-body text-center">
                            <p class="moove-modal-text">Sign In to access MooveTV</p>
                            <div class="form-group" for="inputEmail">
                                <input v-model="email" type="email" id="email" class="form-input" placeholder="Email" required autofocus>
                            </div>
                            <div class="form-group" for="inputPassword">
                                <input v-model="password" type="password" id="password" class="form-input" placeholder="Password" required>
                            </div>
                            <button type="submit" class="btn-continue ">Continue</button>
                        </div>
                        <small id="emailHelp" class="form-text text-muted text-center">If you don't have an account please Signup</small>
                    </form>
                </b-modal>
                <!-- Modal for Content Partners ends -->
            </div>
        </div>
        <div class="head-section">
            <div class="container">
                <div class="moove-flex">
                    <div class="space"></div>
                    <div class="head-text animated bounceInDown">
                        <h1>Your One Stop Movie Store</h1>
                        <p>GET STARTED WITH US AND ENJOY ALL OUR MULTI-CONTENT CHANNELS FOR FREE</p>
                        <div class="get-started ">
                            <router-link to="/Moovetv"><button class="get-started-btn bounce-1">GET STARTED</button></router-link>
                        </div>
                    </div>
                    <div class="icons animated bounceInUp">
                        <router-link to="Moovetv" class="home_icons">
                            <font-awesome-icon icon="tablet-alt" class="fontawesom"/>
                            <p>Advertisers</p>
                        </router-link>
                        <router-link to="Moovetv" class="home_icons">
                            <font-awesome-icon icon="car" class="fontawesom"/>
                            <p>Driver</p>
                        </router-link>
                        <router-link to="Moovetv" class="home_icons">
                            <font-awesome-icon icon="desktop" class="fontawesom"/>
                            <p>Content Partners</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>

// export default {
//   name: 'home',
//   components: {
//
//   }
// }
import {mapActions} from "vuex";
import router from "../router";

export default {
    components: {},
    computed: {
        currentPage() {
            // console.log(this.$route.name);
            return this.$route.name;
        }
    },
    data: function () {
        return {
            email: "",
            password: "",
            loading: false
        };
    },
    methods: {
        ...mapActions({loginUser: 'LOGIN'}),
        async Login() {
            let that = this;
            this.loading = true;
            await this.loginUser({
                email: this.email,
                password: this.password
            }).then(function () {
                that.$toastr.success("Login Successful!", {timeOut: 5000});
                router.push({name: 'landing'});
            }).catch((error) => {
                this.$toastr.error(error.message, "Login Failed!", {timeOut: 5000});
                this.loading = false;
            });
            this.loading = false;
        }
    }
}

</script>
