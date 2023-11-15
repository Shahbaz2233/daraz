import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { persistStore } from 'redux-persist';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the default CSS for the toast container

const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store);

// Custom CSS style for the ToastContainer
const toastContainerStyle = { // Set the background color to black
  color: 'black', // Set the text color to white or any other color you prefer
  // Add any other CSS properties you need to customize the container
};

root.render(
  <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          style={toastContainerStyle} // Apply the custom style
        />
      </PersistGate>
    </Provider>
  </>
);