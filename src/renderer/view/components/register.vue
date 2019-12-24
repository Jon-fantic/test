<template>
    <div>
        <transition
                :duration="500"
                :enter-active-class="'animated ' + (steps ?  'bounceInRight' : 'bounceInLeft')"
                :leave-active-class="'animated ' + (steps ? 'bounceOutLeft' : 'bounceOutRight')"
        >
        <Steps1 v-if="steps === true" key="steps"></Steps1>
        <Steps2 v-else key="steps"></Steps2>
        </transition>
    </div>
</template>

<script>
    import Steps1 from "./steps1";
    import Steps2 from "./steps2";

    export default {
        name: "register",
        components: {Steps1, Steps2},
        computed:{
            steps(){
                return this.$store.state.login.steps;
            }
        }
    }
</script>
