// import { ImSpinner } from "react-icons/im";
import imgPending from "./2931158-200.png";
import PokemonData from "./PokemonData";

const styles = {
  spinner: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
    fontSize: 24,
  },
};

export default function PokemonPending({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        "official-artwork": {
          front_default: imgPending,
        },
      },
    },
    stats: [],
  };
  return (
    <div role="alert">
      <div style={styles.spiner}>
        {/* <ImSpinner /> */}
        Загружаем ....
      </div>
      <PokemonData pokemon={pokemon} />
    </div>
  );
}
