import React, {useState, useEffect} from 'react';

export default function AnimatedNumber({ value, duration = 1000, delay = 0 }) {
  const [count, setCount] = useState("0");

  useEffect(() => {
    setTimeout(() => {
      let start = 0;
      // first three numbers from props
      const end = parseInt(value.toString().substring(0,3))
      // if zero, return
      if (start === end) return;

      // find duration per increment
      // let totalMilSecDur = parseInt(duration);
      let incrementTime = parseInt(duration)/end;

      // timer increments start counter 
      // then updates count
      // ends if start reaches end
      let timer = setInterval(() => {
        start += 1;
        setCount(String(start) + value.toString().substring(3))
        if (start === end) clearInterval(timer)       
      }, incrementTime);
    }, delay);

    // dependency array
  }, [value, duration, delay]);

  return (
    <span>{count}</span>
  );
}
