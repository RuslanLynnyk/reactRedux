import { useDispatch,useSelector } from 'react-redux';
import { decrement, increment, reset } from './redux/counterSlice';
import { login, logout } from './redux/authSlice';
import { useState } from 'react';

function App() {
  const [number,setNumber] = useState(0)
  const dispatch = useDispatch();
  const {value} = useSelector(store => store.counter)
  const {isAuth} = useSelector(store => store.auth)


  const handleIncrement =() => {
    dispatch(increment(number))
  }



  return (
  <div className="app">

    {isAuth ?
    <button onClick={()=> dispatch ( logout())}>Logout</button>:
    <button onClick={()=> dispatch (login())}>Login</button>

}

    <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
   <h1>Counter:{value}</h1>
   <button onClick={handleIncrement}>Increment</button>
   <button onClick={()=>dispatch(decrement())}>Decrement</button>
   <button onClick={()=>dispatch(reset())}>Reset</button> 
  </div>
  );
}

export default App;
