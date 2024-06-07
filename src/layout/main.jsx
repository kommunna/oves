import React from "react";
import { Movies } from "../components/Movies";
import { Search  } from "../components/search";
import { Preloader } from "../components/proloader";

class Main extends React.Component {
    
    state = {
        movies: [],
        loading: true,
    };
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=99ae1a07&s=Guardians of the Galaxy Vol. 2')
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search, loading: false }));
    }

    searchMovies = (str, type = "all") => {
        this.setState({ loading: true });
        fetch(
            `http://www.omdbapi.com/?apikey=99ae1a07&s=${str}${
                type !== "all" ? `&type=${type}` : ""
            }`
        )
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search, loading: false }));
    };

    render() {
        const { movies, loading } = this.state;

        return (
            
            <main className="container content"> 
                <Search searchMovies={this.searchMovies} />
                {loading ? <Preloader /> : <Movies movies={this.state.movies} />}
                
            </main>
        );
    }
}
export { Main };