import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import ButtonBase from '@components/Button/ButtonBase';
import { logIn } from '@store/slices/auth';
import { useDispatch } from 'react-redux';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(logIn());
  };

  return (
    <SafeAreaView>
      <Text>Login Screen</Text>
      <ButtonBase onPress={onPress}>
        <Text>Log In</Text>
      </ButtonBase>
    </SafeAreaView>
  );
};

export default LoginScreen;
