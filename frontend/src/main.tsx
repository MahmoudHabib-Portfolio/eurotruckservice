import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'mapbox-gl/dist/mapbox-gl.css';
import './Config/I18n';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { Store } from './ReduxStore/Store';
import { AllProviders } from './Utils/AllProviders';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={Store}>
    <AllProviders>
    <App />
    </AllProviders>
    </Provider>
  </StrictMode>,
)
