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
                    <form class="click-animations" @submit.prevent="login">
                        <div class="modal-body text-center">
                            <p class="moove-modal-text">Advertise with MooveTV <br>Sign In</p>
                            <div class="form-group" for="inputEmail">
                                <input v-model="email" type="email" id="inputEmail" class="form-input" placeholder="Email" required autofocus>
                            </div>
                            <div class="form-group" for="inputPassword">
                                <input v-model="password" type="password" id="inputPassword" class="form-input" placeholder="Password" required>
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
                <div class="head-text animated bounceInDown">
                    <h1>Your one Stop movie store</h1>
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


</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}

</script>
