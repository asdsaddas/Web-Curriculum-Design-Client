<template>
  <div class="mine_box">
    <div v-if="pageType == 1">
      <div style="text-align: center">
        <div class="tab_box">
          <div class="login_box active_box">登录</div>
          <div class="res_box" @click="pageRegister()">注册</div>
        </div>
        <div>
          <!-- <div style="font-size: 35px; font-weight: bold">登陆</div> -->
          <!-- <div style="font-size: 20px; color: gray">
           
            学生服务平台
          </div> -->
        </div>
        <div style="margin-top: 10px">
          <el-form>
            <el-form-item>
              <el-input class="inputwidth" v-model="username" placeholder="请输入账号" type="text">
                <template #prefix>
                  <el-icon>
                    <User />
                  </el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="password" placeholder="请输入密码">
                <template #prefix>
                  <el-icon>
                    <Lock />
                  </el-icon>
                </template>
              </el-input>
            </el-form-item>
            <div style="display: flex; justify-content: space-between; gap: 20px">
              <el-form-item style="flex: 1">
                <el-input v-model="valiCode" placeholder="请输入验证码">
                  <template #prefix>
                    <el-icon>
                      <Lock />
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-image @click="changeValiCode()" style="
                  width: 86px;
                  height: 35px;
                  border-radius: 10px;
                  cursor: pointer;
                " referrerpolicy="no-referrer" :src="img" />
            </div>

            <el-row>
              <el-col :span="6" style="text-align: left">
                <el-form-item>
                  <el-checkbox v-model="remember" label="记住密码" />
                </el-form-item>
              </el-col>
              <el-col :span="18" style="text-align: right">
                <el-link @click="forgetPass()">忘记密码</el-link>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div style="margin-top: 10px">

          <el-button class="ripple-button" style="..." type="success" plain @click="loginSubmit()">登录</el-button>

        </div>
        <!-- <el-divider>
          <span style="font-size: 14px; color: grey"> 没有账号？ </span>
        </el-divider>
        <div>
          <el-button
            style="width: 270px"
            type="warning"
            plain
            @click="pageRegister()"
            >立刻注册</el-button
          >
        </div> -->
      </div>
    </div>
    <div class="main3 flex-col" v-if="pageType == 3" style="text-align: center; width: 100%; height: 100%">
      <div class="tab_box">
        <div class="login_box" @click="backLogin()">登录</div>
        <div class="res_box active_box">注册</div>
      </div>
      <!-- <div style="">
        <span class="callBackPass">用户注册</span>
      </div> -->
      <div class="modd33 flex-row">
        <span class="word44">账号：</span>
        <input class="inputWidth2" v-model="perName" placeholder="请输入的姓名" />
      </div>
      <div class="modd33 flex-row">
        <span class="word44">密码：</span>
        <input class="inputWidth2" v-model="password" type="password" placeholder="请输入密码" />
      </div>
      <div class="modd33 flex-row">
        <span class="word44">邮箱：</span>
        <input class="inputWidth2" v-model="email" placeholder="请输入的邮箱" />
      </div>
      <div class="modd33 flex-row">
        <span class="word44">角色：</span>
        <select class="inputWidth2" v-model="role">
          <option value="ADMIN">管理员</option>
          <option value="STUDENT">学生</option>
          <option value="TEACHER">教师</option>
        </select>
      </div>
      <div class="modd33 flex-row">
        <span class="word44">验证码：</span>
        <input class="inputWidth3" v-model="valiCode" placeholder="请输入验证码" />
        <img @click="changeValiCode()" class="img2" referrerpolicy="no-referrer" :src="img" />
      </div>
      <div style="margin-top: 10px">
        <el-button style="
            width: 100px;
            height: 40px;
            line-height: 40px;
            background-color: rgb(137, 137, 253);
            color: #fff;
          " type="success" plain @click="register()">注册</el-button>
      </div>
      <!-- <div>
        <el-button style="width: 270px" type="warning" plain @click="backLogin()"
          >返回登录</el-button
        >
      </div> -->
    </div>
  </div>
  <div class="main3 flex-col" v-if="pageType == 2" style="text-align: center; margin: 0 20px">
    <div style="margin-top: 150px">
      <span class="callBackPass">初始密码</span>
      <div class="mod33 flex-row">
        <span class="word44">登录账号：</span>
        <input class="inputWidth2" v-model="username" placeholder="填写教师号/学号" />
      </div>
      <div class="mod33 flex-row">
        <span class="word44">电子邮箱：</span>
        <input class="inputWidth2" v-model="email" placeholder="请输入的邮箱" />
      </div>
      <div class="mod33 flex-row">
        <span class="word44">验证码：</span>
        <input class="inputWidth3" v-model="valiCode" placeholder="请输入验证码" />
        <img @click="changeValiCode()" class="img2" referrerpolicy="no-referrer" :src="img" />
      </div>
      <div style="margin-top: 40px">
        <!-- 在您的登录按钮上添加 ripple-button 类 -->
        <el-button class="ripple-button" style="..." type="success" plain @click="loginSubmit()">登录</el-button>

      </div>
      <div>
        <el-button style="width: 270px" type="warning" plain @click="backLogin()">初始密码</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { User, Lock } from "@element-plus/icons-vue";
