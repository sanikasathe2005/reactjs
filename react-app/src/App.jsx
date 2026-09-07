
import User, { username } from "./components/User"
import Home from "./components/Home"
import About from "./components/About"
const fullname="sanika sathe";
let a=90;
let b=87;
let isloggedin=false;//conditional rendering
let user1={//object
name:"sanika",
age:20
}
let fruits=["mango","apple","banana"];//array
function greet(name){//function
  return <p>hello!!!{name}</p>

}
const showAlert=()=>{
  alert("hello!!sanika here");
}
const App=()=>
{
  return(
    <div>
      <h1>hello world</h1>
      {/* jsx */}
      <p>{fullname}</p> 
      <p>a+b is{a+b}</p>
      <button onClick={()=>alert("clicked")}>click me </button>
      <p>{isloggedin?"welcome":"plz login first"}</p>
      <p>{user1.name } is {user1.age}years old</p>
      <p>{fruits[0]} is my favorite</p>
      <p>{greet("sanika")} </p>
      <button onClick={showAlert}>use me </button>
      <User/>
      <Home/>
      <About/>
      <h2>{username}</h2>
    </div>
  )

}
export default App;
