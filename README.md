# Gate

这是一个基于 Vite + React 的静态前端项目，可以直接部署到 GitHub Pages。

## 本地运行

前提：已安装 Node.js

1. 安装依赖：`npm install`
2. 启动开发环境：`npm run dev`
3. 本地构建检查：`npm run build`

## GitHub Pages 发布

仓库已经配置为通过 GitHub Actions 自动部署。

1. 推送代码到 `main` 分支
2. 打开 GitHub 仓库 `Settings -> Pages`
3. 在 `Build and deployment` 里选择 `Source: GitHub Actions`
4. 等待 Actions 中的 `Deploy to GitHub Pages` 工作流执行完成

发布地址通常会是：

`https://aduck097.github.io/gate/`

## 说明

- 生产环境构建会通过 `VITE_BASE_PATH` 自动适配 GitHub Pages 的仓库子路径
- 如果以后改了仓库名，GitHub Actions 会按新的仓库名生成发布路径
