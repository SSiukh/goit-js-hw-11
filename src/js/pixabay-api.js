export default function getApi(keyWord) {
  const apiKey = '32946561-6d99391fd6ee776d2dee61275';
  const baseUrl = 'https://pixabay.com/api/';

  const urlOptions = new URLSearchParams({
    key: apiKey,
    q: keyWord,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${baseUrl}?${urlOptions}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .then(value => {
      return value.hits;
    })
    .catch(error => {
      console.log(error.message);
    });
}
