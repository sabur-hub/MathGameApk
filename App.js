// App.js
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Menu from './Menu';
import Levels from './Levels';
import About from './About';
import Game from './Game';
import BackgroundAnimation from './BackgroundAnimation'; // Импортируем компонент BackgroundAnimation


export default function App() {
    const [showMenu, setShowMenu] = useState(true);
    const [showLevels, setShowLevels] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [showGame, setShowGame] = useState(false);
    const [completedLevels, setCompletedLevels] = useState([]);
    const [currentLevel, setCurrentLevel] = useState(0);
    useEffect(() => {
        AsyncStorage.getItem('completedLevels')
            .then((value) => {
                if (value !== null) {
                    setCompletedLevels(JSON.parse(value));
                }
            })
            .catch((error) => console.error('Error reading data:', error));

        AsyncStorage.getItem('currentLevel')
            .then((value) => {
                if (value !== null) {
                    setCurrentLevel(parseInt(value));
                }
            })
            .catch((error) => console.error('Error reading data:', error));
    }, []);

    const handleStartGame = async () => {
        const savedCurrentLevel = await AsyncStorage.getItem('currentLevel');
        if (savedCurrentLevel !== null) {
            setCurrentLevel(parseInt(savedCurrentLevel));
        } else {
            setCurrentLevel(0); // Начать с первого уровня
        }
        setShowMenu(false);
        setShowLevels(false);
        setShowAbout(false);
        setShowGame(true);
    };

    const handleShowLevels = () => {
        setShowMenu(false);
        setShowLevels(true);
        setShowAbout(false);
    };

    const handleShowAbout = () => {
        setShowMenu(false);
        setShowLevels(false);
        setShowAbout(true);
    };

    const handleBack = () => {
        AsyncStorage.setItem('currentLevel', JSON.stringify(currentLevel))
            .then(() => console.log('Current level saved'))
            .catch((error) => console.error('Error saving data:', error));

        setShowMenu(true);
        setShowLevels(false);
        setShowAbout(false);
        setShowGame(false);
    };

    const handleResetGame = () => {
        AsyncStorage.removeItem('completedLevels')
            .then(() => {
                setCompletedLevels([]);
                setCurrentLevel(0); // Сбросить текущий уровень на первый
                console.log('Game reset successfully');
            })
            .catch((error) => console.error('Error resetting game:', error));
    };

    const handleLevelComplete = (levelIndex) => {
        setCompletedLevels((prevLevels) => [...prevLevels, levelIndex]);
        AsyncStorage.setItem('completedLevels', JSON.stringify(completedLevels))
            .then(() => console.log('Completed levels saved'))
            .catch((error) => console.error('Error saving data:', error));
    };

    return (
        <View style={styles.container}>
            <BackgroundAnimation />
            {showMenu && <Menu onStartGame={handleStartGame} onShowLevels={handleShowLevels} onShowAbout={handleShowAbout} onResetGame={handleResetGame} />}
            {showLevels && <Levels onClose={handleBack} />}
            {showAbout && <About onClose={handleBack} />}
            {showGame && <Game onBack={handleBack} onLevelComplete={handleLevelComplete} completedLevels={completedLevels} currentLevel={currentLevel} setCurrentLevel={setCurrentLevel} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
