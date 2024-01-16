/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/vue3-recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest' // 支持最新語法
  },
  rules: {
    'no-undef': 'off', // 沒有import錯誤提示 (nuxt有自動導入 故關閉此設定)
    'no-console': 2, // 不得在代碼中留下 console
    'no-alert': 0,
    'no-bitwise': 0,
    camelcase: 2, // 變數、函式的命名一定要使用 camelCase
    curly: 2, // if else 底下代碼區塊一定要用大括號包起來
    eqeqeq: 0,
    'no-eq-null': 2, // 相等於 null 要使用 ===
    'brace-style': 2, // 起始大括號一定跟控制語句或聲明語句同一行
    'comma-style': 2, // 使用逗號前面一定要跟著變數聲明
    indent: ['error', 2], // 縮排一定要用 2 個空白
    'comma-spacing': 2, // 使用逗號後一定要加一個空白字元區隔
    'key-spacing': 2, // 定義物件成員使用分號之後一定要加一個空白字元
    'keyword-spacing': 2, // 使用內建關鍵字之後一定要加一個空白字元
    'arrow-spacing': 2,
    'no-spaced-func': 2, // 呼叫函式一定要函式名稱接著跟著小括號 ＝> funName()
    'space-before-function-paren': ['error', 'never'], // 定義函式時後面的小括號一定要跟著函式名稱，一定不能有空白字元
    'space-infix-ops': 2, // 要求中缀操作符周围有空格
    'space-unary-ops': 2, // 强制在一元操作符前后使用一致的空格
    'unicode-bom': 2, // 文件一定不能有 BOM
    'vue/html-indent': ['error', 2], // 在<template> 內 html標籤屬性縮排一定要用 2 個空白
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1
      },
      multiline: {
        max: 1
      }
    }], // 限制模板每行的最大數以提高可讀性
    'vue/multi-word-component-names': 0, // 不要求組件名稱為多單字組成
    'vue/return-in-computed-property': 0, // 不限制return不接參數
    'vue/comma-spacing': 2, // 在<template> 內，使用逗號後一定要加一個空白字元區隔
    'vue/space-infix-ops': 2, // 中綴運算符周圍有間距
    'vue/arrow-spacing': 2, // 箭頭函數中的箭頭前後有間距
    'vue/no-multiple-template-root': 0, // 不要求模板只有一個根元素
    'vue/singleline-html-element-content-newline': ['error', {
      ignoreWhenNoAttributes: true,
      ignoreWhenEmpty: true,
      ignores: ['pre', 'a', 'b', 'span', 'i', 'label', 'small', 'svg', 'td']
    }]
  }
}
