import React from "react";
import { StyleSheet, View, Button } from "react-native";
import PropTypes from 'prop-types';

export default class CustomButton extends React.Component { 
  constructor(props) {
    super(props);
  }

    render() { 
      return (
        <View style={styles.button}>
          <Button
            title={this.props.title}
            color= '#43d'
            onPress={this.props.onPress()}
          />
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  button: {
    marginStart: 4,
    marginEnd: 4,
    backgroundColor: '#000'
  }
})

CustomButton.propTypes = { 
  title: PropTypes.string.isRequired, 
  onPress: PropTypes.func.isRequired 
};