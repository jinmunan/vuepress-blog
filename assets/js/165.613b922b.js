(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{496:function(n,e,t){"use strict";t.r(e);var s=t(3),a=Object(s.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"七、openfeign-feign"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七、openfeign-feign"}},[n._v("#")]),n._v(" 七、OpenFeign（Feign）")]),n._v(" "),e("h2",{attrs:{id:"_1、feign介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、feign介绍"}},[n._v("#")]),n._v(" 1、Feign介绍")]),n._v(" "),e("p",[e("strong",[n._v("Feign能干什么")])]),n._v(" "),e("p",[n._v("Feign旨在使编写Java Http客户端变得更容易。")]),n._v(" "),e("p",[n._v("前面在使用Ribbon+RestTemplate时，利用RestTemplate对http请求的封装处理，形成了一套模版化的调用方法。但是在实际开发中，由于对服务依赖的调用可能不止一处，往往一个接口会被多处调用，所以通常都会针对每个微服务自行封装一些客户端类来包装这些依赖服务的调用。所以，Feign在此基础上做了进一步封装，由他来帮助我们定义和实现依赖服务接口的定义。在Feign的实现下，我们只需创建一个接口并使用注解的方式来配置它(以前是Dao接口上面标注Mapper注解,现在是一个微服务接口上面标注一个Feign注解即可)，即可完成对服务提供方的接口绑定，简化了使用Spring cloud Ribbon时，自动封装服务调用客户端的开发量。")]),n._v(" "),e("p",[e("strong",[n._v("Feign集成了Ribbon")])]),n._v(" "),e("p",[n._v("利用Ribbon维护了Payment的服务列表信息，并且通过轮询实现了客户端的负载均衡。而与Ribbon不同的是，通过feign只需要定义服务绑定接口且以声明式的方法，优雅而简单的实现了服务调用。")]),n._v(" "),e("p",[e("strong",[n._v("Feign和OpenFeign两者区别")])]),n._v(" "),e("p",[e("strong",[n._v("Feign")]),n._v("是Spring Cloud组件中的一个轻量级RESTful的HTTP服务客户端Feign内置了Ribbon，用来做客户端负载均衡，去调用服务注册中心的服务。Feign的使用方式是:使用Feign的注解定义接口，调用这个接口，就可以调用服务注册中心的服务。")]),n._v(" "),e("p",[e("strong",[n._v("OpenFeign")]),n._v("是Spring Cloud在Feign的基础上支持了SpringMVC的注解，如@RequesMapping等等。OpenFeign的@Feignclient可以解析SpringMVc的@RequestMapping注解下的接口，并通过动态代理的方式产生实现类，实现类中做负载均衡并调用其他服务。")]),n._v(" "),e("h2",{attrs:{id:"_2、openfeign服务调用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、openfeign服务调用"}},[n._v("#")]),n._v(" 2、OpenFeign服务调用")]),n._v(" "),e("p",[n._v("消费者编写Feign接口调用生产者接口")]),n._v(" "),e("h2",{attrs:{id:"_3、openfeign超时控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、openfeign超时控制"}},[n._v("#")]),n._v(" 3、OpenFeign超时控制")]),n._v(" "),e("p",[e("strong",[n._v("OpenFeign默认等待1秒钟，超过后报错")])]),n._v(" "),e("p",[e("strong",[n._v("YML文件里需要开启OpenFeign客户端超时控制")])]),n._v(" "),e("div",{staticClass:"language-yml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#设置feign客户端超时时间(OpenFeign默认支持ribbon)(单位：毫秒)")]),n._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[n._v("ribbon")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#指的是建立连接所用的时间，适用于网络状况正常的情况下,两端连接所用的时间")]),n._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[n._v("ReadTimeout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[n._v("5000")]),n._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#指的是建立连接后从服务器读取到可用资源所用的时间")]),n._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[n._v("ConnectTimeout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[n._v("5000")]),n._v("\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br")])]),e("h2",{attrs:{id:"_4、openfeign日志增强"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、openfeign日志增强"}},[n._v("#")]),n._v(" 4、OpenFeign日志增强")]),n._v(" "),e("p",[e("strong",[n._v("日志打印功能")])]),n._v(" "),e("p",[n._v("Feign提供了日志打印功能，我们可以通过配置来调整日恙级别，从而了解Feign 中 Http请求的细节。")]),n._v(" "),e("p",[n._v("说白了就是对Feign接口的调用情况进行监控和输出")]),n._v(" "),e("p",[n._v("日志级别")]),n._v(" "),e("ul",[e("li",[n._v("NONE：默认的，不显示任何日志;")]),n._v(" "),e("li",[n._v("BASIC：仅记录请求方法、URL、响应状态码及执行时间;")]),n._v(" "),e("li",[n._v("HEADERS：除了BASIC中定义的信息之外，还有请求和响应的头信息;")]),n._v(" "),e("li",[n._v("FULL：除了HEADERS中定义的信息之外，还有请求和响应的正文及元数据。")])]),n._v(" "),e("h1",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[n._v("#")])])])}),[],!1,null,null,null);e.default=a.exports}}]);