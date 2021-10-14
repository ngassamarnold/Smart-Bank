import React from 'react';
import styled from 'styled-components';
import Colors from '@constants/colors';
import { Text } from '@components/utils';
import colors from '@constants/colors';
import  Font  from '@constants/font';

export default function Button(props) {
  const { title } = props;
  return (
    <ButtonTouchable {...props}>
      <ButtonText {...props}>
        {title}
      </ButtonText>
    </ButtonTouchable>
  );
}

const ButtonTouchable = styled.TouchableOpacity`
  background-color: ${props => props.bg || Colors.green};
  border: ${props => props.border || 1}px ${props => props.borderColor || Colors.white};
  width: ${props => props.width || '85%'} ;
  height: ${props => props.height || 40}px;
  border-radius: ${props => props.br || 6}px;
  justify-content: center;
  align-items: center;
  flex-direction:row;
  elevation:${props => props.elevation || 0};
`;

const ButtonText = styled(Text)`
  font-size: ${props => props.size !== undefined ? props.size : 14}px;
  color: ${props => props.textColor || colors.white};
  opacity: ${props => props.opacity ? 0.6 : 1};
  font-weight: ${Font.bold};
`;



