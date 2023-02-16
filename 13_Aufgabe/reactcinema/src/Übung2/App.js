import React from 'react';
import './App.css';
import SeatList from "./SeatList";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Es geht los!
                </h1>
            </header>
            <section className="App-content">
                <p>
                    Hurra! Der erste Schritt ist geschafft 👌
                </p>
                <SeatList/>
            </section>
        </div>
    );
}

export default App;
