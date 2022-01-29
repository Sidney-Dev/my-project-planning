import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DashBoard from './components/dashboard/Dashboard';
import NavBar from './components/layout/NavBar';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject
 from './components/projects/CreateProject';
function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/" component={DashBoard}></Route>
            <Route path="/project/:id" component={ProjectDetails}></Route>
            <Route path="/signin" component={SignIn}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/create" component={CreateProject}></Route>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
