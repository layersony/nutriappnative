import { StyleSheet, View, Text, Pressable } from "react-native";

export default function Splash({ navigation }){
    return (
        <View style={styles.container}>
            

            <View style={styles.subContainer}>

                <Pressable style={[styles.searchButton, styles.button]} onPress={() => navigation.navigate('Search')}>
                    <Text style={styles.text}>Search</Text>
                </Pressable>

                <Pressable style={[styles.myListButton, styles.button]} onPress={() => alert('Pressed My List')}>
                    <Text style={styles.text}>Check My List</Text>
                </Pressable>

            </View>
            
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.text}>Back</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    subContainer: {
        flex: 6,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CFCFCF',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        width: 200
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    searchButton: {
        margin: 5
    },
    myListButton: {
        margin: 5
    },
})