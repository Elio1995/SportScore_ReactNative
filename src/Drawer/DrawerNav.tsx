import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabsNav from '../BottomTabs/BottomTabsNav';
import Article from './Article';
import Feed from './Feed';

const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tab" component={BottomTabsNav} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

export default DrawerNav;
