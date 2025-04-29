import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

const useIsKeyboardVisible = (): Boolean => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    let showKeyboardSubscription = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        //Keyboard visible
        setIsKeyboardVisible(true);
      },
    );

    let hideKeyboardSubscription = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        //Keyboard hidden
        setIsKeyboardVisible(false);
      },
    );

    return () => {
      showKeyboardSubscription.remove();
      hideKeyboardSubscription.remove();
    };
  }, []);

  return isKeyboardVisible;
};

export default useIsKeyboardVisible;
