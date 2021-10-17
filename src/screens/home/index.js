import React from 'react';
import styled from 'styled-components';
import colors from '@constants/colors';
import { BR, Center, Content, ContentButton, ContentVariable, DivFlex, Text, TextTitle } from '@components/utils';
import CreditCard from '@components/CreditCard';
import Button from '@components/buttons';

export default function Welcome({ navigation }) {


    return (
        <Content jc="flex-start">
            <BR val="2" />
            <TextTitle position="left" left={15} size={15} color={colors.black} > Virtual Card </TextTitle>
            <BR />
            <Center>
                <CreditCard
                    bgColor={colors.yellow}
                    name="NGASSAM F. Arnold"
                    date="22/05/2022"
                    suffix="2200" 
                    type="Virtual Card"/>
                <BR val="2" />
                <CreditCard
                    bgColor={colors.black}
                    name="NGASSAM F. Arnold"
                    date="22/05/2022"
                    suffix="2200" 
                    type="Physical Card"/>
            </Center>
            <BR val="2" />
            <TextTitle position="left" left={15} size={15} color={colors.black} > Card settings </TextTitle>
            <BR />
        </Content>
    );
}

const TestDescription = styled(TextTitle)`
  line-height: 25px;
`;

