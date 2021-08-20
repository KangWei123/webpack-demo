// let a = 10
// console.log(a ,'hellow webpack')
import Vue from 'vue';
import App from './App.vue';
(function () {
    var initFontSize = 16
    var iPhone6Width = 375
    var clientWidth = window.document.documentElement.clientWidth || iPhone6Width
    var newFontSize = initFontSize * (clientWidth / iPhone6Width)
    document.documentElement.style.fontSize = newFontSize + 'px'
  })()
console.log('fontSize', document.querySelector('html').style.fontSize)
new Vue({
  render: h => h(App)
}).$mount('#app');
