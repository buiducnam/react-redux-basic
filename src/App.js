import Menu from 'components/common/Menu';
import { BrowserRouter as Router } from 'react-router-dom';
import ContentApp from 'untils/ContentApp';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Menu />
        <ContentApp />
      </div>
    </Router>
  );
}

export default App;
