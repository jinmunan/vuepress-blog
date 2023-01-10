(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{494:function(t,s,a){"use strict";a.r(s);var n=a(3),v=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"consul服务注册与发现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consul服务注册与发现"}},[t._v("#")]),t._v(" Consul服务注册与发现")]),t._v(" "),s("h2",{attrs:{id:"_1、consul简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、consul简介"}},[t._v("#")]),t._v(" 1、Consul简介")]),t._v(" "),s("p",[t._v("Consul是一套开源的分布式服务发现和配置管理系统，由HashiCorp 公司用Go语言开发。")]),t._v(" "),s("p",[t._v("提供了微服务系统中的服务治理、配置中心、控制总线等功能。这些功能中的每一个都可以根据需要单独使用，也可以一起使用以构建全方位的服务网格，总之Consul提供了一种完整的服务网格解决方案。")]),t._v(" "),s("p",[t._v("它具有很多优点。包括：基于raft协议，比较简洁；支持健康检查，同时支持HTTP和DNS协议支持跨数据中心的WAN集群提供图形界面跨平台，支持Linux、Mac、Windows。")]),t._v(" "),s("p",[s("strong",[t._v("能干吗？")])]),t._v(" "),s("ul",[s("li",[t._v("服务发现 - 提供HTTP和DNS两种发现方式。")]),t._v(" "),s("li",[t._v("健康监测 - 支持多种方式，HTTP、TCP、Docker、Shell脚本定制化")]),t._v(" "),s("li",[t._v("KV存储 - Key、Value的存储方式")]),t._v(" "),s("li",[t._v("多数据中心 - Consul支持多数据中心")]),t._v(" "),s("li",[t._v("可视化Web界面")])]),t._v(" "),s("h2",{attrs:{id:"_2、服务注册进consul"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、服务注册进consul"}},[t._v("#")]),t._v(" 2、服务注册进Consul")]),t._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("consul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("payment\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# consul注册中心地址")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("consul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" localhost\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8500")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("discovery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("service-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("spring.application.name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h1",{attrs:{id:"五、三个注册中心异同点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、三个注册中心异同点"}},[t._v("#")]),t._v(" 五、三个注册中心异同点")]),t._v(" "),s("h2",{attrs:{id:"_1、异同点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、异同点"}},[t._v("#")]),t._v(" 1、异同点")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("组件名")]),t._v(" "),s("th",[t._v("语言CAP")]),t._v(" "),s("th",[t._v("服务健康检查")]),t._v(" "),s("th",[t._v("对外暴露接口")]),t._v(" "),s("th",[t._v("Spring Cloud集成")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Eureka")]),t._v(" "),s("td",[t._v("Java")]),t._v(" "),s("td",[t._v("AP")]),t._v(" "),s("td",[t._v("可配支持")]),t._v(" "),s("td",[t._v("HTTP")])]),t._v(" "),s("tr",[s("td",[t._v("Consul")]),t._v(" "),s("td",[t._v("Go")]),t._v(" "),s("td",[t._v("CP")]),t._v(" "),s("td",[t._v("支持")]),t._v(" "),s("td",[t._v("HTTP/DNS")])]),t._v(" "),s("tr",[s("td",[t._v("Zookeeper")]),t._v(" "),s("td",[t._v("Java")]),t._v(" "),s("td",[t._v("CP")]),t._v(" "),s("td",[t._v("支持客户端")]),t._v(" "),s("td",[t._v("已集成")])])])]),t._v(" "),s("h2",{attrs:{id:"_2、cap理论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、cap理论"}},[t._v("#")]),t._v(" 2、CAP理论")]),t._v(" "),s("p",[t._v("C：Consistency (强一致性)")]),t._v(" "),s("p",[t._v("A：Availability (可用性)")]),t._v(" "),s("p",[t._v("P：Partition tolerance （分区容错性)")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/frame/springcloud/consul/b41e0791c9652955dd3a2bc9d2d60983.png",alt:"img"}})]),t._v(" "),s("p",[t._v("最多只能同时较好的满足两个。")]),t._v(" "),s("p",[t._v("CAP理论的核心是：一个分布式系统不可能同时很好的满足一致性，可用性和分区容错性这三个需求。")]),t._v(" "),s("p",[t._v("因此，根据CAP原理将NoSQL数据库分成了满足CA原则、满足CP原则和满足AP原则三大类:")]),t._v(" "),s("ul",[s("li",[t._v("CA - 单点集群，满足—致性，可用性的系统，通常在可扩展性上不太强大。")]),t._v(" "),s("li",[t._v("CP - 满足一致性，分区容忍必的系统，通常性能不是特别高。")]),t._v(" "),s("li",[t._v("AP - 满足可用性，分区容忍性的系统，通常可能对一致性要求低一些。")])]),t._v(" "),s("p",[s("strong",[t._v("AP架构（Eureka）")])]),t._v(" "),s("p",[t._v("当网络分区出现后，为了保证可用性，系统B可以返回旧值，保证系统的可用性。")]),t._v(" "),s("p",[t._v("结论：违背了一致性C的要求，只满足可用性和分区容错，即AP")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/frame/springcloud/consul/2d07748539300b9c466eb1d9bac5cd1b.png",alt:"img"}})]),t._v(" "),s("p",[s("strong",[t._v("CP架构（ZooKeeper/Consul）")])]),t._v(" "),s("p",[t._v("当网络分区出现后，为了保证一致性，就必须拒接请求，否则无法保证一致性。")]),t._v(" "),s("p",[t._v("结论：违背了可用性A的要求，只满足一致性和分区容错，即CP。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/frame/springcloud/consul/c6f2926a97420015fcebc89b094c5598.png",alt:"img"}})]),t._v(" "),s("p",[t._v("CP 与 AP 对立同一的矛盾关系。")]),t._v(" "),s("p",[t._v("CAP理论的一个例子。开学了，你和同桌互对寒假作业答案，对到一半同桌去了厕所，恰好老师进来要收作业，你决定：AP【交就交吧，有错也无所谓了，交作业要紧】；CP【等同桌回来，把答案对完再交，满分要紧】")]),t._v(" "),s("h1",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])])])}),[],!1,null,null,null);s.default=v.exports}}]);