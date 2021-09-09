import React, { useState } from 'react'
import { MdAccountBalance,MdClose,MdFormatAlignJustify,MdPublic,MdContacts,MdAssignmentTurnedIn,MdChromeReaderMode,MdAccessibility } from "react-icons/md";

export default function Sidenav(){
  const [menu,changemenu] = useState(true)
  const [cross,changecross] = useState(false)
  const change = () => {changemenu(!menu);changecross(!cross)}
  return(
    <>
    {menu && <button className="menu" onClick={change}><MdFormatAlignJustify/></button>}
    {cross && <button className="menu" onClick={change}><MdClose/></button>}
    <div className="maindiv">
      <div className={cross ? "containerexpand":"container"}>
            <a><MdAccountBalance /><span>Home</span></a>
            <a><MdPublic/><span>View</span> </a>
            <a><MdAssignmentTurnedIn/><span>Manage</span></a>
            <a><MdAccessibility/><span>About</span></a>
            <a><MdContacts/><span>Contact Us</span></a >
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur optio iure quidem voluptatem rerum repellendus unde. Eaque sunt quis sint distinctio. Repellendus aspernatur iure distinctio asperiores at doloremque quo illo quisquam, ratione tempore itaque praesentium est deserunt neque fuga sed eligendi dolore ad odio quaerat! Numquam omnis porro soluta nisi consequatur facilis nobis, harum alias eveniet mollitia odit placeat, impedit excepturi fugit dicta earum. Aliquam nisi, dolore et accusamus cum repudiandae eos nulla, pariatur, asperiores inventore ipsum rem. Distinctio velit nihil voluptatem necessitatibus, dolor unde inventore veniam quo excepturi ad eius perferendis at maiores. Quis in cupiditate voluptatum doloremque porro sunt error vero eos quisquam consequatur veritatis consequuntur distinctio, nam dolorum, eligendi fugiat? Nobis quas, officia architecto, ea, odit nulla vel reprehenderit cumque accusantium ut beatae. Minus non, repellat quas ea blanditiis aliquid porro rerum accusantium nemo quidem maxime minima quaerat libero id esse dicta repellendus placeat fuga assumenda eos deserunt quo unde? Officia natus ullam dolorem odio quis fugit autem dolore ad expedita voluptates quod alias esse nisi qui perferendis quo amet ipsum, aperiam odit commodi velit sequi possimus temporibus impedit. Quia eos pariatur iusto molestias rerum assumenda, voluptate, laudantium veritatis libero a vitae obcaecati aut reiciendis iure fuga.</p>
    </div>
    </>
  )
}