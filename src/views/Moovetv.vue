<template>
    <div class="advertisers-page">

        <div class="row">
            <div class="col-md-1 col-sm-2">
                <div class="left-nav">

                    <div class="tab">
                        <button class="tablinks" v-bind:class="{active: tab === 'advertisers'}" @click="tab = 'advertisers'"><font-awesome-icon icon="tablet-alt" class="fontawesom"/>
                            <p>Advertisers</p>
                        </button><br>
                        <button class="tablinks" v-bind:class="{active: tab === 'drivers'}" @click="tab = 'drivers'"><font-awesome-icon icon="car" class="fontawesom"/>
                            <p>Driver</p>
                        </button><br>
                        <button class="tablinks" v-bind:class="{active: tab === 'partners'}" @click="tab = 'partners'"><font-awesome-icon icon="desktop" class="fontawesom"/>
                            <p>Content<br> Partners</p>
                        </button>
                    </div>


                </div>
            </div>
            <div class="col-md-11 col-sm-10">
                <div class="right-nav">
                    <div id="advertisers" class="tabcontent" v-if="tab === 'advertisers'">
                        <div class="container">
                            <div class="nav2">
                                <div class="logo2">
                                    <router-link to="/"><img src="../assets/images/moovetv-logo.svg"></router-link>
                                </div>
                                <button class="download-btn2 ">Download Advertiser Starter Kit</button>
                            </div>
                            <div class="advertisers-text animated bounceInLeft">

                                <h1>Get Your Business In Front of Millions of Taxi Commuters</h1>
                                <p>With MooveTV you can boost brand awareness while taxi passengers are being entertained while in transit. Adverts are placed in between thousands of content directions such as news, sports, music, lifestyle etc.</p>
                                <div class="advertise-now">
                                </div>
                            </div>

                        </div>
                        <!-- Modal for Advertisers starts -->
                        <div class=" container ">
                                <b-button v-b-modal.modal-adv class="get-started-btn ">Advertise with us</b-button>
                                <b-button v-b-modal.modal-1 class="signin-btn ">Sign In</b-button>


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
                            <!-- Modal for sign in ends -->
                        </div>
                        <!-- Modal for Advertisers ends -->
                    </div>

                    <div id="drivers" class="tabcontent" v-if="tab === 'drivers'">
                        <div class="container">
                            <div class="nav2">
                                <div class="logo2">
                                    <router-link to="/"><img src="../assets/images/moovetv-logo.svg"></router-link>
                                </div>
                                <button class="download-btn2  ">Download Driver Starter Kit</button>
                            </div>
                            <div class="advertisers-text animated bounceInLeft">
                                <h1>You Can Earn Extra Cash Just By Doing What You Love...</h1>
                                <p>With MooveTV, the more you drive, the more you earn. Your riders have access to a catalog of TV shows, games, audio content and more while they commute giving them a more enjoyable experience.</p>
                                <div class="advertise-now">
                                    <!-- <button class="get-started-btn bounce-1">Signup as a Driver</button> -->
                                </div>
                            </div>
                        </div>
                        <!-- Modal for Drivers starts -->
                        <div class="container">
                            <b-button v-b-modal.modal-drv class="get-started-btn ">Signup as a Driver</b-button>
                            <b-button v-b-modal.modal-1 class="signin-btn ">Sign In</b-button>

                            <b-modal id="modal-drv" hide-footer>
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

                    <div id="partners" class="tabcontent" v-if="tab === 'partners'">
                        <div class="container">
                            <div class="nav2">
                                <div class="logo2">
                                    <router-link to="/"><img src="../assets/images/moovetv-logo.svg"></router-link>
                                </div>
                                <button class="download-btn2 ">Download Content Partner Starter Kit</button>
                            </div>
                            <div class="advertisers-text animated bounceInLeft">
                                <h1>Get Your Contents Monetized Faster Than You Can Imagine</h1>
                                <p>With our interactive touch-screens, riders can browse a carefully curated selection of contents like movies, movie trailers, trending news, short skits, music, podcast and ebooks. Our content owners earn as passengers benefit from contents.</p>
                                <div class="advertise-now">
                                </div>
                            </div>
                        </div>
                        <!-- Modal for Content Partners starts -->
                        <div class=" container">
                            <b-button v-b-modal.modal-ptn class="get-started-btn ">Get Started Now</b-button>
                            <b-button v-b-modal.modal-1 class="signin-btn ">Sign In</b-button>

                            <b-modal id="modal-ptn" hide-footer>
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
            </div>
        </div>
    </div>
</template>

<script>
    // import {b-button, b-modal} from 'vue-nav-tabs'
    import {userService} from '../services/user.service';
    import Loader from "../components/Loader/Loader";


    export default {
        name: 'home',
        components: {
            // b-button,
            // b-modal,
            Loader
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

<style>
    .modal-backdrop {
         background-color: transparent !important;
    }


</style>
