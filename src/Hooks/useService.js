import { useEffect, useState } from "react";

const useService = () => {
    const [ services, setService] = useState([])

    useEffect( () =>{
        fetch('https://habib-doctors-portal.herokuapp.com/service')
        .then(res => res.json())
        .then( data => setService(data))
    },[])


    return [ services, setService]

};

export default useService;