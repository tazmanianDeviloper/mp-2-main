import styled from "styled-components";
import {data} from "../interfaces/Cards.ts";


//All cards div based off of Professors code.
const AllCardsDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: cornsilk;
`;

//styling for the card title
const CardTitle = styled.h1`
    margin-top: 0;
    margin-bottom: 10%;
    font-size: 2 em;
`;

//styling for the card image
const CardImage = styled.img`
    margin-top: 10%;
    max-width: 50vh;
`;

//styling for the card type
const CardType = styled.h3`
    margin: 10%;
    font-size: 2 em;
`;

//individual styling for a single card used conditional for color of background
const SingleCardDiv = styled.div<{frameType: string}>`
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    max-width: 30%;
    padding: 1%;
    margin: 1%;
    background-color: ${(props) =>props.frameType === "spell" ? "blue" : props.frameType === "trap" ? "purple" : "red"}; 
    color: whitesmoke;
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) "Arial", fantasy;
    text-align: center;
    
`;


//this displays all the information
export default function Yugioh(props : {data:data[]}){
    return (
        <AllCardsDiv>
            {props.data.map((card: data) => (
                <SingleCardDiv key={card.id} frameType={card.frameType}>
                    <CardTitle>{card.name}</CardTitle>
                    <CardType>
                        {card.frameType === "spell" ? "Spell" : card.frameType === "trap" ? "Trap" : "Monster"} </CardType>
                    <CardImage src={card.card_images[0].image_url} alt ={`image of ${card.name}`}/>
                </SingleCardDiv>
            ))
            }
        </AllCardsDiv>
    );
}















