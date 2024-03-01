import movies from "../db/db.json";

const Peliculas = () => {
  const entries = movies.entries;

  const filterMovies = entries.filter((item) => {
    return item.programType === "movie" && item.releaseYear >= 2010;
  });

  const peliculas = filterMovies.slice(0, 20).sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <div>Peliculas</div>
      <ol>
        {peliculas.map((item) => {
          return <li key={item.title}>{item.title}</li>;
        })}
      </ol>
    </>
  );
};

export default Peliculas;
