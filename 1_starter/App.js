import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import CounterScreen2 from './src/screens/CounterScreen2';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import SquareScreen2 from './src/screens/SquareScreen2';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';
import BoxScreen2 from './src/screens/BoxScreen2';

const navigator = createStackNavigator (
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Counter2: CounterScreen2,
    Color: ColorScreen,
    Square: SquareScreen,
    Square2: SquareScreen2,
    Text: TextScreen,
    Box: BoxScreen,
    Box2: BoxScreen2,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer (navigator);
