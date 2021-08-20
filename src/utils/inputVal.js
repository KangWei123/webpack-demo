export default {
  //最大位数8位正整数
  enterInteger(value) {
    value = value.replace(/[^0-9]/g, '');
    value = value.substring(0, 8);
    return value;
  },
  //最大20位 字母数字
  enterPort(value) {
    value = value.replace(/[^0-9A-Za-z]/g, '');
    value = value.substring(0, 20);
    return value;
  },
  //金钱输入 保留两位小数点
  amountInputVal(value) {
    value = value.replace(/^0*(0\.|[1-9])/, '$1');
    value = value.replace(/[^\d.]/g, ''); //清除"数字"和"."以外的字符
    value = value.replace(/^\./g, ''); //验证第一个字符是数字而不是字符
    value = value.replace(/\.{1,}/g, '.'); //只保留第一个.清除多余的
    value = value
      .replace('.', '$#$')
      .replace(/\./g, '')
      .replace('$#$', '.');
    value = value.replace(/^(\-)*(\d*)\.(\d\d).*$/, '$1$2.$3'); //只能输入两个小数
    value =
      value.indexOf('.') > 0
        ? value.split('.')[0].substring(0, 10) + '.' + value.split('.')[1]
        : value.substring(0, 10);
    return value;
  }
};
