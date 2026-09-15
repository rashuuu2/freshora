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
    top: 0,
    right: 0,
    width: 100,
    height: 70,
    zIndex: 9999,
    cursor: 'pointer',
  },

  /* Invisible Clickable Next Arrow Button Area (Bottom Right) */
  nextClickArea: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '45%',
    height: '22%',
    minWidth: 140,
    minHeight: 140,
    zIndex: 9999,
    cursor: 'pointer',
  },
});
