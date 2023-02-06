import React from "react";
import './racing.css'

export default function Racing() {
    return (
        <div className="racing">
            <img  className="f1Img" src={require('../../assets/f1.png')} alt="f1Team" />
            <div className="containerRacing">
                <h2 className="subTitle">F1 Team</h2>
                <h3 className="text">
                    Ferrari started the season in the best way possible, securing a one-two finish at the opening round in Bahrain.<br />
                    <br />
                    Aided by the double retirement suffered by Red Bull, genuine belief flooded the Scuderia. The F1-75 proved fast and Charles Leclerc matched the pace of reigning World Champion Max Verstappen.<br />
                    <br />
                    The strategy calls from the team were perfect, and while Carlos Sainz’s pace could not match that of Verstappen or Leclerc, he was in prime position to take a podium finish in the season opener. <br />
                    <br />
                    Hopes were high as the team headed to Saudi Arabia.<br />
                    While Ferrari lost out to Red Bull under the night lights at Jeddah, the battle went down to the final few laps with Leclerc and Verstappen running nose to tail for the majority of the race.<br />
                    <br />
                    Strategy calls were once again perfect and only the very minor pace advantage of Verstappen prevented Ferrari from taking two victories in the opening two rounds.<br />
                    The third round in Australia proved to be the high point of Ferrari’s season. <br />
                    <br />
                    An utterly dominant victory for Leclerc with Verstappen having retired early. However, trouble had already begun to show its head. Fresh from a new contract extension, Carlos Sainz spun out of the race on lap one after a difficult qualifying.<br />
                    <br />
                    Despite this, the team left the first three rounds in high spirits. The team looked like a championship contender for the first time since the mid-2000s. <br />
                    <br />
                    It operated as a well-oiled machine with strategy and pit stops. Two wins and a second place gave Leclerc a healthy championship lead, while Verstappen and Red Bull were forced to think fast to turn around a very difficult situation.<br />
                </h3>
            </div>
        </div>
    )
}