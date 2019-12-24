<template>
    <div class="body">
    <div class="form">
        <form>
            <div class="form_item"><i class="iconfont icon-zaicishurumima"></i><input type="text"></div>
            <div class="form_item"><i class="iconfont icon-mima1"></i><input type="password"></div>
            <div class="login_options" style="text-align: center">
                <label><div class="option_item"><input type="checkbox"><span class="checked"><img src="@/assets/images/checked.png" alt=""></span></div><i class="text">立即登录</i></label>
                <label><div class="option_item"><input type="checkbox"><span class="checked"><img src="@/assets/images/checked.png" alt=""></span></div><i class="text">记住密码</i></label>
            </div>
        </form>
        <div class="buttons">
            <button>注册</button>
        </div>
        <footer class="footer">
            <span @click="toggleSteps">返回上一步</span>
        </footer>
    </div>
    </div>
</template>

<script>
    export default {
        name: "steps2",
        methods:{
            toggleSteps(){
                this.$store.dispatch('toggleSteps');
            },
        }
    }
</script>