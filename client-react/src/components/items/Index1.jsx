import {useCallback, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Header from "./header/Header";
import Items from "./Items";
import "./Style.css";

function Index1(){
    const [items, setItems] = useState([]);
    console.log(items);
    const {getcate} = useParams();

    useEffect(() => {
        // fetch(`http://localhost:8000/api/categoria-prodotto/${getcate}`)
        //   .then(items => items.json())
        //   .then(
        //         (result) => {
        //             setItems(result.items);
        //         },
        //     )
        const getSubCate = async () => {
            const result = await fetch(`http://localhost:8000/api/categoria-prodotto/${getcate}`);
            const subcates = await result.json();
            // console.log(subcates);
            // if(subcates.status === 200){
                setItems(subcates.items);
            // }
        }

        getSubCate();
        // getItems();
    },[getcate]);
    
    return(
        <>
        <div>
            <Header data={items}/>
        </div>
        <div>
            <Items data={items} />
        </div>
        </>
    );
}

export default Index1;