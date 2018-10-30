import React from 'react';
import {Component} from 'react';
import dates from '../dates/dates';
import {LandingPageContainer} from './styledLandingPage';
import DatesContainer from '../datesContainer/datesContainer';

const LandingPage = () => {
	return (
		<LandingPageContainer>
			<DatesContainer/>
		</LandingPageContainer>
	);
}

export default LandingPage;
