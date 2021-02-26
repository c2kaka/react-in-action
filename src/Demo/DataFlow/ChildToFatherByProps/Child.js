import React, {Component} from 'react';

class Child extends Component {
    state = {
        text: '子组件的文本'
    };

    changeText = () => {
        this.props.changeFatherText(this.state.text);
    };

    render() {
        return (
          <div className="child">
            {/* 注意这里把修改父组件文本的动作放在了 Child 里 */}
            <button onClick={this.changeText}>
              点击更新父组件的文本
            </button>
          </div>
        );
    }
}

export default Child;