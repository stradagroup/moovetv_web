<template>
    <div class="landing-page">
        <div class="onboarding-page" id="home">
            <div class="nav-b">
                <div class="logo">
                    <router-link to="/"><img src="../assets/images/moovetv-logo.svg"></router-link>
                </div>
                <div class="signin">
                    <!-- Modal for Content Partners starts -->
                    <b-button v-b-modal.modal-1 class="signin-btn ">Sign In</b-button>

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
                            <h1>Meet the First Multi-Content Free Streaming Platform</h1>
                            <p>Feel the experience on multiple platforms: WEB | MOBILE | TAXI</p>
                            <div class="get-started ">
                                <router-link to="/Moovetv"><button class="get-started-btn ">Get Started as a Content Partner</button></router-link>
                            </div>
                            <div class="get-started ">
                                <router-link to=""><button class="try-btn animated ">Start Consuming Contents For Free</button></router-link>
                            </div>
                        </div>
                        <div class="icons animated bounceInUp">
                            <!--<font-awesome-icon icon="angle-down" class="social"/>-->
                            <div class="text-center">
                                <a href="#main-content" class="home_icons bounce-1">
                                    <font-awesome-icon icon="angle-down" class="fontawesom bounce-1 angledown"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="category-section bg-black pt-5 pb-5" id="main-content">
            <div class="container-fluid">
                <div class="text-center">
                    <b-tabs content-class="mt-3" align="center" class="b-tabs-head">

                        <b-tab title="Advertisers" active class="b-tabs">

                            <div class="container">
                                <div id="advertisers1" class="tabcontent" >
                                    <div class="">
                                        <div class="advertisers-text2 container animated fadeInLeft">

                                            <h1>Get Your Business In Front of Millions of Taxi Commuters</h1>
                                            <p>With MooveTV you can boost brand awareness while taxi passengers are being entertained while in transit. Adverts are placed in between thousands of content directions such as news, sports, music, lifestyle etc.</p>
                                            <div class="advertise-now">
                                            </div>
                                        </div>

                                    </div>
                                    <!-- Modal for Advertisers starts -->
                                    <div class="  ">
                                        <b-button v-b-modal.modal-adv class="get-started-btn bounce-1">Advertise with us</b-button>

                                        <b-modal id="modal-adv" hide-footer @submit.prevent="advertiser">
                                            <Loader :loading-text="LoadingText" :showFull=false v-if="loading"/>


                                            <div class="text-center">
                                                <img src="../assets/images/moovetv-blue.svg" class="ad-icon">
                                            </div>
                                            <form class="click-animations">
                                                <div class="modal-body text-center">
                                                    <p class="moove-modal-text">Advertise with MooveTV <br>Sign Up</p>
                                                    <div class="form-group">
                                                        <input type="text" class="form-input" v-model="adv_company_name" placeholder="Company's Name">
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="text" class="form-input"  v-model="adv_company_website" placeholder="Company's Website">
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="email" class="form-input"  v-model="adv_company_email" placeholder="Email">
                                                    </div>
                                                    <div class="form-group " style="display: inline-flex; width: 100%;">
                                                        <div class="flag">
                                                            <img src="../assets/images/flag.svg" class="flag-icon ">
                                                        </div>
                                                        <input type="text" class="form-input" v-model="adv_company_phone" placeholder="Phone Number">
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="password" class="form-input" v-model="adv_company_password" placeholder="Password">
                                                    </div>
                                                    <button type="submit" class="btn-continue " @click.prevent="advertiser">Continue</button>
                                                </div>
                                                <small  class="form-text text-muted text-center">Ads on this platform are paid for.</small>
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
                                        <div class="advertisers-text2 animated fadeInLeft">
                                            <h1>You Can Earn Extra Cash Just By Doing What You Love...</h1>
                                            <p>With MooveTV, the more you drive, the more you earn. Your riders have access to a catalog of TV shows, games, audio content and more while they commute giving them a more enjoyable experience.</p>
                                            <div class="advertise-now">
                                                <!-- <button class="get-started-btn bounce-1">Signup as a Driver</button> -->
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Modal for Drivers starts -->
                                    <div class="">
                                        <b-button v-b-modal.modal-1 class="get-started-btn ">Signup as a Driver</b-button>

                                        <b-modal id="modal-1" hide-footer>
                                            <Loader :loading-text="LoadingText" :showFull=false v-if="loading"/>

                                            <div class="text-center">
                                                <img src="../assets/images/moovetv-blue.svg" class="ad-icon">
                                            </div>
                                            <form class="click-animations"  @submit.prevent="driver">
                                                <div class="modal-body text-center">
                                                    <p class="moove-modal-text">Advertise with MooveTV <br>Sign Up</p>
                                                    <div class="form-group">
                                                        <input type="text" class="form-input" v-model="driver_full_nmae"  placeholder="Full Name">
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="text" class="form-input" v-model="plate_number"  placeholder="Plate Number">
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="email" class="form-input" v-model="driver_email" placeholder="Email">
                                                    </div>
                                                    <div class="form-group " style="display: inline-flex; width: 100%;">
                                                        <div class="flag">
                                                            <img src="../assets/images/flag.svg" class="flag-icon ">
                                                        </div>
                                                        <input type="text" class="form-input" v-model="driver_phone"  placeholder="Phone Number">
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="password" class="form-input" v-model="driver_password" placeholder="Password">
                                                    </div>
                                                    <button type="submit" class="btn-continue " @click.prevent="driver">Continue</button>
                                                </div>
                                                <small  class="form-text text-muted text-center">Ads on this platform are paid for.</small>
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
                                        <div class="advertisers-text2 animated fadeInLeft">
                                            <h1>Get Your Contents Monetized Faster Than You Can Imagine</h1>
                                            <p>With our interactive touch-screens, riders can browse a carefully curated selection of contents like movies, movie trailers, trending news, short skits, music, podcast and ebooks. Our content owners earn as passengers benefit from contents.</p>
                                            <div class="advertise-now">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Modal for Content Partners starts -->
                                    <div class=" ">
                                        <b-button v-b-modal.modal-1 class="get-started-btn ">Get Started Now</b-button>

                                        <b-modal id="modal-1" hide-footer>
                                            <Loader :loading-text="LoadingText" :showFull=false v-if="loading"/>

                                            <div class="text-center">
                                                <img src="../assets/images/moovetv-blue.svg" class="ad-icon">
                                            </div>
                                            <form class="click-animations"  @submit.prevent="partner">
                                                <div class="modal-body text-center">
                                                    <p class="moove-modal-text">Advertise with MooveTV <br>Sign Up</p>
                                                    <div class="form-group">
                                                        <input type="text" class="form-input" v-model="partner_full_name" placeholder="Full Name">
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="text" class="form-input" v-model="partner_website" placeholder="Company's Website">
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="email" class="form-input"  v-model="partner_email" id="email" placeholder="Email">
                                                    </div>
                                                    <div class="form-group " style="display: inline-flex; width: 100%;">
                                                        <div class="flag">
                                                            <img src="../assets/images/flag.svg" class="flag-icon ">
                                                        </div>
                                                        <input type="text" class="form-input"  v-model="partner_phone" placeholder="Phone Number">
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="password" class="form-input"  v-model="partner_password" id="password" placeholder="Password">
                                                    </div>
                                                    <button type="submit" class="btn-continue " @click.prevent="partner">Continue</button>
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

        <div class="body-section" id="updates">
            <div class="updates-section bg-white pt-5 pb-5 animated fadeInUp">
                <div class="text-center container updates-text">
                    <h2 class="">What MooveTV Does Differently</h2>
                    <p>We serve you a plethora of contents on multiple content  categories: Movies, Music, Podcasts, Ebooks, Radio, LiveTV, etc.</p>
                </div>
                <div class="topic">
                    <h3>Trending</h3>
                </div>
                <div class="recent_updates animated fadeInLeft">
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
                    <router-link to=""><button class="browse-btn ">Browse Catalogue</button></router-link>
                </div>
            </div>

            <footer class="footer bg-black ">
                <div class="foot">
                    <div class="social_icon">
                        <div class="fb">
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" class="social"/>
                        </div>
                        <div class="fb">
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" class="social"/>
                        </div>
                        <div class="fb">
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

