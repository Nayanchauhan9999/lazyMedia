import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AuthButton, CustomTextInput, SafeAreaContainer} from '@components';
import GlobalStyle from '@utils/theme/globalStyles';
import {styles} from './styles';
import {useFormik} from 'formik';
import {RootStackParamList} from '@navigation/Navigation';
import {StackScreenProps} from '@react-navigation/stack';
import {useRealm} from '@realm/react';
import {User} from '@utils/schema/realmSchema';
import {registerSchema} from '@utils/schema';

type RegisterProps = StackScreenProps<RootStackParamList, 'Register'>;

const Register: React.FC<RegisterProps> = ({navigation}): React.JSX.Element => {
  const realm = useRealm();

  const {errors, handleChange, values, handleSubmit, touched, handleBlur} =
    useFormik({
      initialValues: {
        name: '',
        phone: '',
        password: '',
        confirmPassword: '',
      },
      onSubmit: async value => {
        realm.write(() => {
          realm.create(
            'User',
            User.createUser(value.name, value.phone, value.password),
          );
          navigation.goBack();
        });
      },
      validationSchema: registerSchema,
      enableReinitialize: true,
    });
  return (
    <SafeAreaContainer>
      <View style={GlobalStyle.PT20}>
        <Text style={[GlobalStyle.text20Medium, styles.headerText]}>
          Register
        </Text>

        <View style={styles.inputFieldWrapper}>
          <CustomTextInput
            name="name"
            errors={touched.name && errors}
            onChangeText={handleChange('name')}
            value={values.name}
            placeholder={'Enter full name'}
            label={'name'}
            onBlur={handleBlur('name')}
          />
          <CustomTextInput
            name="phone"
            errors={touched.phone && errors}
            onChangeText={handleChange('phone')}
            value={values.phone}
            placeholder={'Enter phone number'}
            label={'Phone'}
            onBlur={handleBlur('phone')}
            keyboardType="phone-pad"
          />

          <CustomTextInput
            name="password"
            errors={touched.password && errors}
            onChangeText={handleChange('password')}
            value={values.password}
            placeholder="⚹ ⚹ ⚹ ⚹ ⚹ ⚹ ⚹"
            label={'Password'}
            secureTextEntry={true}
            onBlur={handleBlur('password')}
          />

          <CustomTextInput
            name="confirmPassword"
            errors={touched.confirmPassword && errors}
            onChangeText={handleChange('confirmPassword')}
            value={values.confirmPassword}
            placeholder="⚹ ⚹ ⚹ ⚹ ⚹ ⚹ ⚹"
            label={'confirmPassword'}
            secureTextEntry={true}
            onBlur={handleBlur('confirmPassword')}
          />
        </View>

        <View style={GlobalStyle.PT20}>
          <AuthButton
            onPress={() => handleSubmit()}
            title={'Register'}
            disabled={
              errors.phone ||
              errors.password ||
              errors.confirmPassword ||
              errors.name
                ? true
                : false
            }
          />
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backToLoginText}>Back To Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaContainer>
  );
};

export default Register;
