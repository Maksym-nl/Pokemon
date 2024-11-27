function fetchPokemon(name) {
  const response = fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (response.ok) {
    return response.json();
  }
}
const api = {
  fetchPokemon,
};
export default api;
