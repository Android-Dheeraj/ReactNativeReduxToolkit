import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { UserPostList } from '../componants/user_posts';
const Stack = createNativeStackNavigator();
export const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UserPostList" component={UserPostList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
