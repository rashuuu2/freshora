import { StyleSheet, Platform } from 'react-native';

const fontFamily = Platform.select({
  web: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  ios: 'System',
  android: 'sans-serif-medium',
});

export const styles = StyleSheet.create({
  outerSafeArea: {
    flex: 1,
    backgroundColor: '#FAF7F2',
    margin: 0,
    padding: 0,
  },
  screenContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FAF7F2',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  mobileCanvas: {
    width: '100%',
    height: '100%',
    maxWidth: 480,
    aspectRatio: 856 / 1837,
    backgroundColor: '#FAF7F2',
    position: 'relative',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  fullArtworkImage: {
    width: '100%',
    height: '100%',
  },

  /* Clickable Skip Area (Top Right) */
  skipClickArea: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 80,
    height: 50,
    zIndex: 30,
    cursor: 'pointer',
  },

  /* Clickable Next Arrow Button Area (Bottom Right) */
  nextClickArea: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    width: 70,
    height: 70,
    borderRadius: 35,
    zIndex: 30,
    cursor: 'pointer',
  },

  /* CONTENT OVERLAY CONTAINER (Positioned safely in upper cream region) */
  contentContainer: {
    position: 'absolute',
    top: '5%',
    left: '6.5%',
    width: '54%',
    zIndex: 20,
  },

  /* TOP LEFT CATEGORY LABEL: SAVE TIME */
  categoryLabel: {
    fontFamily,
    color: '#296E3E',
    fontSize: 9.5,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 3,
    textTransform: 'uppercase',
  },

  /* MAIN HEADLINE */
  headline: {
    fontFamily,
    fontSize: 20,
    fontWeight: '900',
    lineHeight: 24,
    letterSpacing: -0.3,
    marginBottom: 6,
    textAlign: 'left',
  },
  darkHeadline: {
    color: '#0C3B2E',
  },
  limeHeadline: {
    color: '#5DA830',
  },

  /* DESCRIPTION */
  description: {
    fontFamily,
    color: '#5B6E61',
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '400',
    marginBottom: 8,
    textAlign: 'left',
  },

  /* 3 FEATURE ROWS */
  featureList: {
    width: '100%',
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  iconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
  },
  featureTextCol: {
    flex: 1,
  },
  featureTitle: {
    fontFamily,
    color: '#0C3B2E',
    fontSize: 11,
    fontWeight: '800',
  },
  featureSub: {
    fontFamily,
    color: '#66786C',
    fontSize: 9.5,
    lineHeight: 12,
    marginTop: 1,
  },
});
