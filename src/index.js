import React, { StrictMode } from 'react'
import {App} from './app'
import reactDOM from "react-dom/client";

// export default function AIndex() {
//   return (
//     <div>
//       <App/>
//     </div>
//   )
// }

// const aroot = reactDOM.createRoot(document.getElementById("root"));
// aroot.render(<AIndex/>)


// export default function AIndex() {
//     return (
//       <div>
//         <App name="Samir Raj"/>
//       </div>
//     )
//   }
  
//   const aroot = reactDOM.createRoot(document.getElementById("root"));
//   aroot.render(<AIndex/>)


export default function AIndex() {
    return (
    <>
     <App/>
    </>
    )
  }
  
  const aroot = reactDOM.createRoot(document.getElementById("root"));
  aroot.render(<AIndex/>)



