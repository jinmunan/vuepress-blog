(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{589:function(a,s,t){"use strict";t.r(s);var n=t(3),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"记一次数据库被黑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#记一次数据库被黑"}},[a._v("#")]),a._v(" 记一次数据库被黑")]),a._v(" "),s("p",[a._v("做谷粒商城项目的第二天发现数据库连接不了了，发现数据库被删了， 多出来一个数据库。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/project/gulimall/image-20221118095034804.png",alt:"image-20221118095034804"}})]),a._v(" "),s("p",[a._v("点开一看。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/project/gulimall/image-20221118095227360.png",alt:"image-20221118095227360"}})]),a._v(" "),s("blockquote",[s("p",[a._v("All your data is a backed up. You must pay 0.3 BTC to 16wrRb6vMi2py5rggYhdRNT2eUDdqTRS5V 48 hours for recover it. After 48 hours expiration we will sell all your data on dark markets and the database dump will be dropped from our server!")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("您的所有数据都已备份。您必须支付 0.3 BTC 到 16wrRb6vMi2py5rggYhdRNT2eUDdqTRS5V 48 小时才能恢复它。 48 小时到期后，我们将在黑市上出售您的所有数据，并且数据库转储将从我们的服务器中删除！\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("blockquote",[s("p",[a._v("You can buy bitcoin here, https://localbitcoins.com or https://buy.moonpay.io/ After paying write to us in the mail with your DB IP: rambler+2e2e3@onionmail.org and you will receive a link to download your database dump.")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("你可以在这里购买比特币，https://localbitcoins.com或https://buy.moonpay.io/付款后，用您的DB IP:漫步者在邮件中写信给我们+2e2e3@onionmail.org您将收到下载数据库转储的链接。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("挺搞笑的，数据库的密码设置太简单了。")]),a._v(" "),s("p",[a._v("只能重新删掉重建了。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/project/gulimall/image-20221118095625800.png",alt:"image-20221118095625800"}})]),a._v(" "),s("p",[a._v("还不让删，可恶。。。")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删掉 docker镜像")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@jinmunan ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker stop 0e64b71c899f")]),a._v("\n0e64b71c899f\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@jinmunan ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker rm 0e64b71c899f")]),a._v("\n0e64b71c899f\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@jinmunan ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker rmi eef0fab001e8")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" 522b6ff518ab /bin/bash\nmysql "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-uroot")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-proot")]),a._v("\nSET PASSWORD FOR "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'root'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" PASSWORD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'zn923042857'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" restart dc8d5fbacb56\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);