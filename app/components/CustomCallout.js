import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View } from 'react-native';

const propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

class CustomCallout extends React.Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        {/* <View style={styles.bubble}> */}
          <View style={styles.amount}>{this.props.children}</View>
        {/* </View> */}
        <View style={styles.arrowBorder} />
        <View style={styles.arrow} />
      </View>
    );
  }
}

CustomCallout.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    width: 140,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 0,
    borderRadius: 6,
    borderColor: '#D53F8C',
    borderWidth: 0.5,
  },
  amount: {
    flex: 1,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderColor: 'transparent',
    borderTopColor: '#D53F8C',
    alignSelf: 'center',
    marginTop: -50,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderWidth: 18,
    borderColor: 'transparent',
    borderTopColor: '#D53F8C',
    alignSelf: 'center',
    marginTop: -5,
  },
});

export default CustomCallout;