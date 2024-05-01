import React from 'react';
import { StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const BackgroundAnimation = () => {
    const colors = ['#ff8f72', 'rgba(188,255,141,0.6)', 'rgba(137,154,255,0.65)']; // Массив цветов для градиента

    // Создаем анимированное значение для плавного перехода цветов
    const animatedValue = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        Animated.loop(
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: 10000, // Увеличили длительность анимации
                useNativeDriver: false,
            }),
        ).start();
    }, [animatedValue]);

    // Интерполируем значение анимации для плавного изменения цвета
    const backgroundColor = animatedValue.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1], // Количество значений в inputRange остается неизменным
        outputRange: [colors[0], colors[0], colors[1], colors[1], colors[2]], // Соответствующее количество значений в outputRange
    });

    return (
        <Animated.View style={[styles.container, { backgroundColor }]} />
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject, // Занимает весь задний фон
    },
});

export default BackgroundAnimation;
