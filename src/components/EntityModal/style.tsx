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
    title: {
        fontSize: 16,
        marginTop: 20
    },
    subtitle: {
        marginTop: 10,
        marginBottom: 20
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