import React, { useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import ButtonCalc from '../components/ButtonCalc';

enum Operators {
    add, substract, multiply, divide
}

const CalculadoraScreen = () => {

    const [beforeNumber, setBeforeNumber] = useState('0');
    const [number, setNumber] = useState('0');

    const lastOperation = useRef<Operators>();

    const clean = () => {
        setNumber('0');
        setBeforeNumber('0');
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
        } else {
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

    const changeNumberByBefore = () => {
        if (number.endsWith('.')) {
            setBeforeNumber(number.slice(0, -1));
        } else {
            setBeforeNumber(number);
        }
        setNumber('0');
    };

    const divide = () => {
        changeNumberByBefore();
        lastOperation.current = Operators.divide;
    };

    const multiply = () => {
        changeNumberByBefore();
        lastOperation.current = Operators.multiply;
    };

    const substract = () => {
        changeNumberByBefore();
        lastOperation.current = Operators.substract;
    };

    const add = () => {
        changeNumberByBefore();
        lastOperation.current = Operators.add;
    };

    const calculate = () => {
        const num1 = Number(number);
        const num2 = Number(beforeNumber);

        switch (lastOperation.current) {
            case Operators.add:
                setNumber(`${num1 + num2}`);
                break;

            case Operators.substract:
                setNumber(`${num2 - num1}`);
                break;

            case Operators.multiply:
                setNumber(`${num1 * num2}`);
                break;

            case Operators.divide:
                setNumber(`${num2 / num1}`);
                break;

            default:
                break;
        }

        setBeforeNumber('0');
    };

    return (
        <View style={styles.calculatorContainer}>
            {
                (beforeNumber !== '0') && (<Text style={styles.smallResult}>{beforeNumber}</Text>)
            }
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
                <ButtonCalc text="÷" color="yellow" action={divide} />
            </View>

            <View style={styles.row}>
                {/* Fila de botones */}
                <ButtonCalc text="7" action={buildNumber} />
                <ButtonCalc text="8" action={buildNumber} />
                <ButtonCalc text="9" action={buildNumber} />
                <ButtonCalc text="x" color="yellow" action={multiply} />
            </View>

            <View style={styles.row}>
                {/* Fila de botones */}
                <ButtonCalc text="4" action={buildNumber} />
                <ButtonCalc text="5" action={buildNumber} />
                <ButtonCalc text="6" action={buildNumber} />
                <ButtonCalc text="-" color="yellow" action={substract} />
            </View>

            <View style={styles.row}>
                {/* Fila de botones */}
                <ButtonCalc text="1" action={buildNumber} />
                <ButtonCalc text="2" action={buildNumber} />
                <ButtonCalc text="3" action={buildNumber} />
                <ButtonCalc text="+" color="yellow" action={add} />
            </View>

            <View style={styles.row}>
                {/* Fila de botones */}
                <ButtonCalc text="0" width action={buildNumber} />
                <ButtonCalc text="." action={buildNumber} />
                <ButtonCalc text="=" color="yellow" action={calculate} />
            </View>

        </View>
    );
};

export default CalculadoraScreen;
