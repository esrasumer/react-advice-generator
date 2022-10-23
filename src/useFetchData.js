import { useEffect, useState } from "react";
import axios from 'axios';

export default function useFetchData(){

    const url="https://api.adviceslip.com/advice"
    const [text, setText] = useState([]);
    const [loading,setLoading] = useState(false)
  
    const fetchAdvice = async () => {
      setLoading(true)

      const { data } = await axios.get(url);
  
      setText(data.slip)

      setLoading(false)
    }
  
    useEffect(() => {
      fetchAdvice()
    }, [])
  
return {text,fetchAdvice,loading} 

}
