# 英文学术个人主页模板

适用于 GitHub Pages，无需安装依赖或构建。包含个人简介、研究方向、论文、教育与学术经历、联系方式，支持手机浏览和深浅色模式。

## 你只需要修改 profile.js

所有资料集中在 **`profile.js`**，每项都有中文注释。页面布局不需要改。

| 字段 | 填写内容 |
| --- | --- |
| `name` | 英文姓名 |
| `position` / `department` / `institution` | 职位、院系、学校或机构 |
| `photo` | 照片路径，例如 `assets/photo.jpg` |
| `email` / `office` | 邮箱、办公地址 |
| `links` | Google Scholar、ORCID、GitHub、CV 链接 |
| `about` | 个人简介，每个字符串是一段 |
| `research` | 研究方向及说明 |
| `publications` | 论文标题、作者、期刊或会议、年份及资源链接 |
| `experience` | 教育与学术经历 |

1. 把 `[方括号里的占位文字]` 替换成自己的英文内容。
2. 链接暂时没有就保留 `""`，页面不会显示空链接按钮。
3. 新增论文或经历：复制对应的一整组 `{ ... }`，组之间用逗号隔开。
4. 把 `research`、`publications` 或 `experience` 设为 `[]`，即可隐藏该栏目及导航入口。
5. 资料按填写顺序显示，建议论文和经历按时间倒序排列。

内容按普通文本显示，不用写 HTML。字符串中的英文双引号需要写成 `\"`；多行文字（例如 BibTeX）可以使用反引号包裹。

## 照片、简历和论文

把文件放进 `assets/`，例如 `assets/photo.jpg` 和 `assets/cv.pdf`，然后在资料文件中填写相应路径。照片未填写或加载失败时显示姓名缩写占位图。

论文可填写 `paper`、`code`、`project` 链接。填入 `bibtex` 后，页面会显示可展开的 BibTeX 内容。

## 查看效果

直接用浏览器打开 `index.html` 即可查看，修改资料后刷新页面。需启用 JavaScript。

也可以在项目目录运行 `python3 -m http.server 8000`，访问 http://localhost:8000 。

## GitHub Pages 发布

准备好内容后，将这些文件提交并推送到 `LinerXiang/linerxiang.github.io` 的 `main` 分支，并在仓库 Pages 设置中配置从 `main` 分支根目录发布。

目标地址为 https://linerxiang.github.io/ 。当前模板的本地文件创建不代表已发布。

## 文件说明

- `profile.js`：日常填写资料的文件。
- `assets/`：个人照片与 PDF。
- `index.html`：页面结构。
- `content.js`：将资料显示到页面。
- `styles.css`：外观与响应式布局。
- `script.js`：主题切换和年份。

## 布局参考

当前外观参考 [Academic Pages](https://academicpages.github.io/) 的经典学术布局：顶部栏目导航、左侧圆形照片与个人资料、右侧正文和论文列表。本项目仍是独立的静态模板，并未安装 Academic Pages 的 Jekyll 系统；所有内容继续在 `profile.js` 中填写。`location` 可填写城市或国家。
