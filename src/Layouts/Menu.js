import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import '../assets/menu.css'; 
import RegistreUser from '../Utilisateurs/RegistreUser';
import Authentification from '../Authentification/Authentification';
import LivrePublic from '../public/Livrepublic';
import LivrePrive from '../prive/LivreAll';
import LivreCreate from '../prive/LivreCreate';
import MenuPrive from './MenuPrive';
import MenuCreateLivre from './MenuCreateLivre';
const Menu = () => {
  return <Router>
  <div className="navbar-fixed-top">
      <nav>
      <div className="nav-wrapper bgMenu ">
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">GESTION DE LIVRE</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/">Acceuil</Link></li>
            <li><Link to="/livrePrive">Livre Privé</Link></li>
            <li><Link to="/livreCreate">Création un livre</Link></li>
            <li><Link to="/newcompte">Créer un compte</Link></li>
            <li><Link to="/cnx">Se connecter</Link></li>
            <li>
             </li>
        </ul>
      </div>
      </nav>
      <Switch>
          <Route exact path="/newcompte">
            <RegistreUser />
        </Route>
        <Route exact path="/cnx">
            <Authentification />
        </Route>
        <Route exact path="/">
            <LivrePublic />
        </Route>
        <MenuPrive exact={true} path="/livrePrive" component={LivrePrive} />
        <MenuCreateLivre exact={true} path="/livreCreate" component={LivreCreate} />
        <Route exact path="/livreCreate">
            <LivreCreate />
        </Route>
        </Switch>
  </div>
  </Router>
};
export default Menu;

