import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useSelector, useDispatch } from 'react-redux';

export default function TaskCard(props) {
  const obj = props.taskObj;
  const state = useSelector((state)=>state);
  const dispatch = useDispatch();
  console.log(obj);
  const deleteHandler = (id) =>{
    dispatch({type:"Delete",payload:id});
  }
  const markHandler = (id) =>{
    dispatch({type:"Mark",payload:id});
  }
  return (
    <Card sx={{ maxWidth: 345, boxShadow:"20px 20px 50px grey" }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{textAlign:"left"}} variant="h5" component="div">
            {obj.task}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <CardContent>
        <Button onClick={()=>deleteHandler(obj.id)} sx={{margin:"0 5px"}} size="small" variant="outlined" color="error">
          Delete
        </Button>
        <Button onClick={()=>markHandler(obj.id)} sx={{margin:"0 5px"}} size="small" variant="contained" color="primary">
          {(obj.mark) ? <StarIcon  sx={{color:"yellow"}}/> : <StarIcon sx={{color:"white"}} />}
        </Button>
        </CardContent>
      </CardActions>
    </Card>
  );
}
