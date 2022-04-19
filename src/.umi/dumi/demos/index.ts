// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!D:/git-work/components/src/alert/demo/basic.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!D:/git-work/components/src/alert/index.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!D:/git-work/components/src/common-provider/context.tsx?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!D:/git-work/components/src/alert/style/index.ts?dumi-raw-code';
import rawCode5 from '!!dumi-raw-code-loader!D:/git-work/components/src/alert/style/index.less?dumi-raw-code';
import rawCode6 from '!!dumi-raw-code-loader!D:/git-work/components/src/input/demo/input.tsx?dumi-raw-code';
import rawCode7 from '!!dumi-raw-code-loader!D:/git-work/components/src/input/index.tsx?dumi-raw-code';
import rawCode8 from '!!dumi-raw-code-loader!D:/git-work/components/src/input/input.tsx?dumi-raw-code';
import rawCode9 from '!!dumi-raw-code-loader!D:/git-work/components/src/input/inputNumber.tsx?dumi-raw-code';
import rawCode10 from '!!dumi-raw-code-loader!D:/git-work/components/src/input/style/index.ts?dumi-raw-code';
import rawCode11 from '!!dumi-raw-code-loader!D:/git-work/components/src/input/style/index.less?dumi-raw-code';
import rawCode12 from '!!dumi-raw-code-loader!D:/git-work/components/src/upload/demo/basic.tsx?dumi-raw-code';
import rawCode13 from '!!dumi-raw-code-loader!D:/git-work/components/src/upload/index.tsx?dumi-raw-code';
import rawCode14 from '!!dumi-raw-code-loader!D:/git-work/components/src/util/platFrom.ts?dumi-raw-code';
import rawCode15 from '!!dumi-raw-code-loader!D:/git-work/components/src/upload/style/index.ts?dumi-raw-code';
import rawCode16 from '!!dumi-raw-code-loader!D:/git-work/components/src/upload/style/index.less?dumi-raw-code';

export default {
  'alert-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_trela" */'D:/git-work/components/src/alert/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode1},"index.tsx":{"import":"..","content":rawCode2},"common-provider/context.tsx":{"import":"../common-provider/context","content":rawCode3},"style/index.ts":{"import":"../style","content":rawCode4},"style/index.less":{"import":"./index.less","content":rawCode5}},"dependencies":{"react":{"version":"17.0.2"},"prop-types":{"version":"15.8.1"}},"componentName":"alert","identifier":"alert-basic"},
  },
  'input-input': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_tupni" */'D:/git-work/components/src/input/demo/input.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode6},"index.tsx":{"import":"..","content":rawCode7},"input.tsx":{"import":"./input","content":rawCode8},"inputNumber.tsx":{"import":"./inputNumber","content":rawCode9},"common-provider/context.tsx":{"import":"../common-provider/context","content":rawCode3},"style/index.ts":{"import":"../style","content":rawCode10},"style/index.less":{"import":"./index.less","content":rawCode11}},"dependencies":{"react":{"version":"17.0.2"},"rc-input-number":{"version":"7.3.4"},"react-dom":{"version":">=16.9.0"}},"componentName":"input","identifier":"input-input"},
  },
  'upload-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_daolpu" */'D:/git-work/components/src/upload/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode12},"index.tsx":{"import":"..","content":rawCode13},"util/platFrom.ts":{"import":"../util/platFrom","content":rawCode14},"style/index.ts":{"import":"./style","content":rawCode15},"style/index.less":{"import":"./index.less","content":rawCode16}},"dependencies":{"react":{"version":">=16.9.0"},"rc-upload":{"version":"4.3.3"},"react-dom":{"version":">=16.9.0"},"is-mobile":{"version":"3.1.1"}},"componentName":"upload","identifier":"upload-basic"},
  },
};
