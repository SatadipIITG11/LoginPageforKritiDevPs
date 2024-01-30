import logo from './logo.svg';
import './App.css';
import Loginpage from './loginpage';

function App() {
  return (
    <>
    <div className='red'>
      <h1 className='des'>DESCRIPTION</h1>

      <p className='Description'>Welcome to our website where you guys can collaborate with each other 
        you can also share your github handles.
        This website is build by team Kapili IIT Guwahati </p>
    </div>
    <div className='green'>
      <Loginpage/>
    </div>
    </>
  );
}

export default App;
