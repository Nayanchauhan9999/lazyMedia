import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  ModalProps,
  Modal as NativeModal,
  Pressable,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

import Images from '@assets';
import {heightPixel, pixelSizeVertical} from '@utils/responsiveDimensions';
import GlobalStyle from '@utils/theme/globalStyles';
import {styles} from './styles';
import AuthButton from '../AuthButton';

interface IModalProps extends ModalProps {
  onSubmit?: () => void;
  onDiscard?: () => void;
  withLogo?: boolean;
  forDeleteAccount?: boolean;
  content?: React.ReactNode;
  warningText?: React.ReactNode;
  withCloseButton?: boolean;
  onPressCloseButton?: () => void;
  isSubmitBtnDisabled?: boolean;
  secondBtnTitle?: string;
  onPressSecondBtn?: () => void;
  buttonTitle?: string;
  isCancelButtonVisible?: boolean | undefined;
  onPressCancelButton?: () => void;
  isMainButtonVisible?: boolean | undefined;
  bookId?: string | undefined;
  onOpenCamera?: () => void;
  onOpenLibrary?: () => void;
  cancelBookingValue?: string | undefined;
  cancelBookingOnChangeText?: (text: any) => void;
  buttonsWrapperStyle?: ViewStyle;
  title?: string;
  info?: string;
  buttonAlignment?: 'center' | 'flex-start' | 'flex-end';
  keyboardAvoidingBehavior?: 'position' | 'height' | 'padding';
}

const Modal: React.FC<IModalProps> = ({
  visible,
  onDismiss,
  onSubmit,
  content,
  onPressCloseButton,
  isSubmitBtnDisabled,
  isCancelButtonVisible,
  onPressCancelButton,
  buttonTitle = 'save',
  isMainButtonVisible = true,
  withCloseButton,
  buttonsWrapperStyle,

  buttonAlignment = 'center',
  keyboardAvoidingBehavior,
}): React.JSX.Element => {
  return (
    <NativeModal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onDismiss}
      statusBarTranslucent>
      <Pressable style={[styles.container]} onPress={onDismiss}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <KeyboardAvoidingView
            behavior={keyboardAvoidingBehavior}
            enabled
            style={styles.keyboardAvoidingViewStyles}>
            <View style={styles.contentContainer}>
              <View style={styles.modalStretcher} />
              {withCloseButton && (
                <TouchableOpacity
                  style={[GlobalStyle.alignmentCenter, styles.modalCloseButton]}
                  onPress={onPressCloseButton}>
                  <Images.svg.CrossIcon
                    color={'yellow'}
                    height={heightPixel(22)}
                  />
                </TouchableOpacity>
              )}

              {content && <View>{content}</View>}

              <View
                style={[
                  styles.buttonsWrapper,
                  buttonsWrapperStyle,
                  {justifyContent: buttonAlignment},
                  {
                    paddingVertical:
                      isMainButtonVisible || isCancelButtonVisible
                        ? pixelSizeVertical(20)
                        : 0,
                  },
                ]}>
                {isMainButtonVisible && (
                  <AuthButton
                    title={buttonTitle}
                    onPress={onSubmit}
                    disabled={isSubmitBtnDisabled}
                  />
                )}

                {isCancelButtonVisible && (
                  <TouchableOpacity
                    onPress={onPressCancelButton}
                    style={styles.cancelButtonWrapper}>
                    <Text style={styles.cancelButtonStyles}>cancel</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </Pressable>
    </NativeModal>
  );
};

export default Modal;
