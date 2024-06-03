<template>
    <div class="base_form">
        <div class="base_header">
            <div class="blue_column"></div>
            <div class="base_title">学生互评管理</div>
        </div>

        <div class="base_query_oneLine">
            <div class="query_left">
                <button class="commButton" @click="addItem()">添加学生互评记录</button>
            </div>
            <div class="query_right">
                <span>评价学生:</span>
                <td>{{ info.name }}</td>
                <span>被评价学生:</span>
                <select class="commInput" v-model="student2Id">
                    <option value="0">请选择...</option>
                    <option v-for="item in filteredStudentList" :key="item.id" :value="item.id">
                        {{ item.title }}
                    </option>
                </select>
                <button class="commButton" @click="query()">查询学生互评记录列表</button>
            </div>
        </div>
        <div class="table_center">
            <table class="content">
                <tr class="<table_th">
                    <td>评价学生学号</td>
                    <td>评价学生姓名</td>
                    <td>被评价学生学号</td>
                    <td>被评价学生姓名</td>
                    <td>评价内容</td>
                    <td>操作</td>
                </tr>
                <tr v-for="item in assessmentList" :key="item.assessmentId">
                    <td>{{ item.stu1Num }}</td>
                    <td>{{ item.stu1Name }}</td>
                    <td>{{ item.stu2Num }}</td>
                    <td>{{ item.stu2Name }}</td>
                    <td>{{ item.content }}</td>
                    <td>
                        <button class="table_edit_button" @click="editItem(item)">编辑</button>
                        <button class="table_delete_button" @click="deleteItem(item.assessmentId)">删除</button>
                    </td>
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
        <div class="base_title">--学生互评记录添加对话框显示--</div>
        <div class="dialog-div">
            <table class="dialog_content">
                <tr>
                    <td colspan="1" style="text-align: right">评价学生:</td>
                    <td colspan="1">
                    <td>{{ info.name }}</td>
                    </td>
                </tr>
                <tr>
                    <td colspan="1" style="text-align: right">被评价学生:</td>
                    <td colspan="1">
                        <select class="commInput" v-model="editedItem.student2Id">
                            <option value="0">请选择...</option>
                            <option v-for="item in filteredEditStudentList" :key="item.id" :value="item.id">
                                {{ item.title }}
                            </option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td colspan="1" style="text-align: right">评价内容</td>
                    <td colspan="1">
                        <input v-model="editedItem.content" class="commInput" />
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
import { type StudentItem, type OptionItem, type AssessmentItem } from "~/models/general";
import { getStudentIntroduceData } from "~/services/infoServ";
import {
    assessmentDelete,
    getAssessmentList,
    assessmentSave,
    getStudentItemOptionList,
} from "~/services/affairServ";
export default defineComponent({
    data: () => ({
        student1Id: null as number | null,
        student2Id: null,
        assessmentList: [] as AssessmentItem[],
        studentList: [] as OptionItem[],
        editedItem: {} as AssessmentItem,
        info: {} as StudentItem,
    }),
    computed: {
        filteredStudentList() {
            return this.studentList.filter(item => item.id !== this.info.studentId);
        },
        filteredEditStudentList() {
            return this.studentList.filter(item => item.id !== this.info.studentId);
        }
    },
    created() {
        this.initialize();
    },
    methods: {
        //初始化
        async initialize() {
            let res = await getStudentIntroduceData(this.student1Id);
            this.info = res.data.info;
            this.student1Id = this.info.studentId;
            this.assessmentList = await getAssessmentList(this.student1Id, this.student2Id);
            this.studentList = await getStudentItemOptionList();
        },
        //查询
        async query() {
            this.assessmentList = await getAssessmentList(this.student1Id, this.student2Id);
        },
        //添加选课记录,显示选课记录修改对话框
        addItem() {
            this.editedItem = {} as AssessmentItem;
            const dialog = document.getElementById("favDialog") as HTMLDialogElement;
            dialog.show();
        },
        // 编辑成绩,显示成绩修改对画框
        editItem(item: AssessmentItem) {
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
            const res = await assessmentSave(
                this.editedItem.assessmentId,
                this.info.studentId,
                this.editedItem.student2Id,
                this.editedItem.content,
            );
            if (res.code == 0) {
                message(this, "保存成功");
                this.query();
            } else {
                message(this, res.msg);
            }
        },
        //删除选课记录
        async deleteItem(assessmentId: number) {
            const result = await messageConform("确认删除吗?");
            if (!result) {
                return;
            }
            const res = await assessmentDelete(assessmentId);
            if (res.code == 0) {
                message(this, "成功删除了一条学生互评记录");
                this.query();
            } else {
                message(this, res.msg);
            }
        },
    },
})
</script>
