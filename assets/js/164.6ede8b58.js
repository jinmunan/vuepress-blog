(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{495:function(n,t,s){"use strict";s.r(t);var e=s(3),r=Object(e.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"ribbon负载均衡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ribbon负载均衡"}},[n._v("#")]),n._v(" Ribbon负载均衡")]),n._v(" "),t("h2",{attrs:{id:"一、ribbon介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、ribbon介绍"}},[n._v("#")]),n._v(" 一、Ribbon介绍")]),n._v(" "),t("p",[n._v("Spring Cloud Ribbon是基于Netflix Ribbon实现的一套"),t("strong",[n._v("客户端负载均衡的工具")]),n._v("。")]),n._v(" "),t("p",[n._v("简单的说，Ribbon是Netflix发布的开源项目，主要功能是提供"),t("strong",[n._v("客户端的软件负载均衡算法和服务调用")]),n._v("。Ribbon客户端组件提供一系列完善的配置项如连接超时，重试等。")]),n._v(" "),t("p",[n._v("简单的说，就是在配置文件中列出Load Balancer(简称LB)后面所有的机器，Ribbon会自动的帮助你基于某种规则(如简单轮询，随机连接等）去连接这些机器。我们很容易使用Ribbon实现自定义的负载均衡算法。")]),n._v(" "),t("p",[t("strong",[n._v("Ribbon目前也进入维护模式。")])]),n._v(" "),t("p",[n._v("Ribbon未来可能被Spring Cloud LoadBalacer替代。")]),n._v(" "),t("p",[t("strong",[n._v("LB负载均衡(Load Balance)是什么")])]),n._v(" "),t("p",[n._v("简单的说就是将用户的请求平摊的分配到多个服务上，从而达到系统的HA (高可用)。")]),n._v(" "),t("p",[n._v("常见的负载均衡有软件Nginx，LVS，硬件F5等。")]),n._v(" "),t("p",[t("strong",[n._v("Ribbon本地负载均衡客户端VS Nginx服务端负载均衡区别")])]),n._v(" "),t("p",[n._v("Nginx是服务器负载均衡，客户端所有请求都会交给nginx，然后由nginx实现转发请求。即负载均衡是由服务端实现的。\nRibbon本地负载均衡，在调用微服务接口时候，会在注册中心上获取注册信息服务列表之后缓存到JVM本地，从而在本地实现RPC远程服务调用技术。")]),n._v(" "),t("p",[t("strong",[n._v("集中式LB")])]),n._v(" "),t("p",[n._v("即在服务的消费方和提供方之间使用独立的LB设施(可以是硬件，如F5, 也可以是软件，如nginx)，由该设施负责把访问请求通过某种策略转发至服务的提供方;")]),n._v(" "),t("p",[t("strong",[n._v("进程内LB")])]),n._v(" "),t("p",[n._v("将LB逻辑集成到消费方，消费方从服务注册中心获知有哪些地址可用，然后自己再从这些地址中选择出一个合适的服务器。")]),n._v(" "),t("p",[n._v("Ribbon就属于进程内LB，它只是一个类库，集成于消费方进程，消费方通过它来获取到服务提供方的地址。")]),n._v(" "),t("p",[n._v("一句话："),t("strong",[n._v("Ribbon = 负载均衡 + RestTemplate调用")])]),n._v(" "),t("p",[n._v("总结：Ribbon其实就是一个软负载均衡的客户端组件，它可以和其他所需请求的客户端结合使用，和Eureka结合只是其中的一个实例。")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/frame/springcloud/ribbon/145b915e56a85383b3ad40f0bb2256e0.png",alt:"img"}})]),n._v(" "),t("p",[n._v("Ribbon在工作时分成两步：")]),n._v(" "),t("ul",[t("li",[n._v("第一步先选择EurekaServer（服务注册中心） ,它优先选择在同一个区域内负载较少的server。")]),n._v(" "),t("li",[n._v("第二步再根据用户指定的策略，在从server取到的服务注册列表中选择一个地址。")])]),n._v(" "),t("p",[n._v("其中Ribbon提供了多种策略：比如轮询、随机和根据响应时间加权。")]),n._v(" "),t("h2",{attrs:{id:"二、resttemplate的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、resttemplate的使用"}},[n._v("#")]),n._v(" 二、RestTemplate的使用")]),n._v(" "),t("p",[t("a",{attrs:{href:"https://docs.spring.io/spring-framework/docs/5.2.2.RELEASE/javadoc-api/org/springframework/web/client/RestTemplate.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("RestTemplate Java Doc"),t("OutboundLink")],1)]),n._v(" "),t("p",[n._v("getForObject()：返回对象为响应体中数据转化成的对象，基本上可以理解为"),t("strong",[n._v("Json")]),n._v("。")]),n._v(" "),t("p",[n._v("getForEntity()：返回对象为"),t("strong",[n._v("ResponseEntity对象")]),n._v("，包含了响应中的一些重要信息，比如"),t("strong",[n._v("响应头、响应状态码、响应体")]),n._v("等。")]),n._v(" "),t("h2",{attrs:{id:"_3、ribbon自带的负载规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、ribbon自带的负载规则"}},[n._v("#")]),n._v(" 3、Ribbon自带的负载规则")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/frame/springcloud/ribbon/87243c00c0aaea211819c0d8fc97e445.png",alt:"img"}})]),n._v(" "),t("ul",[t("li",[n._v("RoundRobinRule "),t("strong",[n._v("轮询")])]),n._v(" "),t("li",[n._v("RandomRule "),t("strong",[n._v("随机")])]),n._v(" "),t("li",[n._v("RetryRule "),t("strong",[n._v("先按照RoundRobinRule的策略获取服务，如果获取服务失败则在指定时间内会进行重试，获取可用的服务。")])]),n._v(" "),t("li",[n._v("WeightedResponseTimeRule "),t("strong",[n._v("对RoundRobinRule的扩展，响应速度越快的实例选择权重越大，越容易被选择")])]),n._v(" "),t("li",[n._v("BestAvailableRule "),t("strong",[n._v("会先过滤掉由于多次访问故障而处于断路器跳闸状态的服务，然后选择一个并发量最小的服务")])]),n._v(" "),t("li",[n._v("AvailabilityFilteringRule "),t("strong",[n._v("先过滤掉故障实例，再选择并发较小的实例")])]),n._v(" "),t("li",[n._v("ZoneAvoidanceRule "),t("strong",[n._v("默认规则,复合判断server所在区域的性能和server的可用性选择服务器")])])]),n._v(" "),t("h2",{attrs:{id:"_4、ribbon负载规则替换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、ribbon负载规则替换"}},[n._v("#")]),n._v(" 4、Ribbon负载规则替换")]),n._v(" "),t("p",[n._v("官方文档明确给出了警告:")]),n._v(" "),t("p",[n._v("这个自定义配置类不能放在@ComponentScan所扫描的当前包下以及子包下，")]),n._v(" "),t("p",[n._v("否则我们自定义的这个配置类就会被所有的Ribbon客户端所共享，达不到特殊化定制的目的了。")]),n._v(" "),t("p",[n._v("（"),t("strong",[n._v("也就是说不要将Ribbon配置类与主启动类同包")]),n._v("）")]),n._v(" "),t("h2",{attrs:{id:"_5、ribbon默认负载轮询算法原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、ribbon默认负载轮询算法原理"}},[n._v("#")]),n._v(" 5、Ribbon默认负载轮询算法原理")]),n._v(" "),t("p",[t("strong",[n._v("默认负载轮训算法: rest接口第几次请求数 % 服务器集群总数量 = 实际调用服务器位置下标，每次服务重启动后rest接口计数从1开始")]),n._v("。```")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("/**\n * RoundRobinRule\n * 轮询策略原理\n * 取余法\n * 总计数:3台\n * list = 3 instance\n * 1 % 3 = 1 -> index = 1 list.get(1)\n * 2 % 3 = 2 -> index = 2 list.get(2)\n * 3 % 3 = 0 -> index = 0 list.get(0)\n * 4 % 3 = 1 -> index = 1 list.get(1)\n * 5 % 3 = 2 -> index = 2 list.get(2)\n * 6 % 3 = 0 -> index = 0 list.get(0)\n * CAS+自旋锁\n */\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);