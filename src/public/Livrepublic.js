// @ts-nocheck
import React, { Component } from 'react';
import axios from 'axios';
//import ReactDOM from 'react-dom';
//STYLE
import '../index.css';
import '../assets/index.css';
import 'materialize-css/dist/css/materialize.min.css';
import couv01 from '../images/220.jpg';



export default class LivrePublic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            livres: [],
        };
  }
  
    componentDidMount() {
        axios.get('http://localhost:8000/livres/listLivrePublic')
            .then(response => {
                this.setState({
                    livres: response.data.publics
                })
            });    
    }
    
  renderLivre() {
  
        const { livres } = this.state
        return livres.map(livre => (
          <div>
          <div className="col m12 m5 livre" key={livre.id}>
              <div className="divTitre">
                 <span className="card-title titre">{livre.titre}</span>
              </div>
              <div className="card">
                  <div className="card-image">
                   <img src={couv01} className="couverture"></img>
                   <h5 className="livreType">{livre.type}</h5>
                </div>
              </div>
            </div>
            <div className="descDatePub">
          <div className="auteur">
            <span>{livre.auteur}</span>
          </div>
          <div className="card-content description">
          <p>&nbsp;&nbsp;{livre.description}</p>
      </div><hr/>
      <div className="card-content datePub">
          <p>Publié le :{livre.datePub}</p>
      </div>
      </div>
      </div>
        ))
      }
    render() {
      return <div>
        <h5 className="sousTitre">&nbsp;&nbsp;&nbsp;LIVRE DISPONIBLE EN PUBLIC <hr/></h5>
        <div className="listLivre">
        {this.renderLivre()}
        </div>
       </div>
      }
    }  

