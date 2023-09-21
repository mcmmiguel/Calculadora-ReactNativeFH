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

        // No aceptar doble punto
        if (number.includes('.') && textNumber === '.') { return; }

        if (number.startsWith('0') || number.startsWith('-0')) {

            // Punto decimal
            if (textNumber === '.') {
                setNumber(number + textNumber);

                // Evaluar si es otro cero y hay un punto
            } else if (textNumber === '0' && number.includes('.')) {
                setNumber(number + textNumber);
                // Evaluar si es diferente de cero y no tiene un punto
            } else if (textNumber !== '0' && !number.includes('.')) {
                setNumber(textNumber);
                // Evitar el 00000.0
            } else if (textNumber === '0' && !number.includes('.')) {
                setNumber(number);
            } else {
                setNumber(number + textNumber);
            }


        } else {
            setNumber(number + textNumber); //Concatenar el valor del número más la entrada del nuevo número
        }

    };

    const deleteNumber = () => {
        if (number.startsWith('-') && number.length === 2) {
            setNumber('0');
        } else if (number.length > 1) {
            setNumber(number.slice(0, -1));
        } else if (!number.startsWith('0')) {
            setNumber('0');
        }
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
                <ButtonCalc text="+/-" color="lightGrey" action={positiveNegative} />
                <ButtonCalc text="del" color="lightGrey" action={deleteNumber} />
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
