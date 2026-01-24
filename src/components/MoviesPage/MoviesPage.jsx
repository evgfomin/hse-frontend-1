import { useState, useEffect } from "react"
import MovieCard from "../MovieCard"
import styles from './styles.module.css'

function MoviesPage() {
    const [movies, setMovies] = useState([
        { name: 'Человек-бензопила', image: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/8205541e-8436-41f8-8dcf-720400965d5e/3840x" },
        { name: 'Человек-бензопила', image: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/8205541e-8436-41f8-8dcf-720400965d5e/3840x" },
        { name: 'Человек-бензопила', image: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/8205541e-8436-41f8-8dcf-720400965d5e/3840x" },
        { name: 'Человек-бензопила', image: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/8205541e-8436-41f8-8dcf-720400965d5e/3840x" },
    ])

    // Логирование
    useEffect(() => {
        console.log("Mount")
        return () => console.log("Unmount")
    }, [])
    useEffect(() => {
        console.log("Обновление")
    }, [movies])
    // 

    return (
        <div className={styles.moviesPage}>
            {movies.length ? movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} setMovies={setMovies} />
            )) : <div>Нет фильмов!</div>}
        </div>
    )
}

export default MoviesPage
