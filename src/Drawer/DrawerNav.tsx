import {createDrawerNavigator} from '@react-navigation/drawer';
import Article from './Article';
import Feed from './Feed';

const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 0,
        },
      }}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

export default DrawerNav;
