import { Font } from 'expo';

export const fontConfig = async () => {
	await Font.loadAsync({
		'raleway': require('../../assets/fonts/Raleway/Raleway-Regular.ttf'),
		'ralewayBold': require('../../assets/fonts/Raleway/Raleway-Bold.ttf'),
		'ralewayLight': require('../../assets/fonts/Raleway/Raleway-Light.ttf')
	});
};