import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRecipes } from "./store/thunk";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRecipes());
  });
  return <div className="App"></div>;
}

export default App;
