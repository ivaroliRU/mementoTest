import React from 'react';
import { FloatingAction } from "react-native-floating-action";

class AddButton extends React.Component {
    constructor(props) {
        super(props);

        this.actions = [
            {
                text: "Add New Entity",
                name: "bt_add",
                position: 1,
                color: '#00c36d'
              },
              {
                text: "Copy Random Entity",
                name: "bt_copy",
                position: 2,
                color: '#00c36d'
              }
        ]
    }

    render() {
        return (
            <FloatingAction
                actions={this.actions}
                onPressItem={name => {
                    console.log(`selected button: ${name}`);
                }}
                color='#00c36d'
            />
        );
    }
}

export default AddButton;