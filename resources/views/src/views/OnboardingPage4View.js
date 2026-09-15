import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { styles } from './OnboardingPage4View.styles';

export default function OnboardingPage4View({ navigation }) {
  const handleNext = () => {
    if (navigation) {
      if (typeof navigation.navigate === 'function') {
        navigation.navigate('Onboarding5');
      } else if (typeof navigation.replace === 'function') {
        navigation.replace('Onboarding5');
      }
    }
  };

  const handleSkip = () => {
    if (navigation) {
      if (typeof navigation.navigate === 'function') {
        navigation.navigate('Users');
      } else if (typeof navigation.replace === 'function') {
        navigation.replace('Users');
      }
    }
  };

  return (
    <SafeAreaView style={styles.outerSafeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAF7F2" hidden={true} />
      <View style={styles.screenContainer}>
        <View style={styles.mobileCanvas}>

          {/* BASE ARTWORK IMAGE (IMAGE COPY 5) */}
          <Image
            source={require('../../assets/page4_full_artwork.png')}
            style={styles.fullArtworkImage}
            resizeMode="contain"
          />

          {/* TOP RIGHT CLICKABLE SKIP AREA */}
          <TouchableOpacity
            style={styles.skipClickArea}
            onPress={handleSkip}
            activeOpacity={0.6}
          />

          {/* TOP LEFT CONTENT OVERLAY (PAGE 4 TEXT & 3 FEATURE ROWS) */}
          <View style={styles.contentContainer}>
            
            {/* CATEGORY LABEL: YOU'RE ALL SET */}
            <Text style={styles.categoryLabel}>YOU'RE ALL SET</Text>

            {/* MAIN HEADLINE WITH 3 LINE BREAKS */}
            <Text style={styles.headline}>
              <Text style={styles.darkHeadline}>Good food{"\n"}brighter days{"\n"}</Text>
              <Text style={styles.limeHeadline}>ahead.</Text>
            </Text>

            {/* DESCRIPTION PARAGRAPH */}
            <Text style={styles.description}>
              Groceries, daily essentials and{"\n"}
              more — delivered with care,{"\n"}
              so you can live better, everyday.
            </Text>

            {/* 3 VERTICAL BENEFIT ROWS */}
            <View style={styles.featureList}>
              
              {/* FEATURE 1: Fresh & High Quality */}
              <View style={styles.featureRow}>
                <View style={[styles.iconCircle, { backgroundColor: '#E8F5E9' }]}>
                  <Svg width={16} height={16} viewBox="0 0 24 24" fill="#2E6F40">
                    <Path d="M17 8C8 10 59 16.17 3.83 21.34L2 19.5 4.17 17.34C9.33 12.17 15.5 15 17 8zM20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
                  </Svg>
                </View>
                <View style={styles.featureTextCol}>
                  <Text style={styles.featureTitle}>Fresh & High Quality</Text>
                  <Text style={styles.featureSub}>Handpicked with care</Text>
                </View>
              </View>

              {/* FEATURE 2: Super Fast */}
              <View style={styles.featureRow}>
                <View style={[styles.iconCircle, { backgroundColor: '#FFF8E1' }]}>
                  <Svg width={16} height={16} viewBox="0 0 24 24" fill="#D97706">
                    <Path d="M7 2v11h3v9l7-12h-4l4-8z" />
                  </Svg>
                </View>
                <View style={styles.featureTextCol}>
                  <Text style={styles.featureTitle}>Super Fast</Text>
                  <Text style={styles.featureSub}>Delivered in minutes</Text>
                </View>
              </View>

              {/* FEATURE 3: Everything You Need */}
              <View style={styles.featureRow}>
                <View style={[styles.iconCircle, { backgroundColor: '#FFEBEE' }]}>
                  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#E53935" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <Path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </Svg>
                </View>
                <View style={styles.featureTextCol}>
                  <Text style={styles.featureTitle}>Everything You Need</Text>
                  <Text style={styles.featureSub}>All in one place</Text>
                </View>
              </View>

            </View>

          </View>

          {/* BOTTOM RIGHT CLICKABLE NEXT ARROW AREA (NAVIGATES TO ONBOARDING 5) */}
          <TouchableOpacity
            style={styles.nextClickArea}
            onPress={handleNext}
            activeOpacity={0.6}
          />

        </View>
      </View>
    </SafeAreaView>
  );
}
