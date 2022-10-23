import './App.css';
import useFetchData from "./useFetchData";
import { BsFillDice5Fill } from 'react-icons/bs';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';


export default function App() {

  const { text, fetchAdvice, loading } = useFetchData()  //destruction

  return (
    <div className="card">
      <div className='advice'>
        <h1 className='title'>Advice #{text?.id}</h1>
        {loading ? <AiOutlineLoading3Quarters />
          : <p>{text.advice}</p>
        }
        <div className='line' />
        <button className='btn' onClick={fetchAdvice}>
          <BsFillDice5Fill className='dice' />
        </button>
      </div>
    </div>
  );
}

