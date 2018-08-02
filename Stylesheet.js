import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingLeft: 5,
    flex: 1,
    backgroundColor: '#e0e0eb',
  },
  containerNoPadding: {
    flex: 1,
    paddingLeft: 5,
    backgroundColor: '#e0e0eb',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    alignItems: 'flex-end',
    fontFamily: 'AmericanTypewriter-Bold',
  },
  value: {
    marginLeft: 10,
    fontSize: 18,
    fontFamily: 'AmericanTypewriter',
  },
  formGroup: {
    flexDirection: 'row',
    marginBottom: 10
  },
  sectonHeader: {
    backgroundColor: '#ccc'
  },
  tFont: {
    fontFamily: 'AmericanTypewriter',
    fontSize: 17,
  },
  heading: {
    paddingBottom: 10,
    paddingTop: 15,
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'AmericanTypewriter-Bold',
  },
});
