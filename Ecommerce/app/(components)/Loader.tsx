// InteractiveLoader.js
import React, { useEffect, useRef } from 'react';
import { View, ActivityIndicator, StyleSheet, Animated } from 'react-native';

const InteractiveLoader = ({ loading }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current; // Initial scale value

  useEffect(() => {
    if (loading) {
      // Start the animation when loading
      Animated.loop(
        Animated.sequence([
          Animated.timing(scaleAnim, {
            toValue: 1.5, // Scale up
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1, // Scale down
            duration: 500,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      // Stop the animation when not loading
      scaleAnim.setValue(1); // Reset scale
    }
  }, [loading, scaleAnim]);

  if (!loading) return null; // Don't render anything if not loading

  return (
    <View style={styles.loaderContainer}>
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Optional: semi-transparent background
  },
});

export default InteractiveLoader;