import { defineComponent } from "vue";
import { useAppStore } from "./stores/app";
import {
  getValidateCode,
  testValidateInfo,
  resetPassWord,
  registerUser,
} from "./services/mainServ";
import { message } from "./tools/messageBox";
import router from "./router";
import { Base64 } from "js-base64";
import { log } from "console";
function checkNotEmpty(value: string): boolean | string {
  if (value) return true;

  return "您必须输入用户名密码";
}
const USER_KEY = "UserKey";
export default defineComponent({
  //返回的数据，templte中使用的数据
  data: () => ({
    // username: '2022030001',
    // username: 'admin',
    // password: '123456',
    username: "",
    password: "",
    valiCode: "",
    pageType: 1,
    id: 0,
    jwt: "",
    img: "",
    funId: "",
    vueName: "",
    loginCode: "",
    email: "",
    messageCode: "",
    showSlider: false,
    remember: true,
    role: "STUDENT",
    perName: "",
    rules: [checkNotEmpty],
  }),
  //页面加载前执行的函数 设置初始为登录界面
  beforeMount() {
    this.pageType = 1;
  },
  //页面加载后执行的函数， 执行性一次， 从后台请求验证码，从浏览器获取上次登录的用户信息作为用户和密码的初始值
  async created() {
    const res = await getValidateCode();
    this.id = res.validateCodeId;
    this.img = res.img;
    const store = useAppStore();
    if (store.remember) {
      this.username = Base64.decode(store.usernameSave);
      this.password = Base64.decode(store.passwordSave);
      this.remember = true;
    } else {
      this.username = "";
      this.password = "";
      this.remember = false;
    }
  },
  //页面加载后执行的函数， 执行性多次
  methods: {
    //刷新验证码
    async changeValiCode() {
      const res = await getValidateCode();
      this.id = res.validateCodeId;
      this.img = res.img;
      this.valiCode = "";
    },
    //返回登录界面
    backLogin() {
      this.username = "";
      this.password = "";
      this.valiCode = "";
      this.pageType = 1;
    },
    //忘记密码 显示密码设置表单显示
    forgetPass() {
      this.username = "";
      this.password = "";
      this.valiCode = "";
      this.pageType = 2;
    },
    //用户注册 显示用户注册表单
    pageRegister() {
      this.username = "";
      this.password = "";
      this.valiCode = "";
      this.pageType = 3;
      //   let log = document.getElementsByClassName("login_box");
      //   console.log(log, "wh");
    },
    // 初始密码 请求后台服务，将发送初始密码到邮箱
    async initPassword() {
      let res = await testValidateInfo({
        validateCodeId: this.id,
        validateCode: this.valiCode,
      });
      if (res.code != 0) {
        message(this, res.msg);
        this.changeValiCode();
        return;
      }
      if (this.username == "" || this.username == undefined) {
        message(this, "账号为空,请填写账号");
        return;
      }
      if (this.email == "" || this.email == undefined) {
        message(this, "邮箱为空,请填写邮箱");
        return;
      }
      res = await resetPassWord({
        username: this.username,
        email: this.email,
      });
      if (res.code == 0) {
        message(this, "初始密码已发送至您的邮箱，请注意查收");
        this.changeValiCode();
        this.pageType = 1;
      } else {
        message(this, res.msg);
      }
    },
    //用户注册 请求后台服务，将用户注册信息发送到后台，后台添加账户人员教师或学生信息
    async register() {
      let res = await testValidateInfo({
        validateCodeId: this.id,
        validateCode: this.valiCode,
      });
      if (res.code != 0) {
        message(this, res.msg);
        this.changeValiCode();
        return;
      }
      if (this.username == "" || this.username == undefined) {
        message(this, "账号为空,请填写账号");
        return;
      }
      if (this.password == "" || this.password == undefined) {
        message(this, "账号为空,请填写密码");
        return;
      }
      if (this.perName == "" || this.perName == undefined) {
        message(this, "姓名为空,请填写姓名");
        return;
      }
      if (this.email == "" || this.email == undefined) {
        message(this, "邮箱为空,请填写邮箱");
        return;
      }
      if (this.role == "" || this.role == undefined) {
        message(this, "角色为空,请选择角色");
        return;
      }
      res = await registerUser({
        username: this.username,
        password: this.password,
        perName: this.perName,
        email: this.email,
        role: this.role,
      });
      if (res.code == 0) {
        message(this, "已注册成功！");
        this.changeValiCode();
        this.pageType = 1;
      } else {
        message(this, res.msg);
      }
    },
    //登录请求后台服务，将用户登录信息发送到后台，后台验证用户信息，返回jwt
    async loginSubmit() {
      const res = await testValidateInfo({
        validateCodeId: this.id,
        validateCode: this.valiCode,
      });
      //   console.log(res, ">>>>");

      if (res.code != 0) {
        message(this, res.msg);
        this.changeValiCode();
        return;
      }
      if (this.username == "" || this.username == undefined) {
        console.log(this.username, "wh");
        message(this, "用户名为空");
      } else if (this.password == "" || this.password == undefined) {
        message(this, "密码为空");
      } else {
        const store = useAppStore();
        try {
          //登录成功后，将用户信息保存到store中，将用户信息保存到浏览器中
          await store.login(this.username, this.password);
          await store.setNavi();
          if (this.remember) {
            store.saveAccount(
              Base64.encode(this.username),
              Base64.encode(this.password)
            );
          } else {
            store.removeAccount();
          }
          router.push("/MainPage");
        } catch (err) {
          message(this, "登录失败!");
        }
      }
    },
  },
});
</script>
<style>
.mine_box {
  width: 400px;
  height: 350px;
  padding: 32px;
  background: #ffffff;
  border-radius: 10px;
  margin: 100px auto;
  position: absolute;
  top: -125px;
  left: 30px;
  z-index: 999;
  opacity: 0.8;
}

