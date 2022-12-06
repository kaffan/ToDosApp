import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";

const ButtonsList = (props) =>{
    return(
        <>
          <Grid container spacing={2} sx={{margin:"2rem", backgroundColor:"#f5f4f7",width:"95vw",boxShadow:"20px 10px 50px grey"}}>
            <Grid item sx={{padding:"16px"}}>
                <item><Button onClick={()=>props.handle()} variant="outlined">Add task</Button></item>
            </Grid>
            <Grid item sx={{padding:"16px"}}>
                <item><Button onClick={props.aTaskHandler} variant="outlined">All Tasks</Button></item>
            </Grid>
            <Grid item sx={{padding:"16px"}}>
                <item><Button onClick={props.cTaskHandler} variant="outlined">Completed Tasks</Button></item>
            </Grid>
            <Grid item sx={{padding:"16px"}}>
                <item><Button onClick={props.pTaskHandler} variant="outlined">Pending Tasks</Button></item>
            </Grid>
          </Grid>
        </>
    );
}

export default ButtonsList;
