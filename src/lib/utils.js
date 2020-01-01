import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
const useI18n = null;
function getAesString(data, key, iv) {
  //加密
  var nowkey = CryptoJS.enc.Utf8.parse(key);
  var nowiv = CryptoJS.enc.Utf8.parse(iv);
  var encrypted = CryptoJS.AES.encrypt(data, nowkey, {
    iv: nowiv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString(); //返回的是base64格式的密文
}
function getDAesString(encrypted, key, iv) {
  //解密
  var nowkey = CryptoJS.enc.Utf8.parse(key);
  var nowiv = CryptoJS.enc.Utf8.parse(iv);
  var decrypted = CryptoJS.AES.decrypt(encrypted, nowkey, {
    iv: nowiv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}
export function encryption(data) {
  //加密
  var encrypted = getAesString(
    data,
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "1234567812345678"
  ); //密文
  return encrypted;
}

export function decrypt(data) {
  //解密
  var decryptedStr = getDAesString(
    data,
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "1234567812345678"
  );
  return decryptedStr;
}

export const setToken = (token, tokenName = "TOKEN") => {
  let parsewords = encryption(JSON.stringify(token));
  Cookies.set(tokenName, parsewords);
};

export const getToken = (tokenName = "TOKEN") => {
  if (Cookies.get(tokenName)) {
    return decrypt(Cookies.get(tokenName));
  } else {
    return null;
  }
};

/**
 * 更改网站的title
 * @param {string} title 标题
 */
export const changeTiele = (title = "管理系统") => {
  window.document.title = title;
};

/**
 * @param {Array} target 目标数组
 * @param {Array} arr 需要查询的数组
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 */
const hasOneOf = (targetarr, arr) => {
  return targetarr.some(_ => arr.indexOf(_) > -1);
};

const showThisMenuEle = (item, access) => {
  if (item.meta && item.meta.access && item.meta.access.length) {
    if (hasOneOf(item.meta.access, access)) return true;
    else return false;
  } else return true;
};

const forEach = (arr, fn) => {
  if (!arr.length || !fn) return;
  let i = -1;
  let len = arr.length;
  while (++i < len) {
    let item = arr[i];
    fn(item, i, arr);
  }
};

export const hasChild = item => {
  return item.children && item.children.length !== 0;
};

/**
 * @param {Array} list 通过路由列表得到菜单列表
 * @returns {Array}
 */
export const getMenuByRouter = (list, access) => {
  let res = [];
  forEach(list, item => {
    if (!item.meta || (item.meta && !item.meta.hideInMenu)) {
      let obj = {
        icon: (item.meta && item.meta.icon) || "",
        name: item.name,
        meta: item.meta
      };
      if (
        (hasChild(item) || (item.meta && item.meta.showAlways)) &&
        showThisMenuEle(item, access)
      ) {
        obj.children = getMenuByRouter(item.children, access);
      }
      if (item.meta && item.meta.href) obj.href = item.meta.href;
      if (showThisMenuEle(item, access)) res.push(obj);
    }
  });
  return res;
};

export const showTitle = (item, vm) => {
  let { title, __titleIsFunction__ } = item.meta;
  if (!title) return;
  if (useI18n) {
    if (title.includes("{{") && title.includes("}}") && useI18n)
      title = title.replace(/({{[\s\S]+?}})/, (m, str) =>
        str.replace(/{{([\s\S]*)}}/, (m, _) => vm.$t(_.trim()))
      );
    else if (__titleIsFunction__) title = item.meta.title;
    else title = vm.$t(item.name);
  } else title = (item.meta && item.meta.title) || item.name;
  return title;
};

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的并集, 两个数组的元素为数值或字符串
 */
export const getUnion = (arr1, arr2) => {
  return Array.from(new Set([...arr1, ...arr2]));
};

export const findNodeUpperByClasses = (ele, classes) => {
  let parentNode = ele.parentNode;
  if (parentNode) {
    let classList = parentNode.classList;
    if (
      classList &&
      classes.every(className => classList.contains(className))
    ) {
      return parentNode;
    } else {
      return findNodeUpperByClasses(parentNode, classes);
    }
  }
};
