import './App.css';

import Counter from './components/Counter/Counter';
import Greeting from './components/Greeting';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <Greeting name={'Inga'} />
      <Counter />
      <UserProfile userId={4} />
    </>
  );
}

export default App;

