import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import useTitle from "../hooks/useTitle";

const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams?.get("q") || "";

  const { data: movies } = useFetch(apiPath, queryTerm);
  
  useTitle(`Search result for ${queryTerm}`);

  return (
    <main>
      <div className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies?.length === 0
            ? `No result found '${queryTerm}'`
            : `Result for '${queryTerm}'`}
        </p>
      </div>
      <div className="max-w-7xl mx-auto py-6">
        <div className="flex flex-wrap justify-start gap-5">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Search;
