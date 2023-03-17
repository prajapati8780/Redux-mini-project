
import { useDispatch } from 'react-redux';
import './App.css';
import Redux from './Component/Redux';
import { add } from './Reducer/slice';

function App() {
  const distpatch=useDispatch()
 
  const res=Number(localStorage.getItem("cart"))
  distpatch(add(res))
  return (
    <div>
      <Redux/>
    </div>
  );
}

export default App;
