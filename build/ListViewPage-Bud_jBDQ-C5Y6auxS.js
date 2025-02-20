import{d as Q,bo as W,a3 as ue,u as k,n as pe,q as me,cy as G,cv as ee,r as C,a7 as ge,aO as D,cx as fe,eC as he,bw as N,cE as xe,cf as je,ey as v,j as e,P as w,bt as ye,b as z,eD as be,bf as Ce,F as P,aQ as b,cD as Se,T as S,cB as K,eE as Le,aR as V,eF as Te,eG as Me,S as Re,b7 as Ie,be as Ae,bn as Ee,t as te,ct as Fe,c3 as ke,eH as we,aT as se,cw as Pe,s as ne,eI as ae,eJ as ve,aP as H,aV as Oe,aW as Be,aX as De,b6 as Y,eK as _,an as q,I as $e,d2 as He,L as Ne,dC as Ue,a4 as We,eL as Ve,bK as _e,ab as qe,eM as ze,eN as Qe,cs as Ge,aU as Ke,eO as Ye,eP as R,eQ as Je,eR as ie,Y as Xe,aS as Ze}from"./strapi-DATZ0o1q.js";import{u as re,a as et,p as J}from"./usePrev-CZGy2Vjf-CKCtCNSW.js";import{g as oe,u as tt}from"./relations-BakOFl_1-C9KLmF0M.js";import{u as st}from"./hooks-E5u1mcgM-dSzr4P6q.js";const X=["json","component","media","richtext","dynamiczone","password","blocks"],nt=["createdAt","updatedAt"],at=[...ae,"strapi_assignee"],it=({disabled:t,schema:n})=>{const{attributes:s,uid:a,options:o}=n,{formatMessage:l,locale:x}=k(),{trackUsage:d}=W(),r=ke("FiltersImpl",g=>g.permissions),[{query:f}]=D(),{schemas:m}=we(),L=C.useMemo(()=>r.filter(g=>g.action==="admin::users.read"&&g.subject===null).length>0,[r]),T=(f?.filters?.$and??[]).reduce((g,A)=>{const[y,h]=Object.entries(A)[0];if(typeof h.id!="object")return g;const i=h.id.$eq||h.id.$ne;return i&&at.includes(y)&&!g.includes(i)&&g.push(i),g},[]),{data:j,isLoading:u}=se({filters:{id:{$in:T}}},{skip:T.length===0||!L}),{users:p=[]}=j??{},{metadata:I}=Pe(a,{selectFromResult:({data:g})=>({metadata:g?.contentType.metadatas??{}})}),B=ne(x,{sensitivity:"base"}),O=C.useMemo(()=>{const[{properties:{fields:g=[]}={fields:[]}}]=r.filter(y=>y.action==="plugin::content-manager.explorer.read"&&y.subject===a);return["id",...g.filter(y=>{const h=s[y]??{};return h.type&&!X.includes(h.type)}),...nt,...L?ae:[]].map(y=>{const h=s[y];if(X.includes(h.type))return null;const{mainField:i="",label:E}=I[y].list;let c={name:y,label:E??"",mainField:ve(h,i,{schemas:m,components:{}}),type:h.type};return h.type==="relation"&&"target"in h&&h.target==="admin::user"&&(c={...c,input:rt,options:p.map(F=>({label:K(F),value:F.id.toString()})),operators:[{label:l({id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"}),value:"$eq"},{label:l({id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"}),value:"$ne"}],mainField:{name:"id",type:"integer"}}),h.type==="enumeration"&&(c={...c,options:h.enum.map(F=>({label:F,value:F}))}),c}).filter(Boolean).toSorted((y,h)=>B.compare(y.label,h.label))},[r,L,a,s,I,m,p,l,B]),M=g=>{g&&d("willFilterEntries")},$=g=>{const A=s[g.name];A&&d("didFilterEntries",{useRelation:A.type==="relation"})};return e.jsxs(H.Root,{disabled:t,options:O,onOpenChange:M,onChange:$,children:[e.jsx(H.Trigger,{}),e.jsx(H.Popover,{}),e.jsx(H.List,{})]})},rt=({name:t})=>{const[n,s]=C.useState(10),[a,o]=C.useState(""),{formatMessage:l}=k(),x=et(a,300),{data:d,isLoading:r}=se({pageSize:n,_q:x}),f=Oe(t),m=p=>{p||s(10)},{users:L=[],pagination:T}=d??{},{pageCount:j=1,page:u=1}=T??{};return e.jsx(Be,{value:f.value,"aria-label":l({id:"content-manager.components.Filters.usersSelect.label",defaultMessage:"Search and select a user to filter"}),onOpenChange:m,onChange:p=>f.onChange(t,p),loading:r,onLoadMore:()=>s(n+10),hasMoreItems:u<j,onInputChange:p=>{o(p.currentTarget.value)},children:L.map(p=>e.jsx(De,{value:p.id.toString(),children:K(p)},p.id))})},U=({type:t,value:n})=>{const{formatDate:s,formatTime:a,formatNumber:o}=k();let l=n;if(t==="date"&&(l=s(Ke(n),{dateStyle:"full"})),t==="datetime"&&(l=s(n,{dateStyle:"full",timeStyle:"short"})),t==="time"){const[x,d,r]=n.split(":"),f=new Date;f.setHours(x),f.setMinutes(d),f.setSeconds(r),l=a(f,{timeStyle:"short"})}return["float","decimal"].includes(t)&&(l=o(n,{maximumFractionDigits:20})),["integer","biginteger"].includes(t)&&(l=o(n,{maximumFractionDigits:0})),Ye(l)},ot=({content:t,mainField:n})=>n?e.jsx(Y,{label:t[n.name],children:e.jsx(S,{maxWidth:"25rem",textColor:"neutral800",ellipsis:!0,children:e.jsx(U,{type:n.type,value:t[n.name]})})}):null,lt=({content:t,mainField:n})=>{const{formatMessage:s}=k();return n?e.jsxs(R.Root,{children:[e.jsxs(R.Trigger,{onClick:a=>a.stopPropagation(),children:[e.jsx(Je,{children:t.length}),s({id:"content-manager.containers.list.items",defaultMessage:"{number, plural, =0 {items} one {item} other {items}}"},{number:t.length})]}),e.jsx(R.Content,{children:t.map(a=>e.jsx(R.Item,{disabled:!0,children:e.jsx(S,{maxWidth:"50rem",ellipsis:!0,children:e.jsx(U,{type:n.type,value:a[n.name]})})},a.id))})]}):null},ct=t=>t&&t[0]==="."?t.substring(1):t,le=({url:t,mime:n,alternativeText:s,name:a,ext:o,formats:l})=>{const x=J(t);if(n.includes("image")){const f=l?.thumbnail?.url,m=J(f)||x;return e.jsx(ie.Item,{src:m,alt:s||a,fallback:s||a,preview:!0})}const d=ct(o),r=a.length>100?`${a.substring(0,100)}...`:a;return e.jsx(Y,{description:r,children:e.jsx(ce,{children:d})})},ce=({children:t})=>e.jsx(P,{tag:"span",position:"relative",borderRadius:"50%",width:"26px",height:"26px",borderColor:"neutral200",background:"neutral150",paddingLeft:"1px",justifyContent:"center",alignItems:"center",children:e.jsx(dt,{variant:"sigma",textColor:"neutral600",children:t})}),dt=Q(S)`
  font-size: 0.9rem;
  line-height: 0.9rem;
`,ut=({content:t})=>e.jsx(ie.Group,{children:t.map((n,s)=>{const a=`${n.id}${s}`;if(s===3){const o=`+${t.length-3}`;return e.jsx(ce,{children:o},a)}return s>3?null:e.jsx(le,{...n},a)})}),pt=({mainField:t,content:n})=>e.jsx(S,{maxWidth:"50rem",textColor:"neutral800",ellipsis:!0,children:oe(n,t)}),mt=({mainField:t,content:n,rowId:s,name:a})=>{const{model:o}=G(),{formatMessage:l}=k(),{notifyStatus:x}=Xe(),[d,r]=C.useState(!1),[f]=a.split("."),{data:m,isLoading:L}=tt({model:o,id:s,targetField:f},{skip:!d,refetchOnMountOrArgChange:!0}),T=Array.isArray(n)?n.length:n.count;return C.useEffect(()=>{m&&x(l({id:v("DynamicTable.relation-loaded"),defaultMessage:"Relations have been loaded"}))},[m,l,x]),e.jsxs(R.Root,{onOpenChange:j=>r(j),children:[e.jsx(R.Trigger,{onClick:j=>j.stopPropagation(),children:e.jsx(S,{style:{cursor:"pointer"},textColor:"neutral800",fontWeight:"regular",children:T>0?l({id:"content-manager.containers.list.items",defaultMessage:"{number} {number, plural, =0 {items} one {item} other {items}}"},{number:T}):"-"})}),e.jsxs(R.Content,{children:[L&&e.jsx(R.Item,{disabled:!0,children:e.jsx(Ze,{small:!0,children:l({id:v("ListViewTable.relation-loading"),defaultMessage:"Relations are loading"})})}),m?.results&&e.jsxs(e.Fragment,{children:[m.results.map(j=>e.jsx(R.Item,{disabled:!0,children:e.jsx(S,{maxWidth:"50rem",ellipsis:!0,children:oe(j,t)})},j.documentId)),m?.pagination&&m?.pagination.total>10&&e.jsx(R.Item,{"aria-disabled":!0,"aria-label":l({id:v("ListViewTable.relation-more"),defaultMessage:"This relation contains more entities than displayed"}),children:e.jsx(S,{children:"…"})})]})]})]})},gt=({content:t,mainField:n,attribute:s,rowId:a,name:o})=>{if(!ft(t,n,s))return e.jsx(S,{textColor:"neutral800",paddingLeft:s.type==="relation"?"1.6rem":0,paddingRight:s.type==="relation"?"1.6rem":0,children:"-"});switch(s.type){case"media":return s.multiple?e.jsx(ut,{content:t}):e.jsx(le,{...t});case"relation":return de(s.relation)?e.jsx(pt,{mainField:n,content:t}):e.jsx(mt,{rowId:a,mainField:n,content:t,name:o});case"component":return s.repeatable?e.jsx(lt,{mainField:n,content:t}):e.jsx(ot,{mainField:n,content:t});case"string":return e.jsx(Y,{description:t,children:e.jsx(S,{maxWidth:"30rem",ellipsis:!0,textColor:"neutral800",children:e.jsx(U,{type:s.type,value:t})})});default:return e.jsx(S,{maxWidth:"30rem",ellipsis:!0,textColor:"neutral800",children:e.jsx(U,{type:s.type,value:t})})}},ft=(t,n,s)=>{if(s.type==="component"){if(s.repeatable||!n)return t?.length>0;const a=t?.[n.name];return n.name==="id"&&![void 0,null].includes(a)?!0:!_(a)}return s.type==="relation"?de(s.relation)?!_(t):Array.isArray(t)?t.length>0:t?.count>0:["integer","decimal","float","number"].includes(s.type)?typeof t=="number":s.type==="boolean"?t!==null:!_(t)},de=t=>["oneToOne","manyToOne","oneToOneMorph"].includes(t),ht=t=>{const n=st(l=>l.admin_app.permissions.contentManager?.collectionTypesConfigurations??[]),[{query:s}]=D(),{formatMessage:a}=k(),{allowedActions:{canConfigureView:o}}=te(n);return e.jsxs(q.Root,{children:[e.jsx(q.Trigger,{children:e.jsx($e,{label:a({id:"components.ViewSettings.tooltip",defaultMessage:"View Settings"}),children:e.jsx(He,{})})}),e.jsx(q.Content,{side:"bottom",align:"end",sideOffset:4,children:e.jsxs(P,{alignItems:"stretch",direction:"column",padding:3,gap:3,children:[o?e.jsx(Ne,{size:"S",startIcon:e.jsx(Ue,{}),variant:"secondary",tag:We,to:{pathname:"configurations/list",search:s.plugins?N.stringify({plugins:s.plugins},{encode:!1}):""},children:a({id:"app.links.configure-view",defaultMessage:"Configure the view"})}):null,e.jsx(xt,{...t})]})})]})},xt=({headers:t=[],resetHeaders:n,setHeaders:s})=>{const{trackUsage:a}=W(),{formatMessage:o,locale:l}=k(),{schema:x,model:d}=G(),{list:r}=ee(d),f=ne(l,{sensitivity:"base"}),m=x?.attributes??{},L=Object.keys(m).filter(u=>Ve(m[u])).map(u=>({name:u,label:r.metadatas[u]?.label??""})).sort((u,p)=>f.compare(u.label,p.label)),T=u=>{a("didChangeDisplayedFields");const p=t.includes(u)?t.filter(I=>I!==u):[...t,u];s(p)},j=()=>{n()};return e.jsxs(P,{tag:"fieldset",direction:"column",alignItems:"stretch",gap:3,borderWidth:0,maxHeight:"240px",overflow:"scroll",children:[e.jsxs(P,{justifyContent:"space-between",children:[e.jsx(S,{tag:"legend",variant:"pi",fontWeight:"bold",children:o({id:"containers.list.displayedFields",defaultMessage:"Displayed fields"})}),e.jsx(_e,{onClick:j,children:o({id:"app.components.Button.reset",defaultMessage:"Reset"})})]}),e.jsx(P,{direction:"column",alignItems:"stretch",children:L.map(u=>{const p=t.includes(u.name);return e.jsx(P,{wrap:"wrap",gap:2,background:p?"primary100":"transparent",hasRadius:!0,padding:2,children:e.jsx(qe,{onCheckedChange:()=>T(u.name),checked:p,name:u.name,children:e.jsx(S,{fontSize:1,children:u.label})})},u.name)})})]})},{INJECT_COLUMN_IN_TABLE:jt}=ze,yt=Q(z.Header)`
  overflow-wrap: anywhere;
`,bt=()=>{const{trackUsage:t}=W(),n=ue(),{formatMessage:s}=k(),{toggleNotification:a}=pe(),{_unstableFormatAPIError:o}=me(v),{collectionType:l,model:x,schema:d}=G(),{list:r}=ee(x),[f,m]=C.useState([]),L=re(r.layout);C.useEffect(()=>{ge(L,r.layout)||m(r.layout)},[r.layout,L]);const T=i=>{m(Qe(i,d.attributes,r.metadatas))},[{query:j}]=D({page:"1",pageSize:r.settings.pageSize.toString(),sort:r.settings.defaultSortBy?`${r.settings.defaultSortBy}:${r.settings.defaultSortOrder}`:""}),u=C.useMemo(()=>fe(j),[j]),{data:p,error:I,isFetching:B}=he({model:x,params:u});C.useEffect(()=>{I&&a({type:"danger",message:o(I)})},[I,o,a]);const{results:O=[],pagination:M}=p??{};C.useEffect(()=>{M&&M.pageCount>0&&M.page>M.pageCount&&n({search:N.stringify({...j,page:M.pageCount})},{replace:!0})},[M,s,j,n]);const{canCreate:$}=xe("ListViewPage",({canCreate:i})=>({canCreate:i})),g=je("ListViewPage",({runHookWaterfall:i})=>i),A=C.useMemo(()=>{const E=g(jt,{displayedHeaders:f,layout:r}).displayedHeaders.map(c=>{const F=typeof c.label=="string"?{id:`content-manager.content-types.${x}.${c.name}`,defaultMessage:c.label}:c.label;return{...c,label:s(F),name:`${c.name}${c.mainField?.name?`.${c.mainField.name}`:""}`}});return d?.options?.draftAndPublish&&E.push({attribute:{type:"custom"},name:"status",label:s({id:v("containers.list.table-headers.status"),defaultMessage:"status"}),searchable:!1,sortable:!1}),E},[f,s,r,g,d?.options?.draftAndPublish,x]);if(B)return e.jsx(w.Loading,{});if(I)return e.jsx(w.Error,{});const y=d?.info.displayName?s({id:d.info.displayName,defaultMessage:d.info.displayName}):s({id:"content-manager.containers.untitled",defaultMessage:"Untitled"}),h=i=>()=>{t("willEditEntryFromList"),n({pathname:i.toString(),search:N.stringify({plugins:j.plugins})})};return e.jsxs(w.Main,{children:[e.jsx(w.Title,{children:`${y}`}),e.jsx(yt,{primaryAction:$?e.jsx(Z,{}):null,subtitle:s({id:v("pages.ListView.header-subtitle"),defaultMessage:"{number, plural, =0 {# entries} one {# entry} other {# entries}} found"},{number:M?.total}),title:y,navigationAction:e.jsx(ye,{})}),e.jsx(z.Action,{endActions:e.jsxs(e.Fragment,{children:[e.jsx(be,{area:"listView.actions"}),e.jsx(ht,{setHeaders:T,resetHeaders:()=>m(r.layout),headers:f.map(i=>i.name)})]}),startActions:e.jsxs(e.Fragment,{children:[r.settings.searchable&&e.jsx(Ce,{disabled:O.length===0,label:s({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:y}),placeholder:s({id:"global.search",defaultMessage:"Search"}),trackedEvent:"didSearch"}),r.settings.filterable&&d?e.jsx(it,{disabled:O.length===0,schema:d}):null]})}),e.jsx(z.Content,{children:e.jsxs(P,{gap:4,direction:"column",alignItems:"stretch",children:[e.jsxs(b.Root,{rows:O,headers:A,isLoading:B,children:[e.jsx(St,{}),e.jsxs(b.Content,{children:[e.jsxs(b.Head,{children:[e.jsx(b.HeaderCheckboxCell,{}),A.map(i=>e.jsx(b.HeaderCell,{...i},i.name))]}),e.jsx(b.Loading,{}),e.jsx(b.Empty,{action:$?e.jsx(Z,{variant:"secondary"}):null}),e.jsx(b.Body,{children:O.map(i=>e.jsxs(b.Row,{cursor:"pointer",onClick:h(i.documentId),children:[e.jsx(b.CheckboxCell,{id:i.id}),A.map(({cellFormatter:E,...c})=>{if(c.name==="status"){const{status:F}=i;return e.jsx(b.Cell,{children:e.jsx(Se,{status:F,maxWidth:"min-content"})},c.name)}return["createdBy","updatedBy"].includes(c.name.split(".")[0])?e.jsx(b.Cell,{children:e.jsx(S,{textColor:"neutral800",children:i[c.name.split(".")[0]]?K(i[c.name.split(".")[0]]):"-"})},c.name):typeof E=="function"?e.jsx(b.Cell,{children:E(i,c,{collectionType:l,model:x})},c.name):e.jsx(b.Cell,{children:e.jsx(gt,{content:i[c.name.split(".")[0]],rowId:i.documentId,...c})},c.name)}),e.jsx(Ct,{onClick:E=>E.stopPropagation(),children:e.jsx(Le,{document:i})})]},i.id))})]})]}),e.jsxs(V.Root,{...M,onPageSizeChange:()=>t("willChangeNumberOfEntriesPerPage"),children:[e.jsx(V.PageSize,{}),e.jsx(V.Links,{})]})]})})]})},Ct=Q(b.Cell)`
  display: flex;
  justify-content: flex-end;
`,St=()=>{const t=Te("TableActionsBar",o=>o.selectRow),[{query:n}]=D(),s=n?.plugins?.i18n?.locale,a=re(s);return C.useEffect(()=>{a!==s&&t([])},[t,a,s]),e.jsx(b.ActionBar,{children:e.jsx(Me,{})})},Z=({variant:t})=>{const{formatMessage:n}=k(),{trackUsage:s}=W(),[{query:a}]=D();return e.jsx(Re,{variant:t,tag:Ie,onClick:()=>{s("willCreateEntry",{status:"draft"})},startIcon:e.jsx(Ae,{}),style:{textDecoration:"none"},to:{pathname:"create",search:N.stringify({plugins:a.plugins})},minWidth:"max-content",marginLeft:2,children:n({id:v("HeaderLayout.button.label-add-entry"),defaultMessage:"Create new entry"})})},It=()=>{const{slug:t=""}=Ee(),{permissions:n=[],isLoading:s,error:a}=te(Ge.map(o=>({action:o,subject:t})));return s?e.jsx(w.Loading,{}):a||!t?e.jsx(w.Error,{}):e.jsx(w.Protect,{permissions:n,children:({permissions:o})=>e.jsx(Fe,{permissions:o,children:e.jsx(bt,{})})})};export{bt as ListViewPage,It as ProtectedListViewPage};
