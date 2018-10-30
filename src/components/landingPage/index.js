import React from 'react';
import {Component} from 'react';
import {LandingPageContainer} from './styledLandingPage';
import DatesContainer from '../datesContainer';

const LandingPage = () => {
	return (
		<LandingPageContainer>
			<DatesContainer/>
		</LandingPageContainer>
	);
}

export default LandingPage;
