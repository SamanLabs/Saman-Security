import { useState } from 'react';

const App = () => {
    const [currentView, setCurrentView] = useState('dashboard');

    return (
        <div className="wp-security-pilot-admin">
            <h1>WP Security Pilot</h1>
            <div className="content-area">
                <p>Hello from React!</p>
            </div>
        </div>
    );
};

export default App;
