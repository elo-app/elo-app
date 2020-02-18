import ButtonBase from '@components/Button/ButtonBase';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './styles';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const onPress = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Login Screen</Text>
      <ButtonBase onPress={onPress}>
        <Text>Log In</Text>
      </ButtonBase>
    </SafeAreaView>
  );
};

export default LoginScreen;
