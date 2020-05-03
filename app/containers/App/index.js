import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import Friend from 'components/Friend';
import Login from 'components/Login';
import GlobalStyle from '../../global-styles';

const NotFound = () => null;

class App extends React.Component {
	state = {};

	render() {
		return (
			<>
				<Helmet
					titleTemplate="%s | DontPester"
					defaultTitle="DontPester"
				>
					<meta
						name="description"
						content="During this time of quarantine, don't let unnecessary interruptions add to your stress. Get Pester & say goodbye to interruptions."
					/>
				</Helmet>
				<Switch>
					<Route path="/login/:token?" exact component={Login} />
					<Route path="/friend/:token?" exact component={Friend} />
					<Route component={NotFound} />
				</Switch>
				<GlobalStyle />
			</>
		);
	}
}

export default App;
