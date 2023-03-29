import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()

pinia.use(persist)

export default pinia

export * from './about'
export * from './cert'
export * from './edu'
export * from './project'
export * from './skill'
export * from './title'
export * from './user'
export * from './work'
