import React, { useEffect, useState } from 'react'

const Users = () => {
  const [joke, setJoke] = useState()
  const [loading, setLoading] = useState(true)
  console.log(joke)

  useEffect(() => {
    const fetchJoke = async() => {
      const data = await fetch('https://api.chucknorris.io/jokes/random')
      const result = await data.json()
      setJoke(result);
      setLoading(false)
    };
    fetchJoke()
  },[])

  return (
    <div>
      {loading ? (
        <p>Loading....</p>
      ): (
        <>
          <img src={joke.icon_url} alt="logo"/>
          <p>{joke.value}</p>
        </>
      )}
    </div>
  )
}

export default Users
