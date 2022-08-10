// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!D:/git-work/components/src/alert/demo/basic.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!D:/git-work/components/src/alert/index.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!D:/git-work/components/src/alert/style/index.ts?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!D:/git-work/components/src/alert/style/index.less?dumi-raw-code';
import rawCode5 from '!!dumi-raw-code-loader!D:/git-work/components/src/common-provider/context.tsx?dumi-raw-code';
import rawCode6 from '!!dumi-raw-code-loader!D:/git-work/components/src/input/demo/input.tsx?dumi-raw-code';
import rawCode7 from '!!dumi-raw-code-loader!D:/git-work/components/src/input/index.tsx?dumi-raw-code';
import rawCode8 from '!!dumi-raw-code-loader!D:/git-work/components/src/input/input.tsx?dumi-raw-code';
import rawCode9 from '!!dumi-raw-code-loader!D:/git-work/components/src/input/BasicInput.tsx?dumi-raw-code';
import rawCode10 from '!!dumi-raw-code-loader!D:/git-work/components/src/input/inputNumber.tsx?dumi-raw-code';
import rawCode11 from '!!dumi-raw-code-loader!D:/git-work/components/src/input/style/index.ts?dumi-raw-code';
import rawCode12 from '!!dumi-raw-code-loader!D:/git-work/components/src/input/style/index.less?dumi-raw-code';
import rawCode13 from '!!dumi-raw-code-loader!D:/git-work/components/src/pagination/demo/basic.tsx?dumi-raw-code';
import rawCode14 from '!!dumi-raw-code-loader!D:/git-work/components/src/pagination/index.tsx?dumi-raw-code';
import rawCode15 from '!!dumi-raw-code-loader!D:/git-work/components/src/pagination/pagination.tsx?dumi-raw-code';
import rawCode16 from '!!dumi-raw-code-loader!D:/git-work/components/src/pagination/interface.ts?dumi-raw-code';
import rawCode17 from '!!dumi-raw-code-loader!D:/git-work/components/src/pagination/style/index.ts?dumi-raw-code';
import rawCode18 from '!!dumi-raw-code-loader!D:/git-work/components/src/pagination/style/index.less?dumi-raw-code';
import rawCode19 from '!!dumi-raw-code-loader!D:/git-work/components/src/select/demo/basic.tsx?dumi-raw-code';
import rawCode20 from '!!dumi-raw-code-loader!D:/git-work/components/src/select/index.tsx?dumi-raw-code';
import rawCode21 from '!!dumi-raw-code-loader!D:/git-work/components/src/select/nativeSelect.tsx?dumi-raw-code';
import rawCode22 from '!!dumi-raw-code-loader!D:/git-work/components/src/select/interface.ts?dumi-raw-code';
import rawCode23 from '!!dumi-raw-code-loader!D:/git-work/components/src/select/style/index.ts?dumi-raw-code';
import rawCode24 from '!!dumi-raw-code-loader!D:/git-work/components/src/select/style/index.less?dumi-raw-code';
import rawCode25 from '!!dumi-raw-code-loader!D:/git-work/components/src/upload/demo/basic.tsx?dumi-raw-code';
import rawCode26 from '!!dumi-raw-code-loader!D:/git-work/components/src/upload/index.tsx?dumi-raw-code';
import rawCode27 from '!!dumi-raw-code-loader!D:/git-work/components/src/upload/upload.tsx?dumi-raw-code';
import rawCode28 from '!!dumi-raw-code-loader!D:/git-work/components/src/upload/uploadList.tsx?dumi-raw-code';
import rawCode29 from '!!dumi-raw-code-loader!D:/git-work/components/src/upload/item.tsx?dumi-raw-code';
import rawCode30 from '!!dumi-raw-code-loader!D:/git-work/components/src/upload/progress.tsx?dumi-raw-code';
import rawCode31 from '!!dumi-raw-code-loader!D:/git-work/components/src/upload/style/index.ts?dumi-raw-code';
import rawCode32 from '!!dumi-raw-code-loader!D:/git-work/components/src/upload/style/index.less?dumi-raw-code';

export default {
  'alert-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/git-work/components/src/alert/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode1},"index.tsx":{"import":"..","content":rawCode2},"style/index.ts":{"import":"./style","content":rawCode3},"style/index.less":{"import":"./index.less","content":rawCode4},"common-provider/context.tsx":{"import":"../common-provider/context","content":rawCode5}},"dependencies":{"react":{"version":"17.0.2"},"prop-types":{"version":"15.8.1"},"classnames":{"version":"2.3.1"}},"identifier":"alert-basic"},
  },
  'input-input': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/git-work/components/src/input/demo/input.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode6},"index.tsx":{"import":"..","content":rawCode7},"input.tsx":{"import":"./input","content":rawCode8},"BasicInput.tsx":{"import":"./BasicInput","content":rawCode9},"common-provider/context.tsx":{"import":"../common-provider/context","content":rawCode5},"inputNumber.tsx":{"import":"./inputNumber","content":rawCode10},"style/index.ts":{"import":"./style","content":rawCode11},"style/index.less":{"import":"./index.less","content":rawCode12}},"dependencies":{"react":{"version":">=16.9.0"},"rc-util":{"version":"5.21.0"},"react-dom":{"version":">=16.9.0"},"rc-input-number":{"version":"7.3.4"}},"identifier":"input-input"},
  },
  'pagination-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/git-work/components/src/pagination/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode13},"index.tsx":{"import":"..","content":rawCode14},"pagination.tsx":{"import":"./pagination","content":rawCode15},"common-provider/context.tsx":{"import":"../common-provider/context","content":rawCode5},"interface.ts":{"import":"./interface","content":rawCode16},"style/index.ts":{"import":"../style","content":rawCode17},"style/index.less":{"import":"./index.less","content":rawCode18}},"dependencies":{"react":{"version":"17.0.2"},"classnames":{"version":"2.3.1"}},"identifier":"pagination-basic"},
  },
  'select-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/git-work/components/src/select/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode19},"index.tsx":{"import":"..","content":rawCode20},"nativeSelect.tsx":{"import":"./nativeSelect","content":rawCode21},"common-provider/context.tsx":{"import":"../common-provider/context","content":rawCode5},"interface.ts":{"import":"./interface","content":rawCode22},"style/index.ts":{"import":"../style","content":rawCode23},"style/index.less":{"import":"./index.less","content":rawCode24}},"dependencies":{"react":{"version":"17.0.2"}},"identifier":"select-basic"},
  },
  'upload-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/git-work/components/src/upload/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode25},"index.tsx":{"import":"..","content":rawCode26},"upload.tsx":{"import":"./upload","content":rawCode27},"common-provider/context.tsx":{"import":"../common-provider/context","content":rawCode5},"uploadList.tsx":{"import":"./uploadList","content":rawCode28},"item.tsx":{"import":"./item","content":rawCode29},"progress.tsx":{"import":"./progress","content":rawCode30},"style/index.ts":{"import":"./style","content":rawCode31},"style/index.less":{"import":"./index.less","content":rawCode32}},"dependencies":{"react":{"version":"17.0.2"},"rc-upload":{"version":"4.3.3"},"rc-util":{"version":"5.21.0"},"react-dom":{"version":">=16.9.0"}},"identifier":"upload-basic"},
  },
};
