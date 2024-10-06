import Yugioh from "./components/Yugioh.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {data} from "./interfaces/Cards.ts"

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px solid darkred;
`;

//wrote this to be able to shuffle cards each time page refreshes and so only 30 are displayed at a time rather than all 12k plus
const getRandomCards = (allCards : data[]): data[] => {
    const shuffled = allCards.sort(() => 0.5 - Math.random());
    return shuffled.slice(0,30);
};



//getting card info and logging errors if encountered
export default function App(){
    const [data, setData] = useState<data[]>([]);
    const [randomCards, setRandomCards] = useState<data[]>([]);
    useEffect(() => {
        async function fetchData(): Promise<void>
        {
            const rawData = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php");
            const data = await rawData.json();
            console.log(data);
            setData(data.data);
            setRandomCards(getRandomCards(data.data));
            // const {results} : {results: data[]} = await rawData.json();
            // setData(results);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((error: Error) => console.log(error))
    }, [data.length]);

    return (
        <ParentDiv>
            <Yugioh data={randomCards}/>
        </ParentDiv>
    )
}


