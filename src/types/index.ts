// 模块名称
export interface TitleName {
  profile?: string
  educationList?: string
  workList?: string
  projectList?: string
  skillList?: string
  certificateList?: string
  aboutme?: string
}

// 个人信息
export interface UserInfo {
  name: string
  gender: string
  age: string
  address: string
  email: string
  phone: string
  github: string
  state: string
  intention: string
  work: string
  salary: string
  avatar: string
}

// 教育背景
export interface EducationExp {
  time: [string | number, string | number]
  school: string
  major: string
  grade: string
  course: string
  score: string
  duty: string
}

// 工作经历
export interface WorkExp {
  company: string
  department: string
  time: [string | number, string | number]
  desc: string
}

// 项目经历
export interface ProjectExp {
  project: string
  role: string
  time: [string | number, string | number]
  desc: string
  content: string
}

// 专业技能
export interface Skill {
  skill: string
}

// 资格证书
export interface Certificate {
  cert: string
}

// 自我评价
export interface About {
  desc: string
}

// 选择器的 option
export interface Select {
  label: string
  value: string
  children?: Array<Select>
}
