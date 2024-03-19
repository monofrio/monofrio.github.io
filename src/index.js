import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class MainApp extends React.Component {
    render() {
        return (
            <React.StrictMode>
                <Provider store={store}>
                    <App />
                </Provider>
            </React.StrictMode>
        );
    }
}

const root = createRoot(document.getElementById('root'));
root.render(<MainApp />);

reportWebVitals();
