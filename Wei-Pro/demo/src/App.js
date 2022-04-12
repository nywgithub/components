/*
 * @Author: niyongwei
 * @Date: 2022-04-07 10:32:36
 * @LastEditors: niyongwei
 * @LastEditTime: 2022-04-08 11:45:47
 * @FilePath: \git-work\components\Wei-Pro\demo\src\App.js
 * @Description: 
 * 
 * Copyright (c) 2022 by nyw, All Rights Reserved. 
 */
import {
  Upload, Alert
} from 'weiui'
import './App.css';

function App() {
  return (
    <div className="App">
     
        <Upload></Upload>
        <Alert kind="warning">这是一条警告提示?</Alert>
    </div>
  );
}

export default App;
