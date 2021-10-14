
import React from 'react';
import LottieView from 'lottie-react-native';
import NavigationService from '@services/NavigationService';
import images from '@constants/images';

export default function Splash({ navigation }) {

  return (
    <LottieView
      source={images.BANK}
      autoPlay
      loop={false}
    // onAnimationFinish={() => NavigationService.goTo(navigation, 'Login')}
    />
  );
}


