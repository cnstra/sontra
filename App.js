import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailScreen';
import LaneScreen from './screens/LaneScreen';
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const screenOptions={
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator
      screenOptions={screenOptions
      }
    >
      <HomeStack.Screen 
        name='Home' 
        component={HomeScreen} 
        options={{
          title:'Công thức món ăn',
          headerLeft: ()=> (
            <Icon.Button name='menu' size={25} backgroundColor="#f4511e" 
            onPress={() => navigation.openDrawer()
            }></Icon.Button>

          )
        }}
      />
        <HomeStack.Screen name='Lane' component={LaneScreen}options={{title:'Cập nhật công thức'}}/>
    </HomeStack.Navigator>
)

const DetailsStackScreen = ({ navigation }) => (
    <DetailsStack.Navigator
      screenOptions={screenOptions}
    >
      <DetailsStack.Screen name='DetailsScreen' component={DetailsScreen} options={{title:'Details',          headerLeft: ()=> (
            <Icon.Button name='menu' size={25} backgroundColor="#f4511e" 
            onPress={() => navigation.openDrawer()
            }></Icon.Button>

          )}}/>
    </DetailsStack.Navigator>
)

const App = () => {
  return (

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="DetailsScreen" component={DetailsStackScreen} options={{title:'Details'}}/>
        <Drawer.Screen name="Home" component={HomeStackScreen} options={{title:'Công thức món ăn'}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

