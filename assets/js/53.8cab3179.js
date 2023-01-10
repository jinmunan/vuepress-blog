(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{386:function(o,t,e){"use strict";e.r(t);var i=e(3),v=Object(i.a)({},(function(){var o=this,t=o._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[o._v("序言")]),o._v(" "),t("p",[o._v("Cookie")]),o._v(" "),t("div",{staticClass:"custom-block right"},[t("p",[o._v("2023-01-01 @ 钟楠")])])]),o._v(" "),t("h2",{attrs:{id:"cookie概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie概念"}},[o._v("#")]),o._v(" Cookie概念")]),o._v(" "),t("blockquote",[t("p",[o._v("会话技术:服务器和浏览器建立连接,共享数据,直到一方断开为止,称为一次会话")])]),o._v(" "),t("ul",[t("li",[o._v("客户端(浏览器)会话技术: Cookie")]),o._v(" "),t("li",[o._v("服务端(服务器)会话技术: Session")])]),o._v(" "),t("table",[t("thead",[t("tr",[t("th",[o._v("创建Cookie对象")]),o._v(" "),t("th",[o._v("new Cookie(String name, String value)")])])]),o._v(" "),t("tbody",[t("tr",[t("td",[o._v("发送Cookie对象")]),o._v(" "),t("td",[o._v("response.addCookie(Cookie cookie)")])]),o._v(" "),t("tr",[t("td",[o._v("获取Cookie对象")]),o._v(" "),t("td",[o._v("Cookie[]  request.getCookies()")])])])]),o._v(" "),t("h2",{attrs:{id:"cookie原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie原理"}},[o._v("#")]),o._v(" Cookie原理")]),o._v(" "),t("blockquote",[t("p",[o._v("发送Cookie对象 是将信息设置到响应头里面")]),o._v(" "),t("p",[o._v("获取Cookie对象 是把消息从响应头中取出来")])]),o._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/javaweb/image-20220331092104308.png",alt:"image-20220331092104308"}})]),o._v(" "),t("h2",{attrs:{id:"cookie细节"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie细节"}},[o._v("#")]),o._v(" Cookie细节")]),o._v(" "),t("ul",[t("li",[t("p",[o._v("可以一次发送多个cookie对象,多次调用response.addCookie(Cookie cookie) 方法")])]),o._v(" "),t("li",[t("p",[o._v("默认情况下浏览器关闭cookie信息就销毁")])]),o._v(" "),t("li",[t("p",[o._v("可以设置cookie持久化存储")]),o._v(" "),t("table",[t("thead",[t("tr",[t("th",[o._v("setMaxAge(int seconds)")]),o._v(" "),t("th")])]),o._v(" "),t("tbody",[t("tr",[t("td",[o._v("正数")]),o._v(" "),t("td",[o._v("将cookie信息写入硬盘,持久化存储")])]),o._v(" "),t("tr",[t("td",[o._v("负数")]),o._v(" "),t("td",[o._v("存在内存中,默认浏览器关闭就销毁")])]),o._v(" "),t("tr",[t("td",[o._v("零")]),o._v(" "),t("td",[o._v("删除cookie信息")])])])])]),o._v(" "),t("li",[t("p",[o._v("Tomcat8之后cookie可以使用中文")])]),o._v(" "),t("li",[t("p",[o._v("cookie共享问题:cooike默认当前项目使用")]),o._v(" "),t("table",[t("thead",[t("tr",[t("th",[o._v('cookie.setPath("/")')]),o._v(" "),t("th",[o._v("在服务器下共享cookie")])])]),o._v(" "),t("tbody",[t("tr",[t("td",[o._v("setDomain(String path)")]),o._v(" "),t("td",[o._v("如果一级域名相同,则多个服务器之间cookie可以共享")])])])])])]),o._v(" "),t("h2",{attrs:{id:"cookie特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie特点"}},[o._v("#")]),o._v(" Cookie特点")]),o._v(" "),t("ol",[t("li",[o._v("cookie数据存储在客户端浏览器中,不安全")]),o._v(" "),t("li",[o._v("cookie对单个cookie的大小限制4kb,对同一个域名下的cookie持久化最多设置20个左右")]),o._v(" "),t("li",[o._v("cookie的作用是存储少量不重要的数据到浏览器")]),o._v(" "),t("li",[o._v("URLEncoder编码")])])])}),[],!1,null,null,null);t.default=v.exports}}]);