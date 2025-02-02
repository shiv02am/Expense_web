import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AddTransaction } from "./components/AddTransaction";
import Balance from "./components/Balance";
import { Header } from "./components/Header";
import {IncomeExpense} from "./components/IncomeExpense";
import {TransactionList} from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList/>
        <AddTransaction/>
        
      </div>
    </GlobalProvider>
    </>
  )
}

export default App
