const getPlaces = async () => {
  return {data} = await axios.get('http://localhost:3000/places')
}
