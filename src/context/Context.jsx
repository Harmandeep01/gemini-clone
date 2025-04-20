import { createContext, useEffect, useState } from "react";
import main from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("")
    const [recentPrompt, setRecentPrompt] = useState('')
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState('');

  
  const newChat = () => {
   setShowResult(false);
    setLoading(false);
  }

  const onSent = async (prompt) => {
    try {
      setLoading(true);
      setShowResult(true);
      setInput('')

      if(prompt !== undefined){
        setRecentPrompt(prompt)
        await main(prompt, setResultData, setLoading);
      }else{
        setRecentPrompt(input);
        setPrevPrompt(prev => [...prev, input]);
        await main(input, setResultData, setLoading);
      }
    } catch (err) {
      console.error("API call error:", err);
    }
  };

  useEffect(() => {
    // onSent();
  }, []);

  const contextValue = {
    prevPrompt,
    setRecentPrompt,
    recentPrompt,
    loading,
    resultData,
    input,
    setInput,
    setPrevPrompt,
    onSent,
    showResult,
    newChat
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
