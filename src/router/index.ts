// Composables
import { createRouter, createWebHistory } from "vue-router";
//路由表
const routes = [
  {
    path: "/",
    redirect: "/Welcome",
  },
  {
    path: "/Welcome",
    name: "Welcome",
    component: () => import("~/Welcome.vue"),
    children: [
      {
        path: "",
        name: "Login",
        component: () => import("~/Login.vue"),
      }
    ]
  },

  //主页面
  {
    path: "/MainPage",
    name: "MainPage",
    component: () => import("~/views/MainPage.vue"),
  },
  {
    path: "/SystemIntroduce",
    name: "SystemIntroduce",
    component: () => import("~/views/info/SystemIntroduce.vue"),
  },
  {
    path: "/Password",
    name: "Password",
    component: () => import("~/views/info/Password.vue"),
  },
  {
    path: "/StudentIntroduce",
    name: "StudentIntroduce",
    component: () => import("~/views/info/StudentIntroduce.vue"),
  },
  {
    path: "/TeacherIntroduce",
    name: "TeacherIntroduce",
    component: () => import("~/views/info/TeacherIntroduce.vue"),
  },
  {
    path: "/menu-manage-panel",
    name: "MenuManage",
    component: () => import("~/views/system/MenuManage.vue"),
  },
  {
    path: "/dictionary-manage-panel",
    name: "DictionaryManage",
    component: () => import("~/views/system/DictionaryManage.vue"),
  },

  {
    path: "/student-panel",
    name: "StudentTable",
    component: () => import("~/views/person/StudentTable.vue"),
  },
  {
    path: "/StudentInfo",
    name: "StudentInfo",
    component: () => import("~/views/person/StudentInfo.vue"),
  },
  {
    path: "/FamilyMember",
    name: "FamilyMember",
    component: () => import("~/views/person/FamilyMember.vue"),
  },
  {
    path: "/teacher-panel",
    name: "teacherTable",
    component: () => import("~/views/person/TeacherTable.vue"),
  },
  {
    path: "/TeacherInfo",
    name: "TeacherInfo",
    component: () => import("~/views/person/TeacherInfo.vue"),
  },

  {
    path: "/course-panel",
    name: "CourseTable",
    component: () => import("~/views/teaching/CourseTable.vue"),
  },
  {
    path: "/score-table-panel",
    name: "ScoreTable",
    component: () => import("~/views/teaching/ScoreTable.vue"),
  },
  {
    path: "/TestBackground",
    name: "TestBackground",
    component: () => import("~/views/test/TestBackground.vue"),
  },
  {
    path: "/TestDiv",
    name: "TestDiv",
    component: () => import("~/views/test/TestDiv.vue"),
  },
  {
    path: "/TestComponent",
    name: "TestComponent",
    component: () => import("~/views/test/TestComponent.vue"),
  },
  {
    path: "/fit-panel",
    name: "FitTable",
    component: () => import("~/views/teaching/FitTable.vue")
  },
  {
    path: "/fit-panel-student",
    name: "FitTable-Student",
    component: () => import("~/views/teaching/FitTable-Student.vue")
  },
  {
    path: "/practice-panel",
    name: "PracticeTable",
    component: () => import("~/views/affair/PracticeTable.vue")
  },
  {
    path: "/practice-panel-student",
    name: "PracticeTable-Student",
    component: () => import("~/views/affair/PracticeTable-Student.vue")
  },
  {
    path: "/activity-panel",
    name: "ActivityTable",
    component: () => import("~/views/affair/ActivityTable.vue")
  },
  {
    path: "/activity-panel-student",
    name: "ActivityTable-Student",
    component: () => import("~/views/affair/ActivityTable-Student.vue")
  },
  {
    path: "/assessment-panel",
    name: "AssessmentTable",
    component: () => import("~/views/affair/AssessmentTable.vue")
  },
  {
    path: "/assessment-panel-student",
    name: "AssessmentTable-Student",
    component: () => import("~/views/affair/AssessmentTable-Student.vue")
  },
  {
    path: "/award-panel",
    name: "AwardTable",
    component: () => import("~/views/affair/AwardTable.vue")
  },
  {
    path: "/award-panel-student",
    name: "AwardTable-Student",
    component: () => import("~/views/affair/AwardTable-Student.vue")
  },
];
//路由创建
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
//路由导出
export default router;
