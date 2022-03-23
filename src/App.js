import { useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  // App에서 컴포넌트를 보여주는게 아니라 router를 보여줌
  // url에 따른 
  return (
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path={"/"} element={<Home/>} />
      <Route path={"/movie/:id"} element={<Detail/>} />
    </Routes>
  </Router>);
}

export default App;









// coins
// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers") // ?limit=100
//     .then((response) => response.json())
//     .then((json) => {
//       setCoins(json);
//       setLoading(false);
//     });
//   }, []);

//   return (
//     <div>
//       <h1>The Coins! ({coins.length})</h1>
//       {loading ? <strong>Loading...</strong> : null}
//       <ul>
//         {coins.map((coin) => (
//           <li key={coin.id}>
//             {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }


//TODO List
// function App() {
//   const [toDo, setToDo] = useState("");
//   const [toDos, setToDos] = useState([]);
//   const onChange = (event) => setToDo(event.target.value);

//   const onSumit = (event) => {
//     event.preventDefault();
//     if (toDo === "") {
//       return;
//     }
//     setToDos((prev) => [...prev, toDo]);
//     setToDo("");
//     console.log(toDos);
//   };

//   const onDeleteBtn = (dIx) => {
//     console.log(dIx);
//     setToDos((prev) => prev.filter((item, index) => index !== dIx));
//   };

//   return (
//     <div>
//       <h1>My To Dos ({toDos.length})</h1>
//       <form onSubmit={onSumit}>
//         <input 
//           onChange={onChange}
//           value={toDo}
//           text="text"
//           placeholder="Write your to do..."
//           />
//           <button>Add to Do</button>
//         </form>
//         <ul>
//         {toDos.map((td, index) => (
//             <li key={index}>
//               {td} 
//               <button onClick={() => onDeleteBtn(index)}>X</button>
//             </li>
//         ))}
//         </ul>
//     </div>
//   );
// }




// function Hello() {
//   // useEffect(()=> {
//   //   // Hello 컴포넌트가 보일 때 마다 출력
//   //   // App에서 show===true일 때 마다 호출
//   //   console.log("created :)"); 

//   //   // clean up function
//   //   // 컴포넌트가 destory될때 호출
//   //   return ()=> console.log("distoryed :(");
//   // }, []);

//   function byeFn() {
//     console.log("bye :(");
//   }
//   function hiFn() {
//     console.log("created :)");
//     return byeFn;
//   }

//   useEffect(hiFn, []);

//   return <h1>Hello</h1>;
// }

// function App() {
//   const [showing, setShowing] = useState(false);
//   const onClick =()=> setShowing((prev) => !prev);
//   return (
//     <div>
//       <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>      
//       {showing ? <Hello/> : null}
//     </div>
//   );
// }


// function App() {
//   const [counter, setCounter] = useState(0);
//   const [keyword, setKeyword] = useState("");

//   const onClick = () => setCounter((prev) => prev + 1);

//   const onChange = (event) => setKeyword(event.target.value);

//   console.log("i run  all the time"); // render 될때 마다 출력 

//   useEffect(() => {
//     console.log("i run only once.");
//   }, []);

//   useEffect(() => {
//     console.log("i run when 'keyword' changes.");
//   }, [keyword]);


//   return (
//     <div>
//       <input type="text" placeholder="Search here..." onChange={onChange} value={keyword}></input>
//       <button onClick={onClick}>Click Me</button> 
//       <h1>{counter}</h1>
//       {/* <Button text={'Continue'} onClick={onClick}></Button> */}
//     </div>
//   );
// }

