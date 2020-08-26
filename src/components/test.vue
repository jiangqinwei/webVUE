<template>
    <div class="test">
        <el-container>
            <el-header filt>Header</el-header>
            <el-container>
                <el-main>
                    <el-row >
                        <el-col :span="20"><div class="grid-content bg-purple">
                            <el-carousel indicator-position="outside" justify="center">
                                <el-carousel-item v-for="item in 4" :key="item">
                                    <h3>{{ item }}</h3>
                                </el-carousel-item>
                            </el-carousel>
                        </div></el-col>
                    </el-row>
                </el-main>
                <el-aside width="200px">Aside</el-aside>
            </el-container>
            <el-container>
                <el-footer>footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import {getgiftList} from "@/api/user";

    export default {
        name: "test",
        data: function () {
            return {
                // 图片需要引入, 否则无法显示
                url: [
                    "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                    // "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2734864721,3419895832&fm=26&gp=0.jpg"
                ]
            }
        },
        methods: {
            getgiftList,
        }
    }
</script>

<style>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
  .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
   .el-header{
       line-height: 100px;
   }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 1600px;
    }
</style>