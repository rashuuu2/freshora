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

  /* BACKGROUND IMAGE POSITION AND SIZE (TOP HERO SECTION) */
  topImageContainer: {
    width: '100%',
    height: 225,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },

  /* WHITE ACCOUNT PANEL OVERLAPPING BOTTOM OF BACKGROUND IMAGE */
  whitePanel: {
    position: 'absolute',
    top: 195,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
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

  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 6,
  },

  /* CREATE ACCOUNT LABEL (PAGE 2 TYPOGRAPHY MASTER SYSTEM) */
  categoryLabel: {
    fontFamily,
    color: '#1B753A',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 3,
    textTransform: 'uppercase',
  },

  /* MAIN HEADING (PAGE 2 TYPOGRAPHY MASTER SYSTEM) */
  heading: {
    fontFamily,
    fontSize: 26,
    fontWeight: '900',
    lineHeight: 28,
    letterSpacing: -0.4,
    marginBottom: 3,
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

  /* DESCRIPTION (PAGE 2 TYPOGRAPHY MASTER SYSTEM) */
  description: {
    fontFamily,
    color: '#66786C',
    fontSize: 11.5,
    lineHeight: 15,
    fontWeight: '400',
    marginBottom: 6,
    textAlign: 'left',
  },

  /* INPUT FIELDS (PAGE 2 TYPOGRAPHY MASTER SYSTEM) */
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 36,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 7,
    paddingHorizontal: 9,
    marginBottom: 4,
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

  /* PASSWORD REQUIREMENT TEXT (PAGE 2 TYPOGRAPHY MASTER SYSTEM) */
  passwordHelperText: {
    fontFamily,
    color: '#9CA3AF',
    fontSize: 8.5,
    marginTop: -2,
    marginBottom: 5,
  },

  /* TERMS CHECKBOX (PAGE 2 TYPOGRAPHY MASTER SYSTEM) */
  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  checkboxSquare: {
    width: 15,
    height: 15,
    borderRadius: 3,
    borderWidth: 1.5,
    borderColor: '#D1D5DB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
    backgroundColor: '#FFFFFF',
  },
  checkboxSquareChecked: {
    backgroundColor: '#1B753A',
    borderColor: '#1B753A',
  },
  termsText: {
    fontFamily,
    fontSize: 9,
    color: '#4B5563',
  },
  termsLink: {
    fontFamily,
    color: '#1B753A',
    textDecorationLine: 'underline',
    fontWeight: '600',
  },

  /* CREATE ACCOUNT BUTTON (PAGE 2 TYPOGRAPHY MASTER SYSTEM) */
  createAccountBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 38,
    backgroundColor: '#1B753A',
    borderRadius: 19,
    marginBottom: 6,
  },
  createAccountBtnText: {
    fontFamily,
    color: '#FFFFFF',
    fontSize: 13.5,
    fontWeight: '700',
  },

  /* OR CONTINUE WITH DIVIDER (PAGE 2 TYPOGRAPHY MASTER SYSTEM) */
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

  /* SOCIAL LOGIN BUTTONS (PAGE 2 TYPOGRAPHY MASTER SYSTEM) */
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
    height: 34,
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

  /* LOGIN TEXT ROW (PAGE 2 TYPOGRAPHY MASTER SYSTEM) */
  loginRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    marginBottom: 4,
  },
  loginTextGray: {
    fontFamily,
    fontSize: 10,
    color: '#4B5563',
  },
  loginTextGreen: {
    fontFamily,
    fontSize: 10,
    color: '#1B753A',
    fontWeight: '700',
  },

  /* BOTTOM SAFE AREA SPACER */
  bottomSpacer: {
    height: 6,
  },
});
