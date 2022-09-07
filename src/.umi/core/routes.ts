// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from 'D:/git-work/components/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')})],
    "component": ((props) => dynamic({
          loader: async () => {
            const React = await import('react');
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ 'D:/git-work/components/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { usePrefersColor, context } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          },
          loading: () => null,
        }))()
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'D:/git-work/components/node_modules/dumi-theme-default/es/layout.js')})],
    "routes": [
      {
        "path": "/popover/demo/example",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'popover__demo__example.md' */'D:/git-work/components/src/popover/demo/example.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/popover/demo/example.md",
          "updatedTime": 1662370892000,
          "slugs": [],
          "nav": {
            "path": "/popover",
            "title": "Popover"
          },
          "group": {
            "path": "/popover/demo",
            "title": "Demo"
          },
          "title": "Example"
        },
        "title": "Example - W"
      },
      {
        "path": "/getting-started",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__getting-started.md' */'D:/git-work/components/docs/getting-started.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started.md",
          "updatedTime": 1649301324000,
          "nav": {
            "title": "快速上手",
            "order": 1,
            "path": "/getting-started"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "快速上手",
              "heading": "快速上手"
            },
            {
              "depth": 2,
              "value": "安装",
              "heading": "安装"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 3,
              "value": "自动按需加载",
              "heading": "自动按需加载"
            }
          ],
          "title": "快速上手"
        },
        "title": "快速上手 - W"
      },
      {
        "path": "/help",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__help.md' */'D:/git-work/components/docs/help.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/help.md",
          "updatedTime": 1649248345000,
          "nav": {
            "title": "帮助",
            "path": "/help"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "帮助",
              "heading": "帮助"
            }
          ],
          "title": "帮助"
        },
        "title": "帮助 - W"
      },
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__index.md' */'D:/git-work/components/docs/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1649301324000,
          "title": "weiui",
          "hero": {
            "title": "weiui",
            "desc": "<div class=\"markdown\"><p>文档站点基于 dumi 生成</p></div>",
            "actions": [
              {
                "text": "快速上手",
                "link": "/getting-started"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "特性 1",
              "desc": "<div class=\"markdown\"><p>Balabala</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "特性 2",
              "desc": "<div class=\"markdown\"><p>Balabala</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "特性 3",
              "desc": "<div class=\"markdown\"><p>Balabala</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2020<br />Powered by <a href=\"https://d.umijs.org/\" target=\"_blank\">dumi<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>",
          "slugs": []
        },
        "title": "weiui - W"
      },
      {
        "path": "/component/alert",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__component__alert.md' */'D:/git-work/components/docs/component/alert.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/component/alert.md",
          "updatedTime": 1659940915000,
          "slugs": [
            {
              "depth": 1,
              "value": "Alert 警告提示",
              "heading": "alert-警告提示"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Alert 警告提示",
          "hasPreviewer": true,
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Alert 警告提示 - W"
      },
      {
        "path": "/component/dialog",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__component__dialog.md' */'D:/git-work/components/docs/component/dialog.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/component/dialog.md",
          "updatedTime": 1662518587569,
          "slugs": [
            {
              "depth": 1,
              "value": "Dialog 弹框",
              "heading": "dialog-弹框"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Dialog 弹框",
          "hasPreviewer": true,
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Dialog 弹框 - W"
      },
      {
        "path": "/component/input",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__component__input.md' */'D:/git-work/components/docs/component/input.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/component/input.md",
          "updatedTime": 1659952494000,
          "slugs": [
            {
              "depth": 1,
              "value": "Input 输入框",
              "heading": "input-输入框"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Input 输入框",
          "hasPreviewer": true,
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Input 输入框 - W"
      },
      {
        "path": "/component/pagination",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__component__pagination.md' */'D:/git-work/components/docs/component/pagination.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/component/pagination.md",
          "updatedTime": 1659940915000,
          "slugs": [
            {
              "depth": 1,
              "value": "Pagination 分页",
              "heading": "pagination-分页"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Pagination 分页",
          "hasPreviewer": true,
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Pagination 分页 - W"
      },
      {
        "path": "/component/popover",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__component__popover.md' */'D:/git-work/components/docs/component/popover.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/component/popover.md",
          "updatedTime": 1662022131000,
          "slugs": [
            {
              "depth": 1,
              "value": "Popover 弹出层",
              "heading": "popover-弹出层"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Popover 弹出层",
          "hasPreviewer": true,
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Popover 弹出层 - W"
      },
      {
        "path": "/component/select",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__component__select.md' */'D:/git-work/components/docs/component/select.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/component/select.md",
          "updatedTime": 1660125088000,
          "slugs": [
            {
              "depth": 1,
              "value": "Select 选择",
              "heading": "select-选择"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Select 选择",
          "hasPreviewer": true,
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Select 选择 - W"
      },
      {
        "path": "/component/upload",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__component__upload.md' */'D:/git-work/components/docs/component/upload.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/component/upload.md",
          "updatedTime": 1659952494000,
          "slugs": [
            {
              "depth": 1,
              "value": "Upload 上传",
              "heading": "upload-上传"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Upload 上传",
          "hasPreviewer": true,
          "nav": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Upload 上传 - W"
      },
      {
        "path": "/popover/demo",
        "meta": {},
        "exact": true,
        "redirect": "/popover/demo/example"
      },
      {
        "path": "/popover",
        "meta": {},
        "exact": true,
        "redirect": "/popover/demo"
      },
      {
        "path": "/component",
        "meta": {},
        "exact": true,
        "redirect": "/component/alert"
      }
    ],
    "title": "W",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
