import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import axios from "axios"; 
import '../assets/registreUser.css'; 

export default class RegisterUser extends React.Component {

  state = {
      prenom: '',
      nomFamille: '',
      courriel: '',
      motDePasse:'',
  };

handleSubmit = event => {
    event.preventDefault();
    const utilisateur = {
         prenom: this.state.prenom,
         nomFamille: this.state.nomFamille,
        courriel: this.state.courriel,
        motDePasse: this.state.motDePasse,
    }
    
    axios.post('http://localhost:8000/utilisateurs/registre', { utilisateur })
      .then(res=>{
        const msg = res.data.results;
        alert(msg);
      })
    }
    
 handleChangePrenom = event =>{this.setState({prenom: event.target.value}); }
 handleChangeFamille = event =>{this.setState({nomFamille: event.target.value});}
 handleChangeCouriell = event =>{this.setState({courriel: event.target.value});}
 handleChangePwd = event => { this.setState({ motDePasse: event.target.value }); }
    
render() {
  return (
    <div>
      <h5 className="sousTitre">&nbsp;&nbsp;&nbsp;RESISTRE D'UTILISATEUR<hr /></h5>   
        <div className="row formUser">
         
            <div className="col s6">
            <div className="titreUser"><b>FORMULAIRE UTILISATEUR</b></div>
           <form onSubmit = { this.handleSubmit }>
          <label> Prénom:
            <input  placeholder="Ex: CALVYN" id="Prenom" name="Prenom" type="text" className="validate" onChange= {this.handleChangePrenom}/>
          </label>
          <label> Nom de famille:
            <input  placeholder="Ex: Alberto " id="nomFamille" name="nomFamille" type="text" className="validate" onChange= {this.handleChangeFamille}/>
          </label>
          <label> Courriel:
            <input  placeholder="Ex: calvyn@gmail.com" id="email" name="courriel" type="email" className="validate" onChange= {this.handleChangeCouriell}/>
          </label>
          <label> Mot de passe:
            <input  placeholder="******" id="password" name="motDePasse" type="password" className="validate" onChange= {this.handleChangePwd}/>
          </label>
          <div className="row divButtom">
              <div className="col s12">
              <div className="col s8">
               <button className="btn waves-effect waves-light" type="reset" name="action">Annuler</button>
             </div>
             <div className="col s4">
             <button className="btn waves-effect waves-light" type="submit" name="action">Enregistrer</button>
             </div>
             </div>
          </div>
         </form>
         </div> 
      </div> 
      </div>
    );
  }
}
