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
    time: ['2018.09', '2022.06'],
    school: '杭州电子科技大学',
    major: '通信工程',
    grade: '本科',
    course:
      '主修课程：高等数学、线性代数、数据结构、移动通信、计算机系统、模拟电子技术等',
    score: 'GPA：4.5/5.0；绩点排名：前5%',
    duty: '艺术团团长；相声社副团长'
  }
]

export const workList: Array<WorkExp> = [
  {
    company: '蚂蚁集团',
    department: '体验技术部',
    time: ['2018.09', '2022.06'],
    desc: '1. 担任蚂蚁高管决策和管理协同产品 “数据作战室” 的前端负责人2. 负责蚂蚁敏捷 BI 产品 “DeepInsight” 的可视分析模块产品能力建设3. 数据可视化 AntV 团队核心成员，负责 G2、G2Plot 开源技术的建设'
  },
  {
    company: '蚂蚁金服',
    department: '大数据部',
    time: ['2018.09', '2022.06'],
    desc: '前端实习生。使用 React 参与开发多类数据产品的研发工作，同时也参与大型 BI 产品的重构工作，有良好的编码习惯。'
  },
  {
    company: '数沃信息科技有限公司',
    department: '',
    time: ['2018.09', '2022.06'],
    desc: '前端实习生。使用 Vue 来实现平台功能和逻辑，再用 ECharts 来对数据挖掘分析后的可视化结果进行展示'
  }
]

export const projectList: Array<ProjectExp> = [
  {
    project: '数据作战室',
    role: '前端负责人',
    time: ['2018.09', '2022.06'],
    desc: '面向总裁和高管以及决策 BI 的数字化经营决策和管理协同的数据产品。提供一站式的数据化经营决策和管理协同功能，让高管高效获取指标进展以及决策洞察，并提升管理效率。',
    content:
      '1. 独立负责产品从 0 到 1 的开发、产品功能迭代（在项目中具有推动项目进度的经验） 2. 产品体验精雕细琢的打磨 3. 建立稳定性保障机制。目前仍在迭代中，帮助提升高管业务决策效率'
  },
  {
    project: 'DeepInsight',
    role: '可视分析负责人',
    time: ['2018.09', '2022.06'],
    desc: 'DeepInsight 是蚂蚁集团自主研发的自助式 BI 数据洞察分析平台，主要功能包括可视化看板搭建、智能分析、数据产品建站等。看板功能类似于火山引擎、PowerBI等产品。） ',
    content:
      '在该项目中主要负责可视化建设以及工程治理1. 主导开放能力建设，拉通产品、设计建设和扩展 40+ 可视化图形，提升丰富度2. 产品体验优化，尤其是对 ECharts 的体验顽疾进行攻克3. 主导可视化能力建设：业务标准化图表库建设、促进数据分析能力增强等可视化一体化建设。同时也是 AntV G2Plot 负责人，负责将可视化技术和业务相结合。'
  },
  {
    project: 'G2、G2Plot',
    role: '核心开发者',
    time: ['2018.09', '2022.06'],
    desc: 'G2 是基于图形语法理论的可视化渲染引擎，G2Plot 是在 G2 基础上封装的开箱即用的统计可视化图表库',
    content:
      'AntV 可视化建设，赋能整个蚂蚁和阿里集团统计可视化分析相关业务。负责 AntV G2、G2Plot、ThemeSet 主题构建器等开源项目的研发工作，同时服务蚂蚁内部所有使用 G2 栈的用户，提供可视化解决方案和定制可视化的协助。'
  }
]

export const skillList: Array<Skill> = [
  {
    skill: '熟练掌握 HTML、CSS，熟悉 Less、Sass 等预处理语言；'
  },
  {
    skill: '具有扎实的 JavaScript 基础，了解 ES6+ 新特性；'
  },
  {
    skill: '熟悉 Vue2 全家桶开发，熟悉 Vue3 组合式 API 等新特性；'
  },
  {
    skill: '熟练使用 Element-UI、Vant、Naive UI 等常见的组件库；'
  },
  {
    skill: '熟练掌握 Axios 前后端通信技术，了解 CORS，代理转发等技术；'
  },
  {
    skill: '熟练使用 Git 版本控制工具，了解 Gulp、Webpack、Vite 等开发工具。'
  }
]

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

export const aboutme: Array<About> = [
  {
    desc: '自学能力强，能快速接受使用新知识；'
  },
  {
    desc: '良好的分析解决问题能力，和自我管理能力；'
  },
  {
    desc: '有较好的团队协作和沟通能力，有强烈的责任心。'
  }
]
