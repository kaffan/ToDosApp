import './App.css';
import Header from './Components/Header';
import ButtonsList from './Components/ButtonsList';
import Tasks from './Components/Tasks';
import AddTaskForm from './Components/AddTaskForm';
import { useState } from 'react';

function App() {
  let [modal, setModalState] = useState(false);
  const [aTasks, setATasks] = useState(true);
  const [cTasks, setCTasks] = useState(false);
  const [pTasks, setPTasks] = useState(false);
  const taskHandler = () =>{
    setModalState((state)=>!state);
  }
  const aTaskHandler = () =>{
    setATasks(true);
    setCTasks(false);
    setPTasks(false);
  }
  const cTaskHandler = () =>{
    setATasks(false);
    setCTasks(true);
    setPTasks(false);
  }
  const pTaskHandler = () =>{
    setATasks(false);
    setCTasks(false);
    setPTasks(true);
  }
  return (
    <>
    <div className="App">
      {(modal) ? <AddTaskForm handle={taskHandler}/> : <></> }
      <Header />  
      <ButtonsList handle={taskHandler} aTaskHandler={aTaskHandler} cTaskHandler={cTaskHandler} pTaskHandler={pTaskHandler}/>
      <Tasks aTasks={aTasks} cTasks={cTasks} pTasks={pTasks} />    
    </div>
    </>
  );
}

export default App;
