<template>
    <div id="windowBox" class="windowBox" :class="login ? 'login' : 'register'">
        <header><span @click="quitApp"><i class="iconfont icon-guanbi1"></i></span></header>
        <div class="bg"></div>
        <!--:enter-active-class="'animated ' + (login ?  'flipInX' : 'flipInX')"-->
        <!--:leave-active-class="'animated ' + (login ? 'bounceOutLeft' : 'bounceOutRight')"-->
        <transition
                :duration="500"
                :enter-active-class="'animated ' + (login ?  'bounceInRight' : 'bounceInLeft')"
                :leave-active-class="'animated ' + (login ? 'bounceOutLeft' : 'bounceOutRight')"
        >
            <div v-if="login === false" key="register" class="formBox register">
                <div class="formItem"><i class="iconfont icon-1zhanghu" :class="{focus:accountFocus}"></i><input
                        ref="account" class="input" :class="{focus:accountFocus}" @focus="inputAccountFocus"
                        @blur="inputAccountFocus"
                        placeholder="手机号码"
                        type="text"></div>
                <div class="formItem"><i class="iconfont icon-mima1" :class="{focus:passwordFocus}"></i><input
                        ref="password" class="input" :class="{focus:passwordFocus}" @focus="inputPasswordFocus"
                        @blur="inputPasswordFocus"
                        placeholder="图形验证码"
                        type="password">
                    <img class="captcha" src="@/assets/images/captcha.png" alt="">
                </div>
                <div class="formItem"><i class="iconfont icon-mima1" :class="{focus:passwordFocus}"></i><input
                        ref="password" class="input" :class="{focus:passwordFocus}" @focus="inputPasswordFocus"
                        @blur="inputPasswordFocus"
                        placeholder="短信验证码"
                        type="password"></div>
                <div class="buttonBox">
                    <button class="button">注册</button>
                </div>
                <footer @click="toggleBox">已有账号?</footer>
            </div>

            <div  v-else class="login formBox" key="login">
                <div class="formItem"><i class="iconfont icon-1zhanghu" :class="{focus:accountFocus}"></i><input
                        ref="account" class="input" :class="{focus:accountFocus}" @focus="inputAccountFocus"
                        @blur="inputAccountFocus"
                        placeholder="手机号码"
                        type="text"></div>
                <div class="formItem"><i class="iconfont icon-mima1" :class="{focus:passwordFocus}"></i><input
                        ref="password" class="input" :class="{focus:passwordFocus}" @focus="inputPasswordFocus"
                        @blur="inputPasswordFocus"
                        placeholder="登录密码"
                        type="password"></div>
                <div style="width:430px;text-align: center;margin-top: 15px;font-size: 12px;">
                    <label>
                        <div class="box"><input type="checkbox"><span class="checked"><img
                                src="@/assets/images/checked.png" alt=""></span></div>
                        <i class="text">自动登录</i></label>
                    <label>
                        <div class="box"><input type="checkbox"><span class="checked"><img
                                src="@/assets/images/checked.png"
                                alt=""></span></div>
                        <i class="text">记住密码</i></label>
                    <i class="text">找回密码</i>
                </div>
                <div class="buttonBox" style="margin-top: 20px;">
                    <button class="button">登录</button>
                </div>
                <footer @click="toggleBox">注册账号</footer>
            </div>
        </transition>
    </div>
</template>

