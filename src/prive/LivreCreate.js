import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../assets/livreCreate.css'; 
import axios from "axios"; 


export default class LivreCreate extends React.Component {
  
  state = {
      titre: '',
      description: '',
      couverture: '',
      courriel: '',
      type:'',
  };
  getCurrentDate() {
    var today = new Date();
   return (today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear());
    }

handleSubmit = event => {
    const livre = {
         titre: this.state.titre,
         description: this.state.description,
         couverture: this.state.couverture,
         auteur : this.state.auteur,
         datePub: this.getCurrentDate(),
         type: this.state.type,
    }
    
    axios.post('http://localhost:8000/livres/createLivre', { livre })
      .then(res=>{
       
      })
    }
    
 handleChangeTitre = event =>{this.setState({titre: event.target.value}); }
 handleChangeDescription = event =>{this.setState({description: event.target.value});}
 handleChangeCouverture = event =>{this.setState({couverture: event.target.value});}
 handleChangeAuteur = event =>{this.setState({auteur: event.target.value});}
 handleChangeType = event => { this.setState({type: event.target.value }); }
  
 render() {
   return (
     <div>
    <h5 className="sousTitre">&nbsp;&nbsp;&nbsp;AJOUTER NOUVEAU LIVRE<hr/></h5>   

        <div className="row formUser">
            <div className="col s6">
           <div className="titreUser"><b>FORMULAIRE LIVRE</b></div>
           <br/>
              <form onSubmit = { this.handleSubmit }>
              <label> Titre:
            <input  placeholder="Ex: Amour de la Patrie" id="titre" name="titre" type="text" className="validate" onChange= {this.handleChangeTitre} required/>
            </label>
             <label> Description:
           <textarea id="description" name="description" className="materialize-textarea" placeholder="Ex: Un jeune leader qui dévelopé leur pays" onChange= {this.handleChangeDescription} required></textarea>
            <label >Auteur</label>
               <input  placeholder="Ex: VONINAHITRA Calvyn " id="auteur" name="auteur" type="text" className="validate" onChange= {this.handleChangeAuteur} required/>
            </label>
               <label> Couverture:
             <div className="file-field input-field">
              <div className="btn">
              <span>Image</span>
             <input type="file" accept="image/*" onChange= {this.handleChangeCouverture} required/>
            </div>
           <div className="file-path-wrapper">
           <input className="file-path validate" type="text"/>
            </div>
              </div>
              </label>
          <label> Type du livre:
              <div className="typeLivre">
          <p>
          <label>
          <input name="type" type="radio" value="public"  onChange= {this.handleChangeType} />
             <span>Public</span>
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;
               <label>
           <input name="type" type="radio" value="prive" onChange= {this.handleChangeType}/>
            <span>Privé</span>
            </label>
           </p>
            </div> <br/>
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
          </label>
         </form>
         </div> 
       </div> 
       </div>
    );
  }
}
