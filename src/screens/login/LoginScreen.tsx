import ButtonBase from '@components/Button/ButtonBase';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import styles from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '@navigation/types';

type LoginScreenNavigationProp = StackNavigationProp<StackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen = ({ navigation }: Props) => {
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
