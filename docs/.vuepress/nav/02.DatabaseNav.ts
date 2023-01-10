// 数据库导航栏
export default {
  text: '数据库', link: '/database/',
  items: [
    {
      text: '关系型数据库',
      items: [
        { text: 'MySQL', link: '/mysql/' },
        { text: 'Oracle', link: '/oracle/' },
      ]
    },
    {
      text: '非关系型数据库',
      items: [
        { text: 'Redis', link: '/redis/' },
        { text: 'ElasticSearch', link: '/elasticsearch/' },
        { text: 'MongoDB', link: '/mongodb/' },
      ]
    },
  ]
}