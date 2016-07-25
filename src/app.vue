<style scoped>
    @import './styles/common.css';
</style>
<template>
    
    <headview :show-back.sync="showBack" :show-header.sync="showHeader" title="这是新标题"></headview>
    <div>
        <router-view></router-view>
    </div>

</template>


<script>
    import headview from './components/header.vue'
    import store from './vuex/store' // import 我们刚刚创建的 store

    module.exports = {
        data: function() {
            return {
                showBack:true,
                showHeader:true
            }
        },
        ready: function() {

        },
        components:{
            headview
        },
        store: store, // 在根组件加入 store，让它的子组件和 store 连接
        beforeDestroy: function() {

        },
        methods: {

        }
    }
</script>
