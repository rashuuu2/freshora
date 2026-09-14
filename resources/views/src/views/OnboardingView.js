import React from 'react';
import {
  View,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { styles } from './OnboardingView.styles';

export default function OnboardingView({ navigation }) {
  const handleSkipOrNext = () => {
    if (navigation) {
      navigation.replace('Users');
    }
  };

  return (
    <SafeAreaView style={styles.outerSafeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAF7F2" hidden={true} />
      <View style={styles.screenContainer}>
        <View style={styles.mobileCanvas}>

          {/* EXACT MASTER PAGE 2 ARTWORK FROM ATTACHED REFERENCE */}
          <Image
            source={require('../../assets/page2_full_artwork.png')}
            style={styles.fullArtworkImage}
            resizeMode="cover"
          />

          {/* TOP RIGHT INTERACTIVE "SKIP" BUTTON */}
          <TouchableOpacity
            style={styles.skipClickArea}
            onPress={handleSkipOrNext}
            activeOpacity={0.6}
          />

          {/* BOTTOM RIGHT INTERACTIVE NEXT ARROW CIRCULAR BUTTON */}
          <TouchableOpacity
            style={styles.nextClickArea}
            onPress={handleSkipOrNext}
            activeOpacity={0.6}
          />

        </View>
      </View>
    </SafeAreaView>
  );
}
