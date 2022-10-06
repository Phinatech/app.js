// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   let name = " Juddy Iconic";

//   const [counter, setCounter] = useState(0);

//   const increment = () => {
//     setCounter(counter + 1);
//   };

//   const decrement = () => {
//     if (counter > 0) {
//       setCounter((count) => count - 1);
//     }
//   };

//   let quotes = [
//     "This is the day the lord has made",
//     "I am a legend",
//     "I am God's grace",
//   ];

//   return (
//     <div>
//       <div className="Container">
//         Hello {name}
//         <div>{counter % 4}</div>
//         <div className="Contain">{quotes[counter % 3]}</div>
//         <div className="wrapper">
//           <button onClick={decrement}>-</button>
//           <button onClick={increment}>+</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
import React, { useState } from "react";
import "./App.css";
const App = () => {
  // let counter;

  const [counter, setCounter] = useState(0);

  const [text, setText] = useState("");

  console.log("this is text", text);

  const [quote, setQuote] = useState([
    "This is the day the lord has made",
    "only the intelligent one's are ready to learn",
    "He who fights to run away, leaves to fight another day",
  ]);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter <= 0) {
      setCounter(quote.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  const add = () => {
    setQuote([...quote, text]);
  };

  console.log(quote);

  console.log(counter);

  return (
    <div className="Container">
      <input
        placeholder="Enter your quotes"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={add}>Add Quotes</button>
      <br />
      <br />
      <br />
      <br />
      <div>{quote[counter % quote.length]}</div>
      <div className="wrapper">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default App;
