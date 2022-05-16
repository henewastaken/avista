import React, { useState } from 'react';
import {Image, Text, StyleSheet, View, TextInput, Button} from 'react-native';

console.log("App started")

const players = []

function StartScreen(props) {

    const playerValue = "";
    // Handle the player add inputField
    const [player, setPlayer] = useState('');
    // Adds inputted player to playerslist and resets the setPLayer value
    const handleEnterPress = () => {
        console.log("is empty?", player==="")
        console.log(player)
        // Added sting cannot be empty
        if (player !== "") {
            console.log("player added")
            players.push(player)
        }
        setPlayer("")
    }

    
    return (
        <View style={styles.container}>
            <View>
                <TextInput 
                    style={{height: 40}}
                    placeholder="Add player"
                    onChangeText={newPlayer => setPlayer(newPlayer)}
                    defaultValue={player} 
                    clearButtonMode="always"
                />
                
                <Button 
                    title='Enter'
                    style={styles.enterButton} 
                    onPress={handleEnterPress}
                        
                />
                {
                    // Map the list to Text component to show all added players
                    players.map((name, i) => (
                        <Text style={styles.playersText}>
                            {name}
                        </Text>
                        )
                    )
                }
            </View>

            <Text style={styles.welcomeText}>Welcome to Avista game</Text>
            <View style={styles.startGameButton}>
                <Button title='Start game'/>
            </View>  
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "pink",
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    enterButton: {
        flexDirection: "row"
    },
    playersText: {
        alignSelf: "center",
    },
    startGameButton: {
        position: "absolute",
        bottom: 100, 
    
    },
    welcomeText: {
        alignSelf: "flex-start", 
        position: "absolute",
        marginTop: 100,
    }
})
export default StartScreen;