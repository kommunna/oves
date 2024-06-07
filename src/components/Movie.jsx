function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return <div id={id} className="movie card">
        <div className="card-image waveseffect waves-block waves-light">
            {
                poster == 'N/A' ? (
                    <img src={"https://via.placeholder.com/300x400?text=not found"} className="activator" />
                ) :
                    <img src={poster} className="activator" />
            }
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{title}</span>
            <p>{year} <span className="right">{type}</span></p>
        </div>
    </div>;
}

export{ Movie };