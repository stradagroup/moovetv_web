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
                                <b-button v-b-modal.modal-1 class="get-started-btn ">Advertise with us</b-button>

                                <b-modal id="modal-1" hide-footer>
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
                            <b-button v-b-modal.modal-1 class="get-started-btn ">Signup as a Driver</b-button>

                            <b-modal id="modal-1" hide-footer>
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
                            <b-button v-b-modal.modal-1 class="get-started-btn ">Get Started Now</b-button>

                            <b-modal id="modal-1" hide-footer>
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
            </div>
        </div>
    </div>
</template>

<script>
    // import {b-button, b-modal} from 'vue-nav-tabs'

    export default {
        name: 'home',
        components: {
            // b-button,
            // b-modal
        },
        data: function() {
            return  {
                tab: 'advertisers',
                email: "",
                password: "",
                loading: false
            }
        }
    }
</script>

<style>
    .modal-backdrop {
         background-color: transparent !important;
    }


</style>