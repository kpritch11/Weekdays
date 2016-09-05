// Import the code we need
import React from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

// Create a react component
var Weekdays = React.createClass({
    render: function() {
        return <View style={styles.container}>
            <Text>
                Days of the week:
            </Text>
        </View>
    }
})

// Style the react component
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // vertical alignment
        alignItems: 'center',     // horizontal alignment
    }
});

// Show the react component on the screen
AppRegistry.registerComponent('weekdays', function() {
    return Weekdays
});
