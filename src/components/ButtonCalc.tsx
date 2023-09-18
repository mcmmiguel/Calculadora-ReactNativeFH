import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { ButtonColors, ButtonProps } from '../interfaces/interfaces';

const backgroundStyle: { [key in ButtonColors]: string } = {
    yellow: '#FF9427',
    lightGrey: '#9b9b9b',
    darkGray: '#2D2D2D',
};


const ButtonCalc = ({ text, color = 'darkGray' }: ButtonProps) => {

    const colorText = color === 'lightGrey' ? 'black' : 'white';

    return (
        <View style={{
            ...styles.button,
            backgroundColor: backgroundStyle[color],
        }}>
            <Text style={{
                ...styles.buttonText,
                color: colorText,
            }}>
                {text}
            </Text>
        </View>
    );
};

export default ButtonCalc;
