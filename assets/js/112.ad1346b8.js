(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{442:function(s,a,t){"use strict";t.r(a);var e=t(3),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker安装"}},[s._v("#")]),s._v(" Docker安装")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/tool/docker/image-20221026101144205.png",alt:"image-20221026101144205"}})]),s._v(" "),a("h2",{attrs:{id:"前提条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[s._v("#")]),s._v(" 前提条件")]),s._v(" "),a("p",[s._v("目前，CentOS 仅发行版本中的内核支持 Docker。Docker 运行在CentOS 7 (64-bit)上，")]),s._v(" "),a("p",[s._v("要求系统为64位、Linux系统内核版本为 3.8以上，这里选用Centos7.x")]),s._v(" "),a("h2",{attrs:{id:"查看自己的内核"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看自己的内核"}},[s._v("#")]),s._v(" 查看自己的内核")]),s._v(" "),a("p",[s._v("uname命令用于打印当前系统相关信息（内核版本号、硬件架构、主机名称和操作系统类型等）。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/redhat-release \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h1",{attrs:{id:"docker的基本组成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker的基本组成"}},[s._v("#")]),s._v(" Docker的基本组成")]),s._v(" "),a("h2",{attrs:{id:"镜像-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像-image"}},[s._v("#")]),s._v(" 镜像（Image）")]),s._v(" "),a("p",[s._v("Docker 镜像（Image）就是一个"),a("strong",[s._v("只读")]),s._v("的模板。镜像可以用来创建 Docker 容器，一个镜像可以创建很多容器。")]),s._v(" "),a("p",[s._v("它也相当于是一个root文件系统。比如官方镜像 CentOS7 就包含了完整的一套 CentoOS7 最小系统的 root 文件系统。")]),s._v(" "),a("p",[s._v("相当于容器的“源代码”，docker镜像文件类似于Java的类模板，而docker容器实例类似于java中new出来的实例对象。")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Docker")]),s._v(" "),a("th",[s._v("面向对象")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("容器")]),s._v(" "),a("td",[s._v("对象")])]),s._v(" "),a("tr",[a("td",[s._v("镜像")]),s._v(" "),a("td",[s._v("类")])])])]),s._v(" "),a("h2",{attrs:{id:"容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器"}},[s._v("#")]),s._v(" 容器")]),s._v(" "),a("h3",{attrs:{id:"从面向对象角度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从面向对象角度"}},[s._v("#")]),s._v(" 从面向对象角度")]),s._v(" "),a("p",[s._v("Docker 利用容器（Container）独立运行的一个或一组应用，应用程序或服务运行在容器里面，容器就类似于一个虚拟化的运行环境，容器是用镜像创建的运行实例。就像是Java中的类和实例对象一样，镜像是静态的定义，容器是镜像运行时的实体。容器为镜像提供了一个标准的和隔离的运行环境，它可以被启动、开始、停止、删除。每个容器都是相互隔离的、保证安全的平台")]),s._v(" "),a("h3",{attrs:{id:"从镜像容器角度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从镜像容器角度"}},[s._v("#")]),s._v(" 从镜像容器角度")]),s._v(" "),a("p",[a("strong",[s._v("可以把容器看做是一个简易版的 Linux 环境")]),s._v("（包括root用户权限、进程空间、用户空间和网络空间等）和运行在其中的应用程序。")]),s._v(" "),a("h2",{attrs:{id:"仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仓库"}},[s._v("#")]),s._v(" 仓库")]),s._v(" "),a("p",[s._v("仓库（Repository）是集中存放镜像文件的场所。")]),s._v(" "),a("ul",[a("li",[s._v("Maven仓库，存放各种jar包的地方；")]),s._v(" "),a("li",[s._v("github仓库，存放各种git项目的地方；")]),s._v(" "),a("li",[s._v("DockerHub仓库，存放各种镜像模板的地方。")])]),s._v(" "),a("p",[s._v("仓库分为公开仓库（Public）和私有仓库（Private）两种形式。")]),s._v(" "),a("p",[s._v("最大的公开仓库是 "),a("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker Hub"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("p",[s._v("存放了数量庞大的镜像供用户下载。国内的公开仓库包括阿里云 、网易云等。")]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("Docker 本身是一个容器运行载体或称之为管理引擎。我们把应用程序和配置依赖打包好形成一个可交付的运行环境，这个打包好的运行环境就是image镜像文件。只有通过这个镜像文件才能生成Docker容器实例（类似Java中new出来一个对象）。")]),s._v(" "),a("p",[s._v("image文件可以看作是容器的模板。Docker 根据 image 文件生成容器的实例。同一个 image 文件，可以生成多个同时运行的容器实例。")]),s._v(" "),a("p",[a("strong",[s._v("镜像文件")])]),s._v(" "),a("ul",[a("li",[s._v("image 文件生成的容器实例，本身也是一个文件，称为镜像文件。")])]),s._v(" "),a("p",[a("strong",[s._v("容器实例")])]),s._v(" "),a("ul",[a("li",[s._v("一个容器运行一种服务，当我们需要的时候，就可以通过docker客户端创建一个对应的运行实例，也就是我们的容器")])]),s._v(" "),a("p",[a("strong",[s._v("仓库")])]),s._v(" "),a("ul",[a("li",[s._v("就是放一堆镜像的地方，我们可以把镜像发布到仓库中，需要的时候再从仓库中拉下来就可以了。")])]),s._v(" "),a("h1",{attrs:{id:"docker平台架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker平台架构"}},[s._v("#")]),s._v(" Docker平台架构")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/tool/docker/image-20221026103259956.png",alt:"image-20221026103259956"}})]),s._v(" "),a("h2",{attrs:{id:"docker工作原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker工作原理"}},[s._v("#")]),s._v(" Docker工作原理")]),s._v(" "),a("p",[s._v("Docker是一个Client-Server结构的系统，Docker守护进程运行在主机上， 然后通过Socket连接从客户端访问，守护进程从客户端接受命令并管理运行在主机上的容器。 容器，是一个运行时环境，就是我们前面说到的集装箱。类似与MySql和Navicat的关系。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/tool/docker/image-20221026103548729.png",alt:"image-20221026103548729"}})]),s._v(" "),a("h2",{attrs:{id:"docker平台架构版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker平台架构版"}},[s._v("#")]),s._v(" Docker平台架构版")]),s._v(" "),a("p",[s._v("Docker 是一个 C/S 模式的架构，后端是一个松耦合架构，众多模块各司其职。")]),s._v(" "),a("p",[a("img",{attrs:{src:"02-Docker%E5%AE%89%E8%A3%85/image-20221026104045372.png",alt:"image-20221026104045372"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/tool/docker/image-20221026104437104.png",alt:"image-20221026104437104"}})]),s._v(" "),a("h2",{attrs:{id:"总结-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结-2"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("ul",[a("li",[s._v("Docker Client：负责发送请求")]),s._v(" "),a("li",[s._v("Docker Daemon：守护进程模块\n"),a("ul",[a("li",[s._v("Docker Server：负责接收请求")]),s._v(" "),a("li",[s._v("Engine：引擎，处理请求")]),s._v(" "),a("li",[s._v("Job：工作任务")])])]),s._v(" "),a("li",[s._v("Docker Registry：仓库模块")]),s._v(" "),a("li",[s._v("Driver：驱动模块\n"),a("ul",[a("li",[s._v("graphdriver：镜像管理驱动，获取镜像")]),s._v(" "),a("li",[s._v("networkdriver：网络管理驱动")]),s._v(" "),a("li",[s._v("execdriver：限制Dokcer容器资源和者执行用户指令")])])]),s._v(" "),a("li",[s._v("Graph：管理镜像模块\n"),a("ul",[a("li",[s._v("GraphDB：存储镜像数据库")])])]),s._v(" "),a("li",[s._v("libcontainer：独立的容器管理报")]),s._v(" "),a("li",[s._v("Docker Container：Docker容器")])]),s._v(" "),a("h1",{attrs:{id:"centos7安装docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos7安装docker"}},[s._v("#")]),s._v(" Centos7安装Docker")]),s._v(" "),a("h2",{attrs:{id:"官网教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#官网教程"}},[s._v("#")]),s._v(" 官网教程")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://docs.docker.com/engine/install/centos/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Centos7安装"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"安装教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装教程"}},[s._v("#")]),s._v(" 安装教程")]),s._v(" "),a("p",[s._v("说明：Docker 安装路径是 "),a("code",[s._v("/var/lib/docker")]),s._v("，安装 Docker 成功后，在该路径中有一个 image 和 containers 文件夹，分别存放镜像和实例。")]),s._v(" "),a("h3",{attrs:{id:"确定是cemtos7及以上版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#确定是cemtos7及以上版本"}},[s._v("#")]),s._v(" 确定是CemtOS7及以上版本")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/redhat-release\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"卸载旧版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载旧版本"}},[s._v("#")]),s._v(" 卸载旧版本")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum remove "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-client "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-client-latest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-common "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-latest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-latest-logrotate "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-logrotate "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-engine\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"yum安装gcc相关依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yum安装gcc相关依赖"}},[s._v("#")]),s._v(" yum安装gcc相关依赖")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -gcc-c++\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"安装设置存储库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装设置存储库"}},[s._v("#")]),s._v(" 安装设置存储库")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" yum-utils\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"设置国内的stable镜像仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置国内的stable镜像仓库"}},[s._v("#")]),s._v(" 设置国内的stable镜像仓库")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"更新yum软件包索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新yum软件包索引"}},[s._v("#")]),s._v(" 更新yum软件包索引")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum makecache fast\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"安装docker-ce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装docker-ce"}},[s._v("#")]),s._v(" 安装Docker Ce")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce docker-ce-cli containerd.io docker-compose-plugin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"启动docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动docker"}},[s._v("#")]),s._v(" 启动Docker")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" version\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run hello-world\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"卸载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[s._v("#")]),s._v(" 卸载")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl stop "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum remove docker-ce docker-ce-cli containerd.io docker-compose-plugin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" /var/lib/docker\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" /var/lib/containerd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h1",{attrs:{id:"阿里云镜像加速"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阿里云镜像加速"}},[s._v("#")]),s._v(" 阿里云镜像加速")]),s._v(" "),a("h2",{attrs:{id:"容器镜像服务官网地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器镜像服务官网地址"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors",target:"_blank",rel:"noopener noreferrer"}},[s._v("容器镜像服务官网地址"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/tool/docker/image-20221026133800868.png",alt:"image-20221026133800868"}})]),s._v(" "),a("h2",{attrs:{id:"直接粘贴"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直接粘贴"}},[s._v("#")]),s._v(" 直接粘贴")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /etc/docker\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/docker/daemon.json "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<-")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'EOF\'\n{\n  "registry-mirrors": ["https://yii929ie.mirror.aliyuncs.com"]\n}\nEOF')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo mkdir -p /etc/docker")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo tee /etc/docker/daemon.json <<-'EOF'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"registry-mirrors"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://yii929ie.mirror.aliyuncs.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" EOF\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"registry-mirrors"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://yii929ie.mirror.aliyuncs.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo systemctl daemon-reload")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo systemctl restart docker")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h1",{attrs:{id:"helloworld案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helloworld案例"}},[s._v("#")]),s._v(" HelloWorld案例")]),s._v(" "),a("h2",{attrs:{id:"docker-run-hello-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-run-hello-world"}},[s._v("#")]),s._v(" docker run hello-world")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run hello-world")]),s._v("\n\nHello from Docker"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". The Docker client contacted the Docker daemon.\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". The Docker daemon pulled the "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello-world"')]),s._v(" image from the Docker Hub.\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("amd64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(". The Docker daemon created a new container from that image "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" runs the\n    executable that produces the output you are currently reading.\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(". The Docker daemon streamed that output to the Docker client, "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" sent it\n    to your terminal.\n\nTo try something "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" ambitious, you can run an Ubuntu container with:\n $ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" ubuntu "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n\nShare images, automate workflows, and "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" with a "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" Docker ID:\n https://hub.docker.com/\n\nFor "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" examples and ideas, visit:\n https://docs.docker.com/get-started/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h2",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/tool/docker/image-20221026134445554.png",alt:"image-20221026134445554"}})]),s._v(" "),a("h1",{attrs:{id:"底层原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#底层原理"}},[s._v("#")]),s._v(" 底层原理")]),s._v(" "),a("h2",{attrs:{id:"为什么docker回会比vm虚拟机快"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么docker回会比vm虚拟机快"}},[s._v("#")]),s._v(" 为什么Docker回会比VM虚拟机快")]),s._v(" "),a("p",[a("strong",[s._v("docker有着比虚拟机更少的抽象层")])]),s._v(" "),a("p",[s._v("由于docker不需要Hypervisor(虚拟机)实现硬件资源虚拟化，运行在docker容器上的程序直接使用的都是实际物理机的硬件资源。因此在CPU、内存利用率上docker将会在效率上有明显优势。")]),s._v(" "),a("p",[a("strong",[s._v("docker利用的是宿主机的内核,而不需要加载操作系统OS内核")])]),s._v(" "),a("p",[s._v("当新建一个容器时,docker不需要和虚拟机一样重新加载一个操作系统内核。进而避免引寻、加载操作系统内核返回等比较费时费资源的过程，当新建一个虚拟机，虚拟机软件需要加载OS,返回新建过程是分钟级别的。而docker由于直接利用宿主机的操作系统,则省略了返回过程，因此新建一个docker容器只需要几秒钟。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/tool/docker/image-20221026140409790.png",alt:"image-20221026140409790"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);