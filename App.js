import MainNavigator from './src/navigation/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/store';
import { init } from './src/db';

export default function App() {


  // init()   VERIFICAR ESTO
  // .then(()=>console.log('db iniciada campeon'))
  // .catch((error)=>console.log('error al iniciar: ', error.message))



  return (

    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}