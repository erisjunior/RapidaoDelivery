import { Google } from 'expo';

import { Alert } from 'react-native';
import { onSignIn } from './auth';

export const _testGoogleLogin = async ({navigate}) => {
	try {
		const result = await Google.logInAsync({
			androidClientId: '974979580929-vh8kj3j0964chul309nshgjb7jhojuvu.apps.googleusercontent.com',
			scopes: ['profile', 'email'],
		});

		const { type } = result;

		if (type === 'success') {
			onSignIn().then(() => navigate('SignedIn'));
		}
	} catch (e) {
		Alert.alert('Error!', e.message, [{ text: 'OK :(', onPress: () => {} }]);
	}
};