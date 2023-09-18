import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../theme/appTheme';

const CalculadoraScreen = () => {
    return (
        <View style={styles.calculatorContainer}>
            <Text style={styles.smallResult}>1,500.00</Text>
            <Text style={styles.result}>1,500.00</Text>


            <View style={styles.button}>
                {/* Boton */}
                <Text style={styles.buttonText}>1</Text>
            </View>
        </View>
    );
};

export default CalculadoraScreen;
