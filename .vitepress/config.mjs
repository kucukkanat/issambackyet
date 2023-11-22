import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Is Sam Altman Back Yet?",
  description:
    "A status checker for Sam Altman's return to OpenAI as the CEO again",
  assetsDir: "public",
  outDir: "docs",
  head: [
    [
      "script",
      {
        "data-domain": "issambackyet.com",
        src: "https://plausible.io/js/script.js",
      },
    ],
    [
      "script",
      {},
      `window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
  heap.load("968195590");`,
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/kucukkanat" },
      { icon: "twitter", link: "https://x.com/kucukkanat" },
    ],
  },
});
