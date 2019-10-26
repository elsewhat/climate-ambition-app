import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';


export const AmbitionHeader = ({
  ambition, category, ingress, allowPlusOne, allowLogAction
}) => (
<ListItem
title={ambition}
subtitle={ingress}
leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' } }}
bottomDivider
chevron
/>
);

AttachmentHeader.propTypes = {
   ambition: PropTypes.string,
   category: PropTypes.string,
   ingress: PropTypes.string,
   allowPlusOne: PropTypes.bool,
   allowLogAction: PropTypes.bool,

};

AttachmentHeader.defaultProps = {
    ambition:"",
    category: "",
    ingress: "",
    allowPlusOne: true,
    allowLogAction: true,
};




