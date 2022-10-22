
import {useState,useEffect} from "react";


function Footer({checkedState,setCheckedState,missions,setMissions,setHide}){

  //how many elements left,finded thanks to count
  const [count,setCount] = useState(0);

 // if there is a change in checkedState array,count will be updated through useEffect
  useEffect(() => {
    let fCount=0;
    checkedState.forEach((state) => state ? fCount=fCount : fCount+=1 )
    setCount(fCount);
  },[checkedState])


// if clear-completed button is clicked,this function is called
//missions array and checkedState array will be updated.If checkbox is marked,this input won't show
  const clearCompleted = () => {
    setMissions(missions.filter((mission,index) => checkedState[index] === false))
    setCheckedState(checkedState.filter((state) => state === false));
  }

//if one of the filter buttons is clicked,hide element will be updated thanks to this function and props setHide
  const clickedButton = (event) => {
    switch(event.target.id){
      case "All":
        setHide("All");
        break;
      case "Active":
        setHide("Active");
        break;
      case "Completed":
        setHide("Completed");
        break;
      default:
    }
  }

   return(
     <div>
     <footer className="footer">
       <span className="todo-count">
         <strong>{count}</strong>
         {count > 1 ? " items left" : " item left" }
       </span>

       <ul className="filters">
         <li>
           <a href="#/" className="selected" id="All" onClick={clickedButton}>All</a>
         </li>
         <li>
           <a href="#/" id="Active" onClick={clickedButton}>Active</a>
         </li>
         <li>
           <a href ="#/" id="Completed" onClick={clickedButton}>Completed</a>
         </li>
       </ul>

       <button className="clear-completed" onClick={clearCompleted}>
         Clear completed
       </button>
     </footer>

     </div>
   )


}

export default Footer;
