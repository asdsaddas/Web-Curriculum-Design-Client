import{d as U,g as F,u as y,t as f,r as x,a as $,b as D,_ as I,c as B,e as m,f as t,h as i,w as l,i as C,j as n,v as u,k as S,F as W,E as L,l as P,o as h,m as d,n as M,p as R,q as j,s as q,x as z,y as H,z as G,A as J}from"./index-3f7c6146.js";/* empty css               */import{g as c}from"./base64-ddc34627.js";/* empty css                 *//* empty css              */import{m as a}from"./messageBox-f4d8c0d3.js";function K(e){return e?!0:"您必须输入用户名密码"}const O=U({data:()=>({username:"",password:"",valiCode:"",pageType:1,id:0,jwt:"",img:"",funId:"",vueName:"",loginCode:"",email:"",messageCode:"",showSlider:!1,remember:!0,role:"STUDENT",perName:"",rules:[K]}),beforeMount(){this.pageType=1},async created(){const e=await F();this.id=e.validateCodeId,this.img=e.img;const s=y();s.remember?(this.username=c.decode(s.usernameSave),this.password=c.decode(s.passwordSave),this.remember=!0):(this.username="",this.password="",this.remember=!1)},methods:{async changeValiCode(){const e=await F();this.id=e.validateCodeId,this.img=e.img,this.valiCode=""},backLogin(){this.username="",this.password="",this.valiCode="",this.pageType=1},forgetPass(){this.username="",this.password="",this.valiCode="",this.pageType=2},pageRegister(){this.username="",this.password="",this.valiCode="",this.pageType=3},async initPassword(){let e=await f({validateCodeId:this.id,validateCode:this.valiCode});if(e.code!=0){a(this,e.msg),this.changeValiCode();return}if(this.username==""||this.username==null){a(this,"账号为空,请填写账号");return}if(this.email==""||this.email==null){a(this,"邮箱为空,请填写邮箱");return}e=await x({username:this.username,email:this.email}),e.code==0?(a(this,"初始密码已发送至您的邮箱，请注意查收"),this.changeValiCode(),this.pageType=1):a(this,e.msg)},async register(){let e=await f({validateCodeId:this.id,validateCode:this.valiCode});if(e.code!=0){a(this,e.msg),this.changeValiCode();return}if(this.username==""||this.username==null){a(this,"账号为空,请填写账号");return}if(this.password==""||this.password==null){a(this,"账号为空,请填写密码");return}if(this.perName==""||this.perName==null){a(this,"姓名为空,请填写姓名");return}if(this.email==""||this.email==null){a(this,"邮箱为空,请填写邮箱");return}if(this.role==""||this.role==null){a(this,"角色为空,请选择角色");return}e=await $({username:this.username,password:this.password,perName:this.perName,email:this.email,role:this.role}),e.code==0?(a(this,"已注册成功！"),this.changeValiCode(),this.pageType=1):a(this,e.msg)},async loginSubmit(){const e=await f({validateCodeId:this.id,validateCode:this.valiCode});if(e.code!=0){a(this,e.msg),this.changeValiCode();return}if(this.username==""||this.username==null)console.log(this.username,"wh"),a(this,"用户名为空");else if(this.password==""||this.password==null)a(this,"密码为空");else{const s=y();try{await s.login(this.username,this.password),await s.setNavi(),this.remember?s.saveAccount(c.encode(this.username),c.encode(this.password)):s.removeAccount(),D.push("/MainPage")}catch{a(this,"登录失败!")}}}}});const Q={class:"mine_box"},X={key:0},Y={style:{"text-align":"center"}},Z={class:"tab_box"},ee=t("div",{class:"login_box active_box"},"登录",-1),se=t("div",null,null,-1),te={style:{"margin-top":"10px"}},oe={style:{display:"flex","justify-content":"space-between",gap:"20px"}},ie={style:{"margin-top":"10px"}},le={key:1,class:"main3 flex-col",style:{"text-align":"center",width:"100%",height:"100%"}},ae={class:"tab_box"},ne=t("div",{class:"res_box active_box"},"注册",-1),ue={class:"modd33 flex-row"},de=t("span",{class:"word44"},"账号：",-1),re={class:"modd33 flex-row"},pe=t("span",{class:"word44"},"密码：",-1),me={class:"modd33 flex-row"},he=t("span",{class:"word44"},"邮箱：",-1),ce={class:"modd33 flex-row"},ge=t("span",{class:"word44"},"角色：",-1),ve=t("option",{value:"ADMIN"},"管理员",-1),fe=t("option",{value:"STUDENT"},"学生",-1),Ce=t("option",{value:"TEACHER"},"教师",-1),_e=[ve,fe,Ce],we={class:"modd33 flex-row"},Fe=t("span",{class:"word44"},"验证码：",-1),ye=["src"],Be={style:{"margin-top":"10px"}},be={key:0,class:"main3 flex-col",style:{"text-align":"center",margin:"0 20px"}},Ve={style:{"margin-top":"150px"}},ke=t("span",{class:"callBackPass"},"初始密码",-1),Ee={class:"mod33 flex-row"},Ae=t("span",{class:"word44"},"登录账号：",-1),Ne={class:"mod33 flex-row"},Te=t("span",{class:"word44"},"电子邮箱：",-1),Ue={class:"mod33 flex-row"},xe=t("span",{class:"word44"},"验证码：",-1),$e=["src"],De={style:{"margin-top":"40px"}};function Ie(e,s,b,Se,We,Le){const V=B("User"),g=M,v=R,r=j,_=B("Lock"),k=q,E=z,w=H,A=G,N=J,T=L,p=P;return h(),m(W,null,[t("div",Q,[e.pageType==1?(h(),m("div",X,[t("div",Y,[t("div",Z,[ee,t("div",{class:"res_box",onClick:s[0]||(s[0]=o=>e.pageRegister())},"注册")]),se,t("div",te,[i(T,null,{default:l(()=>[i(r,null,{default:l(()=>[i(v,{class:"inputwidth",modelValue:e.username,"onUpdate:modelValue":s[1]||(s[1]=o=>e.username=o),placeholder:"请输入账号",type:"text"},{prefix:l(()=>[i(g,null,{default:l(()=>[i(V)]),_:1})]),_:1},8,["modelValue"])]),_:1}),i(r,null,{default:l(()=>[i(v,{modelValue:e.password,"onUpdate:modelValue":s[2]||(s[2]=o=>e.password=o),placeholder:"请输入密码"},{prefix:l(()=>[i(g,null,{default:l(()=>[i(_)]),_:1})]),_:1},8,["modelValue"])]),_:1}),t("div",oe,[i(r,{style:{flex:"1"}},{default:l(()=>[i(v,{modelValue:e.valiCode,"onUpdate:modelValue":s[3]||(s[3]=o=>e.valiCode=o),placeholder:"请输入验证码"},{prefix:l(()=>[i(g,null,{default:l(()=>[i(_)]),_:1})]),_:1},8,["modelValue"])]),_:1}),i(k,{onClick:s[4]||(s[4]=o=>e.changeValiCode()),style:{width:"86px",height:"35px","border-radius":"10px",cursor:"pointer"},referrerpolicy:"no-referrer",src:e.img},null,8,["src"])]),i(N,null,{default:l(()=>[i(w,{span:6,style:{"text-align":"left"}},{default:l(()=>[i(r,null,{default:l(()=>[i(E,{modelValue:e.remember,"onUpdate:modelValue":s[5]||(s[5]=o=>e.remember=o),label:"记住密码"},null,8,["modelValue"])]),_:1})]),_:1}),i(w,{span:18,style:{"text-align":"right"}},{default:l(()=>[i(A,{onClick:s[6]||(s[6]=o=>e.forgetPass())},{default:l(()=>[d("忘记密码")]),_:1})]),_:1})]),_:1})]),_:1})]),t("div",ie,[i(p,{class:"ripple-button",style:{},type:"success",plain:"",onClick:s[7]||(s[7]=o=>e.loginSubmit())},{default:l(()=>[d("登录")]),_:1})])])])):C("",!0),e.pageType==3?(h(),m("div",le,[t("div",ae,[t("div",{class:"login_box",onClick:s[8]||(s[8]=o=>e.backLogin())},"登录"),ne]),t("div",ue,[de,n(t("input",{class:"inputWidth2","onUpdate:modelValue":s[9]||(s[9]=o=>e.perName=o),placeholder:"请输入的姓名"},null,512),[[u,e.perName]])]),t("div",re,[pe,n(t("input",{class:"inputWidth2","onUpdate:modelValue":s[10]||(s[10]=o=>e.password=o),type:"password",placeholder:"请输入密码"},null,512),[[u,e.password]])]),t("div",me,[he,n(t("input",{class:"inputWidth2","onUpdate:modelValue":s[11]||(s[11]=o=>e.email=o),placeholder:"请输入的邮箱"},null,512),[[u,e.email]])]),t("div",ce,[ge,n(t("select",{class:"inputWidth2","onUpdate:modelValue":s[12]||(s[12]=o=>e.role=o)},_e,512),[[S,e.role]])]),t("div",we,[Fe,n(t("input",{class:"inputWidth3","onUpdate:modelValue":s[13]||(s[13]=o=>e.valiCode=o),placeholder:"请输入验证码"},null,512),[[u,e.valiCode]]),t("img",{onClick:s[14]||(s[14]=o=>e.changeValiCode()),class:"img2",referrerpolicy:"no-referrer",src:e.img},null,8,ye)]),t("div",Be,[i(p,{style:{width:"100px",height:"40px","line-height":"40px","background-color":"rgb(137, 137, 253)",color:"#fff"},type:"success",plain:"",onClick:s[15]||(s[15]=o=>e.register())},{default:l(()=>[d("注册")]),_:1})])])):C("",!0)]),e.pageType==2?(h(),m("div",be,[t("div",Ve,[ke,t("div",Ee,[Ae,n(t("input",{class:"inputWidth2","onUpdate:modelValue":s[16]||(s[16]=o=>e.username=o),placeholder:"填写教师号/学号"},null,512),[[u,e.username]])]),t("div",Ne,[Te,n(t("input",{class:"inputWidth2","onUpdate:modelValue":s[17]||(s[17]=o=>e.email=o),placeholder:"请输入的邮箱"},null,512),[[u,e.email]])]),t("div",Ue,[xe,n(t("input",{class:"inputWidth3","onUpdate:modelValue":s[18]||(s[18]=o=>e.valiCode=o),placeholder:"请输入验证码"},null,512),[[u,e.valiCode]]),t("img",{onClick:s[19]||(s[19]=o=>e.changeValiCode()),class:"img2",referrerpolicy:"no-referrer",src:e.img},null,8,$e)]),t("div",De,[i(p,{class:"ripple-button",style:{},type:"success",plain:"",onClick:s[20]||(s[20]=o=>e.loginSubmit())},{default:l(()=>[d("登录")]),_:1})]),t("div",null,[i(p,{style:{width:"270px"},type:"warning",plain:"",onClick:s[21]||(s[21]=o=>e.backLogin())},{default:l(()=>[d("初始密码")]),_:1})])])])):C("",!0)],64)}const He=I(O,[["render",Ie]]);export{He as default};