import{d as y,r as l,al as w,am as k,y as S,b as a,c as p,e as m,g as h,w as b,X as f,J as _,T as $,n as C,aa as x,p as I,i as z,l as v,t as N,f as P,Z as T}from"./CUWu3yVB.js";const V=e=>(I("data-v-d6435360"),e=e(),z(),e),A=V(()=>m("span",{class:"sr-only"},"Copy to clipboard",-1)),M={class:"icon-wrapper"},R=y({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,s=l(),{copy:t}=w();k(s,()=>{o.value==="copied"&&(o.value="init")});const{prose:c}=S(),o=l("init"),g=B=>{t(n.content).then(()=>{o.value="copied"}).catch(i=>{console.warn("Couldn't copy to clipboard!",i)})};return(B,i)=>{const u=x;return a(),p("button",{ref_key:"copyButtonRef",ref:s,class:C([(e.show||o.value==="copied")&&"show"]),onClick:g},[A,m("span",M,[h($,{name:"fade"},{default:b(()=>{var d,r;return[o.value==="copied"?(a(),f(u,{key:0,name:(d=_(c).copyButton)==null?void 0:d.iconCopied,size:"18",class:"copied"},null,8,["name"])):(a(),f(u,{key:1,name:(r=_(c).copyButton)==null?void 0:r.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}}),D=v(R,[["__scopeId","data-v-d6435360"]]),E={key:0,class:"filename"},J=y({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=l(!1);return(s,t)=>{const c=D;return a(),p("div",{class:C([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=o=>n.value=!0),onMouseleave:t[1]||(t[1]=o=>n.value=!1)},[e.filename?(a(),p("span",E,N(e.filename),1)):P("",!0),T(s.$slots,"default",{},void 0,!0),h(c,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}}),X=v(J,[["__scopeId","data-v-b15f86e3"]]);export{X as default};
