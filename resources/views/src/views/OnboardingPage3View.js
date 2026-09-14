import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { styles } from './OnboardingPage3View.styles';

export default function OnboardingPage3View({ navigation }) {
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

          {/* BASE ARTWORK IMAGE */}
          <Image
            source={require('../../assets/page3_full_artwork.png')}
            style={styles.fullArtworkImage}
            resizeMode="contain"
          />

          {/* TOP RIGHT CLICKABLE SKIP AREA */}
          <TouchableOpacity
            style={styles.skipClickArea}
            onPress={handleSkipOrNext}
            activeOpacity={0.6}
          />

          {/* TOP LEFT CONTENT OVERLAY (SAVE TIME, HEADLINE, DESCRIPTION, 3 FEATURE ROWS) */}
          <View style={styles.contentContainer}>
            
            {/* SAVE TIME LABEL */}
            <Text style={styles.categoryLabel}>SAVE TIME</Text>

            {/* MAIN HEADLINE */}
            <Text style={styles.headline}>
              <Text style={styles.darkHeadline}>More time{"\n"}for what{"\n"}</Text>
              <Text style={styles.limeHeadline}>matters.</Text>
            </Text>

            {/* DESCRIPTION */}
            <Text style={styles.description}>
              We take care of your groceries,{"\n"}
              so you can focus on the{"\n"}
              things you love.
            </Text>

            {/* 3 VERTICAL BENEFIT ROWS */}
            <View style={styles.featureList}>
              
              {/* FEATURE 1: Wide Range */}
              <View style={styles.featureRow}>
                <View style={[styles.iconCircle, { backgroundColor: '#E8F5E9' }]}>
                  <Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#2E6F40" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <Circle cx={9} cy={21} r={1} />
                    <Circle cx={20} cy={21} r={1} />
                    <Path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </Svg>
                </View>
                <View style={styles.featureTextCol}>
                  <Text style={styles.featureTitle}>Wide Range</Text>
                  <Text style={styles.featureSub}>Everything you need{"\n"}in one place</Text>
                </View>
              </View>

              {/* FEATURE 2: Ultra Fast */}
              <View style={styles.featureRow}>
                <View style={[styles.iconCircle, { backgroundColor: '#FFF8E1' }]}>
                  <Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <Circle cx={12} cy={12} r={10} />
                    <Path d="M12 6v6l4 2" />
                  </Svg>
                </View>
                <View style={styles.featureTextCol}>
                  <Text style={styles.featureTitle}>Ultra Fast</Text>
                  <Text style={styles.featureSub}>Essentials in{"\n"}minutes</Text>
                </View>
              </View>

              {/* FEATURE 3: Fresh & Quality */}
              <View style={styles.featureRow}>
                <View style={[styles.iconCircle, { backgroundColor: '#FFEBEE' }]}>
                  <Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#E53935" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <Path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </Svg>
                </View>
                <View style={styles.featureTextCol}>
                  <Text style={styles.featureTitle}>Fresh & Quality</Text>
                  <Text style={styles.featureSub}>Handpicked{"\n"}for you</Text>
                </View>
              </View>

            </View>

          </View>

          {/* BOTTOM RIGHT CLICKABLE NEXT ARROW AREA */}
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