.tab_box {
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-weight: 600;
  margin-bottom: 30px;
  font-size: 20px;
}

.active_box {
  color: blue;
  border-bottom: 3px solid blue;
}

.modq9 {
  width: 478px;
  height: 46px;
  margin-top: 39px;
}

.bdq3 {
  background-color: rgba(147, 14, 20, 1);
  border-radius: 4px;
  height: 46px;
  width: 232px;
  cursor: pointer;
}

.txtq4 {
  width: 48px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  font-family: STHeitiSC-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 16px;
  display: block;
  margin: 15px 0 0 92px;
}

.bdq4 {
  background-color: rgba(147, 14, 20, 1);
  border-radius: 4px;
  height: 46px;
  width: 232px;
  cursor: pointer;
}

.infoq4 {
  width: 32px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  font-family: STHeitiSC-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 16px;
  display: block;
  margin: 15px 0 0 92px;
}

.wordd4 {
  width: 418px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 14px;
  font-family: PingFangTC-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  display: block;
  margin: 8px 0 0 74px;
}

.ImageText19 {
  height: 86px;
  width: 478px;
  margin: 34px 0 0 0px;
}

.outer49 {
  width: 478px;
  height: 86px;
}

.box19 {
  background-color: rgba(147, 14, 20, 1);
  border-radius: 4px;
  height: 46px;
  width: 478px;
  cursor: pointer;
}

