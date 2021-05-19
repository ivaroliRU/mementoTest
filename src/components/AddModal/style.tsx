import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingBottom: 20,
        paddingTop: 20,
        borderRadius: 5
    },
    headerText: {
        fontSize: 20,
        textAlign: 'center'
    },
    titleInput: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
    },
    subtitleInput: {
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row', 
        flexWrap:'wrap'
    },
    button: {
        margin: 10
    }
});

export default styles;