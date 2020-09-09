(function(t){function e(e){for(var i,o,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},r=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1d31":function(t,e,a){"use strict";var i=a("7300"),n=a.n(i);n.a},3953:function(t,e,a){"use strict";var i=a("b7df"),n=a.n(i);n.a},"53f2":function(t,e,a){"use strict";var i=a("a180"),n=a.n(i);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav-bar"),a("div",{staticClass:"container"},[a("router-view")],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("div",{staticClass:"nav-wrapper pink"},[a("div",{staticClass:"container"},[a("router-link",{attrs:{to:"/dashboard"}},[a("b",{staticStyle:{"font-size":"2rem"}},[t._v("PreScripted")])]),a("ul",{staticClass:"right"},[t.isLoggedIn?a("li",[a("span",{staticClass:"email white-text hide-on-small-only"},[t._v(t._s(t.currentUser))])]):t._e(),t.isLoggedIn?a("li",[a("router-link",{attrs:{to:"/"}},[t._v("Dashboard")])],1):t._e(),t.isLoggedIn?t._e():a("li",[a("router-link",{staticClass:"cyan-text",attrs:{to:"/login"}},[t._v("Login")])],1),t.isLoggedIn?t._e():a("li",[a("router-link",{staticClass:"cyan-text",attrs:{to:"/register"}},[t._v("Register")])],1),t.isLoggedIn?a("li",[a("button",{staticClass:"btn black",on:{click:t.logout}},[t._v("Logout")])]):t._e()])],1)])])},s=[],l=a("59ca"),c=a.n(l),d=(a("ea7b"),{name:"navbar",data:function(){return{isLoggedIn:!1,currentUser:!1}},created:function(){c.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=c.a.auth().currentUser.email)},methods:{logout:function(){var t=this;c.a.auth().signOut().then((function(){t.$router.go({path:t.$router.path})}))}}}),u=d,p=(a("53f2"),a("2877")),m=Object(p["a"])(u,o,s,!1,null,"6da76a06",null),v=m.exports,f={components:{NavBar:v},created:function(){document.title="PreScripted | Your Prescriptions now safe in the cloud"}},h=f,g=Object(p["a"])(h,n,r,!1,null,null,null),b=g.exports,C=(a("45fc"),a("8c4f")),w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("h1",[t._v("LANDING PAGE")]),a("p",[t._v("Is Under construction, The WebApp is complete though, click on login to continue")])])}],x={name:"Home",components:{},data:function(){return{}}},y=x,N=Object(p["a"])(y,w,_,!1,null,null,null),S=N.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[a("h4",{staticClass:"collection-header"},[t._v("My Prescriptions")]),t._l(t.prescriptions,(function(e){return a("ul",{key:e.pid,staticClass:"collection with-header"},[a("router-link",{attrs:{to:{name:"view-prescription",params:{pid:e.pid}}}},[a("li",{staticClass:"collection-item"},[a("h6",[t._v(t._s(e.reasonForConsultation))]),a("div",{staticClass:"chip pink white-text"},[t._v(t._s(e.date))]),a("div",{staticClass:"chip blue yellow-text"},[t._v(t._s(e.drName))]),a("div",{staticClass:"chip yellow blue-text"},[t._v(t._s(e.drSpecialization))])])])],1)})),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[a("i",{staticClass:"fa fa-plus"})])],1)],2)},F=[],k=(a("4160"),a("159b"),a("8aa5")),z=a.n(k),E=(a("e71f"),{apiKey:"AIzaSyAmu3jTrRTPl-S0HcXcUmYbzBlaCtwY43o",authDomain:"prescripted-e1544.firebaseapp.com",databaseURL:"https://prescripted-e1544.firebaseio.com",projectId:"prescripted-e1544",storageBucket:"prescripted-e1544.appspot.com",messagingSenderId:"498305008476",appId:"1:498305008476:web:9d13fd2f960c8b53cdb799"}),D=z.a.initializeApp(E),$=D.firestore(),U={name:"dashboard",data:function(){return{prescriptions:[],loading:!0}},computed:{},created:function(){var t=this;$.collection("users").doc(z.a.auth().currentUser.uid).collection("prescriptions").get().then((function(e){t.loading=!1,e.forEach((function(e){var a={pid:e.id,reasonForConsultation:e.data().reasonForConsultation,drName:e.data().drName,drSpecialization:e.data().drSpecialization,date:e.data().date};t.prescriptions.push(a)})),t.loading=!1}))}},O=U,j=(a("1d31"),Object(p["a"])(O,P,F,!1,null,"94aad764",null)),A=j.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"new-prescription"}},[a("h3",[t._v("New prescription")]),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.savePrescription(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.reasonForConsultation,expression:"reasonForConsultation"}],attrs:{type:"text",required:""},domProps:{value:t.reasonForConsultation},on:{input:function(e){e.target.composing||(t.reasonForConsultation=e.target.value)}}}),a("label",[t._v("Reason For Consultation")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.drName,expression:"drName"}],attrs:{type:"text",required:""},domProps:{value:t.drName},on:{input:function(e){e.target.composing||(t.drName=e.target.value)}}}),a("label",[t._v("Doctor's Name")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.drSpecialization,expression:"drSpecialization"}],attrs:{type:"text",required:""},domProps:{value:t.drSpecialization},on:{input:function(e){e.target.composing||(t.drSpecialization=e.target.value)}}}),a("label",[t._v("Dr's Specialization")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],attrs:{type:"text",required:""},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}}),a("label",[t._v("Date")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.details,expression:"details"}],attrs:{cols:"30",rows:"10"},domProps:{value:t.details},on:{input:function(e){e.target.composing||(t.details=e.target.value)}}}),a("label",[t._v("Details")])])]),a("div",{staticClass:"row"},[a("input",{attrs:{type:"file",accept:"image/*"},on:{change:t.onFileUpload}}),a("button",{staticClass:"btn pink",on:{click:function(e){e.preventDefault(),t.image=null}}},[t._v("Remove Image")]),t.image?a("div",{directives:[{name:"viewer",rawName:"v-viewer",value:this.options,expression:"this.options"}]},[a("img",{attrs:{src:t.image,alt:"img"}})]):a("div",[t._v(" No Image uploaded ")])]),a("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Submit")]),a("router-link",{staticClass:"btn grey",attrs:{to:"/dashboard"}},[t._v("Cancel")])],1)]),a("Footer")],1)},q=[],L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",[t._v("© PreScripted 2020 | Talmiz Ahmed")])])}],G={},T=G,M=(a("9a1a"),Object(p["a"])(T,L,R,!1,null,"159d2656",null)),B=M.exports,H={name:"new-prescription",components:{Footer:B},data:function(){return{pid:null,reasonForConsultation:null,drName:null,drSpecialization:null,date:null,details:null,image:null,options:{inline:!1,navbar:!0,title:!1,toolbar:!0,tooltip:!0,movable:!1,zoomable:!1,rotatable:!0,scalable:!1,transition:!0,fullscreen:!0,keyboard:!1}}},methods:{onFileUpload:function(t){var e=this,a=t.target.files[0],i=new FileReader;i.readAsDataURL(a),i.onload=function(t){e.image=t.target.result}},savePrescription:function(){var t=this;$.collection("users").doc(z.a.auth().currentUser.uid).collection("prescriptions").add({pid:null,reasonForConsultation:this.reasonForConsultation,drName:this.drName,drSpecialization:this.drSpecialization,date:this.date,details:this.details,image:this.image}).then((function(e){console.log("Client added: ".concat(e.id)),$.collection("users").doc(z.a.auth().currentUser.uid).collection("prescriptions").where("pid","==",null).get().then((function(a){a.forEach((function(a){a.ref.update({pid:e.id}).then((function(){t.$router.push("/dashboard")}))}))}))})).catch((function(t){console.error("Error adding prescription: ",t)}))}}},Y=H,W=(a("3953"),Object(p["a"])(Y,I,q,!1,null,"04739bc6",null)),J=W.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"new-prescription"}},[a("h3",[t._v("Edit prescription")]),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.updatePrescription(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.reasonForConsultation,expression:"reasonForConsultation"}],attrs:{type:"text",placeholder:"Reason For Consultation",required:""},domProps:{value:t.reasonForConsultation},on:{input:function(e){e.target.composing||(t.reasonForConsultation=e.target.value)}}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.drName,expression:"drName"}],attrs:{type:"text",placeholder:"Dr Name",required:""},domProps:{value:t.drName},on:{input:function(e){e.target.composing||(t.drName=e.target.value)}}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.drSpecialization,expression:"drSpecialization"}],attrs:{type:"text",placeholder:"Dr Specialization",required:""},domProps:{value:t.drSpecialization},on:{input:function(e){e.target.composing||(t.drSpecialization=e.target.value)}}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],attrs:{type:"text",placeholder:"Date",required:""},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.details,expression:"details"}],attrs:{placeholder:"Details",cols:"30",rows:"10"},domProps:{value:t.details},on:{input:function(e){e.target.composing||(t.details=e.target.value)}}})])]),a("div",{staticClass:"row"},[a("input",{attrs:{type:"file",accept:"image/*"},on:{change:t.onFileUpload}}),a("button",{staticClass:"btn red",on:{click:function(e){e.preventDefault(),t.image=null}}},[t._v("Remove Image")]),t.image?a("div",{directives:[{name:"viewer",rawName:"v-viewer",value:this.options,expression:"this.options"}]},[a("img",{attrs:{src:t.image,alt:"Prescription Image"}})]):a("div",[t._v("No image uploaded")])]),a("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Submit")]),a("button",{staticClass:"btn right red",on:{click:t.deleteEmployee}},[t._v("Delete Prescription")]),a("router-link",{staticClass:"btn grey",attrs:{to:"/dashboard"}},[t._v("Cancel")])],1)]),a("Footer")],1)},X=[],Q={name:"edit-prescription",components:{Footer:B},data:function(){return{pid:null,reasonForConsultation:null,drName:null,drSpecialization:null,date:null,details:null,image:null,options:{inline:!1,navbar:!0,title:!1,toolbar:!0,tooltip:!0,movable:!1,zoomable:!1,rotatable:!0,scalable:!1,transition:!0,fullscreen:!0,keyboard:!1}}},beforeRouteEnter:function(t,e,a){$.collection("users").doc(z.a.auth().currentUser.uid).collection("prescriptions").where("pid","==",t.params.pid).get().then((function(t){t.forEach((function(t){a((function(e){e.pid=t.data().pid,e.reasonForConsultation=t.data().reasonForConsultation,e.drName=t.data().drName,e.drSpecialization=t.data().drSpecialization,e.date=t.data().drSpecialization,e.details=t.data().details,e.image=t.data().image}))}))}))},watch:{$route:"fetchData"},methods:{onFileUpload:function(t){var e=this,a=t.target.files[0],i=new FileReader;i.readAsDataURL(a),i.onload=function(t){e.image=t.target.result}},fetchData:function(){var t=this;$.collection("users").doc(z.a.auth().currentUser.uid).collection("prescriptions").where("prescription_id","==",this.$route.params.prescription_id).get().then((function(e){e.forEach((function(e){t.pid=e.data().pid,t.reasonForConsultation=e.data().reasonForConsultation,t.drName=e.data().drName,t.drSpecialization=e.data().drSpecialization,t.date=e.data().date,t.details=e.data().details,t.image=e.data().image}))}))},updatePrescription:function(){var t=this;$.collection("users").doc(z.a.auth().currentUser.uid).collection("prescriptions").where("pid","==",this.$route.params.pid).get().then((function(e){e.forEach((function(e){e.ref.update({reasonForConsultation:t.reasonForConsultation,drName:t.drName,drSpecialization:t.drSpecialization,date:t.date,details:t.details,image:t.image}).then((function(){t.$router.push({name:"view-prescription",params:{pid:t.pid}})}))}))}))},deleteEmployee:function(){var t=this;confirm("Are you sure?")&&$.collection("users").doc(z.a.auth().currentUser.uid).collection("prescriptions").where("pid","==",this.$route.params.pid).get().then((function(e){e.forEach((function(e){e.ref.delete(),console.log("Deleted Prescription"),t.$router.push("/dashboard")}))}))}}},V=Q,Z=(a("90a0"),Object(p["a"])(V,K,X,!1,null,"2e45e8d6",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"view-prescription"}},[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h4",[t._v(t._s(t.reasonForConsultation))])]),a("li",{staticClass:"collection-item"},[a("b",[t._v("Prescription ID#:")]),t._v(" "+t._s(t.pid))]),a("li",{staticClass:"collection-item"},[a("b",[t._v("Doctor's Name:")]),t._v(" "+t._s(t.drName))]),a("li",{staticClass:"collection-item"},[a("b",[t._v("Doctor's Specialization:")]),t._v(" "+t._s(t.drSpecialization))]),a("li",{staticClass:"collection-item"},[a("b",[t._v("Date:")]),t._v(" "+t._s(t.date))]),a("li",{staticClass:"collection-item"},[a("b",[t._v("Details:")]),a("div",[t._v(" "+t._s(t.details))])]),a("div",{staticClass:"row"},[t.image?a("div",{directives:[{name:"viewer",rawName:"v-viewer",value:this.options,expression:"this.options"}]},[a("img",{attrs:{src:t.image,alt:"image"}})]):a("div",[t._v(" No Image uploaded ")])])]),a("router-link",{staticClass:"btn grey",attrs:{to:"/dashboard"}},[t._v("Back")]),t.NotGuest?a("div",{staticClass:"fixed-action-btn"},[t.pid?a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-prescription",params:{pid:t.pid}}}},[a("i",{staticClass:"fa fa-pencil"})]):t._e()],1):a("h5",{staticStyle:{display:"inline"}},[t._v(" Guest Account Has Edit Mode Disabled ")]),a("Footer")],1)},at=[],it={name:"view-prescription",components:{Footer:B},computed:{NotGuest:function(){return"guest@gmail.com"!==z.a.auth().currentUser.email}},data:function(){return{pid:null,reasonForConsultation:null,drName:null,drSpecialization:null,date:null,details:null,image:null,options:{inline:!1,navbar:!0,title:!1,toolbar:!0,tooltip:!0,movable:!1,zoomable:!1,rotatable:!0,scalable:!1,transition:!0,fullscreen:!0,keyboard:!1}}},beforeRouteEnter:function(t,e,a){$.collection("users").doc(z.a.auth().currentUser.uid).collection("prescriptions").where("pid","==",t.params.pid).get().then((function(t){t.forEach((function(t){a((function(e){e.pid=t.data().pid,e.reasonForConsultation=t.data().reasonForConsultation,e.drName=t.data().drName,e.drSpecialization=t.data().drSpecialization,e.date=t.data().date,e.details=t.data().details,e.image=t.data().image}))}))}))},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;$.collection("users").doc(z.a.auth().currentUser.uid).collection("prescriptions").where("pid","==",this.$route.params.pid).get().then((function(e){e.forEach((function(e){t.pid=e.data().pid,t.reasonForConsultation=e.data().reasonForConsultation,t.drName=e.data().drName,t.date=e.data().drSpecialization,t.details=e.data().details,t.image=e.data().image}))}))}}},nt=it,rt=(a("ee15"),Object(p["a"])(nt,et,at,!1,null,null,null)),ot=rt.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel pink white-text center"},[a("h3",[t._v("Login")]),a("form",{attrs:{action:"index.html"}},[a("div",{staticClass:"input-field white-text"},[a("i",{staticClass:"material-icons prefix"},[t._v("email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"white-text",attrs:{placeholder:"Email",type:"email",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[t._v("lock")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"white-text",attrs:{placeholder:"Password",type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("button",{staticClass:"btn btn-large btn-extended grey lighten-4 black-text",on:{click:t.login}},[t._v("Login")]),a("button",{staticClass:"btn btn-large grey lighten-4 black-text",staticStyle:{"margin-left":"10px"},on:{click:t.guestLogin}},[t._v("Login as Guest")])])])])])])])},lt=[],ct={name:"login",data:function(){return{email:"",password:""}},computed:{},methods:{setGuestCredentials:function(){this.email="guest@gmail.com",this.password="guest123"},login:function(t){var e=this;z.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(t){alert("You are logged in as ".concat(t.user.email)),e.$router.go({path:e.$router.path})}),(function(t){alert(t.message)})),t.preventDefault()},guestLogin:function(t){this.setGuestCredentials(),this.login(t)}}},dt=ct,ut=Object(p["a"])(dt,st,lt,!1,null,null,null),pt=ut.exports,mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel grey lighten-4 black-text center"},[a("h3",[t._v("Register")]),a("form",{attrs:{action:"index.html"}},[a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[t._v("email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("label",{attrs:{for:"email"}},[t._v("Email Address")])]),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[t._v("lock")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("label",{attrs:{for:"password"}},[t._v("Password")])]),a("button",{staticClass:"btn btn-large btn-extended grey lighten-4 black-text",on:{click:t.register}},[t._v("Register")])])])])])])])},vt=[],ft={name:"register",data:function(){return{email:"",password:""}},methods:{register:function(t){var e=this;z.a.auth().createUserWithEmailAndPassword(this.email,this.password).then((function(t){alert("Account Created for ".concat(t.user.email)),e.$router.go({path:e.$router.path})}),(function(t){alert(t.message)})),t.preventDefault()}}},ht=ft,gt=Object(p["a"])(ht,mt,vt,!1,null,null,null),bt=gt.exports;i["a"].use(C["a"]);var Ct=[{path:"/",name:"Home",component:S,meta:{requiresGuest:!0}},{path:"/login",name:"login",component:pt,meta:{requiresGuest:!0}},{path:"/register",name:"register",component:bt,meta:{requiresGuest:!0}},{path:"/dashboard",name:"dashboard",component:A,meta:{requiresAuth:!0}},{path:"/new",name:"new-prescription",component:J,meta:{requiresAuth:!0}},{path:"/edit/:pid",name:"edit-prescription",component:tt,meta:{requiresAuth:!0}},{path:"/:pid",name:"view-prescription",component:ot,meta:{requiresAuth:!0}}],wt=new C["a"]({routes:Ct});wt.beforeEach((function(t,e,a){t.matched.some((function(t){return t.meta.requiresAuth}))?z.a.auth().currentUser?a():a({path:"/login",query:{redirect:t.fullPath}}):t.matched.some((function(t){return t.meta.requiresGuest}))&&z.a.auth().currentUser?a({path:"/dashboard",query:{redirect:t.fullPath}}):a()}));var _t,xt=wt,yt=(a("0808"),a("6944")),Nt=a.n(yt);i["a"].use(Nt.a),i["a"].config.productionTip=!1,c.a.auth().onAuthStateChanged((function(){_t||(_t=new i["a"]({router:xt,render:function(t){return t(b)}}).$mount("#app"))}))},7300:function(t,e,a){},"90a0":function(t,e,a){"use strict";var i=a("9bd5"),n=a.n(i);n.a},"9a1a":function(t,e,a){"use strict";var i=a("d71b"),n=a.n(i);n.a},"9bd5":function(t,e,a){},a180:function(t,e,a){},b7df:function(t,e,a){},cb92:function(t,e,a){},d71b:function(t,e,a){},ee15:function(t,e,a){"use strict";var i=a("cb92"),n=a.n(i);n.a}});
//# sourceMappingURL=app.9bbd953f.js.map