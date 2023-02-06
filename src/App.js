import './App.css';

import Header from './components/Header';
import History from './components/History';
import Racing from './components/Racing';
import Today from './components/Today';

function App() {
  return (
    <div className="App">
      <Header />
      <History />
      <Today />
      <Racing />
    </div>
  );
}

export default App;
