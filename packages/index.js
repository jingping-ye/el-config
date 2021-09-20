import ElConfigTable from './ElConfigTable'

const components = [ElConfigTable]

const install = function (Vue) {
  if (install.installed) {
    return false
  }

  components.forEach((component) => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ElConfigTable,
}
