import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store.js'
import { Provider } from "react-redux"
import { BrowserRouter, Routes, Route } from "react-router"
import Dust2 from "./routes/Dust2.jsx"
import Mirage from "./routes/Mirage.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/dust2' element={<Dust2 />}/>
          <Route path='/mirage' element={<Mirage />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
