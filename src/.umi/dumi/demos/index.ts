// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!D:/git-work/components/src/alert/demo/basic.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!D:/git-work/components/src/alert/index.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!D:/git-work/components/src/alert/style/index.ts?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!D:/git-work/components/src/alert/style/index.less?dumi-raw-code';
import rawCode5 from '!!dumi-raw-code-loader!D:/git-work/components/src/upload/demo/basic.tsx?dumi-raw-code';
import rawCode6 from '!!dumi-raw-code-loader!D:/git-work/components/src/upload/index.tsx?dumi-raw-code';
import rawCode7 from '!!dumi-raw-code-loader!D:/git-work/components/src/util/platFrom.ts?dumi-raw-code';

export default {
  'alert-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_trela" */'D:/git-work/components/src/alert/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode1},"index.tsx":{"import":"..","content":rawCode2},"style/index.ts":{"import":"../style","content":rawCode3},"style/index.less":{"import":"./index.less","content":rawCode4}},"dependencies":{"react":{"version":"17.0.2"},"prop-types":{"version":"15.8.1"}},"componentName":"alert","identifier":"alert-basic"},
  },
  'upload-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_daolpu" */'D:/git-work/components/src/upload/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode5},"index.tsx":{"import":"..","content":rawCode6},"util/platFrom.ts":{"import":"../util/platFrom","content":rawCode7}},"dependencies":{"react":{"version":">=16.9.0"},"rc-upload":{"version":"4.3.3"},"react-dom":{"version":">=16.9.0"},"is-mobile":{"version":"3.1.1"}},"componentName":"upload","identifier":"upload-basic"},
  },
};
