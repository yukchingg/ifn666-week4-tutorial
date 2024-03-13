import logo from './QUT-logo.png';
import './App.css';

const animals= [
  {
    name: "Lion",
    number: 3,
    eats: ["zebra", "antelope", "buffalo", "hippopotamus"],
  },
  {
    name: "Tiger",
    number: 5,
    eats: ["moose", "deer", "buffalo"],
  },
  {
    name: "Giraffe",
    number: 6,
    eats: ["leaves", "twigs"],
  },
  {
    name: "Elephant",
    number: 4,
    eats: ["grass", "leaves", "flowers", "fruit"],
  },
  {
    name: "Monkey",
    number: 10,
    eats: ["fruit", "leaves", "vegetables", "insects"],
  },
  {
    name: "Lemur",
    number: 15,
    eats: ["fruit", "leaves", "insects"],
  },
  {
    name: "Rhinoceros",
    number: 2,
    eats: ["grass", "shoots", "leaves", "berries"],
  },
];

function AnimalComponent({name, number, eats}) {
  return (
      <div >
        
          <h1 > { name } </h1>
          <p > { number } </p>
          <p > { eats.join(", ") } </p>
      </div>
  );
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>QUT Zoo </h1>

        <div>
        {
          animals.map(animal => (
          <AnimalComponent {...animal}/>
        ))
        }
        </div>
        <a
          className="App-link"
          href="https://www.qut.edu.au"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit QUT
        </a>

      </header>

    </div>
  );
}
  
export default App;
