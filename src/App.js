import React, { useState } from 'react';

const App = () => {
    const [typedKeys, setTypedKeys] = useState([]);

    const handleKeyDown = (e) => {
        e.preventDefault();
        const { key } = e;

        setTypedKeys((prevTypedKeys) => {
            return [...prevTypedKeys, key];
        });

        console.log('key', key);
    };


    return (
        <div className="container" tabIndex="0" onKeyDown={handleKeyDown}>
            <div className="valid-keys">
                <span className="matched">jo</span>
                <span className="remainder">ao</span>
            </div>
            <div className="typed-keys">{typedKeys ? typedKeys.join(' ') : null}</div>
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
