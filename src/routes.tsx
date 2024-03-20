import { createBrowserRouter } from 'react-router-dom';
import SalesScript from './pages';
const routes = createBrowserRouter([
	{
		path: '/',
		element: <SalesScript />,
	},
]);
export default routes;
