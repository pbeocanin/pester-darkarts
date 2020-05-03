import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from 'containers/App';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess'; // eslint-disable-line import/extensions

const MOUNT_NODE = document.getElementById('app');

const history = createBrowserHistory();

ReactDOM.render(
	<Router history={history}>
		<App />
	</Router>,
	MOUNT_NODE,
);
