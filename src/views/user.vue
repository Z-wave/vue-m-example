<style scoped>
    @import '~vux/dist/vux.css';
    h1{
        color: #28a7e1;
        text-align: center;
        font-size: 25px;
        font-weight: bold;
        margin-top: 100px;
    }
</style>
<template>
    <h1>个人中心，vux组件模块</h1>
    <div>
        <group>
          <switch title="confirm" :value.sync="show"></switch>
        </group>
        <confirm :show.sync="show" confirm-text="确定" cancel-text="取消" title="操作提示" @on-confirm="onAction('确认')" @on-cancel="onAction('取消')">
          <p style="text-align:center;">这是一个vux组件</p>
        </confirm>
    </div>
</template>
<script>
    import Group from 'vux-components/group'
    import Switch from 'vux-components/switch'
    import Confirm from 'vux-components/confirm'

    module.exports = {
        data: function() {
            return {
                show: false
            }
        },
        ready: function() {

        },
        components: {
            Group,
            Switch,
            Confirm
        },
        beforeDestroy: function() {

        },
        methods: {
            onAction: function (type) {
              alert(type)
            }
        }
    }
</script>
