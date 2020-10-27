import {Provider} from 'react-redux';
import store from './redux/Store';
import './App.css';
import CakeContainer from './components/CakeContainer.js';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import NewHooksIceCreamContainer from './components/NewHooksIceCreamContainer';

function App() {
  return (
    <Provider store ={store}>
      <div className="App">
        <NewHooksIceCreamContainer />
        <HooksIceCreamContainer />
        <HooksCakeContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
