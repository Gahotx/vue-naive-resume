import type {
  About,
  Certificate,
  EducationExp,
  ProjectExp,
  Skill,
  TitleName,
  UserInfo,
  WorkExp
} from '@/types'

export const pageTitle: TitleName = {
  profile: '个人信息',
  educationList: '教育背景',
  workList: '工作经历',
  projectList: '项目经历',
  skillList: '专业技能',
  certificateList: '技能证书',
  aboutme: '自我评价'
}

export const profile: UserInfo = {
  name: '刘嘉豪',
  gender: '男',
  age: '23',
  address: '杭州',
  email: 'gahotx@163.com',
  phone: '16666666666',
  github: 'https://github.com/Gahotx',
  state: '离职-随时到岗',
  intention: '前端开发工程师',
  work: '2年',
  salary: '20-30k',
  avatar: 'https://pic.iqjty.com/2023/03/13/640edf69dc06a.jpg'
}

export const educationList: Array<EducationExp> = [
  {
    id: '1',
    time: ['2018.09', '2022.06'],
    school: '杭州电子科技大学',
    major: '通信工程',
    grade: '本科',
    eduExp: `1. 主修课程：高等数学、数据结构、移动通信、计算机系统、嵌入式系统等；\n2. 获得过校级奖学金，获得了英语四级证书，以及各类校内比赛奖项；\n3. 在校期间多次参加志愿者、义工等活动，丰富自己的校园生活。`
  }
]

export const workList: Array<WorkExp> = [
  {
    id: '1',
    company: '顾天科技有限公司',
    role: '前端开发工程师',
    time: ['2022.06', '2023.04'],
    content: `1. 使用 Vue. js 和 Element Plus 构建了多个响应式网站和单页应用程序；\n2. 开发了一个可重用、高度可定制化的组件库，并利用它来快速构建新项目；\n3. 实现了与后端 API 的数据交互，并使用 Axios 管理 HTTP 请求。`
  },
  {
    id: '2',
    company: '双翼网络科技公司',
    role: '前端开发工程师',
    time: ['2022.03', '2022.06'],
    content: `1. 使用 React. js 和 Svelte 构建了多个跨浏览器和移动设备兼容的网站；\n2. 利用 Ant Design 和 Naive UI 等 UI 框架进行快速原型制作和样式设计；\n3. 协助后端开发人员实现 RESTful API，并使用 Redux 和 MobX 进行状态管理。`
  },
  {
    id: '3',
    company: '乐居科技有限公司',
    role: '前端开发工程师',
    time: ['2021.09', '2021.12'],
    content: `1. 开发和维护公司多个客户端网站，并与后端开发人员紧密协作，优化网站性能。\n2. 设计并实现响应式网页布局，确保客户端网站在不同设备上展示的一致性。\n3. 使用 React 和 Vue. js 框架，负责构建并优化单页面应用程序（SPA），能够快速、高效地加载。`
  }
]

export const projectList: Array<ProjectExp> = [
  {
    id: '1',
    project: '在线购物商城',
    role: '前端负责人',
    time: ['2022.10', '2023.02'],
    content: `项目简介：一个类似淘宝、京东等电商网站，实现了商品浏览、搜索、购物车、下单支付等基本功能。\n技术架构：Vue. js、Element Plus、Axios、Vue Router、Vuex、ESLint、Prettier。\n负责内容：\n1. 开发商品列表页和商品详情页，实现商品的展示和基本信息的查询。\n2. 实现购物车功能，包括添加、删除、结算等操作，并与后台 API 进行交互。\n3. 实现订单管理模块，用户可以查看历史订单和当前订单状态，对已完成订单进行评价。`
  },
  {
    id: '2',
    project: '音乐播放器',
    role: '前端负责人',
    time: ['2022.05', '2022.08'],
    content: `项目简介：基于网易云音乐 API 开发的在线音乐播放器，支持搜索歌曲、歌手、专辑，并提供歌词显示、歌曲收藏等功能。\n 技术架构：React、Ant Design、React Router、Axios、Redux、ESLint、WebPack。\n负责内容：\n1. 通过 API 获取歌曲、歌词、专辑等数据，并渲染到页面上，实现了基本的搜索和播放功能。\n2. 支持歌曲的暂停 / 播放、调整音量、上 / 下一首等操作，同时提供了进度条和歌词滚动显示。\n3. 实现了歌曲收藏功能，并对用户的登录状态进行了判断和处理。`
  },
  {
    id: '3',
    project: '在线文档编辑器',
    role: '前端负责人',
    time: ['2021.12', '2022.03'],
    content: `项目简介：一个基于 Svelte 框架开发的在线文档编辑器，支持 Markdown 语法，可以创建、编辑、保存文档，并实时预览。\n 技术架构：Svelte、Naive UI、Axios、Prettier、ESLint、Rollup。\n负责内容：\n1. 使用 Svelte 组件化思想开发了编辑器的各个模块，并封装了常用的命令工具。\n2. 实现了 Markdown 语法的解析和显示，并使用 WebSocket 技术实现了实时预览。\n3. 通过 API 与后台服务器交互，实现了文档的创建、保存、打开等操作，并提供了文件管理功能。`
  }
]

export const skillList: Skill = {
  skill: `1. 熟练掌握 HTML、CSS，熟悉 Less、Sass 等预处理语言；\n2. 熟练掌握 JavaScript 和 Typescript，熟悉 ES6+ 的新特性；\n3. 熟练掌握 Vue 框架，能够熟练地使用 Vue 全家桶开发项目；\n4. 熟练使用 Element-UI、Vant、Naive UI 等主流的 UI 组件库；\n5. 熟练掌握 Axios 前后端通信技术，了解 Node.js 和 Express 等；\n6. 熟练使用 Git 版本控制工具，熟悉 Gulp、Webpack、Vite 等打包工具。`
}

export const certificateList: Array<Certificate> = [
  {
    cert: '大学英语四级（CET-4）'
  },
  {
    cert: '大学英语六级（CET-6）'
  },
  {
    cert: '计算机等级二级证书'
  },
  {
    cert: '普通话二级甲等证书'
  }
]

export const aboutme: About = {
  desc: `1. 自学能力强，能快速接受使用新知识；\n2. 良好的分析解决问题能力，和自我管理能力；\n3. 有较好的团队协作和沟通能力，有强烈的责任心。`
}
