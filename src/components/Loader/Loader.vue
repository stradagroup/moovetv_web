<template>
    <div class="loader-scr">
        <vue-element-loading :active="isLoading" :is-full-screen="showFull" :text="loadingText" color='#3d9cda' :backgroundColor="bggColor"/>
    </div>
</template>

<script>
    import VueElementLoading from 'vue-element-loading';


    export default {
        name: 'Loader',
        props: {
            showFull: Boolean,
            bgColor:'light',
            loadingText: {
                type: String,
                default: 'loading...'
            },
        },
        computed: {
            bggColor() {
                return (this.bgColor==="light") ? '#d7d7d7' : '#000';
            }
        },
        data() {
            return {
                isLoading: true,
                width: 55,
                height: 55,
                fullPage: false
            }
        },
        components: {
            // Loading
            VueElementLoading
        },
        methods: {
            onCancel() {
                // console.log('User cancelled the loader.')
            }
        }
    }
</script>

<style scoped>
    .showLoader {
        position: relative;
    }

    .vldParentIsFull {
        display: none;
        position: fixed;
        z-index: 999999999999999999999998;
        height: 100%;
        width: 100%;
        /*overflow: show;*/
        margin: auto;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.9);
    }

    .showLoadingTextFull {
        padding-top: 22px;
        position: relative;
        display: block;
        font-size: 2em;
        color: #A1A1A1;
        text-align: center;
    }
    .velmld-parent {
        position: relative!important;
        /*width: 100%;*/
        /*height: 100%;*/
    }

</style>
