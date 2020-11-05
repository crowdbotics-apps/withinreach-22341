import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps168416Navigator from '../features/Maps168416/navigator';
import UserProfile168402Navigator from '../features/UserProfile168402/navigator';
import Tutorial168401Navigator from '../features/Tutorial168401/navigator';
import NotificationList168373Navigator from '../features/NotificationList168373/navigator';
import Settings168372Navigator from '../features/Settings168372/navigator';
import Settings168364Navigator from '../features/Settings168364/navigator';
import UserProfile168362Navigator from '../features/UserProfile168362/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps168416: { screen: Maps168416Navigator },
UserProfile168402: { screen: UserProfile168402Navigator },
Tutorial168401: { screen: Tutorial168401Navigator },
NotificationList168373: { screen: NotificationList168373Navigator },
Settings168372: { screen: Settings168372Navigator },
Settings168364: { screen: Settings168364Navigator },
UserProfile168362: { screen: UserProfile168362Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