<script>
    import '@/assets/css/animate.css'

    export default {
        name: "login",
        data() {
            return {
                accountFocus: false,
                passwordFocus: false,
                login: false
            }
        },
        mounted() {
            let win = this.$electron.remote.getCurrentWindow();
            let biasX = 0;
            let biasY = 0;
            let that = this;
            document.addEventListener('mousedown', function (e) {
                console.log(e.target === that.$refs.password);
                if (e.target === that.$refs.account || e.target === that.$refs.password) return;
                switch (e.button) {
                    case 0:
                        biasX = e.x;
                        biasY = e.y;
                        document.addEventListener('mousemove', moveEvent);
                        break;
                }
            });

            document.addEventListener('mouseup', function () {
                biasX = 0;
                biasY = 0;
                document.removeEventListener('mousemove', moveEvent)
            });

            function moveEvent(e) {
                win.setPosition(e.screenX - biasX, e.screenY - biasY)
            }
        },
        methods: {
            quitApp(){
                this.$electron.ipcRenderer.send('quitApp');
            },
            inputAccountFocus() {
                this.accountFocus = !this.accountFocus;
            },
            inputPasswordFocus() {
                this.passwordFocus = !this.passwordFocus;
            },
            toggleBox() {
                this.login = !this.login;
            }
        }
    }
</script>

<style scoped>
    .captcha{
        width:130px;
        height: 38px;
        position: absolute;
        top:-8px;
        right: 0;
        cursor: pointer;
    }
    footer {
        text-align: left;
        cursor: pointer;
        margin-top: 10px;
        margin-left: 10px;
        font-size: 12px;
    }

    footer:hover {
        color: #e4393c;
    }

    .buttonBox {
        text-align: center;
        margin-top: 15px;
    }
    label{
        cursor: pointer;
    }
    .buttonBox .button {
        background-color: #CF000E;
        border: none;
        width: 75%;
        color: #FFFFFF;
        height: 35px;
        cursor: pointer;
        font-size: 14px;
        border-radius: 4px;
        outline: none;
    }

    .formItem i.focus {
        color: #E4393c;
    }

    .formItem i.iconfont {
        position: absolute;
        top: 3px;
        font-size: 18px;
    }

    i.text {
        display: inline-block;
        margin-right: 25px;
        font-style: normal;
        cursor: pointer;
    }

    .formItem {
        height: 45px;
        width: 80%;
        margin: 0 auto;
        position: relative;
    }
    .formItem input::placeholder{
        font-size: 14px;
    }
    .formItem input.focus {
        border-bottom: 1px solid #E4393c;
    }

    .formItem .input {
        padding-left: 25px;
        height: 30px;
        outline: none;
        width: 320px;
        border: none;
        font-size: 16px;
        border-bottom: 1px solid #C1C1C1;
    }

    .box span.checked img {
        width: 100%;
        height: 100%;
    }

    input[type="checkbox"] + span {
        opacity: 0;
    }

    input[type="checkbox"]:checked + span {
        opacity: 1;
    }

    .box span.checked {
        position: absolute;
        top: -4px;
        right: -3px;
        font-weight: bold;
        display: inline-block;
        width: 20px;
        height: 20px;
        cursor: pointer;
    }

    .box input {
        opacity: 0;
    }

    .box {
        display: inline-block;
        width: 13px;
        height: 13px;
        margin-right: 5px;
        position: relative;
        border: 1px solid orange;
        vertical-align: middle;
        cursor: pointer;
        top: -2px;
    }

    .login {
        height: 450px;
        overflow: hidden;
    }

    .register {
        text-align: center;
        height: 450px !important;
        overflow: hidden;
    }

    #windowBox {
        width: 430px;
        border-radius: 4px;
        position: relative;
        background-color: #FFFFFF;
    }

    #windowBox .formBox {
        position: absolute;
        width: 430px;
        top: 230px;
    }

    #windowBox header {
        text-align: right;
        z-index: 9999;
        position: absolute;
        width: 430px;
        height: 30px;
    }

    #windowBox header span {
        display: inline-block;
        width: 23px;
        height: 23px;
        line-height: 23px;
        text-align: center;
        color: #FFFFFF;
        cursor: pointer;
    }

    #windowBox header span:hover {
        background: rgba(255, 255, 255, .5);
        color: red;
    }

    #windowBox .bg {
        height: 200px;
        width: 430px;
        background: url("../assets/images/login-back.gif") no-repeat;
        background-size: 100% 100%;
    }
</style>