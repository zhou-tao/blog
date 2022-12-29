import{i as l,e as c}from"./app-24798321.js";import{c as u,o as b,k as m,p,q as i,_ as f}from"./framework-fee247ae.js";const _={id:"bubble_charts",style:{height:"400px","margin-top":"24px"}},g=u({__name:"BubbleCharts",props:{locale:null},setup(r){const s=r,a=["#0097e6","#8c7ae6","#e1b12c","#44bd32","#40739e","#9b59b6"];function n(t){return t.map(({name:e,children:o})=>({name:e,sum:(o==null?void 0:o.length)||0,size:((o==null?void 0:o.length)||0)*40}))}return b(()=>{const t=n(m(`${s.locale}Menu`)).filter(e=>e.sum);l(document.querySelector("#bubble_charts"),{backgroundColor:"transparent",animationDurationUpdate(e){return e*100},animationEasingUpdate:"bounceIn",series:[{type:"graph",layout:"force",force:{repulsion:200,edgeLength:100},roam:!0,data:t.map((e,o)=>({name:`${e.name}

${e.sum}`,symbolSize:e.size,draggable:!0,label:{normal:{show:!0,textStyle:{fontSize:14,color:"#ecf0f1"}}},itemStyle:{normal:{color:new c.graphic.RadialGradient(.5,.5,1,[{offset:.2,color:"rgba(27, 54, 72, 0.2)"},{offset:.8,color:a[o%6]}]),opacity:1,borderWidth:2,borderColor:a[o%6],shadowBlur:7,symbolOffset:.6,shadowColor:a[o%6]}}}))}]})}),(t,e)=>(p(),i("div",_))}}),y=f(g,[["__file","BubbleCharts.vue"]]);export{y as default};
