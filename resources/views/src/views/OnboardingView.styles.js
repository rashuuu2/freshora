import { StyleSheet } from 'react-native';

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
    margin: 0,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mobileCanvas: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FAF7F2',
    position: 'relative',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  },
  fullArtworkImage: {
    width: '100%',
    height: '100%',
  },

  /* Invisible Clickable Skip Area (Top Right) */
  skipClickArea: {
    position: 'absolute',
    top: 15,
    right: 15,
    width: 75,
    height: 45,
    zIndex: 20,
  },

  /* Invisible Clickable Next Arrow Button Area (Bottom Right) */
  nextClickArea: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 64,
    height: 64,
    borderRadius: 32,
    zIndex: 20,
  },
});
