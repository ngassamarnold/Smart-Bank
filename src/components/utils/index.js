import styled from 'styled-components';
import colors from '@constants/colors';
import Font from '@constants/font';


const SrollVIew = styled.ScrollView.attrs(props => ({
  keyboardShouldPersistTaps: 'always',
}))`
    flex:1;
`;


const Row = styled.View`
  flex-direction:${props => props.direction || 'row'};
`;

const Text = styled.Text`
  color: ${props => props.color || colors.gray};
  font-size: ${props => props.size || 22}px; 
  text-align: ${props => props.position || 'center'};
  margin-left:${props => props.left || 0}px;
  margin-top:${props => props.top || 0}px;

`;

const TextBold = styled.Text`
  color: ${props => props.color || colors.white};
  font-size: ${props => props.size || 22}px; 
  text-align: ${props => props.position || 'center'};
  margin-left:${props => props.left || 0}px;
  font-weight: ${Font.bold};
  font-style: ${props => props.fontstyle || 'normal'};
`;

const Center = styled.View`
    align-items: center;
`;

const Content = styled.SafeAreaView`
    background-color:${props => props.bg || colors.white};
    flex:1;
    justify-content: center;
`;

const TextTitle = styled.Text`
    font-size: ${props => props.size || 30}px;
    fontWeight: bold;
    color: ${props => props.color || colors.white};
    margin-left:${props => props.left || 0}px;
    text-align: ${props => props.position || 'center'};
  `;


const BR = styled.View`
  margin-top:${props => props.val * 10 || 10}px;
  background-color:${colors.red};
`;

const ContentVariable = styled.View`
  width:${props => props.width || '80%'};
`;

const DivFlex = styled.View`
  flex: ${props => props.flex || 1};
  justify-content:${props => props.jc || 'flex-start'};

`;

const ContentButton = styled.View`
  justify-content:flex-end;
  flex:${props => props.flex || 1};
  background-color: ${props => props.bg || colors.red};
`;
const FlexDirection = styled.View`
  flex-direction:${props => props.direction || 'row'};
  flex:1;
  `;


const FlatList = styled.FlatList.attrs(props => ({ keyboardShouldPersistTaps: 'always' }))`
  margin-top:10px;
`;


export { SrollVIew, FlatList, Center, DivFlex, Content, TextBold, BR, Row, FlexDirection, TextTitle, ContentButton, Text, ContentVariable };
