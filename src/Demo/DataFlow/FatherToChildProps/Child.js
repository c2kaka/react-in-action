export default function Child(props) {
    return (
      <div className="child">
        <p>{`子组件所接收到的来自父组件的文本内容是：[${props.fatherText}]`}</p>
      </div>
    );
  }