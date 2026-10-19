# Yan Chen — Academic Homepage

Personal academic homepage of Yan Chen, Institute of Industrial Science, The University of Tokyo.

Website: https://cyan-utokyo.github.io/

简洁的英文静态主页，可直接用于 GitHub Pages，无须安装依赖或运行构建。适配手机、键盘导航及打印。

## 本地查看

直接用浏览器打开 `index.html` 即可。主要内容由 `profile.js` 生成，需要启用 JavaScript。

也可在本目录运行 `python -m http.server 4173`，访问 http://localhost:4173 。

## 改成你自己的主页

主要修改 `profile.js`，样式在 `styles.css`，页面结构在 `index.html`。

1. 填写姓名、职位、机构、所在地、简介和研究方向。
2. 替换论文和项目示例；没有的条目可删除。论文 `links` 可添加 DOI、PDF、代码等真实链接。
3. 将头像放在 `assets/portrait.jpg`，设置 `photo: "assets/portrait.jpg"`。
4. 将公开版 CV 放在 `assets/cv.pdf`，设置 `cv: "assets/cv.pdf"`，页面会出现下载入口。
5. 填写学术邮箱，并在 `links` 中加入 Google Scholar、ORCID、researchmap、GitHub 等个人主页。
6. 更新 `updated` 日期。核对后将 `draft` 改为 `false`，隐藏模板横幅。
7. 可在 `index.html` 中修改首页大标题与固定英文文案，在 `assets/favicon.svg` 中修改图标。

页面包含研究方向、三篇期刊论文、选取的三项国际会议报告、硕士及之后的学历和职历、奖项。邮箱在左侧资料栏以 `[at]` 显示。头像与公开版 CV 尚未加入。

## 放到 GitHub Pages

仅上传本文件夹内部的网页文件，不需要上传上级工作目录中的履历和其他文件。

1. 在 GitHub 创建公开仓库 `你的用户名.github.io`。
2. 上传本目录中的文件及 `assets` 文件夹到仓库根目录，确保 `index.html` 在根目录。
3. 进入仓库 **Settings → Pages → Build and deployment**。
4. Source 选择 **Deploy from a branch**；分支选择 **main**，文件夹选择 **/(root)**，保存。
5. 等待发布，网站地址为 `https://你的用户名.github.io/`。

若使用普通仓库名，则站点地址通常为 `https://你的用户名.github.io/仓库名/`；本模板使用相对资源路径，也支持这一形式。

官方说明：https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

本仓库通过 GitHub Pages 从 `main` 分支根目录发布。修改并推送网页文件后，GitHub Pages 会重新部署。
