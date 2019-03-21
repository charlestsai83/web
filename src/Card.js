import React,{ Component } from 'react';
import {Tile} from 'carbon-components-react';

class Card extends Component {

    render() {
        let cardStyle = {
            width: "200px",
            height: "300px",
            marginBottom: "0px",
            backgroundColor: "gray",
            borderStyle: "solid",
            borderWidth: "5px",
            borderColor: "red"
          };
        let msg = ""
        if (this.props.state === "fail") {
            cardStyle['borderColor'] = "red";
            msg = "install with error..."
        } else
            cardStyle['borderColor'] = "blue";
    return (
    <Tile>
        <Tile style={cardStyle}>
        </Tile>
        <div style={{fontSize:14, color:"red"}}>{msg}</div>
    </Tile>);
    }
}

export default Card;