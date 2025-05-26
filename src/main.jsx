import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './Store/redux.js'
import { AuthWrapper } from './context/AuthNontext.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <AuthWrapper>
        <App />
     </AuthWrapper>
  </Provider>,
)
