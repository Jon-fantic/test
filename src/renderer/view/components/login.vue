<template>
    <div class="body">
    <div class="form">
        <form>
            <div class="form_item"><i class="iconfont icon-1zhanghu"></i><input type="text"></div>
            <div class="form_item"><i class="iconfont icon-mima1"></i><input type="password"></div>
            <div class="login_options">
                <label><div class="option_item"><input type="checkbox"><span class="checked"><img src="@/assets/images/checked.png" alt=""></span></div><i class="text">自动登录</i></label>
                <label><div class="option_item"><input type="checkbox"><span class="checked"><img src="@/assets/images/checked.png" alt=""></span></div><i class="text">记住密码</i></label>
                <i class="text">忘记密码</i>
            </div>
        </form>
        <div class="buttons">
            <button>登录</button>
        </div>
        <footer class="footer">
            <span @click="toggleWindow">注册账号</span>
        </footer>
    </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        methods:{
            toggleWindow(){
                this.$store.dispatch('toggleLogin');
            }
        }
    }
</script>