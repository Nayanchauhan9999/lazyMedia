import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AuthButton, CustomTextInput, SafeAreaContainer} from '@components';
import GlobalStyle from '@utils/theme/globalStyles';
import {useFormik} from 'formik';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '@navigation/Navigation';
import {loginSchema} from '@utils/schema';
import {AsyncKey, setData} from '@utils/constant/asyncStore';
import {styles} from './styles';
import {StackActions} from '@react-navigation/native';
import {User} from '@utils/schema/realmSchema';
import {useQuery} from '@realm/react';
import {useDispatch} from 'react-redux';
import {showToast} from '@redux/commonSlice';
import {setIsLogin} from '@redux/userInfoSlice';

type LoginProps = StackScreenProps<RootStackParamList, 'Login'>;

type LoginInfoType = {
  phone: string;
  password: string;
};

const Login: React.FC<LoginProps> = ({navigation}): React.JSX.Element => {
  //Hooks
  const users = useQuery(User);
  const dispatch = useDispatch();

  const {errors, handleChange, values, handleSubmit, touched, handleBlur} =
    useFormik<LoginInfoType>({
      initialValues: {
        phone: '',
        password: '',
      },
      onSubmit: async value => {
        //find the user from users list
        const findUser = users.find(
          user =>
            user.phone === value.phone && user.password === value.password,
        );

        if (findUser) {
          await setData(JSON.stringify(true), AsyncKey.ISLOGIN);
          await setData(JSON.stringify(findUser), AsyncKey.USER_DETAILS);
          dispatch(setIsLogin(true));
          dispatch(showToast('Login Successful'));
          navigation.dispatch(StackActions.replace('Home'));
        } else {
          dispatch(showToast('User not found'));
        }
      },
      validationSchema: loginSchema,
      enableReinitialize: true,
    });

  return (
    <SafeAreaContainer>
      <View style={GlobalStyle.PT20}>
        <Text style={[GlobalStyle.text20Medium]}>Welcome</Text>

        <View style={styles.inputFieldWrapper}>
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
        </View>

        <View style={GlobalStyle.PT20}>
          <AuthButton
            onPress={() => handleSubmit()}
            title={'Login'}
            disabled={errors.phone || errors.password ? true : false}
          />
        </View>

        <View style={styles.footerView}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.exploreText}>Register</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>or</Text>
          <TouchableOpacity
            onPress={() => navigation.dispatch(StackActions.replace('Home'))}>
            <Text style={styles.exploreText}>Explore without login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaContainer>
  );
};

export default Login;
