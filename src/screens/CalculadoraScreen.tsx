import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../theme/appTheme';
import ButtonCalc from '../components/ButtonCalc';

const CalculadoraScreen = () => {

    const [beforeNumber, setBeforeNumber] = useState('100');
    const [number, setNumber] = useState('100');

    const clean = () => {
        setNumber('0');
    };

    const buildNumber = (textNumber: string) => {
        setNumber(number + textNumber);
    };

    const positiveNegative = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number);
        }
    };

    return (
        <View style={styles.calculatorContainer}>
            <Text style={styles.smallResult}>{beforeNumber}</Text>
            <Text
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {number}
            </Text>


            <View style={styles.row}>
                {/* Fila de botones */}
                <ButtonCalc text="C" color="lightGrey" action={clean} />
                <ButtonCalc text="+/-" color="lightGrey" action={clean} />
                <ButtonCalc text="del" color="lightGrey" action={clean} />
                <ButtonCalc text="÷" color="yellow" action={clean} />
            </View>

            <View style={styles.row}>
                {/* Fila de botones */}
                <ButtonCalc text="7" action={buildNumber} />
                <ButtonCalc text="8" action={buildNumber} />
                <ButtonCalc text="9" action={buildNumber} />
                <ButtonCalc text="x" color="yellow" action={clean} />
            </View>

            <View style={styles.row}>
                {/* Fila de botones */}
                <ButtonCalc text="4" action={buildNumber} />
                <ButtonCalc text="5" action={buildNumber} />
                <ButtonCalc text="6" action={buildNumber} />
                <ButtonCalc text="-" color="yellow" action={clean} />
            </View>

            <View style={styles.row}>
                {/* Fila de botones */}
                <ButtonCalc text="1" action={buildNumber} />
                <ButtonCalc text="2" action={buildNumber} />
                <ButtonCalc text="3" action={buildNumber} />
                <ButtonCalc text="+" color="yellow" action={clean} />
            </View>

            <View style={styles.row}>
                {/* Fila de botones */}
                <ButtonCalc text="0" width action={buildNumber} />
                <ButtonCalc text="." action={buildNumber} />
                <ButtonCalc text="=" color="yellow" action={clean} />
            </View>


        </View>
    );
};

export default CalculadoraScreen;
