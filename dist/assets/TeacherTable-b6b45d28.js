import{d as h,b as i,_ as p,e as w,f as r,h as t,w as a,l as g,p as k,T as B,o as y,m as l,L as n,V as E}from"./index-3f7c6146.js";/* empty css                     *//* empty css                 *//* empty css            *//* empty css              *//* empty css               */import{e as F,t as C}from"./personServ-3cbbcc51.js";import{a as v,m}from"./messageBox-f4d8c0d3.js";const D=h({data:()=>({numName:"",dataList:[]}),created(){this.doQuery()},methods:{async doQuery(){this.dataList=await F(this.numName)},addItem(){i.push({name:"TeacherInfo"})},editItem(o){i.push({name:"TeacherInfo",query:{teacherId:o}})},async deleteItem(o){if(!await v("确认删除教师吗?"))return;console.log(this.dataList[o]);const c=await C(this.dataList[o].teacherId);c.code==0?(m(this,"删除成功"),this.dataList.splice(o,1)):m(this,c.msg)}}}),I={class:"base_form"},$=r("div",{class:"base_header"},[r("div",{class:"blue_column"}),r("div",{class:"base_title"},"教师管理")],-1),L={class:"base_query_oneLine"},T={class:"query_left"},N={class:"query_right"},V={class:"table-content"};function q(o,u,c,A,Q,x){const d=g,_=k,s=E,b=B;return y(),w("div",I,[$,r("div",L,[r("div",T,[t(d,{class:"commButton",onClick:u[0]||(u[0]=e=>o.addItem())},{default:a(()=>[l("添加")]),_:1})]),r("div",N,[t(_,{modelValue:o.numName,"onUpdate:modelValue":u[1]||(u[1]=e=>o.numName=e)},{default:a(()=>[l("学号或姓名")]),_:1},8,["modelValue"]),t(d,{class:"commButton",onClick:u[2]||(u[2]=e=>o.doQuery())},{default:a(()=>[l("查询")]),_:1})])]),r("div",V,[t(b,{data:o.dataList,"header-cell-style":{color:"#2E2E2E",fontSize:"10px",fontWeight:"400",background:"rgb(242,242,242)"},"row-style":{height:"10px"},"cell-style":{padding:"2px"},style:{width:"100%"}},{default:a(()=>[t(s,{label:"序号",fixed:"left",width:"50",color:"black"},{default:a(e=>[l(n(e.$index+1),1)]),_:1}),t(s,{label:"工号",color:"black",align:"center",width:"100"},{default:a(e=>[l(n(e.row.num),1)]),_:1}),t(s,{label:"姓名",color:"black",align:"center",width:"100"},{default:a(e=>[l(n(e.row.name),1)]),_:1}),t(s,{label:"院系",color:"black",align:"center",width:"100"},{default:a(e=>[l(n(e.row.dept),1)]),_:1}),t(s,{label:"职称",color:"black",align:"center",width:"100"},{default:a(e=>[l(n(e.row.title),1)]),_:1}),t(s,{label:"学位",color:"black",align:"center",width:"100"},{default:a(e=>[l(n(e.row.degree),1)]),_:1}),t(s,{label:"证件号码",color:"black",align:"center",width:"100"},{default:a(e=>[l(n(e.row.card),1)]),_:1}),t(s,{label:"性别",color:"black",align:"center",width:"100"},{default:a(e=>[l(n(e.row.genderName),1)]),_:1}),t(s,{label:"出生日期",color:"black",align:"center"},{default:a(e=>[l(n(e.row.birthday),1)]),_:1}),t(s,{label:"邮箱",color:"black",align:"center"},{default:a(e=>[l(n(e.row.email),1)]),_:1}),t(s,{label:"电话",color:"black",align:"center"},{default:a(e=>[l(n(e.row.phone),1)]),_:1}),t(s,{label:"地址",color:"black",align:"center"},{default:a(e=>[l(n(e.row.address),1)]),_:1}),t(s,{label:"操作",color:"black",align:"center",width:"230"},{default:a(e=>[t(d,{class:"commButton",onClick:f=>o.editItem(e.row.teacherId)},{default:a(()=>[l("编辑")]),_:2},1032,["onClick"]),t(d,{class:"commButton",onClick:f=>o.deleteItem(e.$index)},{default:a(()=>[l("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","header-cell-style"])])])}const K=p(D,[["render",q]]);export{K as default};
