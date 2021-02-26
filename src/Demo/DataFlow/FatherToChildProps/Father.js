import React from 'react';
import Child from './Child';

class Father extends React.Component {
    state = {
        text: "初始化的父组件的文本"
    };

    changeText = () => {
        this.setState({
            text: "改变后的父组件文本"
          });
    };

    render() {
        return (
          <div className="father">
            <button onClick={this.changeText}>
              点击修改父组件传入子组件的文本
            </button>
            {/* 引入子组件，并通过 props 下发具体的状态值实现父-子通信 */}
            <Child fatherText={this.state.text} />
          </div>
        );
      }
}

export default Father;