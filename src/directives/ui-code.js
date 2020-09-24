import iCrush from 'icrush';
import WSCode from 'wscode';
import prettify from 'wscode-prettify';

iCrush.directive('uiCode', {

  inserted: el => {
    let code = el.innerHTML;
    new WSCode({

      // 编辑器挂载点
      el,

      // 初始化文本
      content: code.replace(/&lt;/g,'<').replace(/&gt;/g,'>'),

      // 着色方法
      shader: prettify,

      // 是否只读
      readonly: true

    });
  }

});