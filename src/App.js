import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

function App(props) {
  //1. State

  //2. FUnction defiantino
  let changeFriend = (e)=>{
      //alert("OKOKKOKOK");
      props.b('abc','abhishek')
  }

  //3 return startement
  return (
    <div className="App">
      {props.myStore}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={(e)=>{ changeFriend(e)  }}>Click me </button>
      </header>
    </div>
  );
}
let mapStateToProps = (state)=>{ //state === store object

    return {
      myStore:state
    };
}

let mapDispatchToProps = (dispatch)=>{

  return {
    //1. P:V
    //2. Funcrtion
    a:function(){ dispatch({type:'xyz',myfriend:'kiran'}) }, //Classic way
    b:(action,data)=>{  dispatch({type:action,myfriend:data}) }, //Fat Arrow
    c:function(){ dispatch({type:'def',myfriend:'ritik'}) }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
