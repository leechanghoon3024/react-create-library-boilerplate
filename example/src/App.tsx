import React from 'react';
import './App.css';
import { ExampleComponent } from 'react-create-library-boilerplate';
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ExampleComponent text={'Welcome'} />
            </header>
        </div>
    );
}

export default App;
