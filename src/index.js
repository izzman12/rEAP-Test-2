import './index.css'; 
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

            body {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: #f9fafb; /* very light grayish white */
  color: #111827; /* dark gray/black for text */
  margin: 0;
  min-height: 100vh;
}

input,
select,
textarea,
button {
  font-family: inherit;
}

h1,
h2,
h3 {
  color: #1e40af; /* blue-800 */
}
