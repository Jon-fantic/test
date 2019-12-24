<template>
    <div class="body">
    <div class="form">
        <form>
            <div class="form_item"><i class="iconfont icon-phone_icon"></i><input type="text"></div>
            <div class="form_item">
                <i class="iconfont icon-yanzhengma2"></i>
                <input type="password">
                <div class="captcha">
                    <img src="@/assets/images/captcha.png" alt="">
                </div>
            </div>
            <div class="form_item">
                <i class="iconfont icon-yanzhengma5"></i>
                <input type="password">
                <div class="send_sms_captcha"><button>获取短信验证码</button></div>
            </div>
        </form>
        <div class="buttons">
            <button @click="toggleSteps">下一步</button>
        </div>
        <footer class="footer">
            <span @click="toggleWindow">已有账号</span>
        </footer>
    </div>
    </div>
</template>

<script>
    export default {
        name: "steps1",
        methods:{
            toggleWindow(){
                this.$store.dispatch('toggleLogin');
            },
            toggleSteps(){
                this.$store.dispatch('toggleSteps');
            },
        }
    }
</script>
