import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import './assets/scss/index.scss';
import routes from './routes';

ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={routes} fallbackElement={'Laoding...'} />
	</React.StrictMode>,
	document.getElementById('root')
);
