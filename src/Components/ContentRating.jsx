
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        totalRatings: 0,
        handleLike:() => {
            this.setState((prevState) => ({
              likes: prevState.likes + 1,
              totalRatings: prevState.totalRatings + 1 
              
            }
        ));
          },
          handleDislike:() => {
            this.setState((prevState) => ({
              dislikes: prevState.dislikes + 1,
              totalRatings: prevState.totalRatings + 1 
            }));
          }
    }
  }
  render() {
    return (
     <>
     
        <div className='content-rating'>
              <p>
              Nas profundezas de uma floresta esquecida pelo tempo, uma árvore antiga, com folhas prateadas e raízes que se entrelaçavam como serpentes, guardava um segredo milenar. Diziam que aqueles que escutavam o sussurro do vento através de seus galhos descobriam verdades sobre si mesmos que jamais haviam imaginado. No entanto, poucos se aventuravam a se aproximar, temendo o que poderiam encontrar nas sombras entrelaçadas do desconhecido. Certa vez, um jovem corajoso decidiu enfrentar esse mistério, munido apenas de sua curiosidade e de um velho mapa que encontrara entre as páginas de um livro empoeirado. Cada passo adiante parecia guiá-lo mais fundo em um mundo onde a realidade e o sonho se misturavam, revelando segredos esquecidos pela própria terra.
              </p>
              <div className='rating-buttons'>
              <button className="like-button" onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
            </button>
            
        </div>
         
        <br /> Total evaluations: {this.state.totalRatings}
        </div>

        
     </>
    );
  }
}

export default ContentRating;
