import './App.css';
import { AddTask } from './components/AddTask';
import ListTasks from './components/ListTasks';
import "./App.css"

function App() {
  return (
    <div style={{margin:"20px 100px"}}>
      <AddTask />
      <ListTasks />
    </div>
  );
}

export default App;
