import {store} from './store/store';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import ProtectedRoute from './pages/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import ConsolePage from './pages/ConsolePage';

const persistor = persistStore(store);

function App() {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Switch>
            <ProtectedRoute path="/console" Component={ConsolePage} />
            <Route path="/">
              <LoginPage />
            </Route>
          </Switch>
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
