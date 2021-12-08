import classes from "./App.module.scss";
import Header from './components/layout/Header/Header';

function App() {
  return (
    <div className={classes.app}>
        <Header/>
    </div>
  );
}

export default App;
