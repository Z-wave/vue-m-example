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
    <Display></Display>
    <Increment></Increment>
    <h1>订单列表,vuex应用示例</h1>
</template>
<script>
    import Display from '../components/Display.vue'
    import Increment from '../components/Increment.vue'
    module.exports = {
        data: function() {
            return {

            }
        },
        ready: function() {

        },
        components:{
            Display,
            Increment
        },
        beforeDestroy: function() {

        },
        methods: {
            
        }
    }
</script>
