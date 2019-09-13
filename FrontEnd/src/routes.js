import { createStackNavigator } from 'react-navigation';

import Login from './pages/login';
import pickUpCity from './pages/pickUpCity';
import pickUpState from './pages/pickUpState';

import Colors from './config/ColorConfig';

export const SignedOut = createStackNavigator({
	Login
}, 
{
	navigationOptions: {
		headerStyle: {
			backgroundColor: Colors.primary
		},
		headerTintColor: Colors.white
	},
});
export const SignedIn = createStackNavigator({
	pickUpState
}, 
{
	headerLayoutPreset: 'center',
	navigationOptions: {
		headerStyle: {
			backgroundColor: Colors.primary
		},
		headerTitleStyle: {
			fontWeight: '300',
			color: Colors.white,
			fontFamily: 'ralewayBold',
		},
		headerTintColor: Colors.white
	}
});

export const createRootNavigator = (signedIn = false) => {
	return createStackNavigator({
		SignedIn,
		SignedOut
	},
	{
		headerMode: 'none',
		mode: 'modal',
		initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',
		navigationOptions: {
			gesturesEnabled: false
		}
	});
};