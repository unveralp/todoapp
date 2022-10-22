
function List({missions,setMissions,checkedState,setCheckedState,hide}){

 //checkedState is updated if checboxes is marked or unmarked
  const checkHandler = (id) => {
    const updatedCheckedState=checkedState.map((state,index) => index === id ? !state : state );
    setCheckedState(updatedCheckedState);
  }

// if destroy button is clicked , submitDelete is called.
// if clicked input's id is equal to element of missions array,it is deleted
  function submitDelete(id){
    setMissions(prevTasks => {
      return prevTasks.filter((item,index) => {
        return index !== id
      });
    });

    //you have to update checkedState array,if not,it will be a problem about indexing
    setCheckedState(prevChecks => {

      return prevChecks.filter((item,index) => {
        return index !==id
      })
    });
  }

//which filter button is clicked, hide shows that
//assigned a className to li tag according to state and hide

  const isCompleted = (index) => {
    if (checkedState[index] === true && hide === "All") {
      return "completed";
    } else if (checkedState[index] === true && hide === "Active") {
      return "completed hidden";
    } else if (checkedState[index] === false && hide === "Completed") {
      return "hidden";
    }else if(checkedState[index] === true && hide ==="Completed"){
      return "completed";
    }
  };

  return (
    <section className="main">
   		<input className="toggle-all" type="checkbox" />
   		<label for="toggle-all">
   			Mark all as complete
   		</label>

   		<ul className="todo-list">
       {
         missions.map((mission,index) => (
//checkedState[index] ? "completed" : "completed hidden"
           <li key={index} className = {isCompleted(index)} >
      				<div className="view">
      					<input className="toggle" type="checkbox"  onChange={()=> checkHandler(index)} value={mission[index]} id={index} checked={checkedState[index]}/>
      					<label>{mission}</label>
      					<button className="destroy" onClick={(event) => submitDelete(index)}></button>
      				</div>
      			</li>
         ))
       }

   		</ul>
   	</section>
  )
}

export default List;
