import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {TimePicker} from './lib';

const YourApp = () => {
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const handleChange = (value: {hours: number; minutes: number}) => {
    setHours(value.hours);
    setMinutes(value.minutes);
  };
  const handleReset = () => {
    setHours(0);
    setMinutes(0);
  };
  return (
    <View style={styles.container}>
      <Text>
        {hours} : {minutes}
      </Text>
      <Button title="RESET" onPress={handleReset} />
      <TimePicker
        textColor="red"
        value={{hours, minutes}}
        onChange={handleChange}
        itemStyle={styles.itemStyle}
        hoursInterval={5}
        minutesInterval={15}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemStyle: {
    margin: 24,
  },
});

export default YourApp;
