
import { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './store/creators/actionCreators'

function MoviePage(props) {

    // componentDidMount and componentDidUpdate 
    useEffect(() => {
        fetchMovies() 
    }, [])

    const fetchMovies = () => {
        fetch('http://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa')
        .then(response => response.json())
        .then(result => {
            props.onMoviesLoaded(result.Search)
        })
    }


    return <div>
        <h1>MoviesPage</h1>
        <button onClick = {() => props.onLogin()}>Login</button>
        <button onClick = {() => props.onLogout()}>Logout</button>
    </div>
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMoviesLoaded: (movies) => dispatch(actionCreators.saveMovies(movies)), 
        onLogin: () => dispatch({type: 'LOGIN'}), 
        onLogout: () => dispatch({type: 'LOGOUT'})
    }
}

export default connect(null, mapDispatchToProps)(MoviePage)