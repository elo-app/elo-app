import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider, connect } from 'react-redux';
import store from '@store/index';
import { StackNavigator, TabNavigator } from '@navigation/index';
import { AppState } from '@store/index';

const mapStateToProps = (state: AppState) => ({
  loggedIn: state.auth.loggedIn
});

type Props = ReturnType<typeof mapStateToProps>;

const App = ({ loggedIn }: Props) => {
  return (
    <NavigationContainer>
      {loggedIn ? <TabNavigator /> : <StackNavigator />}
    </NavigationContainer>
  );
};

const ConnectedApp = connect(mapStateToProps)(App);

export default () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);
