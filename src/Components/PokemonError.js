import imgError from "../Components/png-clipart-computer-icons-error-information-error-angle-triangle-thumbnail.png";

export default function PokemonError({ message }) {
  return (
    <div role="alert">
      <img src={imgError} alt="error" width="240" />
      {message}
    </div>
  );
}
