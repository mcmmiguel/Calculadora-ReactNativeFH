import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import ButtonCalc from '../components/ButtonCalc';
import useCalculator from '../hooks/useCalculator';

const CalculadoraScreen = () => {

    const {
        number,
        beforeNumber,
        buildNumber,
        deleteNumber,
        clean,
        positiveNegative,
        add,
        substract,
        multiply,
        divide,
        calculate,
    } = useCalculator();

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
