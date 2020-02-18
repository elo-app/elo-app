import ButtonBase from '@components/Button/ButtonBase';
import { logOut } from '@store/slices/auth';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useDispatch } from 'react-redux';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(logOut());
  };

  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <ButtonBase onPress={onPress}>
        <Text>Log Out</Text>
      </ButtonBase>
    </SafeAreaView>
  );
};

export default HomeScreen;
