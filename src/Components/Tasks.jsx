import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";

const Tasks = (props) =>{
    const state = useSelector((state)=>state);
    return(
        <>
          <Grid container spacing={2} sx={{margin:"2rem",width:"95vw"}}>
            {/* <Grid item xs={4}>
                <item><TaskCard /></item>
            </Grid> */}
            {console.log(state)}
            {(state && props.aTasks) ? state.map((obj)=><Grid item xs={4}><item><TaskCard taskObj={obj} /></item></Grid>) : <></>}
            {(state && props.cTasks) ? state.map((obj)=>(obj.mark)?<Grid item xs={4}><item><TaskCard taskObj={obj} /></item></Grid>:<></>) : <></>}
            {(state && props.pTasks) ? state.map((obj)=>(!obj.mark)?<Grid item xs={4}><item><TaskCard taskObj={obj} /></item></Grid>:<></>) : <></>}
          </Grid>
        </>
    );
}

export default Tasks;