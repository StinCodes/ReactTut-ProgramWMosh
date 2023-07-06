import ListGroup from "./components/ListGroup"
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";


export default function App(){
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string)=>{
    console.log(item)
  }

  const [alertVisible, setAlertVisible]= useState(false)
  return(
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
      <Alert>My Alert</Alert>
      <Button onClick={()=>{console.log('CLicked')}} color='primary'>My Button</Button>

      {alertVisible && <Alert onClose={()=> setAlertVisible(false)}>My Alert</Alert>}
      <Button onClick={()=>{setAlertVisible(true)}} color='primary'>My Button</Button>
    </div>
  )
}
