import React from 'react';
import Child from './Child';

class Father extends React.Component {
    state = {
        text: "初始化的父组件的文本"
    };

    changeText = (newText) => {
        this.setState({
            text: newText
        });
    };

    render() {
        return (
          <div className="father">
            <p>{`父组件的文本内容是：[${this.state.text}]`}</p>
            {/* 引入子组件，并通过 props 中下发可传参的函数 实现子-父通信 */}
            <Child changeFatherText={this.changeText} />
          </div>
        );
      }
}

export default Father;