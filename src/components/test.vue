<template>
    <div class="test">
        <el-button @click="getgiftList()"> this is :{{ msg }}</el-button>
    </div>

</template>

<script>
    import {getgiftList} from "@/api/user";
    export default {
        name: "test",
        data: function () {
            return {
                msg: 'hello word'
            }
        },
        methods:{
            getgiftList,
        }
    }
</script>

<style scoped>

</style>