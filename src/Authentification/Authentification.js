import React, { Component } from 'react';
import axios from 'axios';
//import Menu from './Layouts/Menu';
//import LivrePublic from './public/Livrepublic';
//import RegistreUser from './Utilisateurs/RegistreUser';
import 'materialize-css/dist/css/materialize.min.css';
import '../assets/authentification.css'; 
import { Redirect } from 'react-router';
import { isAuthenticated } from './LocalStorage';
export default class Connection extends Component {

    state = {
      courriel: '',
      motDePasse: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const auth = {
      courriel: this.state.courriel,
      motDePasse: this.state.motDePasse,
    }
    
    axios.post('http://localhost:8000/auth/getAuth', { auth })
      .then(response => {
        localStorage.setItem('access_token', response.data.token);
        window.location.reload(true);
      })
  }
  handleChangeCourriel = event =>{this.setState({courriel: event.target.value}); }
  handleChangeMotDePasse = event => { this.setState({ motDePasse: event.target.value }); }
  render() {
    if (isAuthenticated()) {
      return <Redirect to="/livrePrive" />;
    }
    return (
      <div>
      <h5 className="sousTitre">&nbsp;&nbsp;&nbsp;AUTHENTIFICATION D'UTILISATEUR<hr /></h5> 
      
        <div className="row">
          <div className="col s12 m8 l4 offset-m2 offset-l4">
          <div className="titreAuth"><b>FORMULAIRE D'AUTHENTIFICATION</b></div>
              <div className="card-action teal lighten-1 white-text">
              </div>
              <form onSubmit = { this.handleSubmit }>
              <div className="card-content">
                <div className="form-field">
                  <label >Adresse courriel</label>
                  <input type="email" name="courriel" id="courriel" onChange= {this.handleChangeCourriel}/>
                </div><br />
                <div className="form-field">
                  <label >Mot de passe</label>
                  <input type="password" name="motDePasse" id="motDePasse" onChange= {this.handleChangeMotDePasse}/>
                </div><br />
                <div className="row divButtom">
              <div className="col s12">
              <div className="col s7">
               <button className="btn waves-effect waves-light" type="reset" name="action">Annuler</button>
             </div>
             <div className="col s5">
             <button className="btn waves-effect waves-light" type="submit" name="action">Se Connecter</button>
             </div>
               </div>
              </div>
                <br />
                </div>
              </form>
            </div>
        </div>
      </div>
    )
  }

}