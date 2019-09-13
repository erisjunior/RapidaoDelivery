import { Facebook } from 'expo';

import { Alert } from 'react-native';
import { onSignIn } from './auth';

export const _testFacebookLogin = async ({navigate}) => {

	let id = '1038945642933628';
	let perms = ['public_profile', 'email', 'user_friends'];
	let behavior = 'system';

	try {
		const result = await Facebook.logInWithReadPermissionsAsync(id, {
			permissions: perms,
			behavior,
		});

		const { type } = result;

		if (type === 'success') {
			onSignIn().then(() => navigate('SignedIn'));
		}
	} catch (e) {
		Alert.alert('Error!', e.message, [{ text: 'OK', onPress: () => {} }]);
	}
};