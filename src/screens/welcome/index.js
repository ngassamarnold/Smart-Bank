import React from 'react';
import styled from 'styled-components';
import colors from '@constants/colors';
import { Center, Content, ContentButton, ContentVariable, DivFlex, Text, TextTitle } from '@components/utils';
import Circle from '@components/Circle';
import Button from '@components/buttons';

export default function Welcome({ navigation: { navigate } }) {


    return (
        <Content >
            <DivFlex flex={1} color={colors.white}>
                <Circle />
            </DivFlex>
            <DivFlex flex={1.5} jc="center" color={colors.white} >
                <Center>
                    <TextTitle size={35} color={colors.black} > HELLO ! </TextTitle>
                </Center>
            </DivFlex>
            <DivFlex color={colors.black} >
                <DivFlex flex={2} color={colors.white}>
                    <Center>
                        <ContentVariable width="70%">
                            <TestDescription size={14} color={colors.blackText} >Please login by using given credentials and enjoy your workplace</TestDescription>
                        </ContentVariable>
                    </Center>
                    <ContentButton>
                        <Center>
                            <Button
                                onPress={() => navigate('Tabs')}
                                width="70%"
                                title="Sign In"
                                borderColor={colors.white}
                                textColor={colors.gray}
                                bg={colors.yellow}
                                size={20}
                                height={50}
                                br={10}
                            />
                        </Center>

                    </ContentButton>
                </DivFlex>
                <DivFlex jc="center" color={colors.white}>
                    <TestDescription size={14} color={colors.blackText}>New here?
                        <TestDescription size={14} color={colors.yellow}> Create account  </TestDescription>
                    </TestDescription>
                </DivFlex>
            </DivFlex>
        </Content>
    );
}

const TestDescription = styled(TextTitle)`
  line-height: 25px;
`;
