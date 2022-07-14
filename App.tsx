import { Navigation } from 'react-native-navigation';
import auth from '@react-native-firebase/auth';
import { coverScreen, postLogin } from './src/navigation';
import { RegisterScreen } from './src/screens';

export function init() {
  RegisterScreen();
  Navigation.events().registerAppLaunchedListener(() => {
    const unsubscribe = auth().onAuthStateChanged((user: any) => {
      if (user) {
        postLogin({})
      } else {
        coverScreen()
      }
    });
    return unsubscribe;
  });
}

let App = init();

export default App;

