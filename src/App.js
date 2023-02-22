import './App.css';
import Interest from './Interest';
import InterestsList from './InterestsList';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-center">
        Greetings and welcome to the ultimate interests tracker!
      </h1>
      <Interest />
      <InterestsList />
    </div>
  )
}

export default App;
