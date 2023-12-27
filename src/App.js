import Header from './components/Header'
import Students from './components/Students'
import Faculty from './components/Faculty'
import Programs from './components/Programs'
import Research from './components/Research'
import Admissions from './components/Admissions'
import Home from './components/Home'
import {Route, Switch} from 'react-router-dom'
import './App.css';

const App =() => {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/students' component={Students}/>
        <Route exact path='/faculty' component={Faculty}/>
        <Route exact path='/programs' component={Programs}/>
        <Route exact path='/research-grants' component={Research}/>
        <Route exact path='/admissions' component={Admissions}/>
      </Switch>
    </>
  );
}

export default App;
