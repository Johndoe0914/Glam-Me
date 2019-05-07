import React from "react";
import Button from 'react-bootstrap/Button';
import images from "../../images.json";
import StarRating from "../StarRating/index";
import "./style.css";




class ArtistCard extends React.Component {
      constructor (props) {
        super(props)

        this.state = {
          images:images,
          
        }
      //  const ArtistArray = props.getStyles().styles;
      }
     
  
  render() {
    return (
      <span  
      onClick={this.props.onClick} 
      onChange={this.props.handleInputChange}name="servicePicked">
      <div className="artistCardWrapper">
      {this.state.images.map(image => (
        <div className="card">
      <div className="img-container">
        <img alt={image.alt} src={image.image} />
       
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Technician: </strong> {image.name}
          </li>
          <li>
            <strong>Specialties</strong> {image.specialties}
          </li>
          <li>
            <strong>Rating</strong> <StarRating value={image.rating}/>
          </li>
          <li>
           
            <a className="btn btn-danger" href={"/artist/"+image.id}>
              View Profile
            </a>
          </li>
        </ul>
      </div>
     {/*} <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
    </span> */}
    </div>
      ))}
      </div>
      </span>

      
    )
  }
}

export default ArtistCard;
