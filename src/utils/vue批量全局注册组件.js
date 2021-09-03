import Vue from 'vue';
import path from 'path';
//vue批量全局注册组件
function changeStr(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const components = require.context('.', true, /\.(jsx|vue)$/);
components.keys().forEach(name => {
  const component = components(name).default;

  const dirname = path.dirname(name);
  const filename = path.basename(name).split('.')[0];
  if (dirname === '.') {
    Vue.component(changeStr(filename), component);
  } else if (filename === 'index') {
    Vue.component(changeStr(dirname.split('/').pop()), component);
  }
});
