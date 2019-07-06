<template>
    <div class="landing-page">
        <div class="onboarding-page" id="home">
            <div class="nav-b">
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
                                <router-link to="/Moovetv"><button class="get-started-btn bounce-1">Get Started</button></router-link>
                            </div>
                            <div class="get-started ">
                                <router-link to="/Moovetv"><button class="try-btn animated bounce-1">Try for Free</button></router-link>
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
        <div class="body-section" id="updates">
            <div class="updates-section bg-white pt-5 pb-5">
                <div class="text-center container updates-text">
                    <h2 class="">Updates on MooveTV</h2>
                    <p>Local & International series, hit movies, popular kids’ shows on any screen you like.</p>
                </div>
                <div class="topic">
                    <h3>Trending</h3>
                </div>
                <div class="recent_updates">
                    <div class="img1">
                        <img src="../assets/images/big-brother-naija.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/billions.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/acts-of-violence.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/ballers.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/big-brother-naija.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/big-brother-naija.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/big-brother-naija.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/big-brother-naija.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/billions.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/acts-of-violence.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/ballers.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/big-brother-naija.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/big-brother-naija.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/big-brother-naija.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/big-brother-naija.jpg">
                    </div>
                </div>

                <div class="topic">
                    <h3>Recent Updates</h3>
                </div>
                <div class="recent_updates">
                    <div class="img1">
                        <img src="../assets/images/big-brother-naija.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/billions.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/acts-of-violence.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/ballers.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/big-brother-naija.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/big-brother-naija.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/big-brother-naija.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/big-brother-naija.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/billions.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/acts-of-violence.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/ballers.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/big-brother-naija.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/big-brother-naija.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/big-brother-naija.jpg">
                    </div>
                    <div class="img1">
                        <img src="../assets/images/big-brother-naija.jpg">
                    </div>
                </div>

                <div class="get-started ">
                    <router-link to=""><button class="browse-btn bounce-1">Browse Catalogue</button></router-link>
                </div>
            </div>
            <div class="category-section bg-black pt-5 pb-5" id="">
                <div class="container-fluid">
                    <div class="text-center">
                        <b-tabs content-class="mt-3" align="center" class="b-tabs-head">

                            <b-tab title="Advertisers" active class="b-tabs">

                                <div class="container">
                                    <div id="advertisers1" class="tabcontent" >
                                        <div class="">
                                            <div class="advertisers-text2 container animated bounceInLeft">

                                                <h1>Get Your Business In Front of Millions of Taxi Commuters</h1>
                                                <p>With MooveTV you can boost brand awareness while taxi passengers are being entertained while in transit. Adverts are placed in between thousands of content directions such as news, sports, music, lifestyle etc.</p>
                                                <div class="advertise-now">
                                                </div>
                                            </div>

                                        </div>
                                        <!-- Modal for Advertisers starts -->
                                        <div class="  ">
                                            <b-button v-b-modal.modal-2 class="get-started-btn bounce-1">Advertise with us</b-button>
                                            <button class="download-btn  bounce-1">Download Advertiser Starter Kit</button>
                                            <b-modal id="modal-2" hide-footer>
                                                <div class="text-center">
                                                    <img src="../assets/images/moovetv-blue.svg" class="ad-icon">
                                                </div>
                                                <form class="click-animations">
                                                    <div class="modal-body text-center">
                                                        <p class="moove-modal-text">Advertise with MooveTV <br>Sign Up</p>
                                                        <div class="form-group">
                                                            <input type="text" class="form-input" id="text" placeholder="Company's Name">
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" class="form-input" id="text" placeholder="Company's Website">
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="email" class="form-input" id="email" placeholder="Email">
                                                        </div>
                                                        <div class="form-group " style="display: inline-flex; width: 100%;">
                                                            <div class="flag">
                                                                <img src="../assets/images/flag.svg" class="flag-icon ">
                                                            </div>
                                                            <input type="text" class="form-input" id="text" placeholder="Phone Number">
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="password" class="form-input" id="password" placeholder="Password">
                                                        </div>
                                                        <button type="submit" class="btn-continue ">Continue</button>
                                                    </div>
                                                    <small id="emailHelp" class="form-text text-muted text-center">Ads on this platform are paid for.</small>
                                                </form>
                                            </b-modal>
                                        </div>
                                        <!-- Modal for Advertisers ends -->
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab title="Drivers" class="b-tabs">
                                <div class="container">
                                    <div id="drivers1" class="tabcontent" >
                                        <div class="">
                                            <div class="advertisers-text2 animated bounceInRight">
                                                <h1>You Can Earn Extra Cash Just By Doing What You Love...</h1>
                                                <p>With MooveTV, the more you drive, the more you earn. Your riders have access to a catalog of TV shows, games, audio content and more while they commute giving them a more enjoyable experience.</p>
                                                <div class="advertise-now">
                                                    <!-- <button class="get-started-btn bounce-1">Signup as a Driver</button> -->
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Modal for Drivers starts -->
                                        <div class="">
                                            <b-button v-b-modal.modal-3 class="get-started-btn bounce-1">Signup as a Driver</b-button>
                                            <button class="download-btn  bounce-1">Download Driver Starter Kit</button>
                                            <b-modal id="modal-3" hide-footer>
                                                <div class="text-center">
                                                    <img src="../assets/images/moovetv-blue.svg" class="ad-icon">
                                                </div>
                                                <form class="click-animations">
                                                    <div class="modal-body text-center">
                                                        <p class="moove-modal-text">Advertise with MooveTV <br>Sign Up</p>
                                                        <div class="form-group">
                                                            <input type="text" class="form-input" id="text" placeholder="Full Name">
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" class="form-input" id="text" placeholder="Plate Number">
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="email" class="form-input" id="email" placeholder="Email">
                                                        </div>
                                                        <div class="form-group " style="display: inline-flex; width: 100%;">
                                                            <div class="flag">
                                                                <img src="../assets/images/flag.svg" class="flag-icon ">
                                                            </div>
                                                            <input type="text" class="form-input" id="text" placeholder="Phone Number">
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="password" class="form-input" id="password" placeholder="Password">
                                                        </div>
                                                        <button type="submit" class="btn-continue ">Continue</button>
                                                    </div>
                                                    <small id="emailHelp" class="form-text text-muted text-center">Ads on this platform are paid for.</small>
                                                </form>
                                            </b-modal>
                                        </div>

                                        <!-- Modal for Drivers ends -->
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab title="Content Partners" class="b-tabs">
                                <div class="container">
                                    <div id="partners1" class="tabcontent" >
                                        <div class="">
                                            <div class="advertisers-text2 animated bounceInDown">
                                                <h1>Get Your Contents Monetized Faster Than You Can Imagine</h1>
                                                <p>With our interactive touch-screens, riders can browse a carefully curated selection of contents like movies, movie trailers, trending news, short skits, music, podcast and ebooks. Our content owners earn as passengers benefit from contents.</p>
                                                <div class="advertise-now">
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Modal for Content Partners starts -->
                                        <div class=" ">
                                            <b-button v-b-modal.modal-4 class="get-started-btn bounce-1">Get Started Now</b-button>
                                            <button class="download-btn bounce-1">Download C. Partner Starter Kit</button>
                                            <b-modal id="modal-4" hide-footer>
                                                <div class="text-center">
                                                    <img src="../assets/images/moovetv-blue.svg" class="ad-icon">
                                                </div>
                                                <form class="click-animations">
                                                    <div class="modal-body text-center">
                                                        <p class="moove-modal-text">Advertise with MooveTV <br>Sign Up</p>
                                                        <div class="form-group">
                                                            <input type="text" class="form-input" id="text" placeholder="Full Name">
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" class="form-input" id="text" placeholder="Company's Website">
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="email" class="form-input" id="email" placeholder="Email">
                                                        </div>
                                                        <div class="form-group " style="display: inline-flex; width: 100%;">
                                                            <div class="flag">
                                                                <img src="../assets/images/flag.svg" class="flag-icon ">
                                                            </div>
                                                            <input type="text" class="form-input" id="text" placeholder="Phone Number">
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="password" class="form-input" id="password" placeholder="Password">
                                                        </div>
                                                        <button type="submit" class="btn-continue ">Continue</button>
                                                    </div>
                                                    <small id="emailHelp" class="form-text text-muted text-center">Ads on this platform are paid for.</small>
                                                </form>
                                            </b-modal>
                                        </div>

                                        <!-- Modal for Content Partners ends -->
                                    </div>
                                </div>
                            </b-tab>
                        </b-tabs>
                    </div>
                </div>
            </div>
            <footer class="footer bg-black ">
                <div class="foot">
                    <div class="social_icon">
                        <div class="fb">
                            <!--<font-awesome-icon icon="facebook" class="social"/>-->
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" class="social"/>
                        </div>
                        <div class="fb">
                            <!--<font-awesome-icon icon="twitter" class="social"/>-->
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" class="social"/>
                        </div>
                        <div class="fb">
                            <!--<font-awesome-icon icon="instagram" class="social"/>-->
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" class="social"/>
                        </div>
                    </div>
                    <div class="link-tab">
                        <a href="#home" class="links">Home</a>
                        <a href="#updates" class="links">Movies</a>
                        <a href="#" class="links">Contact</a>
                    </div>
                </div>
            </footer>
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
