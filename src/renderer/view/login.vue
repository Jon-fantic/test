<template>
    <div class="mainWindow">
        <header class="header">
            <span class="iconfont icon-guanbi1"></span>
        </header>
        <main>
            <div class="bg"></div>
                <transition
                        :duration="500"
                        :enter-active-class="'animated ' + (login ?  'bounceInRight' : 'bounceInLeft')"
                        :leave-active-class="'animated ' + (login ? 'bounceOutLeft' : 'bounceOutRight')"
                >
                <Login v-if="login === true" key="login"></Login>
                <Register v-else key="register"></Register>
                </transition>
        </main>
    </div>
</template>

<script>
    import '@/assets/css/login.css'
    import '@/assets/fonts/iconfont.css'
    import '@/assets/css/animate.css'
    import Login from "./components/login";
    import Register from "./components/register";

    export default {
        name: "login",
        components: {Register, Login},
        data() {
            return {
                windowX: 0,
                windowY: 0
            }
        },
        mounted() {
            let win = this.$electron.remote.getCurrentWindow();

            document.addEventListener('mousedown', function (e) {
                this.windowX = e.x;
                this.windowY = e.y;
                document.addEventListener('mousemove', moveEvent);
            });

            document.addEventListener('mouseup', function () {
                this.windowX = 0;
                this.windowY = 0;
                document.removeEventListener('mousemove', moveEvent)
            });

            function moveEvent(e) {

                win.setPosition(e.screenX - this.windowX, e.screenY - this.windowY)
            }
        },
        methods: {
            toggleWindow() {
                this.login = !this.login
            }
        },
        computed: {
            login() {
                return this.$store.state.login.login;
            }
        }
    }
</script>