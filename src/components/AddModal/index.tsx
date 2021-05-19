import React from 'react';
import Modal from 'react-native-modal';
import { SafeAreaView, Text, TextInput, Button, View } from "react-native";
import styles from './style';

type IProps = {
    isVisisble: boolean,
    toggleModal: () => void
    addEntity: (title, subtitle) => void
};

interface IState {
    title: string
    subtitle: string
}

class AddModal extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            subtitle: ""
        }
    }

    render() {
        return (
            <Modal isVisible={this.props.isVisisble} onBackdropPress={this.props.toggleModal}>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.headerText}>Add new entity!</Text>
                    <TextInput
                        style={styles.titleInput}
                        placeholder="Title of the entity"
                        onChangeText={(value) => { this.setState({ title: value }) }}
                    />
                    <TextInput
                        style={styles.subtitleInput}
                        placeholder="Subtitle of the entity"
                        onChangeText={(value) => { this.setState({ subtitle: value }) }}
                    />

                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Cancel" onPress={this.props.toggleModal} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Add" onPress={() => {
                                this.props.addEntity(this.state.title, this.state.subtitle);
                                this.setState({
                                    title: "",
                                    subtitle: ""
                                })
                            }} />
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
        );
    }
}

export default AddModal;