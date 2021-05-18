import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: 20,
        paddingTop: 20,
        borderRadius: 5
    },
    input: {
        marginTop: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection:'row', 
        flexWrap:'wrap'
    },
    button: {
        margin: 10
    }
});

export default styles;