import './Home.css'

import React, {useEffect, useState} from 'react';
import RecipeList from "../../component/RecipeList";
import {projectFirestore} from "../../firebase/config";


function Home() {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsPending(true)
        // snapshot listener
        // every time there is a change inside of collection, it will send a snapshot event and send that to us
        const unsub = projectFirestore.collection('recipes').onSnapshot((snapshot) => {
            if (snapshot.empty) {
                setError('No recipes to load')
                setIsPending(false)
            } else {
                let results = []
                snapshot.docs.forEach(doc => {
                    //new object with id and all the docs data
                    //we just want add the id to the doc.data and create new object
                    results.push({id: doc.id, ...doc.data()})
                })
                setData(results)
                setIsPending(false)
            }
        }, (err) => {
            setError(err.message)
            setIsPending(false)
        })
        //clean up function for onSnapshot
        return () => unsub()
    }, [])

    return (
        <div className={"home"}>
            {error && <p className={"error"}>{error}</p>}
            {isPending && <p className={"loading"}>Loading...</p>}
            {data && <RecipeList recipes={data}/>}
        </div>
    );
}

export default Home;