import classes from "./App.module.scss";
import Header from './components/layout/Header/Header';
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className={classes.app}>
        <Header/>
        <Home/>
    </div>
  );
}

export default App;
