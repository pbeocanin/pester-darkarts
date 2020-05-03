import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from '../../global-styles';

const Dashboard = () => <p>dash</p>;
const NotFound = () => <p>not dash</p>;

/* to avoid crashes */

// I hate those comments with *****

// Looking good let's remove all the packages we don't need. Which is literally most of them

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
					<Route path="/login" exact component={Dashboard} />
					<Route component={NotFound} />
				</Switch>
				<GlobalStyle />
			</>
		);
	}
}

export default App;
