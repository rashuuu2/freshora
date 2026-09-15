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
    aspectRatio: 360 / 800,
    backgroundColor: '#FAF7F2',
    position: 'relative',
    alignSelf: 'center',
    overflow: 'hidden',
  },

  /* 1. BACKGROUND HERO IMAGE POSITION AND SIZE (STARTS AT TOP: 0, INCREASED HEIGHT) */
  topImageContainer: {
    width: '100%',
    height: 285,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    backgroundColor: '#FAF7F2',
  },
  backgroundImage: {
    width: '120%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
  },

  /* 2. TOP HEADER BAR (BACK BUTTON & SIGN UP OVERLAID ON IMAGE) */
  topHeaderBar: {
    position: 'absolute',
    top: 16,
    left: 18,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 9999,
  },
  topBackIconArea: {
    padding: 6,
  },
  topSignUpArea: {
    padding: 6,
  },
  topSignUpText: {
    fontFamily,
    fontSize: 14,
    fontWeight: '700',
    color: '#1B753A',
  },

  /* 4 & 5. WHITE ACCOUNT PANEL OVERLAPPING HERO SECTION */
  whitePanel: {
    position: 'absolute',
    top: 250,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    zIndex: 10,
    overflow: 'hidden',

    ...Platform.select({
      web: { boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.08)' },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 6,
      },
    }),
  },

  /* 6. PANEL HORIZONTAL PADDING (28PX HORIZONTAL PADDING) */
  scrollContent: {
    paddingHorizontal: 28,
    paddingTop: 16,
    paddingBottom: 6,
  },

  /* 7. WELCOME BACK LABEL */
  categoryLabel: {
    fontFamily,
    color: '#1B753A',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 4,
    textTransform: 'uppercase',
  },

  /* 8. MAIN HEADING */
  heading: {
    fontFamily,
    fontSize: 26,
    fontWeight: '900',
    lineHeight: 28,
    letterSpacing: -0.4,
    marginBottom: 4,
    textAlign: 'left',
  },
  darkHeading: {
    fontFamily,
    color: '#0C3B2E',
  },
  limeHeading: {
    fontFamily,
    color: '#4CB038',
  },

  /* 9. DESCRIPTION */
  description: {
    fontFamily,
    color: '#66786C',
    fontSize: 11.5,
    lineHeight: 15,
    fontWeight: '400',
    marginBottom: 8,
    textAlign: 'left',
  },

  /* 10 & 11. INPUT FIELDS */
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 36,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 7,
    paddingHorizontal: 9,
    marginBottom: 5,
  },
  inputIconLeft: {
    marginRight: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 7,
  },
  countryCode: {
    fontFamily,
    fontSize: 12.5,
    fontWeight: '600',
    color: '#1F2937',
    marginLeft: 4,
  },
  verticalDivider: {
    width: 1,
    height: 14,
    backgroundColor: '#E5E7EB',
    marginLeft: 7,
  },
  textInput: {
    fontFamily,
    flex: 1,
    fontSize: 12.5,
    color: '#1F2937',
    paddingVertical: 0,
    height: '100%',
  },
  textInputFlex: {
    fontFamily,
    flex: 1,
    fontSize: 12.5,
    color: '#1F2937',
    paddingVertical: 0,
    height: '100%',
  },
  eyeIconButton: {
    padding: 3,
    marginLeft: 3,
  },

  /* 12. FORGOT PASSWORD LINK */
  forgotPasswordRow: {
    alignSelf: 'flex-end',
    marginTop: -2,
    marginBottom: 6,
  },
  forgotPasswordText: {
    fontFamily,
    fontSize: 10.5,
    fontWeight: '600',
    color: '#1B753A',
  },

  /* 13. LOG IN BUTTON */
  loginBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 38,
    backgroundColor: '#1B753A',
    borderRadius: 19,
    marginBottom: 6,
  },
  loginBtnText: {
    fontFamily,
    color: '#FFFFFF',
    fontSize: 13.5,
    fontWeight: '700',
  },

  /* 14. OR CONTINUE WITH DIVIDER */
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  dividerText: {
    fontFamily,
    fontSize: 8.5,
    fontWeight: '700',
    color: '#9CA3AF',
    letterSpacing: 1.2,
    paddingHorizontal: 8,
  },

  /* 14. SOCIAL LOGIN BUTTONS */
  socialButtonsRow: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 6,
  },
  socialBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 7,
    gap: 5,
  },
  socialBtnText: {
    fontFamily,
    fontSize: 11.5,
    fontWeight: '600',
    color: '#374151',
  },

  /* 15. BOTTOM ACCOUNT ROW */
  signUpBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    marginBottom: 4,
  },
  signUpBottomTextGray: {
    fontFamily,
    fontSize: 10,
    color: '#4B5563',
  },
  signUpBottomTextGreen: {
    fontFamily,
    fontSize: 10,
    color: '#1B753A',
    fontWeight: '700',
  },

  /* 17. BOTTOM SAFE AREA SPACER */
  bottomSpacer: {
    height: 6,
  },
});
