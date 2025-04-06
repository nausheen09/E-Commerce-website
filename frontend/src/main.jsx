import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import { ToastContainer } from "react-toastify";
import { store } from "./store/store.js";
import App from './App.jsx'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Provider } from "react-redux";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter> 
        <App />
      </BrowserRouter>
    </Provider>
    <ToastContainer />
  </StrictMode>,
)
