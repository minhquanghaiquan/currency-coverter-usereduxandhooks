import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import Home from './components/Home';

const store = configureStore();

function App(props) {


 

  return (
    <div className="App">
    <Provider store={store}>
      
        <Home/>
      
    </Provider>
    </div>
  );
}



export default App;
