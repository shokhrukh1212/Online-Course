function MovieItem({ movie }) {
  return (
    <div
      style={{
        width: 600,
        height: 300,
        backgroundColor: "#f0f0f0",
        padding: 10,
        margin: 10,
      }}
    >
      <h3>Title: {movie.Title}</h3>
      <h3>Released: {movie.Released}</h3>
      <h3>Year: {movie.Year}</h3>
      <h3>Genre: {movie.Genre}</h3>
      <h3>Actors: {movie.Actors}</h3>
    </div>
  );
}

export { MovieItem };
