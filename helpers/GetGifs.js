const GetGifs = async( category ) => {
    
        const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=hiCmQqbsvAjDLJqml5KWs1UAFSV47GVz`;
        const response = await fetch(url)
        const {data} = await response.json()

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
   return gifs
    
}
export default GetGifs