<template>
    <div class="base_form">
        <div class="base_header">
            <div class="blue_column"></div>
            <div class="base_title">选课管理</div>
        </div>

        <div class="base_query_oneLine">
            <div class ="query_left">
                <button class="commButton" @click="addItem()">添加选课记录</button>
            </div>
            <div class="query_right">
                <span>学生</span>
                <td>{{ info.name }}</td>
                <span>课程</span>
                <select class="commInput" v-model="courseId">
                    <option value="0">请选择...</option>
                    <option v-for="item in courseList" :key="item.id" :value="item.id">
                        {{ item.title }}
                    </option>
                </select>
                <button class="commButton" @click="query()">查询选课记录列表</button>
            </div>
        </div>
        <div class="table_center">
            <table class="content">
                <tr class="<table_th">
                    <td>学号</td>
                    <td>姓名</td>
                    <td>课程号</td>
                    <td>课程名</td>
                    <td>学分</td>
                    <td>操作</td>
                </tr>
                <tr v-for="item in fitList" :key="item.fitId">
                    <td>{{ item.stuNum }}</td>
                    <td>{{ item.stuName }}</td>
                    <td>{{ item.courseNum }}</td>
                    <td>{{ item.courseName }}</td>
                    <td>{{ item.courseCredit }}</td>
                    <td>
                        <button class="table_delete_button" @click="deleteItem(item.fitId)">删除</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <!--选课记录添加对话框显示-->
    <dialog
        id="favDialog"
        onclose="close()"
        style="
            position: absolute;
            top: 300px;
            left: 300px;
            width: 300px;
            height: 210px;
        ">
        <div class="base_title">--选课记录添加对话框显示--</div>
        <div class="dialog-div">
            <table class="dialog_content">
                <tr>
                    <td colspan="1" style="text-align: right">学生</td>
                    <td colspan="1">
                    {{ info.name }}
                    </td>
                </tr>
                <tr>
                    <td colspan="1" style="text-align: right">课程名</td>
                    <td colspan="1">
                        <select class="commInput" v-model="editedItem.courseId">
                         <option value="0">请选择...</option>
                         <option
                            v-for="item in courseList"
                            :key="item.id"
                            :value="item.id"
                        >
                            {{ item.title }}
                         </option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                     <button
                        class="commButton"
                        @click="close()"
                        style="margin-right: 30px"
                     >
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
import{type OptionItem,type FitItem,type StudentItem} from "~/models/general"; 
import{
    fitDelete,
    getFitList,
    fitSave,
    getStudentItemOptionList,
    getCourseItemOptionList,
} from "~/services/teachingServ";
import {getStudentIntroduceData} from "~/services/infoServ";
export default defineComponent({    
    data: () =>({
        studentId:null as number | null,
        courseId: null,
        info: {} as StudentItem,
        fitList:[] as FitItem[],
        studentList:[] as OptionItem[], 
        courseList:[] as OptionItem[],
        editedItem:{} as FitItem,
    }),
    computed: {},
    created() {
        this.initialize();
    },
    methods:{
        //初始化
        async initialize() {
            let res = await getStudentIntroduceData(this.studentId);
            this.info = res.data.info;
            this.studentId = this.info.studentId;
            this.fitList = await getFitList(this.studentId,this.courseId);
            this.studentList = await getStudentItemOptionList();
            this.courseList = await getCourseItemOptionList();
        },
        //查询
        async query(){
            this.fitList=await getFitList(this.studentId,this.courseId);
        },
        //添加选课记录,显示选课记录修改对话框
        addItem(){
            this.editedItem = {} as FitItem;
            const dialog = document.getElementById("favDialog") as HTMLDialogElement;
            dialog.show();
        },
        //关闭选课记录添加对话框
        close(){
            const dialog = document.getElementById("favDialog") as HTMLDialogElement;
            dialog.close();
        },
        // 确认成绩修改对话框
        async confirm() {
            this.close();
            const res = await fitSave(
                this.editedItem.fitId,
                this.info.studentId,
                this.editedItem.courseId,
            );
            if (res.code == 0) {
                message(this, "保存成功");
                this.query();
            } else {
                message(this, res.msg);
            }
        },
        //删除选课记录
        async deleteItem(fitId: number){
            const result = await messageConform("确认删除吗?");
            if(!result){
                return;
            }
            const res=await fitDelete(fitId);
            if(res.code==0){
                message(this,"成功删除了一条选课记录");
                this.query();
            }else{
                message(this,res.msg);
            }
        },
    },
})
</script>
