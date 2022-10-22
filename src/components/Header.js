import {useState} from "react";
import List from "./List.js";
import Footer from "./Footer";
import FooterInfo from "./FooterInfo";

function Header(){


  //creating an array that includes the tasks
  const [missions,setMissions]=useState([]);

  //new task
  const [input,setInput] = useState("");

  //controlling checkboxes checked or not
  const [checkedState, setCheckedState] = useState([]);

  //initially added task unmarked,so it is false
  const [isChecked,setIsChecked] = useState(false);


  //set filtered buttons
  const [hide, setHide] = useState("All");

  //saved input entered by the user through state
  const handleChange=(event) => {
    const newInput = event.target.value;
    setInput(newInput);

  }

 // if the user press the enter,the task that entered save to missions array
 //the user can't enter space as input
 //checkedState is created
 const handleAdd= (event) => {
   event.preventDefault();
   if(input.trim()===""){
     return false;
   }
   setMissions([...missions,input]);
   setCheckedState([...checkedState,isChecked])
   setInput("");
 }


   return(
     <div>
     <section className="todoapp">
     <header className="header">
        <h1>todos</h1>
        <form onSubmit={handleAdd}>
          <input onChange={handleChange} className="new-todo" placeholder="What needs to be done?" autoFocus value={input}/>
        </form>
      </header>
      <List
      missions={missions}
      setMissions={setMissions}
      checkedState={checkedState}
      setCheckedState={setCheckedState}
      hide={hide}
      />
      <Footer
      checkedState={checkedState}
      setCheckedState={setCheckedState}
      missions={missions}
      setMissions={setMissions}
      setHide={setHide}
      />
     </section>
    <FooterInfo/>
    </div>
   )


}

export default Header;
