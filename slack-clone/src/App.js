import './styles/app.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <div className="app">
      </div>

      {/* HEADER BEGIN */}
      <Header />
      {/* HEADER END */}

      {/* SIDEBAR BEGIN */}
      <Sidebar />
      {/* SIDEBAR END */}
    </>
  );
}

export default App;
