

export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=DqoSgmm4LYYhJkOk0OrWpzHzjaR7YNzz&q=${ category }&limit=2`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    // console.log(data);
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))
    // console.log(gifs);
    return gifs;
}