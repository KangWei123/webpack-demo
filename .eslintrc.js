module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    node: true,
    jquery: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  extends: ['plugin:vue/base', 'plugin:prettier/recommended'],
  plugins: ['vue', 'prettier'],
  rules: {
    'linebreak-style': [0, 'error', 'unix', 'windows'],
    "no-debugger": 2,//禁止使用debugger
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto' //解决windows endOfLine can be "crlf" eslint报错问题
      }
    ],
    'dot-notation': 1, // 尽可能的使用点符号
    'no-empty': 1, // 空的代码块
    'no-multi-spaces': 1, // 不允许多个空格
    'no-self-compare': 1, // 禁止自身比较
    'no-undef': 1, // 不允许使用未申明变量
    quotes: [1, 'single', 'avoid-escape'], // 使用单引号，除非为了避免转义
    'no-new': 0, // 禁止在使用new构造一个实例后不赋值
    semi: [2, 'always'], // 语句强制分号结尾, 注释掉避免和prettier冲突
    'space-before-function-paren': 0
  }
};
