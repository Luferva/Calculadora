import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  // Estado para armazenar o valor exibido no visor da calculadora
  const [displayValue, setDisplayValue] = useState('0');
  // Estado para armazenar o valor do resultado da operação
  const [result, setResult] = useState(0);
  // Estado para armazenar o operador selecionado
  const [operator, setOperator] = useState('');
  // Estado para controlar se o ponto decimal já foi usado
  const [decimalUsed, setDecimalUsed] = useState(false);

  // Função para lidar com o pressionamento de botões
  const handleButtonPress = (value) => {
    if (value === 'C') {
      // Limpar o visor e os estados relacionados
      clearDisplay();
    } else if (value === '=') {
      // Calcular o resultado da operação
      calculateResult();
    } else if (value === '.') {
      // Adicionar o ponto decimal se ainda não foi usado
      if (!decimalUsed) {
        setDisplayValue(displayValue + value);
        setDecimalUsed(true);
      }
    } else if (value === '+/-') {
      // Inverter o sinal do número exibido
      setDisplayValue((parseFloat(displayValue) * -1).toString());
    } else if (value === '<') {
      // Remover o último dígito do número exibido
      removeLastDigit();
    } else {
      // Adicionar o dígito ou operador ao número exibido
      setDisplayValue(displayValue === '0' ? value : displayValue + value);
    }
  };

  // Função para limpar o visor e os estados relacionados
  const clearDisplay = () => {
    setDisplayValue('0');
    setResult(0);
    setOperator('');
    setDecimalUsed(false);
  };

  // Função para calcular o resultado da operação
  const calculateResult = () => {
    const currentValue = parseFloat(displayValue);

    if (operator === '+') {
      setResult(result + currentValue);
    } else if (operator === '-') {
      setResult(result - currentValue);
    } else if (operator === '*') {
      setResult(result * currentValue);
    } else if (operator === '/') {
      setResult(result / currentValue);
    }

    setDisplayValue(result.toString());
    setOperator('');
    setDecimalUsed(false);
  };

  // Função para remover o último dígito do número exibido
  const removeLastDigit = () => {
    if (displayValue.length === 1) {
      setDisplayValue('0');
    } else {
      setDisplayValue(displayValue.slice(0, -1));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resultado}>{resultado}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>handleButtonPress('1')}
        >
          <Text style={styles.buttonTexto}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>handleButtonPress('2')}
        >
          <Text style={styles.buttonTexto}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>handleButtonPress('3')}
        >
          <Text style={styles.buttonTexto}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>handleButtonPress('+')}
        >
          <Text style={styles.buttonTexto}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('4')}
        >
          <Text style={styles.buttonTexto}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('5')}
        >
          <Text style={styles.buttonTexto}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('6')}
        >
          <Text style={styles.buttonTexto}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('-')}
        >
          <Text style={styles.buttonTexto}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('7')}
        >
          <Text style={styles.buttonTexto}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('8')}
        >
          <Text style={styles.buttonTexto}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('9')}
        >
          <Text style={styles.buttonTexto}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('*')}
        >
          <Text style={styles.buttonTexto}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('0')}
        >
          <Text style={styles.buttonTexto}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('.')}
        >
          <Text style={styles.buttonTexto}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={calcular}>
          <Text style={styles.buttonTexto}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('/')}
        >
          <Text style={styles.buttonTexto}>/</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.buttonLimpar} onPress={limparResultado}>
        <Text style={styles.buttonTextoLimpar}>Limpar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  display: {
    fontSize: 48,
    marginBottom: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: '25%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 24,
  },
});