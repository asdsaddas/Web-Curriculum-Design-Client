<template>
    <div class="base_form">
        <div class="base_header">
            <div class="blue_column"></div>
            <div class="base_title">课外活动管理</div>
        </div>

        <div class="base_query_oneLine">
            <div class="query_left">
                <button class="commButton" @click="addItem()">添加课外活动记录</button>
            </div>
            <div class="query_right">
                <span>学生</span>
                <select class="commInput" v-model="studentId">
                    <option value="0">请选择...</option>
                    <option v-for="item in studentList" :key="item.id" :value="item.id">
                        {{ item.title }}
                    </option>
                </select>
                <button class="commButton" @click="query()">查询课外活动记录列表</button>
            </div>
        </div>
        <div class="table_center">
            <table class="content">
                <tr class="<table_th">
                    <td>学号</td>
                    <td>姓名</td>
                    <td>课外活动名称</td>
                    <td>课外活动时间</td>
                    <td>课外活动内容简介</td>
                    <td>操作</td>
                </tr>
                <tr v-for="item in activityList" :key="item.activityId">
                    <td>{{ item.stuNum }}</td>
                    <td>{{ item.stuName }}</td>
                    <td>{{ item.activityName }}</td>
                    <td>{{ item.activityDate }}</td>
                    <td>{{ item.activityProfile }}</td>
                    <td>
                        <button class="table_edit_button" @click="editItem(item)">编辑</button>
                        <button class="table_delete_button" @click="deleteItem(item.activityId)">删除</button>
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
        <div class="base_title">--课外活动记录添加对话框显示--</div>
        <div class="dialog-div">
            <table class="dialog_content">
                <tr>
                    <td colspan="1" style="text-align: right">学生</td>
                    <td colspan="1">
                        <select class="commInput" v-model="editedItem.studentId">
                            <option value="0">请选择...</option>
                            <option v-for="item in studentList" :key="item.id" :value="item.id">
                                {{ item.title }}
                            </option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td colspan="1" style="text-align: right">活动名称</td>
                    <td colspan="1">
                        <input v-model="editedItem.activityName" class="commInput" />
                    </td>
                </tr>
                <tr>
                    <td colspan="1" style="text-align: right">活动日期</td>
                    <td colspan="1">
                        <el-date-picker v-model="activityDate" type="date" style="width: 100%" placeholder="选择活动日期" />
                    </td>
                </tr>
                <tr>
                    <td colspan="1" style="text-align: right">活动简介</td>
                    <td colspan="1">
                        <input v-model="editedItem.activityProfile" class="commInput" />
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
import { type OptionItem, type ActivityItem } from "~/models/general";
import {
    activityDelete,
    getActivityList,
    activitySave,
    getStudentItemOptionList,
} from "~/services/affairServ";
import { formatDate } from "~/tools/comMethod";
export default defineComponent({
    data: () => ({
        studentId: null,
        activityList: [] as ActivityItem[],
        studentList: [] as OptionItem[],
        editedItem: {} as ActivityItem,
        activityDate: new Date(),
    }),
    computed: {},
    created() {
        this.initialize();
    },
    methods: {
        //初始化
        async initialize() {
            this.activityList = await getActivityList(this.studentId);
            this.studentList = await getStudentItemOptionList();
            this.activityDate = new Date(this.editedItem.activityDate);
        },
        //查询
        async query() {
            this.activityList = await getActivityList(this.studentId);
        },
        //添加选课记录,显示选课记录修改对话框
        addItem() {
            this.editedItem = {} as ActivityItem;
            const dialog = document.getElementById("favDialog") as HTMLDialogElement;
            dialog.show();
        },
        // 编辑成绩,显示成绩修改对画框
        editItem(item: ActivityItem) {
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
            this.editedItem.activityDate = formatDate(this.activityDate);
            const res = await activitySave(
                this.editedItem.activityId,
                this.editedItem.studentId,
                this.editedItem.activityName,
                this.editedItem.activityDate,
                this.editedItem.activityProfile,
            );
            if (res.code == 0) {
                message(this, "保存成功");
                this.query();
            } else {
                message(this, res.msg);
            }
        },
        //删除选课记录
        async deleteItem(activityId: number) {
            const result = await messageConform("确认删除吗?");
            if (!result) {
                return;
            }
            const res = await activityDelete(activityId);
            if (res.code == 0) {
                message(this, "成功删除了一条课外活动记录");
                this.query();
            } else {
                message(this, res.msg);
            }
        },
    },
})
</script>
