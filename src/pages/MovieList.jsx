import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import useTitle from "../hooks/useTitle";

const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);
  useTitle(title);

  return (
    <div className="max-w-7xl mx-auto py-6">
      <div className="flex flex-wrap justify-start gap-5">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
