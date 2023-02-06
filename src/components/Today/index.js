import React from "react";
import './today.css'

export default function Today() {
    return (
        <div className="today">
            <img className="storeImg" src={require('../../assets/store.png')} />
            <div className="containerToday">
                <h2 className="subTitleWhite">Ferrari Today</h2>
                    <h3 className="textWhite">
                        Besides being known for producing some of the best and fastest cars in history, Ferrari is most associated with its symbol the Cavallino Rampante or the prancing horse and its vibrant red color.<br />
                        <br />
                        The red color was just part of a tradition. By regulation, international motor racing cars from Italy were required to be painted red.<br />
                        <br />
                        After the 1960s, it was no longer required, but Ferrari wanted to stick with the tradition and kept it around. Now, it is part of the brand’s overall image.<br />
                        <br />
                        The attachment to Ferrari red goes so far that in the 1990s, at least 85% of owners had the color.<br />
                        <br />
                        As for the famous logo of the black prancing stallion on a yellow background, the inspiration came from war hero Count Francesco Baracca. <br />
                        <br />
                        Enzo himself was enlisted in the Italian army during the war. Barracca was an Italian air force pilot in World War I, and on the side of his plane there was a painted horse. <br />
                        <br />
                        On the plane, the horse was red, but for the Ferrari logo, the color was changed to black.<br />
                        <br />
                        The Ferrari brand is one of the most iconic in the world. Since it first began, the Italian car maker has won over 5,000 prizes and competed in tracks all over the globe. <br />
                        <br />
                        When it comes to Formula One racing, Ferrari holds the title for the longest-standing and most successful competitor.<br />
                    </h3>
            </div>
        </div>
    )
}