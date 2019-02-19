import React from 'react';

import {
  View, Text, TextInput, TouchableOpacity,
} from 'react-native';

import styles from './styles';

const Welcome = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Bem vindo</Text>
    <Text style={styles.text}>
      Para continuar precisamos que você informe seu usuário do Github.
    </Text>

    <View style={styles.form}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu usuário"
        underlineColorAndroid="transparent"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Prosseguir</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Welcome;