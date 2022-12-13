import { Left } from './components/Left';
import { Right } from './components/Right';
import { CircleChanger } from './components/CircleChanger';
function App() {
  return (
    <div className="App grid grid-cols-2 h-screen w-full">
      <Left />
      <Right />
      <CircleChanger />
    </div>
  );
}

export default App;
