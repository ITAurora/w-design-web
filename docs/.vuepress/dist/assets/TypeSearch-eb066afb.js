import{_ as p,f as n,r as i,o as v,g as _}from"./app-9e730ecb.js";const h={__name:"TypeSearch",setup(m){const s=[{name:"选项1",value:1},{name:"选项2",value:2},{name:"选项3",value:3}],l=n(1),r=(a,e,o)=>{console.log(a,e,o)},t=n(""),u=(a,e)=>{console.log(a,e)};return(a,e)=>{const o=i("TypeSearch",!0);return v(),_(o,{typeList:s,activeValue:l.value,"onUpdate:activeValue":e[0]||(e[0]=c=>l.value=c),onChangeClick:r,searchValue:t.value,"onUpdate:searchValue":e[1]||(e[1]=c=>t.value=c),onSearchClick:u},null,8,["activeValue","searchValue"])}}},f=p(h,[["__file","TypeSearch.vue"]]);export{f as default};