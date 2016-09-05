// Import the code we need
import React from 'react';

import {
    Text,
} from 'react-native';

// Create a react component
var DayItem = React.createClass({
    render: function() {
        return <Text style={this.style()}>
            {this.props.day}
        </Text>
    },
    // Dynamically style the react component
    style: function() {
        return {
            color: this.color(),
            fontWeight: this.fontWeight(),
            fontSize: this.fontSize(),
            lineHeight: this.lineHeight()
        }
    },
    color: function() {
        var opacity = 1 / (this.props.daysSince + 1);
        return 'rgba(0, 0, 0, '+ opacity + ')';
    },
    fontWeight: function() {
        var weight = 7 - this.props.daysSince;
        return (weight * 100).toString();
    },
    fontSize: function() {
        return 60 - 6 * this.props.daysSince;
    },
    lineHeight: function() {
        return 70 - 4 * this.props.daysSince;
    }
});

// Make this code available elsewhere
module.exports = DayItem;
