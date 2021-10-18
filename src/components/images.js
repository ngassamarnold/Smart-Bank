import React from 'react';
import styled from 'styled-components';

const Img = styled.Image`
    width: ${props => props.width || 300}px;
    height: ${props => props.height || 300}px;
    border-radius:${props => props.br || 0}px;

`;

const ImgR = styled.Image`
    width: ${props => props.width || 300}px;
    height: ${props => props.height || 300}px;
`;

const PictureSimple = props => (
    <ImgR
        source={props.src}
        width={props.width}
        height={props.height}
    />
);


const Picture = props => (
    <Img
        source={props.src}
        width={props.width}
        height={props.height}
        // br={10 || props.br}
    />
);
const PictureUri = props => (
    <ImgR
        source={{ uri: props.src }}
        width={props.width}
        height={props.height}
    />
);
const PictureRoundUri = props => (
    <Img
        source={{ uri: props.src }}
        width={props.width}
        height={props.height}
        br={props.br}
    />
);
export { Picture, PictureUri, PictureSimple, PictureRoundUri };
