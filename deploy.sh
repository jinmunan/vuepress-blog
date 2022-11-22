#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果手运行该脚本，则执行 if 里的，如果是 GitHub 自动执行该脚本，则是 else 里的
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy 脚本部署'
  githubUrl=git@github.com:jinmunan/jinmunan.github.io.git
else
  msg='来自 Github actions 的自动部署'
  githubUrl=https://jinmunan:${GITHUB_TOKEN}@github.com/jinmunan/jinmunan.github.io.git
  git config --global user.name "jinmunan"
  git config --global user.email "zn923042857@gmail.com"
fi

git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master # 推送到 Github gh-pages 分支

# 退回开始所在目录
cd - 
# 删除打包项目
rm -rf docs/.vuepress/dist
