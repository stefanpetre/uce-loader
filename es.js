self.uceLoader=function(e){"use strict";const t=/^(?:annotation-xml|color-profile|font-face(?:|-format|-name|-src|-uri)|missing-glyph)$/i,n=new Set;return e.default=(e,o={})=>{const r=o.extension||".js",s=o.container||document,c=s.ownerDocument||s,a=o=>{for(let s=0,{length:a}=o;s<a;s++)for(let{addedNodes:a}=o[s],i=0,{length:l}=a;i<l;i++){const o=a[i];if(1===o.nodeType){const s=(o.getAttribute("is")||o.nodeName).toLowerCase();if(0<s.indexOf("-")&&!n.has(s)&&!t.test(s)){n.add(s);const t=c.createElement("script");t.async=!0,t.src=e.replace(/\/?$/,"/")+s+r,c.head.appendChild(t)}d(o.querySelectorAll("*"))}}},d=e=>{a([{addedNodes:e}])};d(c==s?s.querySelectorAll("*"):[s]);const i=new MutationObserver(a);return i.observe(s,{subtree:!0,childList:!0}),i},e}({}).default;
