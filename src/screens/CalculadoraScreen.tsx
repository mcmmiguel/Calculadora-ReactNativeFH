import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../theme/appTheme';
import ButtonCalc from '../components/ButtonCalc';

const CalculadoraScreen = () => {
    return (
        <View style={styles.calculatorContainer}>
            <Text style={styles.smallResult}>1,500.00</Text>
            <Text style={styles.result}>1,500.00</Text>


            <View style={styles.row}>

                {/* Boton */}
                <ButtonCalc text="C" />
                <ButtonCalc text="+/-" />
                <ButtonCalc text="del" />
                <ButtonCalc text="÷" color="yellow" />
            </View>


        </View>
    );
};

export default CalculadoraScreen;
