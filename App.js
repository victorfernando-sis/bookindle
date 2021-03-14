import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';
import BookShowScreen from './src/screens/BookShowScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    BookShow: BookShowScreen
  
},{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Bookindle' 
  }
});

export default createAppContainer(navigator);