import './App.css';
import SchedList from './components/SchedList';
import Semester from './components/Semester';
import NewStudent from './components/NewStudent';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Switch>
        <Route exact path='/' component={Semester} />
        <Route path='/schedule' component={SchedList} />
        <Route path ='/new-student' component={NewStudent} />
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;