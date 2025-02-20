import{bo as A,u as y,n as O,fj as T,r as x,j as e,b as c,P as $,c as B,a4 as H,a5 as z,fP as u,fk as o,S as F,a0 as W,a7 as _,bj as G,bk as P,B as U,Q as g,U as d,ae as b,g7 as q,af as j,g8 as Q,aa as V,g4 as Y,fS as J}from"./strapi-DATZ0o1q.js";const K=({sort:i="",pageSize:s=10,onChange:t})=>{const{formatMessage:n}=y();return e.jsx(U,{background:"neutral0",hasRadius:!0,shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:e.jsxs(g.Root,{gap:4,children:[e.jsx(g.Item,{s:12,col:6,direction:"column",alignItems:"stretch",children:e.jsxs(d.Root,{hint:n({id:o("config.entries.note"),defaultMessage:"Number of assets displayed by default in the Media Library"}),name:"pageSize",children:[e.jsx(d.Label,{children:n({id:o("config.entries.title"),defaultMessage:"Entries per page"})}),e.jsx(b,{onChange:a=>t({target:{name:"pageSize",value:a}}),value:s,children:q.map(a=>e.jsx(j,{value:a,children:a},a))}),e.jsx(d.Hint,{})]})}),e.jsx(g.Item,{s:12,col:6,direction:"column",alignItems:"stretch",children:e.jsxs(d.Root,{hint:n({id:o("config.note"),defaultMessage:"Note: You can override this value in the media library."}),name:"sort",children:[e.jsx(d.Label,{children:n({id:o("config.sort.title"),defaultMessage:"Default sort order"})}),e.jsx(b,{onChange:a=>t({target:{name:"sort",value:a}}),value:i,"test-sort":i,"data-testid":"sort-select",children:Q.map(a=>e.jsx(j,{"data-testid":`sort-option-${a.value}`,value:a.value,children:n({id:o(a.key),defaultMessage:`${a.value}`})},a.key))}),e.jsx(d.Hint,{})]})})]})})},D=`${u}/ON_CHANGE`,S=`${u}/SET_LOADED`,X=({name:i,value:s})=>({type:D,keys:i,value:s}),Z=()=>({type:S}),f={initialData:{},modifiedData:{}},v=i=>({...f,initialData:i,modifiedData:i}),ee=(i=f,s={type:""})=>V(i,t=>{switch(s.type){case D:{"keys"in s&&"value"in s&&s.keys&&J(t,["modifiedData",...s.keys.split(".")],s.value);break}case S:{const n=v(Y(t,["modifiedData"],{}));t.initialData=n.initialData,t.modifiedData=n.modifiedData;break}default:return t}}),te=({config:i})=>{const{trackUsage:s}=A(),{formatMessage:t}=y(),{toggleNotification:n}=O(),{mutateConfig:a}=T(),{isLoading:k}=a,[C,h]=x.useState(!1),m=()=>h(r=>!r),[M,w]=x.useReducer(ee,f,()=>v(i)),p=w,{initialData:L,modifiedData:l}=M,E=r=>{r.preventDefault(),m()},R=async()=>{s("willEditMediaLibraryConfig"),await a.mutateAsync(l),h(!1),p(Z()),n({type:"success",message:t({id:"notification.form.success.fields",defaultMessage:"Changes saved"})})},I=({target:{name:r,value:N}})=>{p(X({name:r,value:N}))};return e.jsx(c.Root,{children:e.jsx($.Main,{"aria-busy":k,children:e.jsxs("form",{onSubmit:E,children:[e.jsx(c.Header,{navigationAction:e.jsx(B,{tag:H,startIcon:e.jsx(z,{}),to:`/plugins/${u}`,id:"go-back",children:t({id:o("config.back"),defaultMessage:"Back"})}),primaryAction:e.jsx(F,{size:"S",startIcon:e.jsx(W,{}),disabled:_(l,L),type:"submit",children:t({id:"global.save",defaultMessage:"Save"})}),subtitle:t({id:o("config.subtitle"),defaultMessage:"Define the view settings of the media library."}),title:t({id:o("config.title"),defaultMessage:"Configure the view - Media Library"})}),e.jsx(c.Content,{children:e.jsx(K,{"data-testid":"settings",pageSize:l.pageSize||"",sort:l.sort||"",onChange:I})}),"x",e.jsx(G.Root,{open:C,onOpenChange:m,children:e.jsx(P,{onConfirm:R,variant:"default",children:t({id:o("config.popUpWarning.warning.updateAllSettings"),defaultMessage:"This will modify all your settings"})})})]})})})};export{te as ConfigureTheView};
