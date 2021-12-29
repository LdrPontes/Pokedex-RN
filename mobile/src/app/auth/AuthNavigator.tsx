import React from 'react';
import SignInScreen from './screens/SignIn';

function AuthNavigator(Stack: any) {
  return (
    <>
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </>
  );
}

export default AuthNavigator;
