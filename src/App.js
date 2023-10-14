import './App.css';
import SummaryPage from './Pages/SummaryPage';
import OrderPage from './Pages/OrderPage';
import { useState } from 'react';
import CompletePage from './Pages/CompletePage';

function App() {
  const [step,setStep]=useState(0)

  return (
    <div style={{padding:'4rem'}}>
      {step===0 && <OrderPage  setStep={setStep}/>}
      {step===1 && <SummaryPage setStep={setStep}/>}
      {step===2 && <CompletePage setStep={setStep}/>}
      
    </div>
  );
}

export default App;
