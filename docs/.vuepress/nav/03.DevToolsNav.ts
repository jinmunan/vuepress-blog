// 工具导航栏
export default {
  text: '开发工具', link: '/devtools/',
  items: [
    {
      text: '项目管理工具',
      items: [
        { text: 'Maven', link: '/maven/' },
        { text: 'Git', link: '/git/' }
      ]
    },
    {
      text: '项目部署工具',
      items: [
        { text: 'Linux', link: '/linux/' },
        { text: 'Docker', link: '/docker/' },
      ]
    },
    {
      text: '服务器工具',
      items: [
        { text: 'Nginx', link: '/nginx/' },
      ]
    },
  ]
}