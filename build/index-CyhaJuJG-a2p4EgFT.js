import{u as P,a3 as H,bo as _,r as u,g9 as $,g2 as G,ga as v,t as Q,gb as U,j as e,P as y,L as z,be as k,a4 as K,aQ as o,bg as V,T as f,F as Y,I as C,b7 as q,G as J,bi as X,bj as Z,bk as ee,gc as m}from"./strapi-DATZ0o1q.js";import{u as te,H as se,R as oe}from"./Layout-DNKR5bym-DGFZOiWv.js";import"./useDragLayer-DQVmasaG.js";const ie=()=>{const{formatMessage:s}=P(),a=H(),{trackUsage:b}=_(),[d,c]=u.useState(null),[S,w]=u.useState(!1),{data:L,isLoading:M}=$(),{meta:i,workflows:g,isLoading:r,delete:T}=te(),{getFeature:R,isLoading:p}=G(),D=v(t=>t.admin_app.permissions.settings?.["review-workflows"]),{allowedActions:{canCreate:h,canRead:E,canUpdate:W,canDelete:F}}=Q(D),n=R("review-workflows")?.[U],I=t=>{c(t)},A=()=>{c(null)},N=async()=>{d&&(await T(d),c(null))},x=t=>{t.preventDefault(),n&&i&&i?.workflowCount>=parseInt(n,10)?(t.preventDefault(),w(!0)):(a("create"),b("willCreateWorkflow"))};u.useEffect(()=>{!r&&!p&&n&&i&&i?.workflowCount>parseInt(n,10)&&w(!0)},[p,r,i,i?.workflowCount,n]);const j=[{label:s({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"}),name:"name"},{label:s({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"}),name:"stages"},{label:s({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"}),name:"content-types"}];if(r||M)return e.jsx(y.Loading,{});const B=Object.values(L??{}).reduce((t,l)=>(t.push(...l),t),[]);return e.jsxs(e.Fragment,{children:[e.jsx(se,{primaryAction:h?e.jsx(z,{startIcon:e.jsx(k,{}),size:"S",tag:K,to:"create",onClick:x,children:s({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}):null,subtitle:s({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:s({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),e.jsxs(oe,{children:[e.jsx(o.Root,{isLoading:r,rows:g,footer:h?e.jsx(V,{cursor:"pointer",icon:e.jsx(k,{}),onClick:x,children:s({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}):null,headers:j,children:e.jsxs(o.Content,{children:[e.jsx(o.Head,{children:j.map(t=>e.jsx(o.HeaderCell,{...t},t.name))}),e.jsx(o.Body,{children:g.map(t=>e.jsxs(o.Row,{onClick:()=>{a(`${t.id}`)},children:[e.jsx(o.Cell,{width:"25rem",children:e.jsx(f,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:t.name})}),e.jsx(o.Cell,{children:e.jsx(f,{textColor:"neutral800",children:t.stages.length})}),e.jsx(o.Cell,{children:e.jsx(f,{textColor:"neutral800",children:t.contentTypes.map(l=>B.find(O=>O.uid===l)?.info.displayName??"").join(", ")})}),e.jsx(o.Cell,{children:e.jsxs(Y,{alignItems:"center",justifyContent:"end",children:[E||W?e.jsx(C,{tag:q,to:t.id.toString(),label:s({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:t.name}),variant:"ghost",children:e.jsx(J,{})}):null,g.length>1&&F?e.jsx(C,{withTooltip:!1,label:s({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),variant:"ghost",onClick:l=>{l.stopPropagation(),I(String(t.id))},children:e.jsx(X,{})}):null]})})]},t.id))})]})}),e.jsx(Z.Root,{open:!!d,onOpenChange:A,children:e.jsx(ee,{onConfirm:N,children:s({id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"})})}),e.jsxs(m.Root,{open:S,onOpenChange:()=>w(!1),children:[e.jsx(m.Title,{children:s({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You’ve reached the limit of workflows in your plan"})}),e.jsx(m.Body,{children:s({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]})]})]})},ce=()=>{const s=v(a=>a.admin_app.permissions.settings?.["review-workflows"]?.main);return e.jsx(y.Protect,{permissions:s,children:e.jsx(ie,{})})};export{ce as ProtectedListPage,ie as ReviewWorkflowsListView};
