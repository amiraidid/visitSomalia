import React, { useEffect, useState } from 'react'
import useFetch from '@/hooks/useFetch'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { LandingPage,RegionDetailCard } from '@/components';

function RegionDetail() {

    const { region } = useParams();
    const [regionData, setRegionData] = useState({})
  
    useEffect(() => {
      const fetchRegionData = async () => {
        try {
          const response = await axios.get(`/api/regions/${region}`)
          const responseData = response.data
          if (responseData && responseData.regions) {
            setRegionData(responseData.regions)
          } else {
            console.log('No data found for region:', region)
          }
        } catch (error) {
          console.error(error.message)
          console.error(error.stack)
        }
      }
      fetchRegionData()
    }, [region])

  return (

    <section className=''>

        <LandingPage region={region}/>
        <RegionDetailCard region={region} regionData={regionData}/>
        
    </section>
  )
}

export default RegionDetail