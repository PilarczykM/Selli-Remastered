import styled from 'styled-components';
import { ContactButtonProps } from './types';

const primaryColor = "#002f34";
const whiteColor = "#fff";

export const ContactButton = styled.button`
position: relative;
width: 100%;
height: 48px;
font-size: 16px;
font-weight: 500;
word-wrap: break-word;
cursor: pointer;
padding: 0 12px;
overflow: hidden;
border-radius: 4px;
background-color: ${(p: ContactButtonProps) => p.inverted ? whiteColor : primaryColor};
border: ${(p: ContactButtonProps) => p.inverted ? `1px solid ${primaryColor}` : `3px solid ${primaryColor}`};
color: ${(p: ContactButtonProps) => p.inverted ? primaryColor : whiteColor};;
transition: all 0.3s ease;

&:hover {
    background-color: ${whiteColor};
    color: ${primaryColor};
    border: ${`3px solid ${primaryColor}`};
`;