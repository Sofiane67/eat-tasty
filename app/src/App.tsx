import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Home from "./pages/Home/Home";
import classes from "./App.module.scss";
import Logo from './components/Logo/Logo';
import Menu from './pages/Menu/Menu';

function App() {
  return (
    <div className={classes.app}>
        <Header/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="menu" element={<Menu/>} />
        </Routes>
    </div>
  );
}

export default App;
