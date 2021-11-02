import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FIcon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';
import { Tabs, NativeBaseProvider } from 'native-base';
import colors from '@constants/colors';
import { BR, Content, FlexDirection, SrollVIew, Text, TextTitle } from '@components/utils';
import Header from '@components/header';

export default function Account({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const TabComponent = () => {
        return (
            // <Box width="100%" p={3} >
            <Tabs colorScheme="yellow" >
                <Tabs.Bar>
                    <Tabs.Tab>Statement</Tabs.Tab>
                    <Tabs.Tab>Spends</Tabs.Tab>
                    <Tabs.Tab>Income</Tabs.Tab>
                </Tabs.Bar>
                <Tabs.Views >
                    <Tabs.View >
                        <FlexDirection>
                            <ContentLeft>
                                <TextTitle position="left" left={0} size={15} color={colors.black} > History </TextTitle>
                            </ContentLeft>
                            <ContentRight>
                                <Icon name="filter-outline" style={{ color: colors.black, fontSize: 22 }} />
                            </ContentRight>
                        </FlexDirection>
                        <BR val="2" />
                        <TextTitle position="left" left={15} size={12} color={colors.blackText} >Today</TextTitle>

                        <FlexDirection>
                            <ContentItem>
                                <MIcon name="tv" style={{ color: colors.yellow, fontSize: 20 }} />
                            </ContentItem>
                            <ContentItem width="40%">
                                <TextTitle position="left" left={0} size={12} color={colors.black} > Spotify </TextTitle>
                                <TextTitle position="left" left={0} size={12} color={colors.blackText} > subscription </TextTitle>
                            </ContentItem>
                            <ContentItem width="47%" ai="flex-end">
                                <TextTitle position="left" left={0} size={12} color={colors.black} > -9.99 </TextTitle>
                                <TextTitle position="left" left={0} size={12} color={colors.blackText} > 5:21 PM </TextTitle>
                            </ContentItem>
                        </FlexDirection>

                        <FlexDirection>
                            <ContentItem>
                                <MIcon name="fastfood" style={{ color: colors.yellow, fontSize: 20 }} />
                            </ContentItem>
                            <ContentItem width="40%">
                                <TextTitle position="left" left={0} size={12} color={colors.black} > Fastfood </TextTitle>
                                <TextTitle position="left" left={0} size={12} color={colors.blackText} > Food </TextTitle>
                            </ContentItem>
                            <ContentItem width="47%" ai="flex-end">
                                <TextTitle position="left" left={0} size={12} color={colors.black} > -9.99 </TextTitle>
                                <TextTitle position="left" left={0} size={12} color={colors.blackText} > 5:21 PM </TextTitle>
                            </ContentItem>
                        </FlexDirection>

                        <FlexDirection>
                            <ContentItem>
                                <MIcon name="shopping-cart" style={{ color: colors.yellow, fontSize: 20 }} />
                            </ContentItem>
                            <ContentItem width="40%">
                                <TextTitle position="left" left={0} size={12} color={colors.black} > Grocery Market </TextTitle>
                                <TextTitle position="left" left={0} size={12} color={colors.blackText} > Dally shopping</TextTitle>
                            </ContentItem>
                            <ContentItem width="47%" ai="flex-end">
                                <TextTitle position="left" left={0} size={12} color={colors.black} > -32.09 </TextTitle>
                                <TextTitle position="left" left={0} size={12} color={colors.blackText} > 21:05 PM </TextTitle>
                            </ContentItem>
                        </FlexDirection>

                        <BR val="2" />
                        <TextTitle position="left" left={15} size={12} color={colors.blackText} >Yesterday</TextTitle>
                        <FlexDirection>
                            <ContentItem>
                                <FIcon name="cc-paypal" style={{ color: colors.yellow, fontSize: 18 }} />
                            </ContentItem>
                            <ContentItem width="40%">
                                <TextTitle position="left" left={0} size={12} color={colors.black} > PayPal </TextTitle>
                                <TextTitle position="left" left={0} size={12} color={colors.blackText} > Recharge </TextTitle>
                            </ContentItem>
                            <ContentItem width="47%" ai="flex-end">
                                <TextTitle position="left" left={0} size={12} color={colors.green} > +159.998.000 </TextTitle>

                                <TextTitle position="left" left={0} size={12} color={colors.green} ><Icon name="power-off" style={{ color: colors.green, fontSize: 5 }} /> -ready to use</TextTitle>
                            </ContentItem>
                        </FlexDirection>

                        <FlexDirection>
                            <ContentItem>
                                <MIcon name="fastfood" style={{ color: colors.yellow, fontSize: 20 }} />
                            </ContentItem>
                            <ContentItem width="40%">
                                <TextTitle position="left" left={0} size={12} color={colors.black} > Fastfood </TextTitle>
                                <TextTitle position="left" left={0} size={12} color={colors.black} > Food </TextTitle>
                            </ContentItem>
                            <ContentItem width="47%" ai="flex-end">
                                <TextTitle position="left" left={0} size={12} color={colors.black} > -9.01 </TextTitle>
                                <TextTitle position="left" left={0} size={12} color={colors.blackText} > 5:21 PM </TextTitle>
                            </ContentItem>
                        </FlexDirection>
                    </Tabs.View>
                    <Tabs.View>Two</Tabs.View>
                    <Tabs.View>Three</Tabs.View>
                </Tabs.Views>
            </Tabs>
            // </Box>
        );
    };

    return (
        <Content jc="flex-start">
            <Header
                title="Account" />
            <SrollVIew>
                <ContentTitel>
                    <ItemsTitle>
                        <Text position="left" left={0} size={22} color={colors.blackText} > Good Morning</Text>
                        <TextTitle position="left" left={0} size={22} color={colors.black} > Arnold </TextTitle>
                        <BR />
                        <Text position="left" left={3} size={12} color={colors.blackText} > CURRENT BALANCE</Text>
                        <TextTitle position="left" left={0} size={30} color={colors.yellow} > 2,598.34
                            <Text position="left" left={0} size={16} color={colors.yellow} > USD </Text>
                        </TextTitle>
                    </ItemsTitle>
                </ContentTitel>
                <NativeBaseProvider>
                    {/* <Center flex={1}> */}
                    <TabComponent />
                    {/* </Center> */}
                </NativeBaseProvider>
            </SrollVIew>
        </Content>
    );
}

const ItemsTitle = styled.View`
    margin-left: 50px;
    
`;
const ContentTitel = styled.View`
    /* background-color: ${colors.gray}; */
    flex:3;
 `;

const ContentItem = styled.View`
    width: ${props => props.width || '13%'};
    align-items: ${props => props.ai || 'flex-start'};
    padding: 10px;
`;

const ContentLeft = styled.View`
width: 50%;
padding: 10px;
`;

const ContentRight = styled.View`
width: 50%;
align-items: flex-end;
padding: 10px;
`;
