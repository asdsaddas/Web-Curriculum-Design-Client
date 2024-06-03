<template>
    <div class="base_form">
        <div class="base_header">
            <div class="blue_column"></div>
            <div class="base_title">成果奖励</div>
        </div>

        <div class="base_query_oneLine">
            <div class="query_left">
                <button class="commButton" @click="addItem()">添加</button>
            </div>
            <div class="query_right">
                <span>学生</span>
                <select class="commInput" v-model="studentId">
                    <option value="0">请选择...</option>
                    <option v-for="item in studentList" :key="item.id" :value="item.id">
                        {{ item.title }}
                    </option>
                </select>
                <button style="margin-left: 5px" class="commButton" @click="query()">
                    查询
                </button>
            </div>
        </div>
        <div class="table_center" style="margin-top: 5px">
            <table class="content">
                <tr class="table_th">
                    <td>学号</td>
                    <td>姓名</td>
                    <td>奖励</td>
                    <td>时间</td>
                    <td>操作</td>
                </tr>
                <tr v-for="item in awardList" :key="item.awardId">
                    <td>{{ item.stuNum }}</td>
                    <td>{{ item.stuName }}</td>
                    <td>{{ item.awardName }}</td>
                    <td>{{ item.awardTime }}</td>
                    <td>
                        <button class="table_edit_button" @click="editItem(item)">
                            编辑
                        </button>
                        <button class="table_delete_button" @click="deleteItem(item.awardId)">
                            删除
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <!-- 成绩修改对话框显示 -->
    <dialog id="favDialog" onclose="close()" style="
      position: absolute;
      top: 300px;
      left: 300px;
      width: 350px;
      height: 300px;
    ">
        <div class="base_title">成果奖励添加修改对话框</div>
        <div class="dialog-div" style="margin-top: 5px">
            <table class="dialog-content">
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
                    <td colspan="1" style="text-align: right">奖励名称</td>
                    <td colspan="1">
                        <input v-model="editedItem.awardName" class="commInput" />
                    </td>
                </tr>
                <tr>
                    <td colspan="1" style="text-align: right">日期</td>
                    <td colspan="1">
                        <el-date-picker v-model="editedItem.awardTime" type="date" style="width: 100%" placeholder="选择日期" />
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
import {
    getStudentItemOptionList,
} from "~/services/teachingServ";
import {
    getAwardList,
    awardSave,
    awardDelete,

} from "~/services/affairServ";
import { type OptionItem, type AwardItem } from "~/models/general";
import { message, messageConform } from "~/tools/messageBox";
export default defineComponent({
    data: () => ({
        awardList: [] as AwardItem[],
        studentId: null,
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
            this.awardList = await getAwardList(this.studentId);
            this.studentList = await getStudentItemOptionList();
        },
        // 查询
        async query() {
            this.awardList = await getAwardList(this.studentId);
        },
        // 添加成绩,显示成绩修改对画框
        addItem() {
            this.editedItem = {} as AwardItem;
            const dialog = document.getElementById("favDialog") as HTMLDialogElement;
            dialog.show();
        },
        // 编辑成绩,显示成绩修改对画框
        editItem(item: AwardItem) {
            this.editedItem = item;
            const dialog = document.getElementById("favDialog") as HTMLDialogElement;
            dialog.show();
        },
        // 关闭成绩修改对话框
        close() {
            const dialog = document.getElementById("favDialog") as HTMLDialogElement;
            dialog.close();
        },
        // 确认成绩修改对话框
        async confirm() {
            this.close();
            const res = await awardSave(
                this.editedItem.awardId,
                this.editedItem.studentId,
                this.editedItem.awardName,
                this.editedItem.awardTime,
            );
            if (res.code == 0) {
                message(this, "保存成功");
                this.query();
            } else {
                message(this, res.msg);
            }
        },
        // 删除成绩
        async deleteItem(awardId: number) {
            const result = await messageConform("确认删除吗?");
            if (!result) {
                return;
            }
            const res = await awardDelete(awardId);
            if (res.code == 0) {
                message(this, "删除成功");
                this.query();
            } else {
                message(this, res.msg);
            }
        },
    },
});
</script>