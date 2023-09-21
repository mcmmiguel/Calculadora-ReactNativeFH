import { useRef, useState } from 'react';

enum Operators {
    add, substract, multiply, divide
}

const useCalculator = () => {
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

        }

        setBeforeNumber('0');
    };

    return {
        number,
        beforeNumber,
        buildNumber,
        deleteNumber,
        positiveNegative,
        clean,
        add,
        substract,
        multiply,
        divide,
        calculate,
    };
};
export default useCalculator;
