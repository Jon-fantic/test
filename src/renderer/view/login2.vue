<template>
    <div style="position: relative;">
        <transition
                :duration="800"
                :enter-active-class="'animated ' + (login ?  'flipOutX' : 'flipOutY')"
                :leave-active-class="'animated ' + (login ? 'flipOutY' : 'flipOutX')"
        >
            <div v-if="login === true" key="login">
                <div id="login">
                    <div class="header">
                        <span><i class="iconfont icon-guanbi1"></i></span>
                    </div>
                    <div class="formBox">
                        <div class="formItem"><i class="iconfont icon-1zhanghu" :class="{focus:accountFocus}"></i><input
                                ref="account" class="input" :class="{focus:accountFocus}" @focus="inputAccountFocus"
                                @blur="inputAccountFocus"
                                type="text"></div>
                        <div class="formItem"><i class="iconfont icon-mima1" :class="{focus:passwordFocus}"></i><input
                                ref="password" class="input" :class="{focus:passwordFocus}" @focus="inputPasswordFocus"
                                @blur="inputPasswordFocus"
                                type="password">
                        </div>
                        <div style="text-align: center;margin-top: 10px;font-size: 12px;">
                            <label>
                                <div class="box"><input type="checkbox"><span class="checked"><img src="@/assets/images/checked.png" alt=""></span></div>
                                <i class="text">自动登录</i></label>
                            <label>
                                <div class="box"><input type="checkbox"><span class="checked"><img
                                        src="@/assets/images/checked.png"
                                        alt=""></span></div>
                                <i class="text">记住密码</i></label>
                            <i class="text">找回密码</i>
                        </div>
                        <div class="loginBtnBox">
                            <button class="login_button">登录</button>
                        </div>
                    </div>
                    <div class="footer">
                        <div class="register_text" @click="toggleBox">注册账号</div>
                    </div>
                </div>
            </div>
            <div v-else key="register">
                <div id="register">
                    <div class="header">
                        <span><i class="iconfont icon-guanbi1"></i></span>
                    </div>
                    <div class="formBox">
                        <div class="formItem"><i class="iconfont icon-1zhanghu" :class="{focus:accountFocus}"></i><input
                                ref="account" class="input" :class="{focus:accountFocus}" @focus="inputAccountFocus"
                                @blur="inputAccountFocus" type="text"></div>
                        <div class="formItem"><i class="iconfont icon-1zhanghu" :class="{focus:accountFocus}"></i><input
                                ref="account" class="input" :class="{focus:accountFocus}" @focus="inputAccountFocus"
                                @blur="inputAccountFocus" type="text"></div>
                        <div class="formItem"><i class="iconfont icon-1zhanghu" :class="{focus:accountFocus}"></i><input
                                ref="account" class="input" :class="{focus:accountFocus}" @focus="inputAccountFocus"
                                @blur="inputAccountFocus" type="text"></div>
                        <div class="formItem"><i class="iconfont icon-1zhanghu" :class="{focus:accountFocus}"></i><input
                                ref="account" class="input" :class="{focus:accountFocus}" @focus="inputAccountFocus"
                                @blur="inputAccountFocus" type="text"></div>
                        <div class="registerBtnBox">
                            <button class="register_button">登录</button>
                        </div>
                    </div>
                    <div class="footer">
                        <div class="register_text" @click="toggleBox">已有账号?</div>
                    </div>
                </div>
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
    body {
        overflow: hidden;
    }

    #register {
        position: absolute;
        top: 0;
        width: 430px;
        -webkit-user-select: none;
        height: 300px;
        border-radius: 4px 4px 0 0;
        background: url("../assets/images/login-back.gif") no-repeat;
        background-size: 100% 100%;
    }

    #register .formBox {
        position: absolute;
        top: 180px;
        padding-top: 20px;
        border-radius: 0 0 4px 4px;
        width: 100%;
        height: 250px;
        background-color: #FFFFFF;
    }

    .header {
        position: relative;
        text-align: right;
    }

    .header span {
        display: inline-block;
        width: 23px;
        height: 23px;
        line-height: 23px;
        /*border:1px solid red;*/
        text-align: center;
        color: #FFFFFF;
        cursor: pointer;
    }

    .header span:hover {
        background: rgba(255, 255, 255, .5);
        color: red;
    }

    .footer .register_text {
        cursor: pointer;
    }

    .footer .register_text:hover {
        color: #e4393c;
    }

    #register .footer {
        position: absolute;
        top: 425px;
        left: 10px;
        font-size: 12px;
    }

    #login .footer {
        position: absolute;
        top: 375px;
        left: 10px;
        font-size: 12px;
    }

    #login {
        position: absolute;
        top: 0;
        width: 430px;
        -webkit-user-select: none;
        height: 300px;
        border-radius: 4px 4px 0 0;
        background: url("../assets/images/login-back.gif") no-repeat;
        background-size: 100% 100%;
    }

    #login i.text {
        display: inline-block;
        margin-right: 25px;
        font-style: normal;
        cursor: pointer;
    }

    #login .box {
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

    #login .box input {
        opacity: 0;
    }

    #login .box span.checked {
        position: absolute;
        top: -4px;
        right: -3px;
        font-weight: bold;
        display: inline-block;
        width: 20px;
        height: 20px;
        cursor: pointer;
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

    #login .formBox {
        position: absolute;
        top: 180px;
        padding-top: 20px;
        border-radius: 0 0 4px 4px;
        width: 100%;
        height: 200px;
        background-color: #FFFFFF;
    }

    .registerBtnBox {
        text-align: center;
        margin-top: 15px;
    }

    .register_button {
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

    #login .loginBtnBox {
        text-align: center;
        margin-top: 15px;
    }

    #login .login_button {
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

    #login .formItem i.focus {
        color: #E4393c;
    }

    .formItem i.iconfont {
        position: absolute;
        top: 3px;
        font-size: 18px;
    }

    .formItem {
        height: 40px;
        width: 80%;
        margin: 0 auto;
        position: relative;
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
</style>