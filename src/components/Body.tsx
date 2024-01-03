/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function Body() {
  const [imageIndex, setImageIndex] = useState(1);

  // Import dice images
  const diceImages = [
    require('../assets/images/dice1.png'),
    require('../assets/images/dice2.png'),
    require('../assets/images/dice3.png'),
    require('../assets/images/dice4.png'),
    require('../assets/images/dice5.png'),
    require('../assets/images/dice6.png'),
  ];

  function rollDice() {
    const random = Math.floor(Math.random() * 6);
    setImageIndex(random);
    console.log(imageIndex);
  }

  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Dice Roll</Text>
      </View>
      <View>
        <View style={styles.bodyContainer}>
          <Image source={diceImages[imageIndex]} style={styles.image} />
        </View>
        <TouchableOpacity
          onPress={() => rollDice()}
          style={styles.buttonContainer}>
          <Text style={styles.button}>ROLL THE DICE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
    marginTop: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 160,
  },
  image: {
    height: 200,
    width: 200,
    marginBottom: 32,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    // borderColor: '#fff',
    borderRadius: 8,
    backgroundColor: '#87CEEB',
    color: '#000',
    padding: 12,
  },
});
