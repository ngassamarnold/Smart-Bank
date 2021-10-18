import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '@constants/colors';
import { BR, Center, Content, ContentButton, ContentVariable, DivFlex, FlexDirection, Row, SrollVIew, Text, TextTitle } from '@components/utils';
import CreditCard from '@components/CreditCard';
import Button from '@components/buttons';
import { SwitchInput } from '@components/switchInput';

export default function Welcome({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <Content jc="flex-start">
            <SrollVIew>
                <BR val="2" />
                <TextTitle position="left" left={15} size={15} color={colors.black} > Virtual Card </TextTitle>
                <BR />
                <Center>
                    <CreditCard
                        bgColor={colors.yellow}
                        name="NGASSAM F. Arnold"
                        date="22/05/2022"
                        suffix="2200"
                        type="Virtual Card" />
                    <BR val="2" />
                    <CreditCard
                        bgColor={colors.black}
                        name="NGASSAM F. Arnold"
                        date="22/05/2022"
                        suffix="2200"
                        type="Physical Card" />
                </Center>
                <BR val="2" />
                <TextTitle position="left" left={15} size={15} color={colors.black} > Card settings </TextTitle>
                <BR />
                <ItemsSetting>
                    <Row>
                        <DivFlex flex={4}>
                            <TextTitle position="left" left={35} size={15} color={colors.black} > Contactless payment </TextTitle>
                        </DivFlex>
                        <DivFlex jc="flex-end">
                            <SwitchInput
                                isEnabled={!isEnabled}
                                toggleSwitch={toggleSwitch} />
                        </DivFlex>
                    </Row>
                    <BR />
                    <Row>
                        <DivFlex flex={4}>
                            <TextTitle position="left" left={35} size={15} color={colors.black} > Online payment </TextTitle>
                        </DivFlex>
                        <DivFlex jc="flex-end">
                            <SwitchInput
                                isEnabled={!isEnabled}
                                toggleSwitch={toggleSwitch} />
                        </DivFlex>
                    </Row>
                    <BR />
                    <Row>
                        <DivFlex flex={4}>
                            <TextTitle position="left" left={35} size={15} color={colors.black} > ATM Withdrawals </TextTitle>
                        </DivFlex>
                        <DivFlex jc="flex-end">
                            <SwitchInput
                                isEnabled={isEnabled}
                                toggleSwitch={toggleSwitch} />
                        </DivFlex>
                    </Row>
                </ItemsSetting>
            </SrollVIew>
        </Content>
    );
}

const ItemsSetting = styled.View`
    width: 95%;
`;
