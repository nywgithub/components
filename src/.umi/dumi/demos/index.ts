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
import rawCode13 from '!!dumi-raw-code-loader!D:/git-work/components/src/upload/demo/basic.tsx?dumi-raw-code';

export default {
  'alert-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_trela" */'D:/git-work/components/src/alert/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode1},"index.tsx":{"import":"..","content":rawCode2},"style/index.ts":{"import":"../style","content":rawCode3},"style/index.less":{"import":"./index.less","content":rawCode4},"common-provider/context.tsx":{"import":"../common-provider/context","content":rawCode5}},"dependencies":{"react":{"version":"17.0.2"},"prop-types":{"version":"15.8.1"},"classnames":{"version":"2.3.1"}},"componentName":"alert","identifier":"alert-basic"},
  },
  'input-input': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_tupni" */'D:/git-work/components/src/input/demo/input.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode6},"index.tsx":{"import":"..","content":rawCode7},"input.tsx":{"import":"./input","content":rawCode8},"BasicInput.tsx":{"import":"./BasicInput","content":rawCode9},"common-provider/context.tsx":{"import":"../common-provider/context","content":rawCode5},"inputNumber.tsx":{"import":"./inputNumber","content":rawCode10},"style/index.ts":{"import":"./style","content":rawCode11},"style/index.less":{"import":"./index.less","content":rawCode12}},"dependencies":{"react":{"version":">=16.9.0"},"rc-util":{"version":"5.21.0"},"react-dom":{"version":">=16.9.0"},"rc-input-number":{"version":"7.3.4"}},"componentName":"input","identifier":"input-input"},
  },
  'upload-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_daolpu" */'D:/git-work/components/src/upload/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode13}},"dependencies":{},"componentName":"upload","identifier":"upload-basic"},
  },
};
