import React from 'react'
import { useState } from 'react';
const Content = () => {
    let [input,setinput] = useState("");
    let [taskobj,settaskobj] = useState([])
    let [id,setid]= useState(1)
    

  return (
    <div id="Content">
        <div> <input onChange={(e)=>{
             console.log(e.target.value);
             setinput(e.target.value);
             

        }} value={input}/>
        <button onClick={()=>{
            let exsits = taskobj.some((CurrentElement)=>{
                console.log(Array.isArray(taskobj));
                return CurrentElement.task == input
            })
            if(exsits){
                console.log("This task already added to the list");
                return
            }
          
               console.log(exsits);
               setid(id+1)
               settaskobj([...taskobj,{id:id,task:input,completed:false}])
               console.log(taskobj);// here it will update upto the last task because it updates for the every re renders now it will show upto the last task
  
        }}>add</button></div>
        <div id="Task_Box"> { taskobj.map((CurrentElement)=>{
                 return(<div id="Task" key={CurrentElement.id}><input type='checkbox' checked = {CurrentElement.completed} onChange={()=>{
                                       let updatedArray= taskobj.map((element)=>{
                                                if(element.id == CurrentElement.id){
                                                    return {...element,completed : !CurrentElement.completed}
                                                }
                                                return element
                                        })
                                        settaskobj(updatedArray);
                        
                 }}  />{`${CurrentElement.id}. ${CurrentElement.task} `}<button id="Delete" onClick={()=>{

                 }}>delete</button></div>)
            })}
</div>
          

    </div>
  )
}

export default Content