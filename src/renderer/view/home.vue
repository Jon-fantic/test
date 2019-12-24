<template>
    <div>
    <p>检测E盘test文件夹</p>
        {{text}}
    </div>
</template>

<script>
const chokidar = require("chokidar");
const fs = require("fs");
var net = require("net");
    export default {
        name: "home",
        data(){
            return {
                text:""
            }
        },
        created(){

        },
        mounted() {
    const client = net.createConnection({ port: 5566 }, () => {
      // 'connect' 监听器
      this.text="已连接到服务器"
    });
    client.on("data", data => {
      console.log(data.toString());

      // client.end();
    });
    let isready = false;
    chokidar
      .watch("E:\\test")
      .on("ready", () => {
        isready = true;
      })
      .on("add", (path, e) => {
        if (!isready) {
          return;
        }
        console.log(path);
        client.write(
          JSON.stringify({
            type: 0,
            data: path
          })
        );
        // server.connections.forEach(function(conn) {
        // var sock = new ws("ws://localhost:5566");
        // sock.on("open", function () {
        //   // sock.send("HelloWorld1");
        //   sock.send(JSON.stringify(a))
        // });
        // conn.sendText(JSON.stringify(a))
        // })
      })
      .on("err", err => {
        this.text = err;
      });
    client.on("end", () => {
      this.text = "已从服务器断开";
    });
  },
        methods: {
            qqLogin() {
                this.$http.get('http://tp5.cn/')
                    .then((result) => {
                        if (result.data.status === 1) {
                            this.$electron.ipcRenderer.send('qqLogin', {url: result.data.data});
                        }
                    })
                    .catch()
            },
        }
    }
</script>
