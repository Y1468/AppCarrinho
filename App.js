import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Routes } from './routes';
import { CardProvider } from './contexts';

export default function App() {
  return (
    <NavigationContainer>
      <CardProvider>
          <StatusBar backgroundColor='#FAFAFA' barStyle='dark-content'/>
          <Routes/>
      </CardProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
