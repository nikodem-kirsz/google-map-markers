(this.webpackJsonpgeomap=this.webpackJsonpgeomap||[]).push([[0],{135:function(e,t,a){e.exports=a.p+"static/media/CeraRoundProMedium.fea79d41.otf"},136:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n,r,o=a(0),i=a.n(o),l=a(13),c=a.n(l),s=(a(97),a(20)),u=a.n(s),p=a(28),m=a(30),d=a(45),h=a(68),f=function(){return window.history.replaceState({},document.title,window.location.pathname)},E=i.a.createContext(),y=function(){return Object(o.useContext)(E)},g=function(e){var t=e.children,a=e.onRedirectCallback,n=void 0===a?f:a,r=Object(d.a)(e,["children","onRedirectCallback"]),l=Object(o.useState)(),c=Object(m.a)(l,2),s=c[0],y=c[1],g=Object(o.useState)(),v=Object(m.a)(g,2),w=v[0],b=v[1],_=Object(o.useState)(),x=Object(m.a)(_,2),k=x[0],j=x[1],O=Object(o.useState)(!0),S=Object(m.a)(O,2),z=S[0],C=S[1],T=Object(o.useState)(!1),P=Object(m.a)(T,2),R=P[0],L=P[1];Object(o.useEffect)((function(){(function(){var e=Object(p.a)(u.a.mark((function e(){var t,a,o,i,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)(r);case 2:if(t=e.sent,j(t),!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:a=e.sent,o=a.appState,n(o);case 10:return e.next=12,t.isAuthenticated();case 12:if(i=e.sent,y(i),!i){e.next=19;break}return e.next=17,t.getUser();case 17:l=e.sent,b(l);case 19:C(!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var W=function(){var e=Object(p.a)(u.a.mark((function e(){var t,a,n=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},L(!0),e.prev=2,e.next=5,k.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,L(!1),e.finish(10);case 13:return e.next=15,k.getUser();case 15:a=e.sent,b(a),y(!0);case 18:case"end":return e.stop()}}),e,null,[[2,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.next=3,k.handleRedirectCallback();case 3:return e.next=5,k.getUser();case 5:t=e.sent,C(!1),y(!0),b(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i.a.createElement(E.Provider,{value:{isAuthenticated:s,user:w,loading:z,popupOpen:R,loginWithPopup:W,handleRedirectCallback:I,getIdTokenClaims:function(){return k.getIdTokenClaims.apply(k,arguments)},loginWithRedirect:function(){return k.loginWithRedirect.apply(k,arguments)},getTokenSilently:function(){return k.getTokenSilently.apply(k,arguments)},getTokenWithPopup:function(){return k.getTokenWithPopup.apply(k,arguments)},logout:function(){return k.logout.apply(k,arguments)}}},t)},v=a(10),w=Object(v.a)(),b=a(5),_=a(12),x=a(142),k=a(90),j=a(144),O=a(143),S=a(87),z=a(14),C=a(15),T=a(17),P=a(16),R=a(8),L=function(e){return{type:"LOAD_ENERGY_SOURCES",payload:e}},W=function(e){return{type:"HIGHTLIGHT_ENERGY_SOURCE",payload:e}},I=function(e){return{type:"SHOWING_PROFILE",payload:e}},G=function(e){Object(T.a)(a,e);var t=Object(P.a)(a);function a(e){var n;return Object(z.a)(this,a),(n=t.call(this,e)).state={energy_sources:[]},n}return Object(C.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/user_resources",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_email:this.props.user_email})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({energy_sources:t}),e.props.addEnergySources(e.state.energy_sources)}))}}]),a}(i.a.Component),D=(Object(R.b)(null,{addEnergySources:L})(G),a(70)),U=a(40),N=function(e){Object(T.a)(a,e);var t=Object(P.a)(a);function a(e){return Object(z.a)(this,a),t.call(this,e)}return Object(C.a)(a,[{key:"render",value:function(){var e=this,t=this.props.energy_sources;return console.log(this.props.energy_sources),i.a.createElement("div",{style:{height:"90vh",width:"40vh",float:"left",overflow:"scroll"}},i.a.createElement(D.a,null,t.map((function(t,a){return i.a.createElement(U.a,{style:{height:"17vh"},action:!0,onClick:function(){return e.props.highlightEnergySource(a)}},i.a.createElement("div",{style:{display:"inlineBlock"}},i.a.createElement("img",{src:t.photo||"https://m.wm.pl/2019/12/orig/fotowoltaika-597737.jpg",style:{float:"left",width:"120px",height:"120px"},alt:"Photo"}),i.a.createElement("ul",{style:{fontSize:"13px"}},i.a.createElement("p",{style:{margin:"0px",paddingLeft:"5px"}},i.a.createElement("b",null,"Nazwa"),": ",t.name),i.a.createElement("p",{style:{margin:"0px",marginLeft:"5px"}},i.a.createElement("b",null,"Typ \u0179r\xf3d\u0142a Energii")," ",t.source_type),i.a.createElement("p",{style:{margin:"0px",marginLeft:"5px"}},i.a.createElement("b",null,"Cena"),": ",t.price,"z\u0142"),i.a.createElement("p",{style:{margin:"0px",marginLeft:"5px"}},i.a.createElement("b",null,"Moc"),": ",t.power,"W"),i.a.createElement("p",{style:{margin:"0px",marginLeft:"5px"}},i.a.createElement("b",null,"Lokalizacja")," ",t.location))))}))))}}]),a}(i.a.Component),F=Object(R.b)((function(e){return e}),{highlightEnergySource:W})(N),A=function(e){var t=y(),a=t.loading,n=t.user,r=Object(R.c)();return a?i.a.createElement("div",null,"Loading..."):(console.log(e.user),fetch("/user_resources",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_email:e.user})}).then((function(e){return e.json()})).then((function(e){console.log(e),r(L(e))})),i.a.createElement("div",null,e.profile&&e.user&&i.a.createElement("div",{style:{height:"80vh",width:"35vh",float:"left",display:"inlineBlock"}},i.a.createElement("img",{src:e.user_picture,style:{border:"3px",float:"left",width:e.size,height:e.size},alt:"Profile"}),i.a.createElement("p",{id:"userEmail",style:{paddingLeft:"5px"}},e.user),i.a.createElement(F,null)),!e.profile&&i.a.createElement("div",{style:{float:"left"}},i.a.createElement("p",{id:"userName",style:{float:"left",marginTop:"2vh",marginLeft:"3vh"}},n.name),i.a.createElement("img",{src:n.picture,style:{width:"40px",height:"40px",marginTop:"1vh",marginLeft:"1vh"},alt:"Profile"}))))},B=a(75),M=a.n(B),q=[50.0712833,19.9311621],Z=a(76),J=a.n(Z),H=a(77),K=a.n(H),Y=a(78),V=a.n(Y),Q=a(79),X=a.n(Q),$=a(80),ee=a.n($),te=a(81),ae=a.n(te),ne=a(82),re=a.n(ne),oe=[],ie=[],le=function(e){switch(e.source_type){case"biomasa":return K.a;case"fotowoltaika":return J.a;case"kolektory_sloneczne":return ee.a;case"turbina_wiatrowa":return ae.a;case"pompa_ciepla":return V.a;case"geotermia":return re.a;case"elektrownia_wodna":return X.a;default:return""}},ce=function(e){return"\n    <div>\n      <div>\n        <img src=".concat(e.user_picture||"https://m.wm.pl/2019/12/orig/fotowoltaika-597737.jpg",'  style="float: left; width: 100px; height: 100px" alt="Profile"/>\n      </div>\n      <div>\n        <img src=').concat(e.photo||"https://m.wm.pl/2019/12/orig/fotowoltaika-597737.jpg",' style="float: right; width: 100px; height: 100px" alt="Photo"/>\n     </div>\n      <div style="float:left; text-align: left; font-family: CeraRoundProLight,serif">\n        <div style="font-size: 16px;">\n            <b>Dodane przez</b> ').concat(e.user_email,'</a>\n        </div>\n        <div style="font-size: 16px;">\n            <b>Nazwa</b>: ').concat(e.name,'\n        </div>\n        <div style="font-size: 16px;">\n            <b>Typ \u0179r\xf3d\u0142a Energii</b> ').concat(e.source_type,'\n        </div>\n        <div style="font-size: 16px;">\n            <b>Cena</b>: ').concat(e.price,'z\u0142\n        </div>\n        <div style="font-size: 16px;">\n            <b>Moc</b>: ').concat(e.power,'W\n        </div>\n        <div style="font-size: 16px;">\n            <b>Model</b>: ').concat(e.model,'\n        </div>\n        <div style="font-size: 16px;">\n            <b>Data monta\u017cu</b>: ').concat(e.assembly_data,'\n        </div>\n        <div style="font-size: 16px;">\n            <b>Lokalizacja</b> ').concat(e.location,'\n        </div>\n        <div style="font-size: 16px;">\n            <b>Producent</b> ').concat(e.manufacturer,'\n        </div>\n        <div style="font-size: 16px">\n            <b>Opis</b> ').concat(e.description,'\n        </div>\n        <div style="float: right; font-size: 16px">\n            <b>Telefon:</b> ').concat(e.user_phone,"\n        </div>\n      </div>\n    </div>")},se=function(e,t,a){n=e,r=t;for(var o=0;o<oe.length;o++)oe[o].setMap(null);oe=[],ie=[],a.forEach((function(a){oe.push(new t.Marker({map:e,position:{lat:parseFloat(a.lat),lng:parseFloat(a.lng)},icon:{url:le(a),scaledSize:new t.Size(50,50),origin:new t.Point(0,0),anchor:new t.Point(0,0)}})),ie.push(new t.InfoWindow({content:ce(a)})),oe.forEach((function(t,a){t.addListener("click",(function(r){console.log(r.target);for(var o=0;o<ie.length;o++)ie[o].close(n,t);ie[a].open(e,t)}))}))}))},ue=function(e){Object(T.a)(a,e);var t=Object(P.a)(a);function a(e){var n;return Object(z.a)(this,a),(n=t.call(this,e)).state={energy_sources:n.props.energy_sources||[]},n}return Object(C.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.profiledisplay||fetch("/energy_sources").then((function(e){return e.json()})).then((function(t){e.setState({energy_sources:t}),e.props.addEnergySources(e.state.energy_sources)}))}},{key:"render",value:function(){console.log(this.props.energy_sources);var e=this.props.energy_sources,t=this.props.highlight_source;return oe.forEach((function(e,t){ie[t].close(n,e)})),n&&r&&se(n,r,this.props.energy_sources),"number"===typeof t&&oe.forEach((function(e,a){a===t&&ie[a].open(n,e)})),i.a.createElement(M.a,{bootstrapURLKeys:{key:"AIzaSyDYUxRGQlsfZZ688F2p4Fq0rkU3Q4yLD78"},defaultCenter:q,defaultZoom:12,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(t){var a=t.map,n=t.maps;return se(a,n,e)}})}}]),a}(o.Component),pe=Object(R.b)((function(e){return e}),{addEnergySources:L,showProfile:I})(ue),me=a(19),de=a(140),he=a(85),fe=a(89),Ee=a(88),ye=a(86),ge=a(141),ve=a(83),we=a.n(ve),be=a(42),_e=a.n(be);a(138);_e.a.initializeApp({apiKey:"",authDomain:"geomap-deb38.firebaseapp.com",databaseURL:"https://geomap-deb38.firebaseio.com",projectId:"geomap-deb38",storageBucket:"geomap-deb38.appspot.com",messagingSenderId:"531595922585",appId:"1:531595922585:web:14b4408aaeea80882a7c08",measurementId:"G-4ZJBB01669"});var xe=_e.a.storage(),ke=a(84),je=a.n(ke),Oe=function(e){Object(T.a)(a,e);var t=Object(P.a)(a);function a(e){var n;return Object(z.a)(this,a),(n=t.call(this,e)).handlePhoto=function(e){n.setState({photo:e[0]})},n.formRef=o.createRef(),n.energy_type_ref=o.createRef(),n.manufacturer_ref=o.createRef(),n.name_ref=o.createRef(),n.model_ref=o.createRef(),n.power_ref=o.createRef(),n.set_date_ref=o.createRef(),n.phone_ref=o.createRef(),n.price_ref=o.createRef(),n.description_ref=o.createRef(),n.state={source_type:"fotowoltaika",name:"",manufacturer:"",model:"",power:0,price:0,assembly_data:"",description:"",photo:"",location:"",user_name:n.props.user?n.props.user.name:"",user_email:n.props.user?n.props.user.email:"",user_picture:n.props.user?n.props.user.picture:"",user_phone:"",lat:"",lng:""},n}return Object(C.a)(a,[{key:"handleSourceType",value:function(e){this.setState({source_type:e.target.value})}},{key:"handleName",value:function(e){this.setState({name:e.target.value})}},{key:"handleManufacturer",value:function(e){this.setState({manufacturer:e.target.value})}},{key:"handleModel",value:function(e){this.setState({model:e.target.value})}},{key:"handlePower",value:function(e){this.setState({power:e.target.value})}},{key:"handlePrice",value:function(e){this.setState({price:e.target.value})}},{key:"handleAssemblyData",value:function(e){this.setState({assembly_data:e.target.value})}},{key:"handleDescription",value:function(e){this.setState({description:e.target.value})}},{key:"handleLocation",value:function(e){this.setState({location:e.target.value})}},{key:"handlePhone",value:function(e){this.setState({user_phone:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),xe.ref("images/".concat(this.state.photo.name)).put(this.state.photo).on("state_changed",(function(e){}),(function(e){console.log(e)}),(function(){xe.ref("images").child(t.state.photo.name).getDownloadURL().then((function(e){console.log(e),t.setState({photo:e});var a={source_type:t.energy_type_ref.current.value,name:t.name_ref.current.value,manufacturer:t.manufacturer_ref.current.value,model:t.model_ref.current.value,power:t.power_ref.current.value,price:t.price_ref.current.value,user_phone:t.phone_ref.current.value,assembly_data:t.set_date_ref.current.value,description:t.description_ref.current.value,user_name:t.state.user_name,user_email:t.state.user_email,user_picture:t.state.user_picture,photo:t.state.photo,location:t.state.location,lat:t.state.lat,lng:t.state.lng};t.setState(a),fetch("/energy_sources",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.state)}).then((function(e){return e.json()})).then((function(e){t.props.addEnergySource(e),t.setState(e)}))}))}))}},{key:"render",value:function(){var e,t,a=this;return o.createElement("div",{style:{height:"80vh",width:"50vh",float:"left"}},o.createElement("div",{ref:this.formRef,style:{position:"static",display:"inline",bottom:"20px"}},o.createElement(O.a,{onSubmit:this.handleSubmit.bind(this)},o.createElement(de.a,null,o.createElement(he.a,{as:fe.a,controlId:"formGridEmail"},o.createElement(Ee.a,null,"Typ \u0179r\xf3d\u0142a Energii"),o.createElement(ye.a,{size:"sm",ref:this.energy_type_ref,as:"select",onChange:this.handleSourceType.bind(this)},o.createElement("option",{value:"biomasa","data-img_src":"https://sdtimes.com/wp-content/uploads/2018/09/Java-logo-490x301.jpg"},"Biomasa"),o.createElement("option",{value:"fotowoltaika"},"Fotowoltaika"),o.createElement("option",{value:"kolektory_sloneczne"},"Kolektory Sloneczne"),o.createElement("option",{value:"turbina_wiatrowa"},"Turbina Wiatrowa"),o.createElement("option",{value:"pompa_ciepla"},"Pompa Ciep\u0142a"),o.createElement("option",{value:"geotermia"},"Geotermia"),o.createElement("option",{value:"elektrownia_wodna"},"Elektrownia Wodna"))),o.createElement(he.a,{as:fe.a,controlId:"formGridPassword"},o.createElement(Ee.a,null,"Nazwa"),o.createElement(ye.a,{required:!0,type:"text",size:"sm",ref:this.name_ref,value:this.state.name,onChange:this.handleName.bind(this)}))),o.createElement(de.a,null,o.createElement(he.a,{as:fe.a,controlId:"formGridAddress1"},o.createElement(Ee.a,null,"Producent"),o.createElement(ye.a,{required:!0,type:"text",size:"sm",ref:this.manufacturer_ref,value:this.state.manufacturer,onChange:this.handleManufacturer.bind(this)})),o.createElement(he.a,{as:fe.a,controlId:"formGridAddress2"},o.createElement(Ee.a,null,"Model"),o.createElement(ye.a,{required:!0,type:"text",size:"sm",ref:this.model_ref,value:this.state.model,onChange:this.handleModel.bind(this)})),o.createElement(he.a,{as:fe.a,controlId:"formGridZip"},o.createElement(Ee.a,null,"Telefon"),o.createElement(ye.a,{required:!0,type:"text",size:"sm",ref:this.phone_ref,value:this.state.user_phone,onChange:this.handlePhone.bind(this)}))),o.createElement(de.a,null,o.createElement(he.a,{as:fe.a,controlId:"formGridCity"},o.createElement(Ee.a,null,"Moc [W]"),o.createElement(ye.a,(e={required:!0,type:"number",size:"sm"},Object(me.a)(e,"type","number"),Object(me.a)(e,"ref",this.power_ref),Object(me.a)(e,"value",this.state.power),Object(me.a)(e,"onChange",this.handlePower.bind(this)),e))),o.createElement(he.a,{as:fe.a,controlId:"formGridState"},o.createElement(Ee.a,null,"Koszt [z\u0142]"),o.createElement(ye.a,{required:!0,size:"sm",type:"number",ref:this.price_ref,value:this.state.price,onChange:this.handlePrice.bind(this)})),o.createElement(he.a,{as:fe.a,controlId:"formGridZip"},o.createElement(Ee.a,null,"Data monta\u017cu"),o.createElement(ye.a,(t={required:!0,type:"date",size:"sm"},Object(me.a)(t,"type","date"),Object(me.a)(t,"ref",this.set_date_ref),Object(me.a)(t,"value",this.state.assembly_data),Object(me.a)(t,"onChange",this.handleAssemblyData.bind(this)),t)))),o.createElement(de.a,null,o.createElement(he.a,{as:fe.a,controlId:"formGridCity"},o.createElement(Ee.a,null,"Opis"),o.createElement(ye.a,{required:!0,type:"text",size:"sm",ref:this.description_ref,value:this.state.description,as:"textarea",onChange:this.handleDescription.bind(this)}))),o.createElement(de.a,null,o.createElement(he.a,{as:fe.a,controlId:"formGridState"},o.createElement(Ee.a,null,"Zdj\u0119cie"),o.createElement(we.a,{withIcon:!1,buttonText:"Dodaj zdj\u0119cie instalacji",onChange:this.handlePhoto.bind(this)})),o.createElement(he.a,{as:fe.a,controlId:"formGridZip"},o.createElement(Ee.a,null,"Lokalizacja"),o.createElement(je.a,{onPlaceSelected:function(e){console.log(e),a.setState({location:e.formatted_address,lat:"".concat(e.geometry.location.lat()),lng:"".concat(e.geometry.location.lng())})},types:["address"]}))),o.createElement(ge.a,{vsize:"sm",variant:"primary",type:"submit"},"Dodaj"))))}}]),a}(o.Component),Se=Object(R.b)(null,{addEnergySource:function(e){return{type:"ADD_ENERGY_SOURCE",payload:e}}})(Oe),ze=function(e){Object(T.a)(a,e);var t=Object(P.a)(a);function a(e){var n;return Object(z.a)(this,a),(n=t.call(this,e)).onSourceType=function(e){n.props.highlightEnergySource({}),n.props.setSourceTypeFilter(e.target.value)},n.onPower=function(e){n.props.highlightEnergySource({}),n.props.setPowerFilter(e.target.value)},n.onPrice=function(e){n.props.highlightEnergySource({}),n.props.setPriceFilter(e.target.value)},n.state={source_type:"",power:"",price:""},n}return Object(C.a)(a,[{key:"componentDidUpdate",value:function(e,t,a){var n=this;fetch("/filter",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.props)}).then((function(e){200===e.status&&e.json().then((function(e){console.log(e),n.props.addEnergySources(e)}))}))}},{key:"render",value:function(){var e=this;return o.createElement("div",null,o.createElement("div",null,o.createElement("div",{style:{maxWidth:"100vh",position:"relative",float:"left"}},o.createElement(Ee.a,null,"\u0179r\xf3d\u0142o energii"),o.createElement(ye.a,{size:"sm",as:"select",onChange:function(t){return e.onSourceType(t)}},o.createElement("option",{value:"--Wszystkie--"},"--Wszystkie--"),o.createElement("option",{value:"biomasa"},"Biomasa"),o.createElement("option",{value:"fotowoltaika"},"Fotowoltaika"),o.createElement("option",{value:"kolektory_sloneczne"},"Kolektory Sloneczne"),o.createElement("option",{value:"turbina_wiatrowa"},"Turbina Wiatrowa"),o.createElement("option",{value:"pompa_ciepla"},"Pompa Ciep\u0142a"),o.createElement("option",{value:"geotermia"},"Geotermia"),o.createElement("option",{value:"elektrownia_wodna"},"Elektrownia Wodna"))),o.createElement("div",{style:{float:"left"}},o.createElement(Ee.a,null,"Moc [W]"),o.createElement(ye.a,{size:"sm",as:"select",onChange:function(t){return e.onPower(t)}},o.createElement("option",{value:"--Wszystkie--"},"--Wszystkie--"),o.createElement("option",{value:"300"},"do 300W"),o.createElement("option",{value:"700"},"od 300W i do 700W"),o.createElement("option",{value:"2000"},"od 700W i do 2000W"),o.createElement("option",{value:"4000"},"od 2000W i do 4000W"),o.createElement("option",{value:"8000"},"od 4000W i do 8000W"),o.createElement("option",{value:"15000"},"do 8000W i do15000W"))),o.createElement("div",{style:{float:"left"}},o.createElement(Ee.a,null,"Koszt [z\u0142]"),o.createElement(ye.a,{size:"sm",as:"select",onChange:function(t){return e.onPrice(t)}},o.createElement("option",{value:"--Wszystkie--"},"--Wszystkie--"),o.createElement("option",{value:"10000"},"do 10 000 zl"),o.createElement("option",{value:"50000"},"od 10 000 zl do 50 000 zl"),o.createElement("option",{value:"300000"},"od 50 000 zl i do 300 000 zl"),o.createElement("option",{value:"500000"},"od 300 000 zl i do 500 000 zl")))))}}]),a}(o.Component),Ce=Object(R.b)((function(e){return e.filters}),{addEnergySources:L,setPriceFilter:function(e){return{type:"SET_PRICE_FILTER",payload:e}},setSourceTypeFilter:function(e){return{type:"SET_SOURCE_TYPE_FILTER",payload:e}},setPowerFilter:function(e){return{type:"SET_POWER",payload:e}},highlightEnergySource:W})(ze),Te=function(){var e=y(),t=e.loading,a=e.isAuthenticated,n=e.loginWithRedirect,r=e.logout,o=e.user,l=Object(R.c)();return t?i.a.createElement("div",null,"Loading..."):(console.log(o),i.a.createElement("div",null,!a&&i.a.createElement(b.b,{history:w},i.a.createElement("header",null,i.a.createElement(x.a,{className:"navbar-custom",variant:"light",style:{height:"12vh",width:"100vw"}},i.a.createElement(k.a,null,i.a.createElement("img",{style:{width:"100px",height:"100px"},src:"https://scontent.fwaw3-1.fna.fbcdn.net/v/t1.0-9/p960x960/91713171_2909757425776962_4931498341373575168_o.png?_nc_cat=106&_nc_sid=85a577&_nc_oc=AQm2-KhEogITq3fmc9ZVX1bfHrqT9OEQiZVh5gU419JGopDC5qqZm1CksUETVA3xyUE&_nc_ht=scontent.fwaw3-1.fna&oh=5116d88d41f30834c79f0ce882ebc58c&oe=5F203BB6"})),i.a.createElement(j.a,{style:{color:"white"},className:"mr-auto"},i.a.createElement(j.a.Link,{style:{color:"white"}},i.a.createElement(_.a,{style:{color:"white"},to:"/mapa"},"Mapa")),i.a.createElement(j.a.Link,{style:{color:"white"}},i.a.createElement(_.a,{style:{color:"white"},to:"/"},"Lista")),i.a.createElement(j.a.Link,{style:{color:"white"}},i.a.createElement(_.a,{style:{color:"white"},to:"/help"},"Pomoc")),i.a.createElement("i",null,i.a.createElement("p",{style:{fontSize:"15px",marginBottom:"0px",marginLeft:"70px"}},'"Mapa i baza odnawialnych \u017cr\xf3de\u0142 energii" wykonana w ramach pracy magisterskiej na Wydziale Energetyki i Paliw AGH.'),i.a.createElement("p",{style:{fontSize:"15px",marginBottom:"0px",marginLeft:"70px"}},"Projekt i wykonanie in\u017c. Bart\u0142omiej Kirsz"),i.a.createElement("p",{style:{fontSize:"15px",marginBottom:"0px",marginLeft:"70px"}},"Opiekun pracy dr in\u017c. Janusz Zy\u015bk."))),i.a.createElement(O.a,{inline:!0},i.a.createElement(_.a,{style:{color:"white",paddingLeft:"10px"},onClick:function(){return n({})}},"Zaloguj")))),i.a.createElement(S.a,null,i.a.createElement(b.a,{exact:!0,path:"/mapa"},i.a.createElement(c,null)),i.a.createElement(b.a,{exact:!0,path:"/"},i.a.createElement(s,null)),i.a.createElement(b.a,{exact:!0,path:"/profile"},i.a.createElement(p,null)),i.a.createElement(b.a,{exact:!0,path:"/help"},i.a.createElement(m,null)))),a&&i.a.createElement(b.b,{history:w},i.a.createElement("header",null,i.a.createElement(x.a,{className:"navbar-custom",variant:"light",style:{height:"12vh",width:"100vw"}},i.a.createElement(k.a,null,i.a.createElement("img",{style:{width:"100px",height:"100px"},src:"https://scontent.fwaw3-1.fna.fbcdn.net/v/t1.0-9/p960x960/91713171_2909757425776962_4931498341373575168_o.png?_nc_cat=106&_nc_sid=85a577&_nc_oc=AQm2-KhEogITq3fmc9ZVX1bfHrqT9OEQiZVh5gU419JGopDC5qqZm1CksUETVA3xyUE&_nc_ht=scontent.fwaw3-1.fna&oh=5116d88d41f30834c79f0ce882ebc58c&oe=5F203BB6"})),i.a.createElement(j.a,{style:{color:"white"},className:"mr-auto"},i.a.createElement(j.a.Link,{style:{color:"white"}},i.a.createElement(_.a,{style:{color:"white"},to:"/mapa"},"Mapa")),i.a.createElement(j.a.Link,{style:{color:"white"}},i.a.createElement(_.a,{style:{color:"white"},to:"/dodaj"},"Dodaj")),i.a.createElement(j.a.Link,{style:{color:"white"}},i.a.createElement(_.a,{style:{color:"white"},to:"/"},"Lista")),i.a.createElement(j.a.Link,{style:{color:"white"}},i.a.createElement(_.a,{style:{color:"white"},to:"/help"},"Pomoc")),i.a.createElement("i",null,i.a.createElement("p",{style:{fontSize:"15px",marginBottom:"0px",marginLeft:"70px"}},'"Mapa i baza odnawialnych \u017cr\xf3de\u0142 energii" wykonana w ramach pracy magisterskiej na Wydziale Energetyki i Paliw AGH.'),i.a.createElement("p",{style:{fontSize:"15px",marginBottom:"0px",marginLeft:"70px"}},"Projekt i wykonanie in\u017c. Bart\u0142omiej Kirsz"),i.a.createElement("p",{style:{fontSize:"15px",marginBottom:"0px",marginLeft:"70px"}},"Opiekun pracy dr in\u017c. Janusz Zy\u015bk."))),i.a.createElement(O.a,{inline:!0},i.a.createElement(_.a,{style:{color:"white"},to:"/profile?name=".concat(o.email,"&user_picture=").concat(o.picture)},i.a.createElement(A,{size:40,profile:!1})),i.a.createElement(_.a,{style:{color:"white",paddingLeft:"10px"},onClick:function(){return r()}},"Wyloguj")))),i.a.createElement(S.a,null,i.a.createElement(b.a,{exact:!0,path:"/mapa"},i.a.createElement(c,null)),i.a.createElement(b.a,{exact:!0,path:"/dodaj"},i.a.createElement(u,null)),i.a.createElement(b.a,{exact:!0,path:"/"},i.a.createElement(s,null)),i.a.createElement(b.a,{exact:!0,path:"/profile"},i.a.createElement(p,null)),i.a.createElement(b.a,{exact:!0,path:"/help"},i.a.createElement(m,null))))));function c(){return l(I(!1)),l(W({})),i.a.createElement("div",{style:{paddingTop:"15px"}},i.a.createElement(Ce,null),i.a.createElement("div",{style:{height:"80vh",width:"100vw",display:"flex",position:"relative",flexFlow:"row nowrap",justifyContent:"center",padding:0}},i.a.createElement(pe,null)))}function s(){return l(I(!1)),l(W({})),i.a.createElement("div",{style:{paddingTop:"15px"}},i.a.createElement(F,{style:{float:"left",position:"relative"}}),i.a.createElement(Ce,null),i.a.createElement("div",{style:{height:"80vh",width:"76vw",display:"flex",position:"relative",flexFlow:"row nowrap",justifyContent:"center",padding:0}},i.a.createElement(pe,null)))}function u(){return l(I(!1)),l(W({})),i.a.createElement("div",{style:{paddingTop:"15px"}},i.a.createElement(Se,{style:{float:"left",position:"relative"},user:o}),i.a.createElement("div",{style:{height:"80vh",width:"68vw",position:"relative",float:"right"}},i.a.createElement(Ce,null),i.a.createElement("div",{style:{height:"80vh",width:"68vw",display:"flex",position:"relative",flexFlow:"row nowrap",justifyContent:"center",padding:0,float:"right"}},i.a.createElement(pe,null))))}function p(){l(I(!0)),l(W({}));var e=new URLSearchParams(Object(b.e)().search);return i.a.createElement("div",{style:{paddingTop:"15px"}},i.a.createElement(A,{size:70,user:e.get("name"),user_picture:e.get("user_picture"),profile:!0,style:{float:"left",position:"relative"}}),i.a.createElement("div",{style:{height:"80vh",width:"75vw",position:"relative",float:"right"}},i.a.createElement(Ce,null),i.a.createElement("div",{style:{height:"80vh",width:"75vw",display:"flex",position:"relative",flexFlow:"row nowrap",justifyContent:"center",padding:0,float:"right"}},i.a.createElement(pe,null))))}function m(){return l(I(!1)),l(W({})),i.a.createElement("div",{style:{paddingTop:"15px"}},i.a.createElement("div",{style:{float:"left",position:"relative"}},i.a.createElement("p",null,i.a.createElement("b",null,"Pomoc merytotyczna")),i.a.createElement("p",null,"jazysk@agh.edu.pl"),i.a.createElement("p",null,i.a.createElement("b",null,"Pomoc techniczna")),i.a.createElement("p",null,"kirsz@student.agh.edu.pl")),i.a.createElement("div",{style:{height:"80vh",width:"80vw",position:"relative",float:"right"}},i.a.createElement(Ce,null),i.a.createElement("div",{style:{height:"80vh",width:"80vw",display:"flex",position:"relative",flexFlow:"row nowrap",justifyContent:"center",padding:0,float:"right"}},i.a.createElement(pe,null))))}};o.Component;var Pe=function(){return i.a.createElement("div",null,i.a.createElement(Te,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Re=a(56),Le=a(25),We=a(23),Ie={source_type:"",power:"",price:""},Ge=a(57),De=[],Ue={},Ne=Object(Le.b)({energy_sources:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ENERGY_SOURCE":return[].concat(Object(Ge.a)(e),[t.payload]);case"LOAD_ENERGY_SOURCES":return Object(Ge.a)(t.payload);default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SOURCE_TYPE_FILTER":return Object(We.a)(Object(We.a)({},e),{},{source_type:t.payload});case"SET_POWER":return Object(We.a)(Object(We.a)({},e),{},{power:t.payload});case"SET_PRICE_FILTER":return Object(We.a)(Object(We.a)({},e),{},{price:t.payload});default:return e}},highlight_source:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HIGHTLIGHT_ENERGY_SOURCE":return t.payload;default:return e}},profiledisplay:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOWING_PROFILE":return t.payload;default:return e}}}),Fe=Object(Le.c)(Ne,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a(135),a(136);c.a.render(i.a.createElement(g,{domain:Re.domain,client_id:Re.clientId,redirect_uri:window.location.origin,onRedirectCallback:function(e){w.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}},i.a.createElement(R.a,{store:Fe},i.a.createElement(Pe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},56:function(e){e.exports=JSON.parse('{"domain":"dev-j5wcxmll.auth0.com","clientId":"YgSTcQajWwpuyjSwTOi0Lxdy1iiX1Cif"}')},76:function(e,t,a){e.exports=a.p+"static/media/fotowoltaika.6de9aed3.svg"},77:function(e,t,a){e.exports=a.p+"static/media/biofuel.beb6d82a.svg"},78:function(e,t,a){e.exports=a.p+"static/media/geothermal-energy.6a82cf25.svg"},79:function(e,t,a){e.exports=a.p+"static/media/hydro-power.3f756d61.svg"},80:function(e,t,a){e.exports=a.p+"static/media/solar-energy.23b9c476.svg"},81:function(e,t,a){e.exports=a.p+"static/media/wind-power.b7deb230.svg"},82:function(e,t,a){e.exports=a.p+"static/media/geotermia.d326035c.svg"},92:function(e,t,a){e.exports=a(137)},97:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.262560eb.chunk.js.map