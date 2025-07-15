import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// Assets
import logo from '@assets/logo.png';
import TopRight from '@assets/welcome/top-right.png';
import TopLeft from '@assets/welcome/top-left.png';
import BottomRight from '@assets/welcome/bottom-right.png';
import BottomLeft from '@assets/welcome/bottom-left.png';

const DECORATIVE_IMAGES = [
    { image: TopLeft, position: 'TopLeft' },
    { image: TopRight, position: 'TopRight' },
    { image: BottomLeft, position: 'BottomLeft' },
    { image: BottomRight, position: 'BottomRight' },
];

export const Home = ({ navigation }) =>
    <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.bottomButtonContainer}>
            <TouchableOpacity
                style={styles.nextButton}
                onPress={() => navigation.navigate('Loading')}
            >
                {
                    images.map((_itm, _idx) => (
                        <Image
                            source={_itm.image}
                            key={_idx}
                            alt={_itm.content}
                            style={{
                                position: 'absolute',
                                ...styles[_itm.content]
                            }}
                        />
                    ))
                }
                <MaterialIcons
                    name="keyboard-arrow-right"
                    size={42}
                    color="white"
                />
            </TouchableOpacity>
const NextButton = ({ onPress }) => (
    <TouchableOpacity
        style={styles.nextButton}
        onPress={onPress}
    >
        {DECORATIVE_IMAGES.map(({ image, position }) => (
            <Image
                key={position}
                source={image}
                style={[styles.decorativeImage, styles[position]]}
                accessibilityLabel={`${position} decorative element`}
            />
        ))}
        <MaterialIcons
            name="keyboard-arrow-right"
            size={42}
            color="white"
        />
    </TouchableOpacity>
);

export const Home = ({ navigation }) => {
    const handleNextPress = () => navigation.navigate('Loading');

    return (
        <View style={styles.container}>
            <Image 
                source={logo} 
                style={styles.logo}
                accessibilityLabel="App logo"
            />
            <View style={styles.bottomButtonContainer}>
                <NextButton onPress={handleNextPress} />
            </View>
        </View>
    </View>


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },
    logo: {
        position: 'absolute',
        left: '50%',
        top: '40%',
        transform: 'translate(-50%, -50%)',
    },
    bottomButtonContainer: {
        position: 'absolute',
        bottom: 40,
        width: 100,
        alignItems: 'center',
    },
    nextButton: {
        backgroundColor: '#DF16FF',
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    decorativeImage: {
        position: 'absolute',
    },
    BottomLeft: {
        left: -12,
        bottom: -12,
    },
    BottomRight: {
        right: -12,
        bottom: -12,
    },
    TopLeft: {
        left: -12,
        top: -12,
    },
    TopRight: {
        right: -12,
        top: -12,
    },
});