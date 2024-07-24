// Import react and reactDom libraries
import React from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

function App (){
    return <input type ='number' min={5} max={7} style={{color:'red'}}/>
}

root.render(<App />);