/* eslint-disable no-restricted-globals */
import { Component } from "react";
import PokemonError from "./Components/PokemonError";
import PokemonData from "./Components/PokemonData";
import PokemonPending from "./Components/PokemonPenting";

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    // loading: false,
    error: null,
    status: "idle", //idle - означает ожидание
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({ status: "pending", pokemon: null });
      fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`Покемона с именем ${nextName} не найдено!`)
          );
        })
        .then((pokemon) => this.setState({ pokemon, status: "resolved" }))
        .catch((error) => this.setState({ error, status: "rejected" }));
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === "idle") {
      return <div>Введите имя покемона</div>;
    }
    if (status === "pending") {
      // eslint-disable-next-line no-undef
      return <PokemonPending pokemonName={pokemonName} />;
    }
    if (status === "rejected") {
      return <PokemonError message={error.message} />;
    }
    if (status === "resolved") {
      return <PokemonData pokemon={pokemon} />;
    }
  }
}
