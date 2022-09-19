import logo from './logo.svg';
import './App.css';

function App() {
  const friend =[
    {name:"Rohim", age:"25",education:"BBA",profession:"Teacher"},
    {name:"Karim", age:"24",education:"BBS",profession:"Doctor"},
    {name:"Jorim", age:"26",education:"BA",profession:"Teacher"},
    {name:"Lovly", age:"27",education:"BSS",profession:"Teacher"},
    {name:"Manna", age:"70",education:"BSC",profession:"Actor"}

  ]

  return (
    <div class="App">
      <header className="App-header">
      <h6>Hi! Are you React User?</h6>
    

      {
        friend.map(frienddata => <FriendList name={frienddata.name} age={frienddata.age} education={frienddata.education} profession={frienddata.profession}></FriendList>)
      }




      </header>
    </div>
  );
}

function FriendList(props){

  const styleDiv1={
    border: '1px solid red',
    margin: "3px",
    padding: "5px",
    backgroundColor: 'green',
    borderRadius:'10px',
    width: "500px"
  }
  return(
    <div style={styleDiv1}>
      <h1>Friend Name: {props.name} </h1>
      <h3>Age: {props.age} </h3>
      <h3>Education: {props.education} </h3>
      <h3>Profession: {props.profession} </h3>
      <button>Facebook_Account</button>
    </div>
  )
}

export default App;
