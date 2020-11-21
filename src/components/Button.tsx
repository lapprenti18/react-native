import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 245,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        fontFamily: "SFProText-Regular",
        fontSize: 15,
        textAlign: "center",
    },
})

interface ButtonProps {
    label : string;
    variant: "default" | "primary";
    onPress: () => void;
}

const Button = ({ label, variant, onPress } : ButtonProps) => {
    const backgroundColor = variant === "primary" ? "#2CB9B0": "rgba(12, 13, 52, 0.05)"; 
    const color = variant === "primary" ? "white" : "#0C0D34" ;
    return (
        <RectButton
          style={[styles.container, { backgroundColor }]}
          {...{onPress}}
        >
            <Text style={[styles.label, { color }]}>{label}</Text>
        </RectButton>
    );
}

Button.defaultProps = {
    variant: "default"
};

export default Button;