import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {styles} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  ...props
}): React.JSX.Element => {
  return (
    <TouchableOpacity
      style={[styles.container, {opacity: props.disabled ? 0.7 : 1}]}
      {...props}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
