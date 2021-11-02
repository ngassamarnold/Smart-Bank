import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '@constants/colors';
import { BR, Center, Content, ContentButton, ContentVariable, DivFlex, FlexDirection, Row, SrollVIew, Text, TextTitle } from '@components/utils';
import CreditCard from '@components/CreditCard';
import Button from '@components/buttons';
import { SwitchInput } from '@components/switchInput';
import Header from '@components/header';

export default function Account({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <Content jc="flex-start">
            <Header
                title="Account" />
            <SrollVIew>
                <ContentTitle >
                    <ItemsTitle>
                        <Text position="left" left={0} size={22} color={colors.blackText} > Good Morning</Text>
                        <TextTitle position="left" left={0} size={22} color={colors.black} > Arnold </TextTitle>
                        <BR />
                        <Text position="left" left={3} size={12} color={colors.blackText} > CURRENT BALANCE</Text>
                        <TextTitle position="left" left={0} size={30} color={colors.yellow} > 2,598.34
                            <Text position="left" left={0} size={16} color={colors.yellow} > USD </Text>
                        </TextTitle>
                    </ItemsTitle>
                    <BR val="5" />
                </ContentTitle>

            </SrollVIew>
        </Content>
    );
}

const ItemsTitle = styled.View`
    margin-left: 50px;
`;
const ContentTitle = styled.View`
    background-color: ${colors.gray};
 `;
