<template>
    <div class="base_form">
        <div class="base_header">
            <div class="blue_column"></div>
            <div class="base_title">成果奖励</div>
        </div>

        <div class="base_query_oneLine">
            <div class="query_left">
            </div>
            <div class="query_right">
                <span>姓名</span>
                <td>{{ info.name }}</td>
            </div>
        </div>
        <div class="table_center" style="margin-top: 5px">
            <table class="content">
                <tr class="table_th">
                    <td>学号</td>
                    <td>姓名</td>
                    <td>奖励</td>
                    <td>时间</td>
                </tr>
                <tr v-for="item in awardList" :key="item.awardId">
                    <td>{{ item.stuNum }}</td>
                    <td>{{ item.stuName }}</td>
                    <td>{{ item.awardName }}</td>
                    <td>{{ item.awardTime }}</td>
                </tr>
            </table>
        </div>
    </div>
    <!-- 成绩修改对话框显示 -->
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
    getStudentItemOptionList,
} from "~/services/teachingServ";
import {
    getAwardList,
    awardSave,
    awardDelete,
} from "~/services/affairServ";
import { type OptionItem, type AwardItem, StudentItem } from "~/models/general";
import {
    getStudentIntroduceData,
} from "~/services/infoServ";
export default defineComponent({
    data: () => ({
        info: {} as StudentItem,
        awardList: [] as AwardItem[],
        studentId: null as number | null,
        editedItem: {} as AwardItem,
        studentList: [] as OptionItem[],
        deleteId: -1,
    }),
    computed: {},
    created() {
        this.initialize();
    },

    methods: {
        // 初始化,获取学生选择项列表和课程选择项列表
        async initialize() {
            let res = await getStudentIntroduceData(this.studentId);
            this.info = res.data.info;
            this.studentId = this.info.studentId;
            this.awardList = await getAwardList(this.studentId);
            this.studentList = await getStudentItemOptionList();
        },
        // 查询
        async query() {
            this.awardList = await getAwardList(this.studentId);
        },
        // 添加成绩,显示成绩修改对画框
    },
});
</script>