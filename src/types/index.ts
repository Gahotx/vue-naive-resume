export interface ResumeConfig {
  // 模块名称
  titleNameMap: {
    profile?: string
    educationList?: string
    workList?: string
    projectList?: string
    skillList?: string
    certificateList?: string
    aboutme?: string
  }

  // 头像
  avatar: {
    src: string
  }

  // 个人信息
  profile: {
    name: string
    gender: string
    age: string
    address: string
    email: string
    mobile: string
    github: string
    state: string
    intention: string
    work: string
    salary: string
  }

  // 教育背景
  educationList?: Array<{
    time: [string | number, string | number]
    school: string
    major: string
    grade: string
    course: string
    score: string
    duty: string
  }>

  // 工作经历
  workList?: Array<{
    company: string
    department: string
    time: [string | number, string | number]
    desc: string
  }>

  // 项目经历
  projectList?: Array<{
    project: string
    role: string
    time: [string | number, string | number]
    desc: string
    content: string
  }>

  // 专业技能
  skillList?: Array<{
    skill: string
  }>

  // 资格证书
  certificateList?: Array<{
    cert: string
  }>

  // 自我评价
  aboutme?: Array<{
    desc: string
  }>
}

export interface City {
  label: string
  value: string
  children?: Array<City>
}
