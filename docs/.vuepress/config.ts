import {defineConfig4CustomTheme} from "vuepress/config";

import plugins from "./config/plugins";
import head from "./config/head";
import themeConfig from "./config/themeConfig";
import {penName, title} from "./common/info";

export default defineConfig4CustomTheme({
    theme: "vdoing", // 使用npm包主题
    // 如果使用 locales 的 title 和 description，则下方的 title 和 description 失效
    // title: penName + title,
    // description: '',
    // lang: 'zh-CN',
    // base: '/', // 格式：'/<仓库名>/'， 默认'/'
    markdown: {
        lineNumbers: true, // 显示代码块的行号
        extractHeaders: ["h2", "h3", "h4"], // 支持 h2、h3、h4 标题
    },
    // 多语言支持
    locales: {
        "/": {
            lang: "zh-CN",
            title: penName + title,
            description:
                "博客",
        },
        // '/en/': {
        //   lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
        //   title: penName + title,
        //   description: ''
        // }
    },
    // 监听文件变化并重新构建
    extraWatchFiles: [".vuepress/config.ts"],
    themeConfig,
    head,
    plugins,
});
