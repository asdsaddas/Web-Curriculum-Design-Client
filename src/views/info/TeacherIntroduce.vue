<template>
    <div class="base_form">
        <div class="base_header">
            <div class="blue_column"></div>
            <div class="base_title">个人画像</div>
        </div>
        <div class="table_center" style="margin-top: 5px">
            <table class="content">
                <tr>
                    <td>姓名</td>
                    <td>
                        {{ info.name }}
                    </td>
                    <td>性别</td>
                    <td>
                        {{ info.genderName }}
                    </td>
                    <td>学院</td>
                    <td>
                        {{ info.dept }}
                    </td>
                    <td rowspan="2">
                        <img :src="imgStr" alt="个人照片" width="200" />
                    </td>
                </tr>
                <tr>
                    <td>联系方式</td>
                    <td>
                        {{ info.phone }}
                    </td>
                    <td>研究方向</td>
                    <td>
                        {{ info.interest }}
                    </td>
                    <td>讲授课程</td>
                    <td>
                        {{ info.tuition }}
                    </td>
                </tr>
                <tr>
                    <td>论文著作</td>
                    <td>
                        {{ info.publication }}
                    </td>
                    <td>地址</td>
                    <td>
                        {{ info.address }}
                    </td>
                    <td>出生日期</td>
                    <td>
                        {{ info.birthday }}
                    </td>
                    <td>
                        <input style="margin-left: 10px" type="file" id="file" accept=".jpg" />
                        <input type="button" value="图片上传" @click="uploadFile()" />
                    </td>
                </tr>
            </table>
            <p>个人介绍</p>
            <span>
                {{ info.introduce }}
            </span>
        </div>
    </div>
    <div>
        <el-button style="margin-left: 5px" class="spacial" @click="downloadPdf()">附件下载</el-button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
    type TeacherItem,
} from "~/models/general";
import { downloadPost } from "~/services/genServ";
import {
    getTeacherIntroduceData,
    getPhotoImageStr,
    uploadPhoto,
} from "~/services/infoServ";
import { message } from "~/tools/messageBox";


export default defineComponent({
    data: () => ({
        teacherId: null as number | null,
        imgStr: "",
        info: {} as TeacherItem,
    }),
    async created() {
        let res = await getTeacherIntroduceData(this.teacherId);
        this.info = res.data.info;
        res = await getPhotoImageStr("photo/" + this.info.personId + ".jpg");
        this.imgStr = res.data;
    },
    mounted() { },

    methods: {
        // 上传图片
        async uploadFile() {
            const file = document.querySelector("#file") as any;
            if (file.files == null || file.files.length == 0) {
                message(this, "请选择文件！");
                return;
            }
            const res = await uploadPhoto(
                "photo/" + this.info.personId + ".jpg",
                file.files[0]
            );

            if (res.code === 0) {
                message(this, "上传成功");
            } else {
                message(this, "上传失败");
            }
        },
        // 下载pdf
        downloadPdf() {
            const res = downloadPost(
                "/api/student/getStudentIntroduceItextPdf",
                this.info.name + ".pdf",
                {
                    teacherId: this.teacherId,
                }
            );
            console.log(res);
        },
    },
});
</script>

