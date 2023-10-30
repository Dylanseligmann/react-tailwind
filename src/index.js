import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCWaJZp3xMhI1Ff0droPYV10sB_NXcw9cw",
  authDomain: "react-tailwind-b9283.firebaseapp.com",
  projectId: "react-tailwind-b9283",
  storageBucket: "react-tailwind-b9283.appspot.com",
  messagingSenderId: "873431370013",
  appId: "1:873431370013:web:312f0b6f19707fcccd39f4"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/react-tailwind">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
