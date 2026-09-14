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
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  mobileCanvas: {
    width: '100%',
    height: '100%',
    maxWidth: 480,
    aspectRatio: 362 / 735,
    backgroundColor: '#FAF7F2',
    position: 'relative',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  fullArtworkImage: {
    width: '100%',
    height: '100%',
  },

  /* Invisible Clickable Skip Area (Top Right) */
  skipClickArea: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 80,
    height: 50,
    zIndex: 20,
    cursor: 'pointer',
  },

  /* Invisible Clickable Next Arrow Button Area (Bottom Right) */
  nextClickArea: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    width: 70,
    height: 70,
    borderRadius: 35,
    zIndex: 20,
    cursor: 'pointer',
  },
});
