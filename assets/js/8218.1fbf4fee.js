"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8218],{9058:(e,t,a)=>{a.d(t,{Z:()=>h});var l=a(7294),r=a(6010),n=a(7961),o=a(7524),s=a(9960),i=a(5999);const m={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function c(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.Z)(m.sidebar,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(m.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.Z)(m.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:m.sidebarItem},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},e.title)))))))}var u=a(3102);function d(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return l.createElement(u.Zo,{component:d,props:e})}function p(e){let{sidebar:t}=e;const a=(0,o.i)();return t?.items.length?"mobile"===a?l.createElement(g,{sidebar:t}):l.createElement(c,{sidebar:t}):null}function h(e){const{sidebar:t,toc:a,children:o,...s}=e,i=t&&t.items.length>0;return l.createElement(n.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(p,{sidebar:t}),l.createElement("main",{className:(0,r.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&l.createElement("div",{className:"col col--2"},a))))}},756:(e,t,a)=>{a.d(t,{Z:()=>D});var l=a(7294),r=a(6010),n=a(9460),o=a(4996);function s(e){let{children:t,className:a}=e;const{frontMatter:r,assets:s}=(0,n.C)(),{withBaseUrl:i}=(0,o.C)(),m=s.image??r.image;return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},m&&l.createElement("meta",{itemProp:"image",content:i(m,{absolute:!0})}),t)}var i=a(9960);const m={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,n.C)(),{permalink:s,title:c}=a,u=o?"h1":"h2";return l.createElement(u,{className:(0,r.Z)(m.title,t),itemProp:"headline"},o?c:l.createElement(i.Z,{itemProp:"url",to:s},c))}var u=a(5999),d=a(2263);const g=["zero","one","two","few","many","other"];function p(e){return g.filter((t=>e.includes(t)))}const h={locale:"en",pluralForms:p(["one","other"]),select:e=>1===e?"one":"other"};function b(){const{i18n:{currentLocale:e}}=(0,d.Z)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:p(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),h}}),[e])}function E(){const e=b();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const r=a.select(t),n=a.pluralForms.indexOf(r);return l[Math.min(n,l.length-1)]}(a,t,e)}}const f={container:"container_mt6G"};function v(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=E();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function P(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function N(){return l.createElement(l.Fragment,null," \xb7 ")}function _(e){let{className:t}=e;const{metadata:a}=(0,n.C)(),{date:o,formattedDate:s,readingTime:i}=a;return l.createElement("div",{className:(0,r.Z)(f.container,"margin-vert--md",t)},l.createElement(P,{date:o,formattedDate:s}),void 0!==i&&l.createElement(l.Fragment,null,l.createElement(N,null),l.createElement(v,{readingTime:i})))}function Z(e){return e.href?l.createElement(i.Z,e):l.createElement(l.Fragment,null,e.children)}function k(e){let{author:t,className:a}=e;const{name:n,title:o,url:s,imageURL:i,email:m}=t,c=s||m&&`mailto:${m}`||void 0;return l.createElement("div",{className:(0,r.Z)("avatar margin-bottom--sm",a)},i&&l.createElement(Z,{href:c,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:i,alt:n})),n&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(Z,{href:c,itemProp:"url"},l.createElement("span",{itemProp:"name"},n))),o&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const I={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function C(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,n.C)();if(0===a.length)return null;const s=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",s?I.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,r.Z)(!s&&"col col--6",s?I.imageOnlyAuthorCol:I.authorCol),key:t},l.createElement(k,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})))))}function w(){return l.createElement("header",null,l.createElement(c,null),l.createElement(_,null),l.createElement(C,null))}var y=a(8780),T=a(3946);function F(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,n.C)();return l.createElement("div",{id:o?y.blogPostContainerID:void 0,className:(0,r.Z)("markdown",a),itemProp:"articleBody"},l.createElement(T.Z,null,t))}var L=a(4881),B=a(6233),A=a(7462);function M(){return l.createElement("b",null,l.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function R(e){const{blogPostTitle:t,...a}=e;return l.createElement(i.Z,(0,A.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(M,null))}const O={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function x(){const{metadata:e,isBlogPostPage:t}=(0,n.C)(),{tags:a,title:o,editUrl:s,hasTruncateMarker:i}=e,m=!t&&i,c=a.length>0;return c||m||s?l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",t&&O.blogPostFooterDetailsFull)},c&&l.createElement("div",{className:(0,r.Z)("col",{"col--9":m})},l.createElement(B.Z,{tags:a})),t&&s&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(L.Z,{editUrl:s})),m&&l.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":c})},l.createElement(R,{blogPostTitle:o,to:e.permalink}))):null}function D(e){let{children:t,className:a}=e;const o=function(){const{isBlogPostPage:e}=(0,n.C)();return e?void 0:"margin-bottom--xl"}();return l.createElement(s,{className:(0,r.Z)(o,a)},l.createElement(w,null),l.createElement(F,null,t),l.createElement(x,null))}},9460:(e,t,a)=>{a.d(t,{C:()=>s,n:()=>o});var l=a(7294),r=a(902);const n=l.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:r=!1}=e;const o=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:r});return l.createElement(n.Provider,{value:o},t)}function s(){const e=(0,l.useContext)(n);if(null===e)throw new r.i6("BlogPostProvider");return e}}}]);