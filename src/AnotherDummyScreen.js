import { useFocusEffect } from '@react-navigation/native';
import React, { useState, useEffect, useCallback } from 'react';
import { View, Image, Text, StyleSheet, ActivityIndicator } from 'react-native';

const DummyScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
    setIsImageLoaded(true);
  };

  const handleFocusEffect = useCallback(() => {
    setIsLoading(true);
    setIsImageLoaded(false);

    // Simulate the image loading process
    setTimeout(() => {
      setIsLoading(false);
      setIsImageLoaded(true);
    }, 2000); // You can adjust the delay as needed
  }, []);

  useFocusEffect(handleFocusEffect);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.content}>
          {isImageLoaded && (
            <Image
              source={{
                uri:
                  'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
              }}
              style={styles.image}
              onLoad={handleImageLoad}
            />
          )}
          {isImageLoaded && <Text style={styles.name}>Ansh Sharma</Text>}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DummyScreen;
