import FstComponent from "./component/FstComponent";
import Backdrop from "./component/Backdrop";
import { useState } from "react";


function App() {

  const [modalOpen, setModalOpen] = useState(true);

  const modalCloseHandler = () => {
    setModalOpen(false);
  }

  const openModalHandler = () =>{
    setModalOpen(true);

  }

  return (
   <div className="container">
    <h1>MY APP</h1> 
    {modalOpen?<FstComponent owner = "pushpanjali" reason ="for demo" closeModal = {modalCloseHandler}/>:null}
    {modalOpen?<Backdrop/>:null}
    <button onClick={openModalHandler}>Open Modal</button>
   </div> 
  );
}

export default App;

