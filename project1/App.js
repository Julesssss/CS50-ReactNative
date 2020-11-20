import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const secondsIn5Mins = 60 * 5
const secondsIn25Mins = 60 * 25

export default class App extends React.Component {
  state = {
    timer: null,
    counter: secondsIn25Mins,
    counterFormatted: '25:00',
    backgroundColor: '#fff'
  }

  componentDidMount = function() {
    console.debug('componentDidMount')
  }

  tick = function() {
    let current = this.state.counter
    if (current > 0) {
      let newCount = this.state.counter -1
      this.setState({
        counter: newCount,
        counterFormatted: this.formatTime(newCount)
      })
    } else {
      this.setState({
        counter: 0,
        counterFormatted: this.formatTime(0)
      })
      clearInterval(this.state.timer);
    }
    console.debug(`tick: ${this.state.counterFormatted}`)
  }

  componentWillUnmount = function() {
    console.debug('componentWillUnmount')
    
    clearInterval(this.state.timer);
  }

  onButtonStart = function () {
    console.log('Button Start')
    
    let timer = setInterval(() => {this.tick()}, 1000);
    this.setState({timer})
  }

  onButtonStop = function () {
    console.log('Button Stop')

    clearInterval(this.state.timer);
  }

  onButtonReset = function () {
    console.log('Button Reset')
    clearInterval(this.state.timer);
    
    this.setState({
      counter: secondsIn25Mins,
      counterFormatted: this.formatTime(secondsIn25Mins)
    })
  }

  formatTime = function(count) {
    if (count < 1) {
      return '0:00'
    } else if (count < 10) {
      return `0:0${count}`
    } else if (count < 60) {
      return `0:${count}`
    } else {
      let min = parseInt(count/60)
      let rem = count%60
      if (rem < 10) {
        return `${min}:0${rem}`
      } else {
        return `${min}:${rem}`
      }
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>Pomodoro</Text>
        <View style={styles.centerContainer}>
        <Text style={styles.textClock}>{this.state.counterFormatted}</Text>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Start"
                style={styles.button}
                color= '#43d'
                onPress={() => {this.onButtonStart()}}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Stop"
                style={styles.button}
                color= '#43d'
                onPress={() => {this.onButtonStop()}}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Reset"
                margin='16'
                style={styles.button}
                color= '#43d'
                onPress={() => {this.onButtonReset()}}
              />
              </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    alignItems: 'center',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  textTitle: {
    fontSize: 40,
    alignItems: 'flex-start'
  },
  textClock: {
    fontSize: 80
  },
  button: {
    marginStart: 8,
    marginEnd: 4
  }
});
