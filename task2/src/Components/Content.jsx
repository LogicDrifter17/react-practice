
import React from 'react';
import { useState } from 'react';

const Content = () => {
    let [input, setinput] = useState("");
    let [taskobj, settaskobj] = useState([]);
    let [totaltaskobj,settotaltaskobj]=useState([])
    let [id, setid] = useState(1);
    let [filter, setfilter] = useState({
        All: true,
        Completed: false,
        Pending: false
    });

    return (
        <div id="Content">

            <div>
                <input
                    onChange={(e) => {
                        console.log(e.target.value);
                        setinput(e.target.value);
                    }}
                    value={input}
                />

                <button
                    onClick={() => {
                        let exsits = totaltaskobj.some((CurrentElement) => {
                            console.log(Array.isArray(totaltaskobj));

                            return CurrentElement.task == input;
                        });

                        if (exsits) {
                            console.log("This task already added to the list");
                            return;
                        }

                        if (input != "") {
                            console.log(exsits);

                            setid(id + 1);

                            settotaltaskobj([
                                ...totaltaskobj,
                                {
                                    id: id,
                                    task: input,
                                    completed: false
                                }
                            ]);
                            settaskobj([...totaltaskobj, {
                                    id: id,
                                    task: input,
                                    completed: false
                                }]);

                            setinput("");

                            console.log(taskobj);
                            // here it will update upto the last task
                            // because it updates for every re-render
                        }
                    }}
                >
                    add
                </button>
            </div>

            <div id="Filters">

                <button
                    onClick={() => {
                        setfilter({
                            All: true,
                            Completed: false,
                            Pending: false
                        });
                        
                        settaskobj(totaltaskobj);
                        console.log(filter);
                    }}
                >
                    All
                </button>

                <button
                    onClick={() => {
                        setfilter({
                            All: false,
                            Completed: true,
                            Pending: false
                        });
                      let  updatedArray = totaltaskobj.filter((element)=>{
                            return element.completed == true;
                        })
                        console.log(filter);
                        settaskobj(updatedArray);
                    }}
                >
                    Completed
                </button>

                <button
                    onClick={() => {
                        setfilter({
                            All: false,
                            Completed: false,
                            Pending: true
                        });
                        let updatedArray = totaltaskobj.filter((element)=>{
                            return element.completed == false;
                        })
                        console.log(filter);
                        settaskobj(updatedArray);
                    }}
                >
                    Pending
                </button>

            </div>

            <div id="Task_Box">
                 
                
                {
                taskobj.map((CurrentElement, index) => {
                            
                                      return (
                            <div id="Task" key={CurrentElement.id}>

                                <input
                                    type="checkbox"
                                    checked={CurrentElement.completed}
                                    onChange={() => {

                                        let updatedArray = totaltaskobj.map((element) => {

                                            if (element.id == CurrentElement.id) {
                                                return {
                                                    ...element,
                                                    completed: !CurrentElement.completed
                                                };
                                            }

                                            return element;
                                        });

                                        settaskobj(updatedArray);
                                        settotaltaskobj(updatedArray);
                                    }}
                                />

                                {index + 1}. {CurrentElement.task}

                                <button
                                    id="Delete"
                                    onClick={() => {

                                        let updatedArray = totaltaskobj.filter((element) => {
                                            return element.id != CurrentElement.id;
                                        });

                                        settaskobj(updatedArray.filter((element)=>{
                                             if(filter.Completed){
                                                return element.completed == true;
                                             }
                                             if(filter.Pending){
                                                return element.completed == false;
                                             }

                                        }));
                                       
                                        settotaltaskobj(updatedArray);
                                        
                                    }}
                                >
                                    delete
                                </button>

                            </div>
                        );
                    
                             
                        
                  

                      
                     })}

                   

               

            </div>
            <div><span>All :</span><span>completed : </span><spn>Pending : </spn></div>

        </div>
    );
};

export default Content;

