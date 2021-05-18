import React from 'react';
import { ScrollView, SafeAreaView, Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import { EntityListState } from '../../state/types';
import styles from './style';

interface IProps {
    entities: EntityListState
};

class EntityList extends React.Component<IProps> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {(this.props.entities.length > 0) ?
                    <ScrollView>
                        {this.props.entities.map((e, i) => <ListItem
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
                        )}
                    </ScrollView>
                    :
                    <>
                        <Text style={styles.alertTitle}>No Entities in the list</Text>
                        <Text  style={styles.alertSubtitle}>Use the button to add entities to the list</Text>
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