<template>
    <div class="onboarding-page">
        <div class="nav">
            <div class="logo">
                <router-link to="/"><img src="../assets/images/moovetv-logo.svg"></router-link>
            </div>
            <div class="signin">
                <button class="signin-btn" id="myBtn">Sign In</button>
            </div>
        </div>
        <div class="head-section">
            <div class="container">
                <div class="head-text">
                    <h1>Your one Stop movie store</h1>
                    <p>GET STARTED WITH US AND ENJOY ALL OUR MULTI-CONTENT CHANNELS FOR FREE</p>
                    <div class="get-started">
                        <router-link to="/Moovetv"><button class="get-started-btn">GET STARTED</button></router-link>
                    </div>
                </div>
                <div class="icons">
                    <router-link to="Moovetv">
                        <font-awesome-icon icon="tablet-alt" class="fontawesom"/>
                        <p>Advertisers</p>
                    </router-link>
                    <router-link to="Moovetv">
                        <font-awesome-icon icon="car" class="fontawesom"/>
                        <p>Driver</p>
                    </router-link>
                        <router-link to="Moovetv">
                            <font-awesome-icon icon="desktop" class="fontawesom"/>
                        <p>Content Partners</p>
                        </router-link>
                </div>
            </div>
        </div>
        <!-- Modal for Content Partners starts -->
        <div class="modal" id="myModal">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header text-center">
                        <div class="text-center">
                            <img src="../assets/images/moovetv-blue.svg" class="ad-icon">
                        </div>

                    </div>
                    <form class="click-animations">
                        <div class="modal-body text-center">
                            <p class="moove-modal-text">Advertise with MooveTV <br>Sign In</p>
                            <div class="form-group">
                                <input type="email" class="form-input" id="email" placeholder="Email">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-input" id="password" placeholder="Password">
                            </div>
                            <button type="submit" class="btn-continue ">Continue</button>
                        </div>
                        <small id="emailHelp" class="form-text text-muted text-center">If you don't have an account please Signup</small>
                    </form>

                </div>
            </div>
        </div>
        <!-- Modal for Content Partners ends -->
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

setTimeout(() => document.getElementById('myBtn').click(), 5000);
</script>
