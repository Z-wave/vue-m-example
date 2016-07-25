<style scoped>
    h1{
        color: #28a7e1;
        text-align: center;
        font-size: 25px;
        font-weight: bold;
        margin-top: 100px;
    }
</style>

<template>
<div>
      <h1>首页</h1>
      <button type="text" @click = "showModal=true"> 显示该页面modal </button>
      <!--此种写法详情 https://github.com/yyx990803/vue/issues/1325-->
      <modal :show.sync="showModal" :confirmfn.sync="confirmfn"  :cancelfn.sync="cancelfn" v-ref:index-modal>
      <!--
        you can use custom content here to overwrite
        default content
      -->
        <!--       <h3 slot="header">这是嵌入到页面中单独的modal</h3>
        <h3 slot="body">
          通过设置，以下属性传值
              :confirmfn.sync="confirmfn"  :cancelfn.sync="cancelfn"
        </h3>
        <slot slot="footer">
          <p>覆盖掉原来的footer</p>
        </slot> -->
    
</template>

<script>

    module.exports = {
        data:function(){
            return {
                showModal:false,
            }
        },
        ready:function(){
            this.$http.post('http://192.168.10.91/mobile/index.php?act=goods_class&op=list', {key:'123'}, {
                headers: {
                    //"X-Requested-With": "XMLHttpRequest"
                },
                emulateJSON: true
            }).then(function(data) {
                console.log(data);
            }, function(response) {
                // handle error
            });

        },
        components:{
            modal:require('../components/modal.vue')
        },
        methods:{
            confirmfn:function(){
                this.showModal = false;
            },
            cancelfn:function(){
                this.showModal = false;
            }
        }
    }
</script>