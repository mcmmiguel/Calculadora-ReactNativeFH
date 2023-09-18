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
                {/* Fila de botones */}
                <ButtonCalc text="C" color="lightGrey" />
                <ButtonCalc text="+/-" color="lightGrey" />
                <ButtonCalc text="del" color="lightGrey" />
                <ButtonCalc text="÷" color="yellow" />
            </View>

            <View style={styles.row}>
                {/* Fila de botones */}
                <ButtonCalc text="7" />
                <ButtonCalc text="8" />
                <ButtonCalc text="9" />
                <ButtonCalc text="x" color="yellow" />
            </View>

            <View style={styles.row}>
                {/* Fila de botones */}
                <ButtonCalc text="4" />
                <ButtonCalc text="5" />
                <ButtonCalc text="6" />
                <ButtonCalc text="-" color="yellow" />
            </View>

            <View style={styles.row}>
                {/* Fila de botones */}
                <ButtonCalc text="1" />
                <ButtonCalc text="2" />
                <ButtonCalc text="3" />
                <ButtonCalc text="+" color="yellow" />
            </View>

            <View style={styles.row}>
                {/* Fila de botones */}
                <ButtonCalc text="0" width />
                <ButtonCalc text="." />
                <ButtonCalc text="=" color="yellow" />
            </View>


        </View>
    );
};

export default CalculadoraScreen;
