import { useRoutes } from 'react-router-dom';

import GenericRoutes from './GenericRouter';
import AuthentificationRouter from './AuthentificationRouter';


function RoutesApp(){
    return useRoutes([GenericRoutes, AuthentificationRouter]);
};

export default RoutesApp;
