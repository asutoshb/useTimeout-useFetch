import React, {useState, useEffect} from 'react';

function useFetch(url)
{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    useEffect(()=>{
        setLoading(true);
        fetch(url)
        .then((d)=>d.json())
        .then((a)=>{
            console.log(a.total_count)
            setLoading(false);
            setData(a.items)
        })
        .catch((err)=>{
            setError(true);
            setLoading(false);
        })
    },[])
    return {loading, error, data};
}

export const Github = () => {
    const {loading, error, data} = useFetch("https://api.github.com/search/users?q=masai&per_page=8")

    return loading ? ("...Loading") :  error ? ("something went went wrong") : (
        <div>
            {data.map((e, i)=>{
               return <div>{e.login}</div>
            })}
        </div>
    )
}
