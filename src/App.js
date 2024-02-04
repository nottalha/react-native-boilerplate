import {
  View,
  Text,
  StatusBar,
  useColorScheme,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Buttons, Colors, Typography} from './styles';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header}>Time</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>LESGO</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.s600,
    alignItems: 'center',
  },
  header: {
    flex: 1,
    ...Typography.header.x70,
  },
  section: {
    flex: 3,
    ...Typography.section,
  },
});
export default App;
