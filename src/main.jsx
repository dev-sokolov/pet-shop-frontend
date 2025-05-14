import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './modules/App'
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';

import { store, persistor } from './redux/store';

import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={<p>...loading data from storage</p>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
  </StrictMode >,
)
