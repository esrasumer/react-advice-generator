import Advice from "./components/Advice";
import Title from "./components/Title";
import axios from 'axios';
import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [advice,setAdvice] = useState("");
  return (
    <div className="card">
      <Title />
      <Advice />
    </div>
  );
}

export default App;
