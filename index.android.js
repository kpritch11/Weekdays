// Import the code we need
import React from 'react';
import Moment from 'moment'
import DayItem from './src/day-item'; // ./ is current directory

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
            {this.days()}
        </View>
    },
    days: function() {
        var dayItems = [];
        for (var i = 0; i < 7; i++) {
            var day = Moment().add(i, 'days').format('dddd');
            dayItems.push(<DayItem day={day} daysSince={i} />)
        }
        return dayItems
    }
});

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
