import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconsProps = PropsWithChildren<{name: string}>;

const Icons = ({name}: IconsProps) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" size={38} color="#A91D3A" />;
    case 'cross':
      return <Icon name="times" size={38} color="#40A578" />;
    default:
      return <Icon name="tv" size={38} color="#FFF5E0" />;
  }
};

export default Icons;

const styles = StyleSheet.create({});
