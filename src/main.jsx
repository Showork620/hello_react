import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const myInfo = {
  name: 'Taro',
  age: 20,
};

const MyContext = createContext(myInfo);

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyContext.Provider value={myInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MyContext.Provider>
)

export default MyContext;