import React from "react";
import './history.css';

export default function History() {
    return (
        <div className="history">
            <h2 className="subTitle">History
                <h3 className="text">
                    In 1945, Ferrari introduced a V12 engine which became one of its signatures. <br />
                    <br />
                    It wasn't until 1947, nearly ten years after Enzo left Alfa that the first Ferrari model the 125 S or 125 Sport, rolled out of the factory entrance of the Via Abetone Inferiore in Maranello, Italy. <br />
                    <br />
                    There were only two models originally produced. The car was entered into its first competitive race in May of that year at the Piacenza Circuit.<br />
                    <br />
                    On the 25th won the Rome Grand Prix. The car was set to be released earlier, however, the date was pushed back due to the effects of World War II. <br />
                    <br />
                    After the Modena factory was hit by bombs, the company moved to Maranello and built the legendary factory that it still uses today. <br />
                    <br />
                    The next few decades, the Italian auto company prospered with its cars competing in and winning major races including the: Mille Miglia (1948), Le Mans 24 Hour Race (1949) and the Formula One World Championship Grand Prix (1951).<br />
                    <br />
                    In the early 1950s, race car driver Luigi Chinetti opened the first Ferrari showroom and dealership in United States. Until this point, Ferraris were really only available to wealthy racing enthusiasts and for competing in races.<br />
                    <br />
                    The location later moved from Manhattan to Connecticut, but the Ferrari market in the US became and still is one of the most lucrative in the world.<br />

                    In 1956, tragedy struck when Enzo’s eldest son Dino died of muscular dystrophy. The 1960s were a time of transition for the company. <br />
                    <br />
                    First, in 1961, members of the company including chief engineers Carlo Chiti and Giotto Bizzarrini left and went on to form another auto company called ATS.<br />
                    <br />
                    They had intended for it to be a direct competitor with Ferrari at the time.<br />
                    The departure was said to stem from disputes over Enzo’s wife Laura and her heavy involvement in the running of the company.
                </h3>
            </h2>
            <img id="enzo" src={require('../../assets/enzo.png')} />
        </div>
    )
}