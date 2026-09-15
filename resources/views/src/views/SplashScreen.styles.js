import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  outerSafeArea: {
    flex: 1,
    backgroundColor: '#FEFBF2',
  },
  screenContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FEFBF2',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  mobileCanvas: {
    width: '100%',
    height: '100%',
    maxWidth: 440,
    aspectRatio: 1000 / 2040,
    backgroundColor: '#FEFBF2',
    position: 'relative',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  fullArtworkImage: {
    width: '100%',
    height: '100%',
  },
  progressTrackOverlay: {
    position: 'absolute',
    top: '80.3%',
    left: '37.0%',
    width: '26.0%',
    height: 5.5,
    backgroundColor: '#E2E0D4',
    borderRadius: 3,
    overflow: 'hidden',
    zIndex: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#257C41',
    borderRadius: 3,
  },
});
