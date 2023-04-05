import { Provider } from 'react-redux';
import Bugs from './components/Bugs';
import configureStore from './store/configureStore';
import BugsList from './components/BugsList';

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Bugs></Bugs>
    </Provider>
    
  );
}

export default App;
