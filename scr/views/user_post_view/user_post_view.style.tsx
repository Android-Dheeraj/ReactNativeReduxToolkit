import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.03,
    marginHorizontal: width * 0.04,
    shadowColor: '#000',
    backgroundColor: 'white',
    marginTop: width * 0.03,
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  title: {
    fontSize: width * 0.038,
    fontWeight: '500',
  },
  description: {
    fontSize: width * 0.03,
    fontWeight: '400',
    marginTop: width * 0.01,
  },
});

export default styles;
