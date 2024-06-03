<template>
    <div class="base_form">
        <div class="base_header">
            <div class="blue_column"></div>
            <div class="base_title">社会实践管理</div>
        </div>

        <div class="base_query_oneLine">
            <div class="query_left">
            </div>
            <div class="query_right">
                <span>学生</span>
                <td>{{ info.name }}</td>
            </div>
        </div>
        <div class="table_center">
            <table class="content">
                <tr class="<table_th">
                    <td>学号</td>
                    <td>姓名</td>
                    <td>社会实践名称</td>
                    <td>社会实践时间</td>
                    <td>社会实践内容简介</td>
                </tr>
                <tr v-for="item in practiceList" :key="item.practiceId">
                    <td>{{ item.stuNum }}</td>
                    <td>{{ item.stuName }}</td>
                    <td>{{ item.practiceName }}</td>
                    <td>{{ item.practiceDate }}</td>
                    <td>{{ item.practiceProfile }}</td>
                </tr>
            </table>
        </div>
    </div>
    <!--选课记录添加对话框显示-->
    <dialog id="favDialog" onclose="close()" style="
            position: absolute;
            top: 300px;
            left: 300px;
            width: 300px;
            height: 310px;
        ">
        <div class="base_title">--社会实践记录添加对话框显示--</div>
        <div class="dialog-div">
            <table class="dialog_content">
                <tr>
                    <td colspan="1" style="text-align: right">学生</td>
                    <td colspan="1">
                        {{ info.name }}
                    </td>
                </tr>
                <tr>
                    <td colspan="1" style="text-align: right">实践名称</td>
                    <td colspan="1">
                        <input v-model="editedItem.practiceName" class="commInput" />
                    </td>
                </tr>
                <tr>
                    <td colspan="1" style="text-align: right">实践日期</td>
                    <td colspan="1">
                        <el-date-picker v-model="practiceDate" type="date" style="width: 100%" placeholder="选择活动日期" />
                    </td>
                </tr>
                <tr>
                    <td colspan="1" style="text-align: right">实践简介</td>
                    <td colspan="1">
                        <input v-model="editedItem.practiceProfile" class="commInput" />
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <button class="commButton" @click="close()" style="margin-right: 30px">
                            取消
                        </button>
                        <button class="commButton" @click="confirm()">确认</button>
                    </td>
                </tr>
            </table>
        </div>
    </dialog>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { message, messageConform } from "~/tools/messageBox";
import { type StudentItem, type OptionItem, type PracticeItem } from "~/models/general";
import {
    practiceDelete,
    getPracticeList,
    practiceSave,
    getStudentItemOptionList,
} from "~/services/affairServ";
import { getStudentIntroduceData } from "~/services/infoServ";
import { formatDate } from "~/tools/comMethod";
export default defineComponent({
    data: () => ({
        studentId: null as number | null,
        practiceList: [] as PracticeItem[],
        studentList: [] as OptionItem[],
        editedItem: {} as PracticeItem,
        info: {} as StudentItem,
        practiceDate: new Date(),
    }),
    computed: {},
    created() {
        this.initialize();
    },
    methods: {
        //初始化
        async initialize() {
            let res = await getStudentIntroduceData(this.studentId);
            this.info = res.data.info;
            this.studentId = this.info.studentId;
            this.practiceList = await getPracticeList(this.studentId);
            this.studentList = await getStudentItemOptionList();
            this.practiceDate = new Date(this.editedItem.practiceDate);
        },
        //查询
        async query() {
            this.practiceList = await getPracticeList(this.studentId);
        },
        //添加选课记录,显示选课记录修改对话框
        addItem() {
            this.editedItem = {} as PracticeItem;
            const dialog = document.getElementById("favDialog") as HTMLDialogElement;
            dialog.show();
        },
        // 编辑成绩,显示成绩修改对画框
        editItem(item: PracticeItem) {
            this.editedItem = item;
            const dialog = document.getElementById("favDialog") as HTMLDialogElement;
            dialog.show();
        },
        //关闭选课记录添加对话框
        close() {
            const dialog = document.getElementById("favDialog") as HTMLDialogElement;
            dialog.close();
        },
        // 确认成绩修改对话框
        async confirm() {
            this.close();
            this.editedItem.practiceDate = formatDate(this.practiceDate);
            const res = await practiceSave(
                this.editedItem.practiceId,
                this.info.studentId,
                this.editedItem.practiceName,
                this.editedItem.practiceDate,
                this.editedItem.practiceProfile,
            );
            if (res.code == 0) {
                message(this, "保存成功");
                this.query();
            } else {
                message(this, res.msg);
            }
        },
        //删除选课记录
        async deleteItem(practiceId: number) {
            const result = await messageConform("确认删除吗?");
            if (!result) {
                return;
            }
            const res = await practiceDelete(practiceId);
            if (res.code == 0) {
                message(this, "成功删除了一条社会实践记录");
                this.query();
            } else {
                message(this, res.msg);
            }
        },
    },
})
</script>