.info59 {
  width: 48px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  font-family: STHeitiSC-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 16px;
  display: block;
  margin: 15px 0 0 215px;
}

.TextGroup19 {
  height: 22px;
  width: 64px;
  margin: 18px 0 0 207px;
}

.word89 {
  width: 64px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(147, 14, 20, 1);
  font-size: 16px;
  font-family: PingFangTC-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  display: block;
  cursor: pointer;
}

.mod33 {
  width: 486px;
  height: 40px;
  margin-top: 45px;
}

.modd33 {
  /* width: 486px; */
  height: 32px;
  margin-bottom: 12px;
}

.word44 {
  width: 60px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(47, 47, 47, 1);
  font-size: 16px;
  font-family: SourceHanSansCN-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 16px;
  margin-top: 10px;
  display: block;
  text-align: right;
}

.section88 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 2px;
  height: 40px;
  border: 1px solid rgba(217, 217, 217, 1);
  width: 403px;
}

.info33 {
  width: 105px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 14px;
  font-family: PingFangTC-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  display: block;
  margin: 10px 0 0 11px;
}

.mod22 {
  width: 486px;
  height: 449px;
}

.callBackPass {
  width: 88px;
  height: 22px;
  overflow-wrap: break-word;
  color: black;
  font-size: 20px;
  font-family: SourceHanSansCN-Bold;
  font-weight: bold;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  /* margin-left: 203px; */
  text-align: center;
  display: block;
  margin: 0 auto;
}

body * {
  box-sizing: border-box;
  flex-shrink: 0;
}

body {
  font-family: PingFangSC-Regular, Roboto, Helvetica Neue, Helvetica, Tahoma,
    Arial, PingFang SC-Light, Microsoft YaHei;
}

button {
  margin: 0;
  padding: 0;
  border: 1px solid transparent;
  outline: none;
  background-color: transparent;
}

