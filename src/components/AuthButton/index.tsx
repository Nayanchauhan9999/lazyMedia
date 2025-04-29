/* eslint-disable react-native/no-inline-styles */
import {
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import {styles} from './styles';

interface IAuthButton extends TouchableOpacityProps {
  title: string;
}

const AuthButton: React.FC<IAuthButton> = (props): React.JSX.Element => {
  return (
    <TouchableOpacity
      style={[styles.button, {opacity: props.disabled ? 0.7 : 1}]}
      activeOpacity={0.5}
      {...props}
      onPress={e => {
        Keyboard.dismiss();
        props.onPress && props.onPress(e);
      }}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default AuthButton;
