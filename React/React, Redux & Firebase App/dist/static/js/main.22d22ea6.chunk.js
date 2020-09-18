(this["webpackJsonpproject-plan"]=this["webpackJsonpproject-plan"]||[]).push([[0],{214:function(e,t,a){e.exports=a(408)},219:function(e,t,a){},408:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(0),c=a.n(r),l=a(211),i=a.n(l),o=(a(219),a(6)),s=a(3),u=a(8),m=Object(u.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return c.a.createElement("div",null,c.a.createElement("ul",{className:"right"},c.a.createElement("li",null,c.a.createElement(o.c,{to:"/create"},"New Project")),c.a.createElement("li",null,c.a.createElement("a",{onClick:e.signOut},"Log Out")),c.a.createElement("li",null,c.a.createElement(o.c,{to:"/",className:"btn btn-floating pink lighten-1"},e.profile.initials))))})),d=function(){return c.a.createElement("ul",{className:"right"},c.a.createElement("li",null,c.a.createElement(o.c,{to:"/signup"},"Signeup")),c.a.createElement("li",null,c.a.createElement(o.c,{to:"/signin"},"Login")))},p=a(19),h=Object(u.b)((function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile,n=t.uid?c.a.createElement(m,{profile:a}):c.a.createElement(d,null);return c.a.createElement("div",null,c.a.createElement("nav",{className:"nav-wrapper grey darken-3"},c.a.createElement("div",{className:"container"},c.a.createElement(o.b,{to:"/",className:"brand-logo"},"ProjectPlan"),Object(p.isLoaded)(t)&&n)))})),E=a(26),f=a(27),b=a(29),g=a(28),N=a(47),j=a.n(N),v=function(e){var t=e.notifications;return c.a.createElement("div",{className:"section"},c.a.createElement("div",{className:"card z-depth-0"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title"},"Notifications"),c.a.createElement("ul",{className:"notifications"},t&&t.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("span",{className:"pink-text"},e.user," "),c.a.createElement("span",null,e.content),c.a.createElement("div",{className:"grey-text note-date"},j()(e.time.toDate()).fromNow()))}))))))},O=function(e){var t=e.project;return c.a.createElement("div",{className:"card z-depth-0 project-summary"},c.a.createElement("div",{className:"card-content grey-text text-darken-3"},c.a.createElement("span",{className:"card-title"},t.title),c.a.createElement("p",null,"Posted by ",t.authorFirstName," ",t.authorLastName),c.a.createElement("p",{className:"grey-text"},j()(t.createdAt.toDate().toString()).calendar())))},y=function(e){var t=e.projects;return c.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return c.a.createElement(o.b,{to:"/project/"+e.id,key:e.id},c.a.createElement(O,{project:e}))})))},C=a(16),S=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?c.a.createElement("div",{className:"dashboard container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m6"},c.a.createElement(y,{projects:t})),c.a.createElement("div",{className:"col s12 m5 offset-m1"},c.a.createElement(v,{notifications:n})))):c.a.createElement(s.a,{to:"/signin"})}}]),a}(r.Component),w=Object(C.d)(Object(u.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(p.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(S),R=Object(C.d)(Object(u.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}})),Object(p.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?t?c.a.createElement("div",{className:"container section project-details"},c.a.createElement("div",{className:"card z-depth-0"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title"},t.title),c.a.createElement("p",null,t.content)),c.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},c.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName),c.a.createElement("div",null," ",j()(t.createdAt.toDate().toString()).calendar())))):c.a.createElement("div",{className:"container center"},c.a.createElement("p",null,"Loading project...")):c.a.createElement(s.a,{to:"/signin"})})),F=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(E.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(n.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?c.a.createElement(s.a,{to:"/"}):c.a.createElement("div",{className:"container"},c.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},c.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),c.a.createElement("div",{className:"red-text center"},t?c.a.createElement("p",null,t):null))))}}]),a}(r.Component),x=Object(u.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(F),I=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(E.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:"",firstName:"",lastName:""},e.handleChange=function(t){e.setState(Object(n.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?c.a.createElement(s.a,{to:"/"}):c.a.createElement("div",{className:"container"},c.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},c.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"firstName"},"First Name"),c.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"lastName"},"Last Name"),c.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign Up"),c.a.createElement("div",{className:"red-text center"},t?c.a.createElement("p",null,t):null))))}}]),a}(r.Component),P=Object(u.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,l=r(),i=c();l.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return i.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS "})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(I),k=a(17),A=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(E.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={title:"",content:""},e.handleChange=function(t){e.setState(Object(n.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state),e.props.history.push("/")},e}return Object(f.a)(a,[{key:"render",value:function(){return this.props.auth.uid?c.a.createElement("div",{className:"container"},c.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},c.a.createElement("h5",{className:"grey-text text-darken-3"},"Create new project"),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"title"},"Title"),c.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"content"}," Project Content"),c.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create")))):c.a.createElement(s.a,{to:"/signin"})}}]),a}(r.Component),U=Object(u.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,l=a().firebase.auth.uid;r.collection("projects").add(Object(k.a)(Object(k.a)({},e),{},{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:l,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))(A);var L=function(){return c.a.createElement(o.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(h,null),c.a.createElement(s.d,null,c.a.createElement(s.b,{exact:!0,path:"/",component:w}),c.a.createElement(s.b,{path:"/project/:id",component:R}),c.a.createElement(s.b,{path:"/signin",component:x}),c.a.createElement(s.b,{path:"/signup",component:P}),c.a.createElement(s.b,{path:"/create",component:U}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _={authError:null},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(k.a)(Object(k.a)({},e),{},{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(k.a)(Object(k.a)({},e),{},{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(k.a)(Object(k.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(k.a)(Object(k.a)({},e),{},{authError:t.err.message});default:return e}},z={projects:[{id:"1",title:"help me find peach",content:"blah blah blah"},{id:"2",title:"collect all the stars",content:"blah blah blah"},{id:"3",title:"egg hunt with yoshi",content:"blah blah blah"}]},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("create project error",t.err),e;default:return e}},D=a(48),B=Object(C.c)({auth:T,project:G,firestore:D.firestoreReducer,firebase:p.firebaseReducer}),J=a(213),W=a(60),K=a.n(W);a(403),a(406);K.a.initializeApp({apiKey:"AIzaSyB12yhxI717RE7sAetpKsn1z8CD-aaeod4",authDomain:"net-projectplan-c098c.firebaseapp.com",databaseURL:"https://net-projectplan-c098c.firebaseio.com",projectId:"net-projectplan-c098c",storageBucket:"net-projectplan-c098c.appspot.com",messagingSenderId:"770892433668",appId:"1:770892433668:web:3276ff886c77578b3ce851"});var H,$=K.a,q=Object(C.e)(B,Object(C.d)(Object(C.a)(J.a.withExtraArgument({getFirebase:p.getFirebase,getFirestore:D.getFirestore})),Object(D.reduxFirestore)($))),M=(H={firebase:K.a,config:$},Object(n.a)(H,"config",{userProfile:"users",useFirestoreForProfile:!0,enableRedirectHandling:!1,resetBeforeLogin:!1}),Object(n.a)(H,"dispatch",q.dispatch),Object(n.a)(H,"createFirestoreInstance",D.createFirestoreInstance),H);i.a.render(c.a.createElement(u.a,{store:q},c.a.createElement(p.ReactReduxFirebaseProvider,M,c.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[214,1,2]]]);
//# sourceMappingURL=main.22d22ea6.chunk.js.map