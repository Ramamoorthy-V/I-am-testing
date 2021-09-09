import React, { useEffect, useState } from "react";

export default function Toggle() {
  const [btn,changebtn] = useState(false)
  const [value,ChangeValue] = useState([{
    id:1,
    name:"Ram",
    type:"Unselected"
  },
  {
    id:2,
    name:"Sowmya",
    type:"Unselected"
  },
  {
    id:3,
    name:"Kumaran",
    type:"Unselected"
  }])

const changestate = (index) => {
  const newarr = [...value]
  newarr[index].type === "Unselected"?newarr[index].type="Selected":newarr[index].type="Unselected"
  ChangeValue(newarr)
}
const selectedValues = value.filter(item => item.type === "Selected")

  return (
    <div>
      {
        value.map((item,index) => <div className="display"key={item.id}><p>{item.name}</p><button onClick={() => changestate(index)}>{item.type}</button></div>)
      }
      <button onClick={() => changebtn(!btn)}>Selected Value</button>
      {
        btn && selectedValues.map(item => <li>{item.name}</li>)
      }
    </div>
  );
}
