"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[5935],{25935:(c,o,_)=>{_.r(o),_.d(o,{InstalledPluginsPage:()=>C,ProtectedInstalledPluginsPage:()=>f});var s=_(92132),I=_(21272),T=_(11273),O=_(42455),d=_(38413),r=_(55356),L=_(4198),W=_(35513),B=_(26127),i=_(90361),a=_(33363),P=_(85829),h=_(25641),t=_(12973),K=_(14718),g=_(54894),R=_(69267),U=_(45270),m=_(23045),e=_(55151),N=_(79077),u=_(48940),F=_(2600),H=_(51187),S=_(15126),X=_(63299),$=_(67014),z=_(59080),Q=_(79275),V=_(61535),G=_(5790),J=_(12083),Y=_(35223),Z=_(5409),p=_(74930),k=_(41286),b=_(56336),w=_(13426),q=_(84624),__=_(77965),s_=_(54257),E_=_(71210),t_=_(39404),a_=_(58692),P_=_(501),M_=_(57646),l_=_(23120),n_=_(44414),D_=_(25962),o_=_(14664),O_=_(42588),d_=_(90325),i_=_(62785),g_=_(87443),C_=_(41032),v_=_(22957),A_=_(93179),I_=_(73055),T_=_(15747),r_=_(85306),L_=_(26509),W_=_(32058),B_=_(81185),h_=_(82261);const C=()=>{const{formatMessage:E}=(0,g.A)(),{notifyStatus:M}=(0,T.W)(),v=(0,t.useNotification)(),{_unstableFormatAPIError:A}=(0,t.useAPIErrorHandler)();(0,t.useFocusWhenNavigate)();const{isLoading:j,data:l,error:n}=(0,m.q)();return I.useEffect(()=>{l&&M(E({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:E({id:"global.plugins",defaultMessage:"Plugins"})})),n&&v({type:"warning",message:A(n)})},[l,n,A,E,M,v]),j?(0,s.jsx)(O.P,{children:(0,s.jsx)(d.g,{"aria-busy":!0,children:(0,s.jsx)(t.LoadingIndicatorPage,{})})}):(0,s.jsx)(O.P,{children:(0,s.jsxs)(d.g,{children:[(0,s.jsx)(r.Q,{title:E({id:"global.plugins",defaultMessage:"Plugins"}),subtitle:E({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),(0,s.jsx)(L.s,{children:(0,s.jsxs)(W.X,{colCount:2,rowCount:l?.plugins?.length??0+1,children:[(0,s.jsx)(B.d,{children:(0,s.jsxs)(i.Tr,{children:[(0,s.jsx)(a.Th,{children:(0,s.jsx)(P.o,{variant:"sigma",textColor:"neutral600",children:E({id:"global.name",defaultMessage:"Name"})})}),(0,s.jsx)(a.Th,{children:(0,s.jsx)(P.o,{variant:"sigma",textColor:"neutral600",children:E({id:"global.description",defaultMessage:"description"})})})]})}),(0,s.jsx)(h.N,{children:l?.plugins.map(({name:D,displayName:x,description:y})=>(0,s.jsxs)(i.Tr,{children:[(0,s.jsx)(a.Td,{children:(0,s.jsx)(P.o,{textColor:"neutral800",variant:"omega",fontWeight:"bold",children:E({id:`global.plugins.${D}`,defaultMessage:x})})}),(0,s.jsx)(a.Td,{children:(0,s.jsx)(P.o,{textColor:"neutral800",children:E({id:`global.plugins.${D}.description`,defaultMessage:y})})})]},D))})]})})]})})},f=()=>{const{formatMessage:E}=(0,g.A)(),M=(0,R.useSelector)(U.s);return(0,s.jsxs)(t.CheckPagePermissions,{permissions:M.marketplace?.main,children:[(0,s.jsx)(K.m,{title:E({id:"global.plugins",defaultMessage:"Plugins"})}),(0,s.jsx)(C,{})]})}}}]);
