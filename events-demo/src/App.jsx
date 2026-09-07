import { useState } from "react";
function App()
{
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  return(
    <>
      {/* <h2>hlo,sanika here</h2>
      <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="enter your name"/>
      <h2>live preview:{name}</h2> */}
      <form>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}placeholder="enter name"/>
        <br></br>
          <br></br>
         <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}placeholder="enter mail"/>
          <br></br>
            <br></br>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="enter password"/>
            <br></br>
              <br></br>
          <button onClick={()=>alert("form submitted")}>submit</button>
          <button onClick={()=>{setName("");setEmail("");setPassword("")}}>RESET</button>

      </form>
      
    </>
  )
}
export default App;