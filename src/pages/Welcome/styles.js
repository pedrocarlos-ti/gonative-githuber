import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 44,
    justifyContent: 'center',
    marginTop: metrics.baseMargin,
  },
  buttonText: {
    alignContent: 'center',
    color: colors.white,
    fontSize: 16,
  },
  container: {
    alignItems: 'stretch',
    backgroundColor: colors.secundary,
    flex: 1,
    justifyContent: 'center',
    padding: metrics.basePadding,
  },
  error: {
    color: colors.danger,
    marginTop: metrics.baseMargin,
    textAlign: 'center',
  },
  form: {
    marginTop: metrics.baseMargin * 2,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingLeft: metrics.basePadding,
  },
  text: {
    color: colors.light,
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
