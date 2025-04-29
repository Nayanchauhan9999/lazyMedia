import {FormikErrors} from 'formik';
import React from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './styles';
import ErrorText from '../ErrorText';

interface CustomTextInputProp extends TextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onFocus?: () => void;
  editable?: boolean;
  errors: false | FormikErrors<{[key: string]: string}> | undefined;
  name: string;
  textInputStyle?: TextStyle;
  viewStyle?: ViewStyle;
  isRequired?: boolean;
}

const CustomTextInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  onBlur,
  onFocus,
  editable = true,
  errors,
  name,
  textInputStyle,
  viewStyle,
  isRequired = false,
  ...rest
}: CustomTextInputProp) => {
  return (
    <View style={viewStyle}>
      <Text style={styles.labelText}>
        {label}
        {isRequired && <Text style={styles.star}>*</Text>}
      </Text>
      <View style={[styles.view]}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          onFocus={onFocus}
          editable={editable}
          style={[styles.textInput, textInputStyle]}
          {...rest}
        />
      </View>

      <ErrorText errors={errors} name={name} />
    </View>
  );
};

export default CustomTextInput;
