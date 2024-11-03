import { useEffect, useState } from "react"

function useFetch(url) {

    const [data, setData] = useState([])

    useEffect(()=> {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw Error('could not fetch the data for that resource')
                }
                const result = await response.json()
                setData(result)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [url])

    return { data }
}

export default useFetch