import React from 'react';

const App = () => {
    return (
        <div className="container">
            <div className="valid-keys">
                <span className="matched">jo</span>
                <span className="remainder">ao</span>
            </div>
            <div className="typed-keys">asfjo</div>
            <div className="completed-words">
                <ol>
                    <li>foco</li>
                    <li>esforço</li>
                    <li>determinação</li>
                    <li>dedicação</li>
                    <li>liderança</li>
                </ol>
            </div>
        </div>
    );
};

export default App;
