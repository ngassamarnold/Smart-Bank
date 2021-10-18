
import React from 'react';
import styled from 'styled-components';
import colors from '@constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FtAwsm from 'react-native-vector-icons/FontAwesome';
import { Text, TextTitle } from '@components/utils';
import { Picture } from '@components/images';
import images from '@constants/images';


export default function Header(props) {

    const { title } = props;
    const openDrawer = props.openDrawer || (() => { });

    return (
        <Content>
            <Menu onPress={() => openDrawer()}>
                <Left>
                    <Picture width={25} height={25} src={images.LOGO} />
                </Left>
            </Menu>
            <Row>
                <Title>
                    <TextTitle size={17} position="left" fontWeight="bold" color={colors.black} >{title}</TextTitle>
                </Title>
                <End>
                    <Right>
                        <Picture width={25} height={25} src={images.MENU} />
                    </Right>
                    {/* <FtAwsm name="align-right" style={{ marginRight: 5 }} color={colors.color_gray_text} size={22} /> */}
                </End>
            </Row>
        </Content>
    );
}
const Content = styled.SafeAreaView` 
    height:60px; 
    flex-direction:row;
    justify-content:center;
    width: 100%;
`;

const Menu = styled.TouchableOpacity`
    justify-content:center;
    width:45%;
`;
const End = styled.View`
      justify-content:center;
      width: 20%;
      align-items: center;
`;
const Left = styled.View`
    margin-left: 10px;
`;
const Right = styled.View`
    margin-right: 10px;
`;
const Title = styled.View`
    width: 80%;
    justify-content:center;
    `;

const Row = styled.View`
      flex-direction: row;
      width: 55%;
`;

