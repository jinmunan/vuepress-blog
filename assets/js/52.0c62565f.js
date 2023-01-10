(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{385:function(t,e,s){"use strict";s.r(e);var a=s(3),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("序言")]),t._v(" "),e("p",[t._v("HTTP")]),t._v(" "),e("div",{staticClass:"custom-block right"},[e("p",[t._v("2023-01-01 @ 钟楠")])])]),t._v(" "),e("h2",{attrs:{id:"http概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http概念"}},[t._v("#")]),t._v(" HTTP概念")]),t._v(" "),e("blockquote",[e("p",[t._v("定义客户端和服务端通信时发送数据的格式")])]),t._v(" "),e("ul",[e("li",[t._v("基于TCP/IP的高级协议")]),t._v(" "),e("li",[t._v("默认端口80")]),t._v(" "),e("li",[t._v("基于请求/响应模型")]),t._v(" "),e("li",[t._v("无状态")])]),t._v(" "),e("h2",{attrs:{id:"请求方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求方式"}},[t._v("#")]),t._v(" 请求方式")]),t._v(" "),e("ul",[e("li",[t._v("GET\n"),e("ol",[e("li",[t._v("请求参数在请求行中，在url后\n2. 请求的url长度有限制的\n3. 不太安全")])])]),t._v(" "),e("li",[t._v("POST\n"),e("ol",[e("li",[t._v("请求参数在请求体中")]),t._v(" "),e("li",[t._v("请求的url长度没有限制的")]),t._v(" "),e("li",[t._v("相对安全")])])])]),t._v(" "),e("h2",{attrs:{id:"request请求格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request请求格式"}},[t._v("#")]),t._v(" Request请求格式")]),t._v(" "),e("ul",[e("li",[t._v("请求行\n"),e("ul",[e("li",[e("code",[t._v("请求方式 请求url 请求协议/版本")])]),t._v(" "),e("li",[e("code",[t._v("GET /login.html\tHTTP/1.1")])])])]),t._v(" "),e("li",[t._v("请求头：客户端浏览器告诉服务器一些信息\n"),e("ul",[e("li",[t._v("请求头名称: 请求头值")])])]),t._v(" "),e("li",[t._v("请求空行\n"),e("ul",[e("li",[t._v("空行，就是用于分割POST请求的请求头，和请求体的")])])]),t._v(" "),e("li",[t._v("请求体(正文)\n"),e("ul",[e("li",[t._v("封装POST请求消息的请求参数的")])])])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//请求头\nPOST /login.html\tHTTP/1.1\n//服务器主机\nHost: localhost\n//浏览器兼容\nUser-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:60.0) Gecko/20100101 Firefox/60.0\n//支持\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8\nAccept-Language: zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2\nAccept-Encoding: gzip, deflate\n//告诉服务器当前请求从哪里来,1.防盗链 2.统计数据\nReferer: http://localhost/login.html\n//连接\nConnection: keep-alive\n//升级信息\nUpgrade-Insecure-Requests: 1\n//请求空行\n\n//请求体  只有post请求有请求体,get请求没有请求体\nusername=zhangsan\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br")])]),e("h2",{attrs:{id:"盗链"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#盗链"}},[t._v("#")]),t._v(" 盗链")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/javaweb/image-20220329211349826.png",alt:"image-20220329211349826"}})]),t._v(" "),e("h2",{attrs:{id:"request对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request对象"}},[t._v("#")]),t._v(" Request对象")]),t._v(" "),e("ol",[e("li",[t._v("Tomcat解析url路径,创建servlet对象")]),t._v(" "),e("li",[t._v("Tomcat创建res和req对象,并封装req对象,传递给servlet对象中的service方法")]),t._v(" "),e("li",[t._v("通过req对象获取消息,通过res对象设置响应消息")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/javaweb/image-20220329230231375.png",alt:"image-20220329230231375"}})]),t._v(" "),e("h3",{attrs:{id:"request对象继承体系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request对象继承体系"}},[t._v("#")]),t._v(" Request对象继承体系")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ServletRequest\n\t  继承\nHttpServletRequest\n\t  实现\nRequestFacade\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/javaweb/image-20220330090609202.png",alt:"image-20220330090609202"}})]),t._v(" "),e("p",[t._v("理解")]),t._v(" "),e("blockquote",[e("p",[t._v("对 "),e("code",[t._v("protected void doGet(HttpServletRequest request,...)")]),t._v(" 的理解,request就是RequestFacade对象")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/javaweb/image-20220330091552023.png",alt:"image-20220330091552023"}})]),t._v(" "),e("h3",{attrs:{id:"request对象方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request对象方法"}},[t._v("#")]),t._v(" Request对象方法")]),t._v(" "),e("h3",{attrs:{id:"对request请求获取方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对request请求获取方法"}},[t._v("#")]),t._v(" 对Request请求获取方法")]),t._v(" "),e("ol",[e("li",[e("p",[e("strong",[t._v("获取请求行数据")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("☆获取项目名称")])]),t._v(" "),e("th",[e("strong",[t._v("String getContextPath()")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[t._v("☆获取请求URI")])]),t._v(" "),e("td",[e("strong",[t._v("String getRequestURI()  /demo/login.html [共和国]"),e("br"),t._v("StringBuffer getRequestURL() http://localhost/demo/login.html [中华人民共和国]")])])]),t._v(" "),e("tr",[e("td",[t._v("获取请求方式[get,post...]")]),t._v(" "),e("td",[t._v("String getMethod()")])]),t._v(" "),e("tr",[e("td",[t._v("获取Servlet路径")]),t._v(" "),e("td",[t._v("String getServletPath()")])]),t._v(" "),e("tr",[e("td",[t._v("获取get方式请求参数")]),t._v(" "),e("td",[t._v("String getQueryString()")])]),t._v(" "),e("tr",[e("td",[t._v("获取协议及版本")]),t._v(" "),e("td",[t._v("String getProtocol()")])]),t._v(" "),e("tr",[e("td",[t._v("获取客户机的IP地址")]),t._v(" "),e("td",[t._v("String getRemoteAddr()")])]),t._v(" "),e("tr",[e("td",[t._v("获取请求头数据")]),t._v(" "),e("td",[t._v("String getHeader(String name):通过请求头的名称获取请求头的值Enumeration"),e("String",[t._v(" getHeaderNames():获取所有的请求头名称")])],1)])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("获取请求头数据")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("获取请求头的名称获取请求头的值")]),t._v(" "),e("th",[t._v("String getHeader(String name)")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("获取所有请求头的名称")]),t._v(" "),e("td",[t._v("Enumeration"),e("String",[t._v(" getHeaderNames()")])],1)])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("获取请求体数据")])]),t._v(" "),e("blockquote",[e("p",[t._v("只有POST请求方式,在请求体中封装了POST请求的请求参数")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("获取字符输入流，只能操作字符数据")]),t._v(" "),e("th",[t._v("BufferedReader getReader()")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("获取字节输入流，可以操作所有类型数据")]),t._v(" "),e("td",[t._v("ServletInputStream getInputStream()")])])])])])]),t._v(" "),e("h3",{attrs:{id:"request通用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request通用方法"}},[t._v("#")]),t._v(" Request通用方法")]),t._v(" "),e("ol",[e("li",[e("p",[e("strong",[t._v("获取请求参数")])]),t._v(" "),e("blockquote",[e("p",[t._v("中文乱码问题")]),t._v(" "),e("p",[t._v("get方式：Tomcat8已经将get方式乱码问题解决了")]),t._v(" "),e("p",[t._v('post方式：会乱码,设置request的编码☆request.setCharacterEncoding("utf-8");')])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("☆根据参数名称获取参数值")]),t._v(" "),e("th",[t._v("String getParameter(String name)")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("根据参数名称获取参数值的数组")]),t._v(" "),e("td",[t._v("String[] getParameterValues(String name)")])]),t._v(" "),e("tr",[e("td",[t._v("获取所有请求的参数名称")]),t._v(" "),e("td",[t._v("Enumeration"),e("String",[t._v(" getParameterNames()")])],1)]),t._v(" "),e("tr",[e("td",[t._v("☆获取所有参数的map集合")]),t._v(" "),e("td",[t._v("Map<String,String[]> getParameterMap()")])])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("请求转发")])]),t._v(" "),e("blockquote",[e("p",[t._v("1.浏览器["),e("strong",[t._v("地址栏路径不发生变化")])]),t._v(" "),e("p",[t._v("2.只能转发到当前["),e("strong",[t._v("服务器内部资源")]),t._v("]中")]),t._v(" "),e("p",[t._v("3.转发是["),e("strong",[t._v("一次请求")]),t._v("]")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("☆通过request对象获取请求转发器对象")]),t._v(" "),e("th",[t._v("RequestDispatcher getRequestDispatcher(String path)")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("☆使用RequestDispatcher对象来进行转发")]),t._v(" "),e("td",[t._v("forward(ServletRequest request, ServletResponse response)")])])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("共享数据")])]),t._v(" "),e("blockquote",[e("p",[t._v("域对象：一个有作用范围的对象，可以在范围内共享数据")]),t._v(" "),e("p",[t._v("request域：代表一次请求的范围，一般用于请求转发的多个selevet中共享数据")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("存储数据")]),t._v(" "),e("th",[t._v("void setAttribute(String name,Object obj)")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("通过键获取值")]),t._v(" "),e("td",[t._v("Object getAttitude(String name)")])]),t._v(" "),e("tr",[e("td",[t._v("通过键移除键值对")]),t._v(" "),e("td",[t._v("void removeAttribute(String name)")])])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("获取servletContext")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("动态获取项目路径,简化修改")]),t._v(" "),e("th",[t._v("ServletContext getServletContext()")])])]),t._v(" "),e("tbody")])])]),t._v(" "),e("h2",{attrs:{id:"用户登录案例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用户登录案例"}},[t._v("#")]),t._v(" 用户登录案例")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/javaweb/image-20220330113948606.png",alt:"image-20220330113948606"}})]),t._v(" "),e("h2",{attrs:{id:"beanutils工具类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beanutils工具类"}},[t._v("#")]),t._v(" BeanUtils工具类")]),t._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("commons-beanutils"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("commons-beanutils"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.9.4"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("BeanUtils.populate(loginUser,map); //将map封装到对象中\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"response响应格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response响应格式"}},[t._v("#")]),t._v(" Response响应格式")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("响应行")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("请求协议/版本 响应状态码")])]),t._v(" "),e("li",[e("code",[t._v("HTTP/1.1 200 OK")])])])]),t._v(" "),e("li",[e("p",[t._v("响应头:服务器对客户端发送的响应消息")]),t._v(" "),e("p",[t._v("Content-Type: 响应体数据格式以及编码格式")]),t._v(" "),e("p",[t._v("Content-disposition: 以什么格式打开响应体数据")]),t._v(" "),e("ul",[e("li",[t._v("in-line: 默认值, 在当前页面内打开")]),t._v(" "),e("li",[t._v("attachment;filename=xxx: 以附件形式打开响应体, 文件下载")])])]),t._v(" "),e("li",[e("p",[t._v("响应空行")]),t._v(" "),e("ul",[e("li",[t._v("空行")])])]),t._v(" "),e("li",[e("p",[t._v("响应体(正文)")])])]),t._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[t._v('//响应行\nHTTP/1.1 200 OK\n//响应头\nAccept-Ranges: bytes\nETag: W/"335-1648612784418"\nLast-Modified: Wed, 30 Mar 2022 03:59:44 GMT\nContent-Type: text/html\nContent-Length: 335\nDate: Wed, 30 Mar 2022 05:32:19 GMT\nKeep-Alive: timeout=20\nConnection: keep-alive\n//响应空行\n\n//响应体\n'),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("$Title$"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        $END$\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br")])]),e("h2",{attrs:{id:"响应状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应状态码"}},[t._v("#")]),t._v(" 响应状态码")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("1xx")]),t._v(" "),e("th",[t._v("服务端接收消息但没有接收完全,等待一段时间后发送1xx状态码")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("2xx")]),t._v(" "),e("td",[t._v("成功")])]),t._v(" "),e("tr",[e("td",[t._v("3xx")]),t._v(" "),e("td",[t._v("302重定向  304缓存")])]),t._v(" "),e("tr",[e("td",[t._v("4xx")]),t._v(" "),e("td",[t._v("客户端错误  404请求路径没有资源 405请求方式没有对应的doXXX方法")])]),t._v(" "),e("tr",[e("td",[t._v("5xx")]),t._v(" "),e("td",[t._v("服务端错误 500服务器内部错误")])])])]),t._v(" "),e("h2",{attrs:{id:"重定向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重定向"}},[t._v("#")]),t._v(" 重定向")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/javaweb/image-20220330130955498.png",alt:"image-20220330130955498"}})]),t._v(" "),e("h2",{attrs:{id:"访问缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问缓存"}},[t._v("#")]),t._v(" 访问缓存")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/javaweb/image-20220330132346221.png",alt:"image-20220330132346221"}})]),t._v(" "),e("h2",{attrs:{id:"response对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response对象"}},[t._v("#")]),t._v(" Response对象")]),t._v(" "),e("h3",{attrs:{id:"对response响应设置方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对response响应设置方法"}},[t._v("#")]),t._v(" 对Response响应设置方法")]),t._v(" "),e("ol",[e("li",[e("p",[e("strong",[t._v("设置响应行数据")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("设置状态码")]),t._v(" "),e("th",[t._v("setStatus(int sx)")])])]),t._v(" "),e("tbody")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("设置响应头数据")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("设置响应头数据")]),t._v(" "),e("th",[t._v("setHeader(String name,String value)")])])]),t._v(" "),e("tbody")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("设置响应体数据")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("获取字符输出流")]),t._v(" "),e("th",[t._v("PrintWriter getWriter()")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("获取字节输出流")]),t._v(" "),e("td",[t._v("ServletOutputStream getOutputStream()")])])])])])]),t._v(" "),e("h3",{attrs:{id:"response通用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response通用方法"}},[t._v("#")]),t._v(" Response通用方法")]),t._v(" "),e("p",[e("strong",[t._v("1.重定向")])]),t._v(" "),e("blockquote",[e("p",[t._v("1.地址栏发送变化")]),t._v(" "),e("p",[t._v("2.重定向可以访问其他路径下的资源")]),t._v(" "),e("p",[t._v("3.重定向是两次请求,不能用request域共享数据")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("重定向")]),t._v(" "),e("th",[t._v('response.sendRedirect("/web/responseServletDemo2");')])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("或者这样写")]),t._v(" "),e("td",[t._v("response.setStatus(302);"),e("br"),t._v('response.setHeader("location", "/web/responseServletDemo2");')])])])]),t._v(" "),e("p",[e("strong",[t._v("2.服务器输出字符数据到浏览器")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("字符")]),t._v(" "),e("th",[t._v("PrintWriter writer = response.getWriter(); "),e("br"),t._v('writer.write("hello张三");')])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("乱码")]),t._v(" "),e("td",[t._v('response.setContentType("text/html;charset=utf-8");')])]),t._v(" "),e("tr",[e("td",[t._v("告诉浏览器编码方式")]),t._v(" "),e("td",[t._v('response.setHeader("content-type","text/html;charset=utf-8");')])]),t._v(" "),e("tr",[e("td",[t._v("同一个原理")]),t._v(" "),e("td",[t._v('response.setContentType("text/html;charset=utf-8");')])])])]),t._v(" "),e("p",[e("strong",[t._v("3.服务器输出字节数据到浏览器")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("字节")]),t._v(" "),e("th",[t._v("ServletOutputStream is = response.getOutputStream();"),e("br"),t._v('is.write("hello张三".getBytes(StandardCharsets.UTF_8));')])])]),t._v(" "),e("tbody")]),t._v(" "),e("h2",{attrs:{id:"servletcontext对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#servletcontext对象"}},[t._v("#")]),t._v(" ServletContext对象")]),t._v(" "),e("blockquote",[e("p",[t._v("代表整个web应用,可以和服务器通信")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("通过request获取")]),t._v(" "),e("th",[t._v("request.getServletContext")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("通过httpServlet获取")]),t._v(" "),e("td",[t._v("this.getServletContext")])])])]),t._v(" "),e("ol",[e("li",[e("p",[t._v("获取MIME类型")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("互联网通信中定义的文件类型")])]),t._v(" "),e("li",[e("p",[t._v("大类型/小类型  text/html   image/jpeg")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("获取mine类型")]),t._v(" "),e("th",[t._v("getMimeType")])])]),t._v(" "),e("tbody")])])])]),t._v(" "),e("li",[e("p",[t._v("域对象:共享数据")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("存储数据")]),t._v(" "),e("th",[t._v("void setAttribute(String name,Object obj)")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("通过键获取值")]),t._v(" "),e("td",[t._v("Object getAttitude(String name)")])]),t._v(" "),e("tr",[e("td",[t._v("通过键移除键值对")]),t._v(" "),e("td",[t._v("void removeAttribute(String name)")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("ServletContext域对象的范围是最大的,共享项目中所有的对象")])])]),t._v(" "),e("li",[e("p",[t._v("获取文件的真实路径")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("获取文件的真实路径")]),t._v(" "),e("th",[t._v("getRealPath()")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("src目录下的文件")]),t._v(" "),e("td",[t._v('getRealPath("/WEB-INFO/classes/a.txt")')])]),t._v(" "),e("tr",[e("td",[t._v("web目录下的文件")]),t._v(" "),e("td",[t._v('getRealPath("/a.txt")')])]),t._v(" "),e("tr",[e("td",[t._v("WEB-INF目录下的文件")]),t._v(" "),e("td",[t._v('getRealPath("/WEB-INF/a.txt")')])])])])])]),t._v(" "),e("blockquote",[e("p",[t._v("超链接下的资源如果浏览器能够解析就展示,不能解析就下载")]),t._v(" "),e("p",[t._v("Content-disposition: 以什么格式打开响应体数据")])])])}),[],!1,null,null,null);e.default=n.exports}}]);