import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as page from './page'
import { Provider } from 'react-redux';
import { store } from './page/redux/redux';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown : false}}>
          <Stack.Screen name="Login" component={page.Login.Login} />
          <Stack.Screen name="Dashboard" component={page.Dashboard.Dashboard} />
          <Stack.Screen name="Ticket" component={page.Ticket.Ticket} />
          <Stack.Screen name="TicketAdd" component={page.Ticket.TicketAdd} />
          <Stack.Screen name='TicketDetail' component={page.Ticket.TicketDetail} />
          <Stack.Screen name="Profile" component={page.Profile.Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;