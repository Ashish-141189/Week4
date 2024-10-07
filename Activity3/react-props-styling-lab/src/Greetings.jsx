// src/UserGreeting.jsx
function Greetings(props) {
    const isLoggedIn = props.isLoggedIn;

    return (
        <div>
            {isLoggedIn ? (
                <h1>Welcome back, User!</h1>
            ) : (
                <h1>Please log in to continue</h1>
            )}
        </div>
    );
}

export default Greetings;