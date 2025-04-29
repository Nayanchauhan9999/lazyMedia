import {View, ViewProps} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {pixelSizeHorizontal} from '@utils/responsiveDimensions';
import {useSafeAreaContainerStyles} from './styles';

interface ISafeAreaContainer extends ViewProps {
  children: React.ReactNode;
  paddingHorizontal?: number;
}

const SafeAreaContainer: React.FC<ISafeAreaContainer> = ({
  children,
  paddingHorizontal = pixelSizeHorizontal(25),
  ...props
}): React.JSX.Element => {
  const inset = useSafeAreaInsets();
  const styles = useSafeAreaContainerStyles();

  return (
    <View
      style={[
        styles.container,
        {paddingTop: inset.top + 25, paddingHorizontal: paddingHorizontal},
        props.style,
      ]}
      {...props}>
      {children}
    </View>
  );
};

export default SafeAreaContainer;
