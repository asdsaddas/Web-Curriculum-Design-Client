<template>
  <div class="bac_box" style="width: 100vw; height: 100vh; overflow: hidden">
    <!-- <div>
        <el-image
          src="https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          style="width: 100%; height: 100%"
          fit="cover"
        />
      </div> -->
    <!-- <div class="welcome-title">
        <div style="font-size: 40px; font-weight: bold">欢迎来到教务管理系统</div>
        <div style="margin-top: 10px; font-size: 20px">
          请输入正确的账号密码并登陆
        </div>
        <div style="margin-top: 5px; font-size: 20px">
          在这里你可以查询与管理你自己的学习生活信息
        </div>
      </div> -->
    <div class="right-card">
      <div class="mine_box">
        <div v-if="pageType == 1">
          <div style="text-align: center">
            <!-- <div class="tab_box">
                <div class="login_box active_box">登录</div>
                <div class="res_box" @click="pageRegister()">注册</div>
              </div> -->
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
                <div style="
                    display: flex;
                    justify-content: space-between;
                    gap: 20px;
                  ">
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
              <el-button class="ripple-gradient-button" @click="loginSubmit()">
                <span>登录</span>
              </el-button>
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
          <!-- <div class="tab_box">
              <div class="login_box" @click="backLogin()">登录</div>
              <div class="res_box active_box">注册</div>
            </div> -->
          <!-- <div style="">
        <span class="callBackPass">用户注册</span>
      </div> -->
          <div class="modd33 flex-row">
            <span class="word44">账号：</span>
            <input class="inputWidth2" v-model="perName" placeholder="请输入您的账号" />
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
            <el-button class="ripple-gradient-button" @click="loginSubmit()">
              <span>注册</span>
            </el-button>

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
            <el-button style="width: 270px" type="success" plain @click="initPassword()">返回登陆</el-button>
          </div>
          <div>
            <el-button style="width: 270px" type="warning" plain @click="backLogin()">初始密码</el-button>
          </div>
        </div>
      </div>

      <div class="box_01" style="display: none">
        <div class="deng">欢迎登录教务管理系统</div>
        <img class="img1_b" src="./assets/img/2e.jpg" alt="" />
        <div class="denglu" @click="backLogin()">登录</div>
      </div>
      <div class="box_02">
        <img class="img2_b" src="./assets/img/2e.jpg" alt="" />

        <div class="zhu">欢迎注册教务管理系统</div>
        <div class="zhuce" @click="pageRegister()">注册</div>
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
      let denglu = document.getElementsByClassName("mine_box");
      let box_01 = document.getElementsByClassName("box_01");
      box_01[0].style.display = "none";
      let box_02 = document.getElementsByClassName("box_02");
      box_02[0].style.display = "block";
      denglu[0].style.left = "30px";
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
      let zhuce = document.getElementsByClassName("mine_box");
      zhuce[0].style.left = "370px";
      let box_02 = document.getElementsByClassName("box_02");

      box_02[0].style.display = "none";
      let box_01 = document.getElementsByClassName("box_01");

      box_01[0].style.display = "block";
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
  transition: left 0.3s ease-out;
}

.bac_box {
  background-image: url("../src/assets/img/1fce7d73fe3ac899911a5ec2d2f531c.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.welcome-title {
  position: absolute;
  bottom: 30px;
  left: 30px;
  color: white;
  text-shadow: 0 0 10px black;
}

.right-card {
  width: 800px;
  height: 300px;
  padding: 20px;
  /* height: 500px; */
  margin: 200px auto;
  z-index: 1;
  /* opacity: 0.9; */
  border-radius: 20px;
  background-color: #ffffff;
  position: relative;
}

.zhuce {
  position: absolute;
  bottom: 30px;
  right: 150px;
  color: white;
  font-size: 20px;
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 10px;
  background: rgb(187, 187, 245);
}

.denglu {
  position: absolute;
  bottom: 30px;
  left: 150px;
  color: white;
  font-size: 20px;
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 10px;
  background: rgb(187, 187, 245);
}

.deng {
  position: absolute;
  top: 175px;
  left: 125px;
  color: #9c0c13;
}

.img1_b {
  width: 150px;
  height: 150px;
  position: absolute;
  top: 20px;
  left: 125px;
}

.zhu {
  position: absolute;
  top: 175px;
  right: 125px;
  color: #9c0c13;
}

.img2_b {
  width: 150px;
  height: 150px;
  position: absolute;
  top: 20px;
  right: 125px;
}

.ripple-gradient-button {
  position: relative;
  overflow: hidden;
  background-color: rgb(137, 137, 253);
  /* 按钮背景色 */
  color: #fff;
  /* 文字颜色 */
  border: none;
  /* 去掉边框 */
  width: 150px;
  /* 按钮宽度 */
  height: 50px;
  /* 按钮高度 */
  font-size: 18px;
  /* 字体大小 */
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;
}

.ripple-gradient-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.6) 10%, transparent 10.01%);
  background-size: 300% 300%;
  transition: background 1.6s;
  z-index: 0;
  opacity: 0;
  transition: all 1.6s;
}

.ripple-gradient-button:hover::before {
  opacity: 1;
  background-size: 100% 100%;
}

.ripple-gradient-button span {
  position: relative;
  z-index: 1;
}
</style>