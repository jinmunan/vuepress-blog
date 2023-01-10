(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{499:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"zuul服务网关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zuul服务网关"}},[t._v("#")]),t._v(" Zuul服务网关")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/frame/springcloud/zuul/2022101102.png",alt:"img"}})]),t._v(" "),s("h2",{attrs:{id:"_1、客户端请求多个微服务的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、客户端请求多个微服务的问题"}},[t._v("#")]),t._v(" 1、客户端请求多个微服务的问题")]),t._v(" "),s("p",[t._v("不同的微服务一般会有不同的网络地址，而外部客户端（例如手机APP）可能需要调用多个服务的接口才能完成一个业务需求。")]),t._v(" "),s("p",[t._v("例如一个电影购票的手机APP，可能会调用多个微服务的接口，才能完成一次购票的业务流程。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/frame/springcloud/zuul/image-20221011092702849.png",alt:"image-20221011092702849"}})]),t._v(" "),s("p",[s("strong",[t._v("如果让客户端直接与各个微服务通信，会有以下的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("客户端会多次请求不同的微服务，增加了客户端的复杂性。")])]),t._v(" "),s("li",[s("p",[t._v("存在跨域请求，在一定场景下处理相对复杂。")])]),t._v(" "),s("li",[s("p",[t._v("认证复杂，每个服务都需要独立认证。")])]),t._v(" "),s("li",[s("p",[t._v("难以重构，随着项目的迭代，可能需要重新划分微服务。例如，可能将多个服务合并成一个或者将一个服务拆分成多个。如果客户端直接与微服务通信，那么重构将会很难实施。")])]),t._v(" "),s("li",[s("p",[t._v("某些微服务可能使用了防火墙/浏览器不友好的协议，直接访问会有一定的困难。")])]),t._v(" "),s("li",[s("p",[t._v("以上问题可借助微服务网关解决。微服务网关是介于客户端和服务器端之间的中间层, 所有的外部请求都会先经过微服务网关。")])])]),t._v(" "),s("p",[t._v("使用微服务网关后，架构可演变成下图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/frame/springcloud/zuul/image-20221011092845656.png",alt:"image-20221011092845656"}})]),t._v(" "),s("p",[t._v("如图，微服务网关封装了应用程序的内部结构，客户端只须跟网关交互，而无须直接调用特定微服务的接口。")]),t._v(" "),s("p",[t._v("这样，开发就可以得到简化。不仅如此，使用微服务网关还有以下优点：")]),t._v(" "),s("ul",[s("li",[t._v("易于监控。可在微服务网关收集监控数据并将其推送到外部系统进行分析。")]),t._v(" "),s("li",[t._v("易于认证。可在微服务网关上进行认证，然后再将请求转发到后端的微服务，而无须在每个微服务中进行认证。")]),t._v(" "),s("li",[t._v("减少了客户端与各个微服务之间的交互次数。")])]),t._v(" "),s("h2",{attrs:{id:"_2、zuul简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、zuul简介"}},[t._v("#")]),t._v(" 2、Zuul简介")]),t._v(" "),s("p",[t._v("Zuul是Netflix开源的微服务网关，它可以和Eureka、Ribbon、Hystrix等组件配合使用。")]),t._v(" "),s("p",[s("strong",[t._v("Zuul的核心是一系列的过滤器，这些过滤器可以完成以下功能。")])]),t._v(" "),s("ul",[s("li",[t._v("身份认证与安全；识别每个资源的验证要求，并拒绝那些与要求不符的请求。")]),t._v(" "),s("li",[t._v("审查与监控：在边缘位置追踪有意义的数据和统计结果，从而带来精确的生产视图。")]),t._v(" "),s("li",[t._v("动态路由：动态地将请求路由到不同的后端集群。")]),t._v(" "),s("li",[t._v("压力测试：逐渐增加指向集群的流量，以了解性能。")]),t._v(" "),s("li",[t._v("负载分配：为每一种负载类型分配对应容量，并弃用超岀限定值的请求。")]),t._v(" "),s("li",[t._v("静态响应处理：在边缘位置直接建立部分响应，从而避免其转发到内部集群。")]),t._v(" "),s("li",[t._v("多区域弹性:跨越AWS Region进行请求路由，旨在实现ELB ( Elastic Load Balancing) 使用的多样化，以及让系统的边缘更贴近系统的使用者。")])]),t._v(" "),s("p",[t._v("Spring Cloud对Zuul进行了整合与增强。目前，Zuul使用的默认HTTP客户端是Apache HTTPClient,也可以使用 RestClient 或者okhttp3.OkHttpClient。")]),t._v(" "),s("h2",{attrs:{id:"_3、管理端点-了解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、管理端点-了解"}},[t._v("#")]),t._v(" 3、管理端点（了解）")]),t._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[t._v("修改application.yml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("暴露端点\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("management")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("endpoints")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("web")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exposure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("访问：http://localhost:9527/actuator/routes 可以查看路由设置")]),t._v(" "),s("p",[t._v("访问：http://localhost:9527/actuator/filters 可以查看过滤器端点")]),t._v(" "),s("h2",{attrs:{id:"_4、路由配置详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、路由配置详解"}},[t._v("#")]),t._v(" 4、路由配置详解")]),t._v(" "),s("p",[s("strong",[t._v("自定义指定微服务的访问路径")])]),t._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zuul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ignored-services")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 禁止服务名访问")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 给微服务设置路由")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("service1.serviceId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("hystirx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("consumer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("order\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("service1.path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /service1/"),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("**")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("prefix")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /gateway "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 所有路由的前缀")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h1",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])])])}),[],!1,null,null,null);s.default=e.exports}}]);