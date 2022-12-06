const Reducer = (state = [],action) =>{
    let arr;
    console.log(action);
    switch(action.type){
        case 'Add': 
                  state = [...state, action.payload];
                  break;
        case 'Delete':
                  arr = state.filter((obj)=>obj.id!==action.payload);
                  state = [...arr];
                  break;
        case 'Mark':
                  arr = state;
                  arr = arr.map((obj)=>{
                  if(obj.id==action.payload){
                        obj.mark = !(obj.mark);
                    }
                    return obj;
                  });   
                  state = [...arr];
                  break;                 
    }
    console.log(state);
    return state;
}
export default Reducer;