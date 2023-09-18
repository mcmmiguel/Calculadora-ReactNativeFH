import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { ButtonColors, ButtonProps } from '../interfaces/interfaces';

const backgroundStyle: { [key in ButtonColors]: string } = {
    yellow: '#FF9427',
    lightGrey: '#9b9b9b',
    darkGray: '#2D2D2D',
};

const ButtonCalc = ({ text, color = 'darkGray', width = false }: ButtonProps) => {

    const colorText = color === 'lightGrey' ? 'black' : 'white';
    const widthButton = width ? 180 : 80;
    return (
        <TouchableOpacity >
            <View style={{
                ...styles.button,
                width: widthButton,
                backgroundColor: backgroundStyle[color],

            }}>
                <Text style={{
                    ...styles.buttonText,
                    color: colorText,
                }}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default ButtonCalc;
