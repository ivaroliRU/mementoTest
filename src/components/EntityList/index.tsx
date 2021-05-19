import React from 'react';
import { ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import { EntityListState, Entity } from '../../state/types';
import styles from './style';

import EntityModal from '../EntityModal';

interface IProps {
    entities: EntityListState
};

interface IState {
    modalVisible: boolean
    selectedEntity: Entity
};

class EntityList extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            selectedEntity: undefined
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <EntityModal
                    isVisisble={this.state.modalVisible}
                    entity={this.state.selectedEntity}
                    toggleModal={() => { this.setState({ modalVisible: false }) }}
                />
                {(this.props.entities.length > 0) ?
                    <ScrollView>
                        {this.props.entities.map((e, i) =>
                            <TouchableOpacity key={"entity-" + e.id} onPress={() => {this.setState({modalVisible: true, selectedEntity: e})}}>
                                <ListItem
                                    key={e.Title + i}
                                    bottomDivider
                                >
                                    <Avatar
                                        rounded
                                        source={{ uri: "foo.jpg" }}
                                        title={e.Title[0]}
                                    />
                                    <ListItem.Content>
                                        <ListItem.Title>{e.Title}</ListItem.Title>
                                        <ListItem.Subtitle>{e.Subtitle}</ListItem.Subtitle>
                                    </ListItem.Content>
                                </ListItem>
                            </TouchableOpacity>
                        )}
                    </ScrollView>
                    :
                    <>
                        <Text style={styles.alertTitle}>No Entities in the list</Text>
                        <Text style={styles.alertSubtitle}>Use the button to add entities to the list</Text>
                    </>
                }
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        entities: state.entities,
    };
}

export default connect(mapStateToProps)(EntityList);