import {defineConfig4CustomTheme} from "vuepress/config";

import plugins from "./config/plugins";
import head from "./config/head";
import themeConfig from "./config/themeConfig";
import {penName, title} from "./common/info";

export default defineConfig4CustomTheme({
    // https://doc.xugaoyi.com/pages/33d574/
    theme: "vdoing", // 使用vdoing主题
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
    },
    // 监听文件变化并重新构建
    extraWatchFiles: [".vuepress/config.ts"],
    themeConfig,
    head,
    plugins,
});
