import React,{ Component } from 'react';
import {Tile} from 'carbon-components-react';

class Card extends Component {

    render() {
        let cardStyle = {
            marginBottom: "-2px",
            backgroundColor: "white",
            borderStyle: "solid",
            borderWidth: "3px",
            borderColor: "red"
          };
        let msg = ""
        if (this.props.state === "fail") {
            cardStyle['borderColor'] = "red";
            msg = "install with error...";
            cardStyle['filter'] = `brightness(60%)`;
        } else
            cardStyle['borderColor'] = "blue";
    return (
    <Tile>
        <Tile style={cardStyle} >
        <h1 style={{color:"red", width: "180px", height: "200px",}}>CARD</h1>
        </Tile>
        <div style={{fontSize:14, color:"red"}}>{msg}</div>
    </Tile>);
    }
}

export default Card;