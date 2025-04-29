import {FormikErrors} from 'formik';
import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

interface ErrorTextProp {
  errors: false | FormikErrors<{[key: string]: string}> | undefined;
  name: string;
}

const ErrorText = ({errors, name}: ErrorTextProp) => {
  return (
    <>
      {errors && errors[name] && (
        <Text style={styles.errorText}>{errors[name]}</Text>
      )}
    </>
  );
};

export default ErrorText;