button:active {
  opacity: 0.6;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.justify-start {
  display: flex;
  justify-content: flex-start;
}

.justify-center {
  display: flex;
  justify-content: center;
}

.justify-end {
  display: flex;
  justify-content: flex-end;
}

.justify-evenly {
  display: flex;
  justify-content: space-evenly;
}

.justify-around {
  display: flex;
  justify-content: space-around;
}

.justify-between {
  display: flex;
  justify-content: space-between;
}

.align-start {
  display: flex;
  align-items: flex-start;
}

.align-center {
  display: flex;
  align-items: center;
}

.align-end {
  display: flex;
  align-items: flex-end;
}

.inputWidth {
  width: 432px;
}

.inputWidth2 {
  /* width: 402px; */
  flex: 1;
  border-radius: 5px;
}

.inputWidth3 {
  /* width: 310px; */
}

.codeWidth {
  width: 332px;
}

input {
  border: 1px solid rgba(217, 217, 217, 1);
  border-radius: 5px;
}

input:focus {
  outline: none;
  border: 1px solid rgba(147, 14, 20, 1);
}

.page {
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  width: 100%;
  height: 1080px;
  overflow: hidden;
}

.group1 {
  width: 100%;
  height: 1080px;
}

.section1 {
  background-color: rgba(29, 32, 38, 1);
  z-index: 2;
  height: 34px;
  width: 100%;
  position: relative;
}

.main1 {
  width: 127px;
  height: 12px;
  margin: 11px 0 0 1437px;
}

.mod1 {
  width: 13px;
  height: 20px;
  background: url("/hi.png") 0px 0px no-repeat;
}

.word1 {
  width: 108px;
  height: 12px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  font-family: SourceHanSansCN-Regular;
  text-align: right;
  white-space: nowrap;
  line-height: 12px;
  display: block;
}

.main2 {
  background-color: rgba(147, 14, 20, 1);
  z-index: 12;
  height: 110px;
  width: 284px;
  position: absolute;
  left: 360px;
  top: 0;
}

.group2 {
  width: 193px;
  height: 60px;
  background: url("/logo.png") 0px 0px no-repeat;
  margin: 25px 0 0 45px;
}

.section2 {
  width: 891px;
  height: 34px;
  margin: 21px 0 0 669px;
}

.box1 {
  width: 235px;
  height: 24px;
  background: url("/studentms.png") -1px -1px no-repeat;
  margin-top: 9px;
}

.box2 {
  height: 34px;
  background: linear-gradient(180deg, #ffffff 0%, #fceff0 100%);
  border-radius: 4px;
  border: 1px solid #930e14;
  margin-left: 387px;
  width: 140px;
  cursor: pointer;
}

.wrap1 {
  width: 92px;
  height: 14px;
  margin: 10px 0 0 24px;
}

.group3 {
  width: 14px;
  height: 14px;
  background: url("/en.png") 100% no-repeat;
}

.word2 {
  width: 70px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(147, 14, 20, 1);
  font-size: 14px;
  font-family: SourceHanSansCN-Regular;
  text-align: right;
  white-space: nowrap;
  line-height: 14px;
  display: block;
}

.box3 {
  height: 34px;
  background: linear-gradient(180deg, #ffffff 0%, #fceff0 100%);
  border-radius: 4px;
  border: 1px solid #930e14;
  margin-left: 9px;
  width: 140px;
  cursor: pointer;
}

.block1 {
  width: 92px;
  height: 14px;
  margin: 10px 0 0 27px;
}

.block2 {
  width: 14px;
  height: 14px;
  background: url("/wx.png") 100% no-repeat;
}

.word3 {
  width: 70px;
  height: 14px;
  overflow-wrap: break-word;
  color: rgba(147, 14, 20, 1);
  font-size: 14px;
  font-family: SourceHanSansCN-Regular;
  text-align: right;
  white-space: nowrap;
  line-height: 14px;
  display: block;
}

.section3 {
  background-color: rgba(29, 32, 38, 1);
  height: 34px;
  margin-top: 957px;
  width: 100%;
}

.txt1 {
  width: 163px;
  height: 12px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  font-family: SourceHanSansCN-Regular;
  text-align: right;
  white-space: nowrap;
  line-height: 12px;
  display: block;
  margin: 11px 0 0 878px;
}

.group4 {
  background-color: rgba(216, 216, 216, 1);
  z-index: 124;
  height: 938px;
  width: 100%;
  position: absolute;
  left: 0;
  top: 108px;
}

.group5 {
  height: 938px;
  background: url("/backgroud.png") 100% no-repeat;
  width: 100%;
}

.section4 {
  width: 100%;
  height: 775px;
}

.box4 {
  background-color: rgba(147, 14, 20, 1);
  width: 100%;
  height: 2px;
}

.box5 {
  background-color: rgba(255, 255, 255, 0.89);
  border-radius: 8px;
  height: 500px;
  width: 627px;
  margin: 189px 0 0 647px;
}

.main3 {
  /* width: 478px;
    height: 445px; */
  /* margin: 35px 0 0 82px; */
}

.main4 {
  width: 263px;
  height: 24px;
  background: url("/loginStudentms.png") -1px -1px no-repeat;
  margin-left: 100px;
}

.main5 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 2px;
  height: 46px;
  border: 1px solid rgba(217, 217, 217, 1);
  margin-top: 33px;
  width: 478px;
}

.wrap2 {
  width: 138px;
  height: 46px;
}

.main6 {
  background-color: rgba(251, 251, 251, 1);
  border-radius: 2px;
  height: 46px;
  border: 1px solid rgba(217, 217, 217, 1);
  width: 46px;
}

.box6 {
  width: 16px;
  height: 18px;
  background: url("/loginName.png") 0px 0px no-repeat;
  margin: 14px 0 0 15px;
}

.word4 {
  width: 70px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 14px;
  font-family: PingFangTC-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin-top: 13px;
  display: block;
}

.main7 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 2px;
  height: 46px;
  border: 1px solid rgba(217, 217, 217, 1);
  margin-top: 23px;
  width: 478px;
}

.wrap3 {
  width: 152px;
  height: 46px;
}

.group6 {
  background-color: rgba(251, 251, 251, 1);
  border-radius: 2px;
  height: 46px;
  border: 1px solid rgba(217, 217, 217, 1);
  width: 46px;
}

.mod2 {
  width: 16px;
  height: 18px;
  background: url("/password.png") 100% no-repeat;
  margin: 14px 0 0 15px;
}

.word5 {
  width: 84px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 14px;
  font-family: PingFangTC-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin-top: 13px;
  display: block;
}

.main8 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 2px;
  height: 46px;
  border: 1px solid rgba(217, 217, 217, 1);
  margin-top: 23px;
  width: 478px;
}

