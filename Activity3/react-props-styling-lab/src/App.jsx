// src/App.jsx
import Greeting from './Greeting';
import UserGreeting from './UserGreeting';
import Greetings from './Greetings';
import './App.css'; // Import CSS file

function App() {
    return (
        <div className="App">
            <Greeting name="Alice" message="Welcome to the lab!" />
            <Greeting name="Bob" message="Good morning!" />
            <UserGreeting isLoggedIn={true} />
            <UserGreeting isLoggedIn={false} />
            <Greetings></Greetings>
        </div>
    );
}

export default App;