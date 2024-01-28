import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, PanResponder } from 'react-native';

const CustomSlider = ({ minimumValue, maximumValue, step, onValueChange, minimumTrackTintColor, maximumTrackTintColor }: any) => {
  const [value, setValue] = useState(minimumValue);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      const trackWidth = 300; // Độ dài track
      const locationX = event.nativeEvent.locationX;
      const newValue = (locationX / trackWidth) * (maximumValue - minimumValue) + minimumValue;
      const roundedValue = Math.round(newValue / step) * step;
      setValue(Math.min(Math.max(minimumValue, roundedValue), maximumValue));
      onValueChange(value);
    },
    onPanResponderRelease: () => {
      // Do any cleanup if needed
    },
  });

  const calculateThumbLeft = () => {
    const percentage = (value - minimumValue) / (maximumValue - minimumValue);
    const trackWidth = 300; // Độ dài track
    const thumbWidth = 20; // Độ dài thumb
    return percentage * (trackWidth - thumbWidth);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.track, { backgroundColor: maximumTrackTintColor }]}>
        <View
          style={[
            styles.thumb,
            {
              left: calculateThumbLeft(),
              backgroundColor: minimumTrackTintColor,
            },
          ]}
        />
      </View>
      <TouchableOpacity style={styles.touchArea} activeOpacity={1} {...panResponder.panHandlers} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 40,
    justifyContent: 'center',
  },
  track: {
    height: 5, // Độ dày của track
    width: '100%',
    borderRadius: 2.5,
    position: 'relative',
  },
  thumb: {
    width: 20, // Độ dày của thumb
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    top: -7.5,
  },
  touchArea: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

export default CustomSlider;
