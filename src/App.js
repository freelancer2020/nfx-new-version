
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import EntryPage from './Components/Entry';
import Page from './Components/SelectClient/SelectPage';


const App = () => {

  return (
    <BrowserRouter>
        <div>
          <Route path='/' exact component={EntryPage} />
          <Route path='/Login' component={Login} />
          <Route path='/selectClient' component={Page} />
        </div>
    </BrowserRouter>
  );

}

export default App;