import Loader from "../components/Loader/Loader";
import {userService} from '../services/user.service';



export default {
    components: {Loader},
    computed: {

        currentPage() {
            // console.log(this.$route.name);
            return this.$route.name;
        }
    },
    data: function() {
        return  {
            tab: 'advertisers',
            adv_company_name: '',
            adv_company_website: '',
            adv_company_email: '',
            adv_company_phone: '',
            adv_company_password: '',
            driver_full_nmae: '',
            plate_number: '',
            driver_email: '',
            driver_phone: '',
            driver_password: '',
            partner_full_name: '',
            partner_website: '',
            partner_email: '',
            partner_phone: '',
            partner_password: '',
            LoadingText: "Loading",
            loading: false,
            password: '',
            email: ''
        }
    },
    methods: {
        advertiser(){
            let data = {
                name: this.adv_company_name,
                website: this.adv_company_website,
                phone: this.adv_company_phone,
                email: this.adv_company_email,
                password: this.adv_company_password,
                type: 3

            };
            this.submitData(data);
        },
        driver(){
            let data = {
                name: this.driver_full_nmae,
                plate_number: this.plate_number,
                phone: this.driver_phone,
                email: this.driver_email,
                password: this.driver_password,
                type: 4
            };
            this.submitData(data);
        },
        partner(){
            let data = {
                name: this.partner_full_name,
                website: this.partner_website,
                phone: this.partner_phone,
                email: this.partner_email,
                password: this.partner_password,
                type: 2
            };
            this.submitData(data);
        },

        async submitData(data){
            this.loading = true;
            let that = this;
            await userService.register(data).then((res) => {
                console.log(res);
                that.loading = false;
                that.contentTypes = res;
                this.$toastr.success("Registration Successful!", {timeOut: 5000});
                // this.fetchContent('All');
            }).catch((error) => {
                console.log(error.error);
                error.message.forEach((d) => {
                    this.$toastr.error(d, "Login Failed!", {timeOut: 5000});
                });

                this.loading = false;
            });
        }
    }
}

</script>
