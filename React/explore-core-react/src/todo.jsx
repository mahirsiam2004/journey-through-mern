// function ToDo({task,isDone}){
//     return(
//         <li>Task:{task} </li>
//     )
// }
// export default ToDo

// function ToDo({ task, isDone }) {
//   if (isDone === true) {
//     return <li>Done:{task} </li>;
//   }
//   else{
//     return <li>Do now:{task}</li>
//   }
// }
// export default ToDo;


function ToDo({ task, isDone }) {

    return isDone ? <li>Done : {task}</li> : <li>Not Done : {task}</li>
}
export default ToDo;
