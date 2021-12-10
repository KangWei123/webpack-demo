/**
 * 基础枚举值定义示例
 * 值固定用 "value" 属性名，名固定用 "label" 属性名
 *
  const enumValue = {
    ENABLED: {
      value: 0,
      label: '启用'
    },
    DISABLED: {
      value: 1,
      label: '禁用'
    }
  };
 */

/**
 * 适用于筛选项遍历
 * enumValueArray = [
 *  {value: 0, label: '启用'},
 *  {value: 1, label: '禁用'}
 * ]
 */
function formattedToArray(enumValue) {
  return Object.keys(enumValue).map(key => enumValue[key]);
}
/**
 * 适用于列表数据转换
 * enumValueObj = {
 *   0: '启用',
 *   1: '禁用'
 * }
 */
function formattedToObj(enumValue) {
  const obj = {};
  Object.keys(enumValue).forEach(key => {
    obj[enumValue[key].value] = enumValue[key].label;
  });
  return obj;
}

function formattedToFullObj(enumValue) {
  const obj = {};
  Object.keys(enumValue).forEach(key => {
    obj[enumValue[key].value] = enumValue[key];
  });
  return obj;
}
export { formattedToArray, formattedToObj, formattedToFullObj };
