import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";



// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { Padre } from './07-tarea-memo/Padre'
// import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>
  </BrowserRouter>
)
