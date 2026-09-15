import React, { useEffect, useRef } from 'react';
import {
  View,
  Image,
  Animated,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { styles } from './SplashScreen.styles';

export default function SplashScreen({ navigation }) {
  const progress = useRef(new Animated.Value(0.08)).current;

  useEffect(() => {
    const animateProgress = () => {
      progress.setValue(0.08);
      Animated.timing(progress, {
        toValue: 0.65,
        duration: 2200,
        useNativeDriver: false,
      }).start(({ finished }) => {
        if (finished && navigation) {
          // Automatically transition to Page 2 Onboarding when splash finishes
          setTimeout(() => {
            if (typeof navigation.navigate === 'function') {
              navigation.navigate('Onboarding');
            } else if (typeof navigation.replace === 'function') {
              navigation.replace('Onboarding');
            }
          }, 200);
        }
      });
    };

    animateProgress();
  }, [navigation, progress]);

  const handlePress = () => {
    if (navigation) {
      if (typeof navigation.navigate === 'function') {
        navigation.navigate('Onboarding');
      } else if (typeof navigation.replace === 'function') {
        navigation.replace('Onboarding');
      }
    }
  };

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <SafeAreaView style={styles.outerSafeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FEFBF2" hidden={true} />
      <View style={styles.screenContainer}>
        <TouchableOpacity
          style={styles.mobileCanvas}
          activeOpacity={1}
          onPress={handlePress}
        >

          {/* EXACT TARGET REFERENCE ARTWORK FOR SCREEN 1 */}
          <Image
            source={require('../../assets/splash_target_image.png')}
            style={styles.fullArtworkImage}
            resizeMode="contain"
          />

          {/* ANIMATED OVERLAY PROGRESS BAR ALIGNED EXACTLY ON THE ARTWORK TRACK */}
          <View style={styles.progressTrackOverlay}>
            <Animated.View style={[styles.progressBar, { width: progressWidth }]} />
          </View>

        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
