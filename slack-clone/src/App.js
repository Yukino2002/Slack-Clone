import './styles/app.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="app">
        {/* HEADER BEGIN */}
        <Header />
        {/* HEADER END */}
        <div className="app-body">
          {/* SIDEBAR BEGIN */}
          <Sidebar />
          {/* SIDEBAR END */}

          {/* REACT ROUTER BEGIN */}

          {/* REACT ROUTER END */}
        </div>
      </div>
    </>
  );
}

export default App;
