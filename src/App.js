import logo from './logo.svg';
import './App.css';
import { SignIn } from './components/sign-in/signIn';

function App() {
  return (
    <div className="App">
      <div style={{"backgroundImage":"url('/asset/background.svg')"}} className='parent-container common-column center'>
      <SignIn/>
      </div>
      
    </div>
  );
}

export default App;
