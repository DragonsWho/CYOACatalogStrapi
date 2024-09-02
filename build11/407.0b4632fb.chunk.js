"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[407],{70407:(ss,c,s)=>{s.d(c,{ProtectedCreatePage:()=>Y});var a=s(92132),B=s(21272),T=s(38413),U=s(55356),P=s(83997),g=s(85963),W=s(4198),e=s(94061),h=s(85829),K=s(90151),C=s(68074),f=s(7537),j=s(5287),y=s(21610),r=s(12973),x=s(46270),u=s(6103),p=s(61535),S=s(54894),A=s(17703),$=s(71389),N=s(63891),O=s(12083),n=s(23045),F=s(9977),as=s(15126),ts=s(63299),_s=s(67014),os=s(59080),rs=s(79275),ns=s(14718),Es=s(69267),is=s(5790),es=s(35223),ds=s(5409),ls=s(74930),Ps=s(2600),Ms=s(48940),Ds=s(41286),Os=s(56336),ms=s(13426),gs=s(84624),hs=s(77965),Cs=s(54257),As=s(71210),Rs=s(51187),vs=s(39404),Ls=s(58692),Is=s(501),cs=s(57646),Bs=s(23120),Ts=s(44414),Us=s(25962),Ws=s(14664),Ks=s(42588),fs=s(90325),js=s(62785),ys=s(87443),xs=s(41032),us=s(22957),ps=s(93179),Ss=s(73055),$s=s(15747),Ns=s(85306),Fs=s(26509),Vs=s(32058),zs=s(81185),Hs=s(82261),Ys=s(412),Qs=s(94710);const V=O.Ik().shape({name:O.Yj().required(r.translatedErrors.required),description:O.Yj().required(r.translatedErrors.required)}),z=()=>{const t=(0,A.W5)("/settings/roles/duplicate/:id"),d=(0,r.useNotification)(),{lockApp:Q,unlockApp:G}=(0,r.useOverlayBlocker)(),{formatMessage:_}=(0,S.A)(),{replace:J}=(0,A.W6)(),m=B.useRef(null),{trackUsage:R}=(0,r.useTracking)(),{_unstableFormatAPIError:v,_unstableFormatValidationErrors:L}=(0,r.useAPIErrorHandler)(),M=t?.params.id??null,{isLoading:X,data:I}=(0,n.A)({role:M??""}),{data:Z,isLoading:k}=(0,n.B)({id:M},{skip:!M,refetchOnMountOrArgChange:!0}),[b]=(0,n.D)(),[w]=(0,n.E)(),q=async(D,E)=>{try{Q(),R(M?"willDuplicateRole":"willCreateNewRole");const o=await b(D);if("error"in o){(0,n.x)(o.error)&&o.error.name==="ValidationError"?E.setErrors(L(o.error)):d({type:"warning",message:v(o.error)});return}const{permissionsToSend:l}=m.current?.getPermissions()??{};if(o.data.id&&Array.isArray(l)&&l.length>0){const i=await w({id:o.data.id,permissions:l});if("error"in i){(0,n.x)(i.error)&&i.error.name==="ValidationError"?E.setErrors(L(i.error)):d({type:"warning",message:v(i.error)});return}}d({type:"success",message:{id:"Settings.roles.created",defaultMessage:"created"}}),J(`/settings/roles/${o.data.id}`)}catch{d({type:"warning",message:{id:"notification.error"}})}finally{G()}};return(0,a.jsxs)(T.g,{children:[(0,a.jsx)(r.SettingsPageTitle,{name:"Roles"}),(0,a.jsx)(p.Formik,{initialValues:{name:"",description:`${_({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${(0,u.A)(new Date,"PPP")}`},onSubmit:q,validationSchema:V,validateOnChange:!1,children:({values:D,errors:E,handleReset:o,handleChange:l,isSubmitting:i})=>(0,a.jsx)(r.Form,{children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(U.Q,{primaryAction:(0,a.jsxs)(P.s,{gap:2,children:[(0,a.jsx)(g.$,{variant:"secondary",onClick:()=>{o(),m.current?.resetForm()},size:"L",children:_({id:"app.components.Button.reset",defaultMessage:"Reset"})}),(0,a.jsx)(g.$,{type:"submit",loading:i,size:"L",children:_({id:"global.save",defaultMessage:"Save"})})]}),title:_({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:_({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:(0,a.jsx)(y.N,{as:$.NavLink,startIcon:(0,a.jsx)(x.A,{}),to:"/settings/roles",children:_({id:"global.back",defaultMessage:"Back"})})}),(0,a.jsx)(W.s,{children:(0,a.jsxs)(P.s,{direction:"column",alignItems:"stretch",gap:6,children:[(0,a.jsx)(e.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,a.jsxs)(P.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,a.jsxs)(P.s,{justifyContent:"space-between",children:[(0,a.jsxs)(e.a,{children:[(0,a.jsx)(e.a,{children:(0,a.jsx)(h.o,{fontWeight:"bold",children:_({id:"global.details",defaultMessage:"Details"})})}),(0,a.jsx)(e.a,{children:(0,a.jsx)(h.o,{variant:"pi",textColor:"neutral600",children:_({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),(0,a.jsx)(H,{children:_({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0})})]}),(0,a.jsxs)(K.x,{gap:4,children:[(0,a.jsx)(C.E,{col:6,children:(0,a.jsx)(f.k,{name:"name",error:E.name&&_({id:E.name}),label:_({id:"global.name",defaultMessage:"Name"}),onChange:l,required:!0,value:D.name})}),(0,a.jsx)(C.E,{col:6,children:(0,a.jsx)(j.T,{label:_({id:"global.description",defaultMessage:"Description"}),id:"description",error:E.description&&_({id:E.description}),onChange:l,children:D.description})})]})]})}),!X&&!k&&I?(0,a.jsx)(e.a,{shadow:"filterShadow",hasRadius:!0,children:(0,a.jsx)(F.P,{isFormDisabled:!1,ref:m,permissions:Z,layout:I})}):(0,a.jsx)(e.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,a.jsx)(r.LoadingIndicatorPage,{})})]})})]})})})]})},H=N.default.div`
  border: 1px solid ${({theme:t})=>t.colors.primary200};
  background: ${({theme:t})=>t.colors.primary100};
  padding: ${({theme:t})=>`${t.spaces[2]} ${t.spaces[4]}`};
  color: ${({theme:t})=>t.colors.primary600};
  border-radius: ${({theme:t})=>t.borderRadius};
  font-size: ${12/16}rem;
  font-weight: bold;
`,Y=()=>{const t=(0,n.j)(d=>d.admin_app.permissions.settings?.roles.create);return(0,a.jsx)(r.CheckPagePermissions,{permissions:t,children:(0,a.jsx)(z,{})})}}}]);
