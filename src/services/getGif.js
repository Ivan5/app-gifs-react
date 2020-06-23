const apiKey = "WPTd26peHkpCuV4jhuMR6A1JanMuBGX6";

export default async function singleGif(id) {
  const apiUrl = `https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`;
  return await fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => response.data);
}
