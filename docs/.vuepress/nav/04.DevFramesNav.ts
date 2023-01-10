// 框架导航栏
export default {
  text: '开发框架', link: '/devframes/',
  items: [
    {
      text: '数据库框架',
      items: [
        { text: 'MyBatis', link: '/mybatis/' },
        { text: 'MyBatis-Plus', link: '/mybatis-plus/' },
      ]
    },
    {
      text: 'Spring系列框架',
      items: [
        { text: 'Spring', link: '/spring/' },
        { text: 'SpringMVC', link: '/springmvc/' },
        { text: 'SpringBoot', link: '/springboot/' },
        { text: 'SpringSecurity', link: '/springsecurity/' },
      ]
    },
    {
      text: 'SpringCloud微服务系列',
      items: [
        {
          text: '注册中心',
          items: [
            { text: 'Eureka', link: '/eurake/' },
            { text: 'Zookeeper', link: '/zookeeper/' },
            { text: 'Consul', link: '/consul/' },
            { text: 'Nacos', link: '/nacos/' },
          ]
        },
        {
          text: '服务调用',
          items: [
            { text: 'Ribbon', link: '/ribbon/'},
            { text: 'OpenFeign', link: '/open-feign/' },
            { text: 'Stream', link: '/stream/' },

          ]
        },
        {
          text: '服务降级',
          items: [
            { text: 'Hystrix', link: '/hystrix/' },
            { text: 'Dubbo', link: '/dubbo/' },
            { text: 'Sentinel', link: '/sentinel/' },
            { text: 'Seata', link: '/seata/' },
          ]
        },
        {
          text: '服务网关',
          items: [
            { text:'Zuul', link: 'zuul'},
            { text: 'GateWay', link: '/gate-way/' },
          ]
        },
        {
          text: '服务配置',
          items: [
            { text: 'Config', link: '/config/' },
            { text: 'Nacos', link: '/nacos/' },
          ]
        },
        {
          text: '服务总栈',
          items: [
            { text: 'Bus', link: '/bus/' },
            { text: 'Nacos', link: '/nacos/' },
            { text: 'Sleuth+Zipkin', link: '/sleuth-zipkin/' },
          ]
        }
      ]
    },
  ]
}
