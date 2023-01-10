(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{517:function(s,a,n){"use strict";n.r(a);var t=n(3),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[s._v("笔记")]),s._v(" "),a("p",[s._v("Nginx 安装完成后，接下来我们要学习的是如何启动、重启和停止 Nginx 的服务。")]),s._v(" "),a("div",{staticClass:"custom-block right"},[a("p",[s._v("2021-11-26 @Young Kbt")])])]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#启动停止命令"}},[s._v("启动停止命令")]),a("ul",[a("li",[a("a",{attrs:{href:"#服务信号控制"}},[s._v("服务信号控制")])]),a("li",[a("a",{attrs:{href:"#命令行控制"}},[s._v("命令行控制")])])])]),a("li",[a("a",{attrs:{href:"#版本升级和新增模块"}},[s._v("版本升级和新增模块")]),a("ul",[a("li",[a("a",{attrs:{href:"#环境准备"}},[s._v("环境准备")])]),a("li",[a("a",{attrs:{href:"#服务信号进行升级"}},[s._v("服务信号进行升级")])]),a("li",[a("a",{attrs:{href:"#安装目录的make命令完成升级"}},[s._v("安装目录的make命令完成升级")])])])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"启动停止命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动停止命令"}},[s._v("#")]),s._v(" 启动停止命令")]),s._v(" "),a("p",[s._v("对于 Nginx 的启停在 Linux 系统中也有很多种方式，我们介绍两种方式：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Nginx 服务的信号控制")])]),s._v(" "),a("li",[a("p",[s._v("Nginx 的命令行控制")])])]),s._v(" "),a("h3",{attrs:{id:"服务信号控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务信号控制"}},[s._v("#")]),s._v(" 服务信号控制")]),s._v(" "),a("p",[s._v("在了解内容之前，我们首先要考虑一些问题：")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("问题")]),s._v(" "),a("p",[s._v("Nginx 中的 master 和 worker 进程?")]),s._v(" "),a("p",[s._v("Nginx 的工作方式?")]),s._v(" "),a("p",[s._v("如何获取进程的 PID?")]),s._v(" "),a("p",[s._v("信号有哪些?")]),s._v(" "),a("p",[s._v("如何通过信号控制 Nginx 的启停等相关操作?")]),s._v(" "),a("div",{staticClass:"custom-block right"},[a("p",[s._v("2021-11-26 @Young Kbt")])])]),s._v(" "),a("p",[s._v("前面在提到 Nginx 的高性能，其实也和它的架构模式有关。Nginx 默认采用的是多进程的方式来工作的，当将 Nginx 启动后，我们通过 "),a("code",[s._v("ps -ef | grep nginx")]),s._v(" 命令可以查看到如下内容：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/Nginx/20211126161032.png",alt:"1581444289294"}})]),s._v(" "),a("p",[s._v("从上图中可以看到，Nginx 后台进程中包含一个 master 进程和多个 worker 进程，master 进程主要用来管理 worker 进程，包含接收外界的信息，并将接收到的信号发送给各个 worker 进程，监控 worker 进程的状态。当 worker 进程出现异常退出后，会自动重新启动新的 worker 进程。而 worker 进程则是专门用来处理用户请求的，各个 worker 进程之间是平等的并且相互独立，处理请求的机会也是一样的。")]),s._v(" "),a("p",[s._v("Nginx 的进程模型，我们可以通过下图来说明下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/Nginx/20211126161030.png",alt:"1581444603231"}})]),s._v(" "),a("p",[s._v("我们现在作为管理员，只需要通过给 master 进程发送信号就可以来控制 Nginx，这个时候我们需要有两个前提条件，一个是要操作的 master 进程，一个是 给 master 进程的信号。")]),s._v(" "),a("p",[s._v("（1）要想操作 Nginx 的 master 进程，就需要获取到 master 进程的进程号 PID。获取方式简单介绍两个：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("通过 "),a("code",[s._v("ps -ef | grep nginx")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("在讲解 Nginx 的 "),a("code",[s._v("./configure")]),s._v(" 的配置参数的时候，有一个参数 "),a("code",[s._v("--pid-path=PATH")]),s._v("，它的默认值是 "),a("code",[s._v("/usr/local/nginx/logs/nginx.pid")]),s._v("，所以可以通过查看该文件来获取 Nginx 的 master 进程 PID")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /usr/local/nginx/logs/nginx.pid\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("p",[s._v("（2）信号（signal）")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("信号")]),s._v(" "),a("th",[s._v("作用")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("TERM/INT")]),s._v(" "),a("td",[s._v("立即关闭整个服务（关闭 Nginx）")])]),s._v(" "),a("tr",[a("td",[s._v("QUIT")]),s._v(" "),a("td",[s._v("「优雅」的关闭整个服务（关闭 Nginx）")])]),s._v(" "),a("tr",[a("td",[s._v("HUP")]),s._v(" "),a("td",[s._v("重读配置文件并使用服务对新配置项生效（重启 Nginx）")])]),s._v(" "),a("tr",[a("td",[s._v("USR1")]),s._v(" "),a("td",[s._v("重新打开日志文件，可以用来进行日志切割（重启日志）")])]),s._v(" "),a("tr",[a("td",[s._v("USR2")]),s._v(" "),a("td",[s._v("平滑升级到最新版的 Nginx")])]),s._v(" "),a("tr",[a("td",[s._v("WINCH")]),s._v(" "),a("td",[s._v("所有子进程不在接收处理新连接，相当于给 Work 进程发送 QUIT 指令")])])])]),s._v(" "),a("p",[s._v("调用命令为 "),a("code",[s._v("kill -signal PID")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-signal")]),s._v(" PID\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("signal：即为信号；PID 即为获取到的 master 进程 PID")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("例子")])])]),s._v(" "),a("ol",[a("li",[s._v("发送 TERM/INT 信号给 master 进程，会将 Nginx 服务立即关闭。")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 格式一：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-TERM")]),s._v(" PID\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 立即关闭当前线程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-TERM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /usr/local/nginx/logs/nginx.pid"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 格式一：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-INT")]),s._v(" PID\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 立即关闭当前线程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-INT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /usr/local/nginx/logs/nginx.pid"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("发送 QUIT 信号给 master 进程，master 进程会控制所有的 work 进程不再接收新的请求，等所有请求处理完后，在把进程都关闭掉。")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 优雅」关闭线程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-QUIT")]),s._v(" PID\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 「优雅」关闭当前线程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-QUIT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /usr/local/nginx/logs/nginx.pid"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("发送 HUP 信号给 master 进程，master 进程会把控制旧的 worker 进程不再接收新的请求，等处理完请求后将旧的 worker 进程关闭掉，然后根据Nginx 的配置文件重新启动新的 worker 进程")])]),s._v(" "),a("div",{staticClass:"language-Sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启 worker 进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-HUP")]),s._v(" PID \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启当前 worker 进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-HUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /usr/local/nginx/logs/nginx.pid"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("发送 USR1 信号给 master 进程，告诉 Nginx 重新开启日志文件。如果日志文件被删除了，可以利用此命令重新打开。")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新打开日志文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-USR1")]),s._v(" PID\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新打开当前 Nginx 的日志文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-USR1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /usr/local/nginx/logs/nginx.pid"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("发送 USR2 信号给 master 进程，告诉 master 进程要平滑升级，这个时候，会重新开启对应的 master 进程和 worker 进程，整个系统中将会有两个master 进程，并且新的 master 进程的 PID 会被记录在 "),a("code",[s._v("/usr/local/nginx/logs/nginx.pid")]),s._v("，而之前的旧的 master 进程 PID 会被记录在 "),a("code",[s._v("/usr/local/nginx/logs/nginx.pid.oldbin")]),s._v(" 文件中，接着再次发送 QUIT 信号给旧的 master 进程，让其处理完请求后再进行关闭")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启新的进程，但是不删除旧的进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-USR2")]),s._v(" PID\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启新的进程，但是不删除当前进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-USR2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /usr/local/nginx/logs/nginx.pid"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("当新进程升级后（完全启动后），再关闭旧的进程，旧进程的 PID 在另一个 "),a("code",[s._v("nginx.pid.oldbin")]),s._v(" 文件里")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭旧的线程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-QUIT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /usr/local/nginx/logs/nginx.pid.oldbin"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/Nginx/20211126161835.png",alt:"1586368250085"}})]),s._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[s._v("发送 WINCH 信号给 master 进程,让 master 进程控制不让所有的 worker 进程在接收新的请求了，请求处理完后关闭 worker 进程。注意 master 进程不会被关闭掉")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止 worker 进程，但是不停止 master 进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-WINCH")]),s._v(" PID \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止当前 worker 进程，但是不停止 master 进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-WINCH")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /usr/local/nginx/logs/nginx.pid"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"命令行控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令行控制"}},[s._v("#")]),s._v(" 命令行控制")]),s._v(" "),a("p",[s._v("此方式是通过 Nginx 安装目录下的 sbin 下的可执行文件 nginx(文件名) 来进行对 Nginx 状态的控制，我们可以通过 "),a("code",[s._v("nginx -h")]),s._v(" 来查看都有哪些参数可以用：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/Nginx/20211126163430.png",alt:"image-20211126163428959"}})]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("选项")]),s._v(" "),a("th",[s._v("作用")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("-? 和 -h")]),s._v(" "),a("td",[s._v("显示帮助信息")])]),s._v(" "),a("tr",[a("td",[s._v("-v")]),s._v(" "),a("td",[s._v("打印版本号信息并退出")])]),s._v(" "),a("tr",[a("td",[s._v("-V")]),s._v(" "),a("td",[s._v("打印版本号信息和配置信息并退出")])]),s._v(" "),a("tr",[a("td",[s._v("-t")]),s._v(" "),a("td",[s._v("测试 Nginx 的配置文件语法是否正确并退出")])]),s._v(" "),a("tr",[a("td",[s._v("-T")]),s._v(" "),a("td",[s._v("测试 Nginx 的配置文件语法是否正确并列出用到的配置文件信息然后退出")])]),s._v(" "),a("tr",[a("td",[s._v("-q")]),s._v(" "),a("td",[s._v("在配置测试期间过滤掉非错误消息")])]),s._v(" "),a("tr",[a("td",[s._v("-s")]),s._v(" "),a("td",[s._v("signal 信号，后面的命令和服务信号控制功能类似："),a("br"),a("br"),a("code",[s._v("stop")]),s._v("：快速关闭，类似于 TERM/INT 信号的作用"),a("br"),a("code",[s._v("quit")]),s._v("：优雅的关闭，类似于 QUIT 信号的作用 "),a("br"),a("code",[s._v("reopen")]),s._v("：重新打开日志文件类似于 USR1 信号的作用 "),a("br"),a("code",[s._v("reload")]),s._v("：重启 Nginx，类似于 HUP 信号的作用")])]),s._v(" "),a("tr",[a("td",[s._v("-p")]),s._v(" "),a("td",[s._v("prefix，指定 Nginx 的默认安装路径，(默认为：/usr/local/nginx/)")])]),s._v(" "),a("tr",[a("td",[s._v("-c")]),s._v(" "),a("td",[s._v("filename，指定 Nginx 的配置文件路径,(默认为：conf/nginx.conf)")])]),s._v(" "),a("tr",[a("td",[s._v("-g")]),s._v(" "),a("td",[s._v("用来补充 Nginx 配置文件，向 Nginx 服务指定启动时应用全局的配置")])])])]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("例子")])])]),s._v(" "),a("p",[s._v("如果觉得每次执行 nginx 指令都必须进入 sbin 目录，则将该指令设置为全局使用。")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("两个查看版本指令")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看版本指令 1")]),s._v("\nnginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回结果")]),s._v("\nnginx version: nginx/1.20.2\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看版本指令 2")]),s._v("\nnginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-V")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回结果")]),s._v("\nnginx version: nginx/1.20.2\nbuilt by gcc "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.8")]),s._v(".5 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20150623")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Red Hat "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.8")]),s._v(".5-44"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GCC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \nconfigure arguments：\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("测试 Nginx 的配置文件语法")]),s._v(" "),a("p",[s._v("我们首先要知道配置文件的路径在哪，先执行 "),a("code",[s._v("-t")]),s._v(" 进行测试")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试 Nginx 的配置文件语法")]),s._v("\nnginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回结果（成功）")]),s._v("\nnginx: the configuration "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" /usr/local/nginx/conf/nginx.conf syntax is ok\nnginx: configuration "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" /usr/local/nginx/conf/nginx.conf "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" is successful\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("由第 6 行代码可以知道测试成功，第 5 行代码告诉我们配置文件的目录，我们去修改配置文件，然后再进行测试")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入配置文件目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/local/nginx/conf/nginx.conf\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 随便加点内容")]),s._v("\naaaaa\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("重新进行测试")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试 Nginx 的配置文件语法")]),s._v("\nnginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回结果（失败）")]),s._v("\nnginx: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("emerg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" unknown directive "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aaa"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /usr/local/nginx/conf/nginx.conf:3\nnginx: configuration "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" /usr/local/nginx/conf/nginx.conf "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" failed\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("由第 6 行代码可以知道，配置文件出错了。验证完了，记得将配置文件改回来。")])]),s._v(" "),a("li",[a("p",[s._v("指定 Nginx 的默认安装路径")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("nginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /usr/local/nginx/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("指定 Nginx 的配置文件路径")]),s._v(" "),a("p",[s._v("先把配置文件拷贝到另一个目录，然后修改拷贝后的配置文件内容")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拷贝配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/local/nginx/conf/nginx.conf /opt\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改拷贝后的配置文件内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /opt/nginx.conf\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 随便加点内容")]),s._v("\naaaaa\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("测试配置文件的时候，指定拷贝后的配置文件进行测试")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定配置文件进行测试")]),s._v("\nnginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-tc")]),s._v(" /opt/nginx.conf \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回结果")]),s._v("\nnginx: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("emerg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" unknown directive "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aaaa"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /opt/nginx.conf:3\nnginx: configuration "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" /opt/nginx.conf "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" failed\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("说明指定配置文件目录生效，只是文件内容语法不对。")])])]),s._v(" "),a("h2",{attrs:{id:"版本升级和新增模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本升级和新增模块"}},[s._v("#")]),s._v(" 版本升级和新增模块")]),s._v(" "),a("p",[s._v("如果想对 Nginx 的版本进行更新，或者要应用一些新的模块，最简单的做法就是停止当前的 Nginx 服务，然后开启新的 Nginx 服务。但是这样会导致在一段时间内，用户是无法访问服务器。为了解决这个问题，我们就需要用到 Nginx 服务器提供的平滑升级功能。这个也是 Nginx 的一大特点，使用这种方式，就可以使 Nginx 在 7 * 24 小时不间断的提供服务了。接下来我们分析下需求：")]),s._v(" "),a("blockquote",[a("p",[s._v("需求：Nginx 的版本最开始使用的是 Nginx-1.14.2，由于服务升级，需要将 Nginx 的版本升级到 Nginx-1.16.1,要求 Nginx 不能中断提供服务。")])]),s._v(" "),a("p",[s._v("为了应对上述的需求，这里我们提供两种解决方案:")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("使用 Nginx 服务信号完成 Nginx 的升级")])]),s._v(" "),a("li",[a("p",[s._v("使用 Nginx 安装目录的 make 命令完成升级")])])]),s._v(" "),a("p",[s._v("版本升级其实就是替换可执行文件 nginx。")]),s._v(" "),a("h3",{attrs:{id:"环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[s._v("#")]),s._v(" 环境准备")]),s._v(" "),a("p",[s._v("（1）先准备两个版本的 Nginx 分别是 1.14.2 和 1.16.1")]),s._v(" "),a("p",[s._v("（2）使用 Nginx 源码安装的方式将 1.14.2 版本安装成功并正确访问")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压 1.14.2 版本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xzf")]),s._v(" nginx-1.14.2.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入解压目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" nginx-1.14.2/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行配置文件")]),s._v("\n./configure\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译安装")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("（3）将 Nginx 1.16.1 版本进行参数配置和编译，不需要进行安装。")]),s._v(" "),a("div",{staticClass:"language-Sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压 1.16.1 版本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xzf")]),s._v(" nginx-1.16.1.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入解压目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" nginx-1.16.1/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行配置文件")]),s._v("\n./configure\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 仅仅编译")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"服务信号进行升级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务信号进行升级"}},[s._v("#")]),s._v(" 服务信号进行升级")]),s._v(" "),a("p",[s._v("第一步:将 1.14.2 版本的 sbin 目录下的 nginx 进行备份")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("不是复制一份，是直接修改原来的 nginx。")]),s._v(" "),a("div",{staticClass:"custom-block right"},[a("p",[s._v("2021-11-26 @Young Kbt")])])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入 sbin 目录下")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/nginx/sbin\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 备份为 nginxold 文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" nginx nginx.backup\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("第二步：将 Nginx 1.16.1 安装目录编译后的 objs 目录下的 nginx 文件，拷贝到原来 "),a("code",[s._v("/usr/local/nginx/sbin")]),s._v(" 目录下")]),s._v(" "),a("p",[s._v("如果第一步没有备份，那么将会覆盖 1.14.2 的 nginx 文件")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入 objs 目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/nginx/core/nginx-1.16.1/objs\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拷贝可执行文件到原来的目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" nginx /usr/local/nginx/sbin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("第三步：发送信号 USR2 给 Nginx 的 1.14.2 版本对应的 master 进程")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-USR2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /usr/local/logs/nginx.pid"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("第四步：发送信号 QUIT 给 Nginx 的 1.14.2 版本对应的 master 进程")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-QUIT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /usr/local/logs/nginx.pid.oldbin"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"安装目录的make命令完成升级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装目录的make命令完成升级"}},[s._v("#")]),s._v(" 安装目录的make命令完成升级")]),s._v(" "),a("p",[s._v("第一步：将 1.14.2 版本的 sbin 目录下的 nginx 进行备份")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("不是复制一份，是直接修改原来的 nginx。")]),s._v(" "),a("div",{staticClass:"custom-block right"},[a("p",[s._v("2021-11-26 @Young Kbt")])])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入 sbin 目录下")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/nginx/sbin\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 备份为 nginxold 文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" nginx nginx.backup\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("第二步：将 Nginx1.16.1 安装目录编译后的 objs 目录下的 nginx 文件，拷贝到原来 "),a("code",[s._v("/usr/local/nginx/sbin")]),s._v(" 目录下")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入 objs 目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/nginx/core/nginx-1.16.1/objs\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拷贝可执行文件到原来的目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" nginx /usr/local/nginx/sbin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("第三步：进入到安装目录，执行 "),a("code",[s._v("make upgrade")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" upgrade\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/Nginx/20211126172347.png",alt:"1581494652284"}})]),s._v(" "),a("p",[s._v("第四步：查看是否更新成功")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nginx -v\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在整个过程中，其实 Nginx 是一直对外提供服务的。并且当 Nginx 的服务器启动成功后，我们是可以通过浏览器进行直接访问的，同时我们可以通过更改 html 目录下的页面来修改我们在页面上所看到的内容，那么问题来了，为什么我们要修改 html 目录下的文件，能不能多添加一些页面是 Nginx 的功能更加丰富，还有前面聊到 Nginx 的前端功能又是如何来实现的，这就需要我们对 "),a("RouterLink",{attrs:{to:"/nginx/config/"}},[s._v("Nginx 的核心配置文件")]),s._v(" 进行一个详细的学习。")],1)])}),[],!1,null,null,null);a.default=e.exports}}]);