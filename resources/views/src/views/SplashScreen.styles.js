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
  },
  mobileCanvas: {
    width: '100%',
    maxWidth: 360,
    height: '100%',
    maxHeight: 720,
    backgroundColor: '#FEFBF2',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  fullArtworkImage: {
    width: '100%',
    height: '100%',
  },
  progressTrackOverlay: {
    position: 'absolute',
    top: '93.1%',
    left: '34.3%',
    width: '31.2%',
    height: 5,
    backgroundColor: '#E2E0D4',
    borderRadius: 2.5,
    overflow: 'hidden',
    zIndex: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#257C41',
    borderRadius: 2.5,
  },
});