.wrap4 {
  width: 470px;
  height: 46px;
}

.bd1 {
  background-color: rgba(251, 251, 251, 1);
  border-radius: 2px;
  height: 46px;
  border: 1px solid rgba(217, 217, 217, 1);
  width: 46px;
}

.block3 {
  width: 15px;
  height: 18px;
  background: url("/certifiy.png") 0px 0px no-repeat;
  margin: 14px 0 0 16px;
}

.txt2 {
  width: 98px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 14px;
  font-family: PingFangTC-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  display: block;
  margin: 13px 0 0 22px;
}

.img1 {
  width: 86px;
  height: 35px;
  margin: 5px 0 0 8px;
  cursor: pointer;
}

.img2 {
  width: 86px;
  height: 27px;
  margin: 3px 0 0 3px;
  cursor: pointer;
  border-radius: 5px;
}

.ImageText1 {
  height: 22px;
  margin-top: 25px;
  width: 87px;
}

.group7 {
  width: 87px;
  height: 22px;
}

.bd2 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 2px;
  width: 16px;
  height: 16px;
  border: 1px solid rgba(217, 217, 217, 1);
  margin-top: 3px;
}

.TextGroup1 {
  height: 22px;
  width: 64px;
}

.txt3 {
  width: 64px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(85, 85, 85, 1);
  font-size: 16px;
  font-family: PingFangTC-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  display: block;
}

.main9 {
  background-color: rgba(147, 14, 20, 1);
  border-radius: 4px;
  height: 46px;
  margin-top: 17px;
  width: 478px;
  cursor: pointer;
}

.info1 {
  width: 32px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  font-family: STHeitiSC-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 16px;
  display: block;
  margin: 15px 0 0 223px;
}

.main10 {
  height: 46px;
  border: 1px solid rgba(147, 14, 20, 1);
  background: linear-gradient(180deg, #ffffff 0%, #fceff0 100%);
  margin-top: 9px;
  width: 478px;
  cursor: pointer;
}

.word6 {
  width: 96px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(147, 14, 20, 1);
  font-size: 16px;
  font-family: STHeitiSC-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 16px;
  display: block;
  margin: 15px 0 0 191px;
}

.info2 {
  width: 64px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(147, 14, 20, 1);
  font-size: 16px;
  font-family: PingFangTC-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  display: block;
  margin: 17px 0 0 207px;
  cursor: pointer;
}

.box7 {
  background-color: rgba(255, 255, 255, 0.89);
  border-radius: 8px;
  height: 78px;
  width: 627px;
  margin: 6px 0 0 647px;
}

.txt4 {
  width: 548px;
  height: 44px;
  overflow-wrap: break-word;
  color: rgba(85, 85, 85, 1);
  font-size: 16px;
  font-family: PingFangTC-Regular;
  text-align: left;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  margin: 17px 0 0 39px;
}

/* 添加这部分代码到您的样式表中 */
.ripple-button {
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}

.ripple-button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: rgba(255, 255, 255, 0.6);
  opacity: 0;
  border-radius: 100%;
  transform: scale(1) translate(-50%, -50%);
  transform-origin: 50% 50%;
  transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease, transform 0.6s ease;
}

.ripple-button:hover::after {
  width: 200%;
  height: 200%;
  opacity: 0;
  transform: scale(0) translate(-50%, -50%);
}

.ripple-button:active::after {
  width: 200%;
  height: 200%;
  opacity: 0;
  transform: scale(0) translate(-50%, -50%);
  transition-duration: 0s;
}
</style>
