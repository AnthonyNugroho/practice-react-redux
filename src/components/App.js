import React from 'react';
import ActionList from './ActionList';
import ActionDetail from './ActionDetail';

const App = () => {
    return (
    <div className="ui container grid">
        <div className="ui row">
            <div className="column eight wide">    
                <ActionList />
            </div>
            <div className="column eight wide">
                <ActionDetail />
            </div>
        </div>
    </div>
    );
}

export default App;