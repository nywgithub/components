import { default as React } from 'react';
import Button from '..';
import { SuccessIcon } from '../../icon';
import '../style';
import './button.less';

export default () => {
  return (
    <div className="button-example">
      <h2>基本使用</h2>
      <Button>默认</Button>
      <Button type="primary">主色调</Button>
      <Button type="info">信息</Button>
      <Button type="warning">警告</Button>
      <Button type="error">错误</Button>
      <Button type="success">成功</Button>
      <Button disabled>禁用</Button>
      <Button type="primary" dashed>
        虚线
      </Button>
      <Button type="primary" loading>
        加载中
      </Button>
      {/* <Button type="primary" block>
        100%
      </Button> */}
      <h2>空心按钮</h2>
      <Button type="primary" hollow>
        主色调
      </Button>
      <Button type="info" hollow>
        信息
      </Button>
      <Button type="warning" hollow>
        警告
      </Button>
      <Button type="error" hollow>
        错误
      </Button>
      <Button type="success" hollow>
        成功
      </Button>
      <Button type="error" hollow disabled>
        禁用
      </Button>
      <Button type="info" hollow dashed>
        虚线
      </Button>
      <Button type="error" hollow dashed disabled>
        禁用
      </Button>
      <Button type="primary" hollow loading>
        加载中
      </Button>
      {/* <Button type="primary" hollow block>
        100%
      </Button> */}
      <h2>禁用状态</h2>
      <Button disabled>默认</Button>
      <Button type="primary" disabled>
        主色调
      </Button>
      <Button type="info" disabled>
        信息
      </Button>
      <Button type="warning" disabled>
        警告
      </Button>
      <Button type="error" disabled>
        错误
      </Button>
      <Button type="success" disabled>
        成功
      </Button>
      {/* <Button type="primary" disabled block>
        100%
      </Button> */}
      <Button disabled hollow>
        默认
      </Button>
      <Button type="primary" disabled hollow>
        主色调
      </Button>
      <Button type="info" disabled hollow>
        信息
      </Button>
      <Button type="warning" disabled hollow>
        警告
      </Button>
      <Button type="error" disabled hollow>
        错误
      </Button>
      <Button type="success" disabled hollow>
        成功
      </Button>
      <h2>三种大小</h2>
      <Button type="primary" size="large">
        large
      </Button>
      <Button type="primary">default</Button>
      <Button type="primary" size="small">
        small
      </Button>
      <h2>圆形按钮</h2>
      <Button type="primary" circle>
        <SuccessIcon />
      </Button>
      <Button type="info" circle>
        <SuccessIcon />
      </Button>
      <Button type="error" circle>
        <SuccessIcon />
      </Button>
      <Button type="success" circle>
        <SuccessIcon />
      </Button>
      <Button type="primary" disabled circle>
        <SuccessIcon />
      </Button>
      <Button type="warning" dashed circle>
        <SuccessIcon />
      </Button>
      <Button type="primary" hollow dashed circle>
        <SuccessIcon />
      </Button>
      <Button type="primary" loading circle>
        <SuccessIcon />
      </Button>
      <Button type="error" hollow circle>
        <SuccessIcon />
      </Button>
      <Button type="info" hollow circle disabled>
        <SuccessIcon />
      </Button>
      <Button type="primary" circle size="small">
        小
      </Button>
      <Button type="primary" circle>
        中
      </Button>
      <Button type="primary" circle size="large">
        大
      </Button>
      <h2>链接</h2>
      <Button href="#">主页</Button>
      <Button type="primary" href="https://github.com/nywgithub/components.git">
        GITHUB
      </Button>
      <Button href="#" disabled>
        禁用
      </Button>
    </div>
  );
};
