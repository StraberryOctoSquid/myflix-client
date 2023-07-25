// How does the back button work?
// ?Where does onBackClick get it's powers? Main view?
export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <button onClick={onBackClick}>Back</button>
      <div>
        <img src={movie.ImagePath} />
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
    </div>
  );
};
