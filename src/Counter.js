import React,{useState} from "react";
import OddEvenRes from "./OddEvenRes";


const Counter = ( {inintialValue} ) => {

  const [count, setCount] = useState(inintialValue);

  const onIncrease = () => {
    setCount(count + 1);
  }
  const onDecrease = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <OddEvenRes count ={count}/>
    </div>
  );
};


Counter.defaltProps = {
  inintialValue: 0,
}

export default Counter;