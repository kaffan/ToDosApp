import { Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import {useDispatch, useSelector} from 'react-redux';
import { useRef } from 'react';

const AddTaskForm = (props) =>{
    let inputRef = useRef('');
    const dispatch = useDispatch();
    const state = useSelector((state)=>state);
    function clickHandler(){
      console.log(inputRef.current.value)
      if(inputRef.current.value===''){
        alert('Task input cannot be left blank.');
      }
      else{
        console.log((state));
        let id = 0;
        if(state.length!=0){
          id = state[state.length-1].id + 1; 
        }
        else{
          id = 1;
        }
        dispatch({type:"Add",payload:{id:id,task:inputRef.current.value,mark:false}});
        props.handle()
      }
    }
    return(
        <>
          <div style={{position:"absolute",
          height:"100vh",
          zIndex:"3",
          backdropFilter:"blur(10px)",
          padding:"2rem 1.5rem",
          left:"0",right:"0",
          margin:"0 auto"}}
          >
            <IconButton aria-label="cancel" size="large" onClick={()=>props.handle()}>
              <CancelIcon />
            </IconButton>
            <div style={{position:"relative",top:"12rem",margin:"0 auto",
            backgroundColor:"#59cee0",
            width:"60%",
            textAlign:"left",
            padding:"20px",
            boxShadow:"10px 10px 50px 10px grey",
            borderRadius:"10px"
            }}
            >
              <div style={{padding:"0.5rem 1rem"}}>
                <label style={{padding:"2px"}}>New ToDo</label>
              </div>
              <div style={{padding:"1rem"}}>
                <input ref={inputRef} type="text" style={{padding:"0.7rem 1rem",borderStyle:"hidden",width:"60%"}} placeholder="Enter A New ToDo ......" />
              </div>
              <div style={{padding:"0.5rem 1rem"}}>
                <Button onClick={clickHandler} variant="contained">Add To List</Button>
              </div>
            </div>
          </div>
        </>
    );
}

export default AddTaskForm;