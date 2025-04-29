import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  phone: Yup.string()
    .trim()
    .required('Please Enter your phone number')
    .length(10, 'Phone number should be at 10 digits'),

  password: Yup.string()
    .trim()
    .min(8, 'Password should be at least 8 characters')
    .required('Please enter password'),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string().trim().required('Please enter your name'),
  phone: Yup.string()
    .trim()
    .required('Please enter your phone number')
    .length(10, 'Phone number should be at 10 digits'),

  password: Yup.string()
    .trim()
    .min(8, 'Password should be at least 8 characters')
    .required('Please enter password'),
  confirmPassword: Yup.string()
    .trim()
    .oneOf(
      [Yup.ref('password')],
      'Password and confirm password does not matched',
    )
    .required('Please enter confirm password'),
});
export const postSchema = Yup.object().shape({
  title: Yup.string().trim().required('Enter title'),
  description: Yup.string().trim().required('Enter description'),
});
