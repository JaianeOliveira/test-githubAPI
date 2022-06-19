import React from 'react';
import styled from 'styled-components';

const Title = () => {
	return <Text>Hellow</Text>;
};

export default Title;

const Text = styled.h1`
	color: ${(props) => props.theme.authButtonBlue};
`;
