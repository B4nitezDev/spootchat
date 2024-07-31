import {View, Text } from 'react-native';
import { Slot } from 'expo-router';

export function RootLayout () {

	return (
		<View>
			<Text>Hello World</Text>
			<Slot/>
		</View>
	)
}
//export RootLayout
