import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./movie-view.scss";


export const MovieView = ({ movies, user, setUser, token }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m._id === movieId);

  return (
    <Link to={`/`} style={{ textDecoration: "none", color: "black" }} className="movie-poster">
      <div>
        <div>
          <img
            className="w-100"
            src={movie.ImagePath}
          />
        </div>
        <div>
          <span>Title: </span>
          <span>{movie.Title}</span>
        </div>
        <div>
          <span>Director: </span>
          <span>{movie.Director.Name} </span>
        </div>
        <div>
          <span>Description: </span>
          <span>{movie.Description} </span>
        </div>

        {/* <button className="back-button">Back</button> */}

      </div>
    </Link>
  );
};
