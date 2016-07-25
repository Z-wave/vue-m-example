<style scoped>
    header{
        line-height: 30px;color:red;text-align: center;border-bottom: 1px solid red;
    }
    .back{margin-left: 50px;}
</style>
<template>
    <div v-if="showHeader">
        <a @click="back" class="back" v-if="showBack">返回</a>
        <a v-link="{ name: 'index' }">首页</a>
        <a v-link="{ name: 'order' }">订单列表</a>
        <a v-link="{ name: 'user' }">个人中心</a>
        <header>{{title}}</header>        
    </div>

</template>
<script>
    module.exports = {
        props: {
            showHeader:{
                require:true,
                type:Boolean
            },
            showBack:{
                require:true,
                type:Boolean
            },
            title:"这是头部"
        },
        data: function() {
            return {

            }
        },
        ready: function() {

        },
        beforeDestroy: function() {

        },
        methods: {
            back:function(){
                if(routeList.length > 1){
                    this.$root.$route.router.go(routeList[routeList.length - 2].name)
                }
            }
        }
    }
</script>
