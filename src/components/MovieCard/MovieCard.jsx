import styles from './styles.module.css'

export default function MovieCard({ movie, setMovies }) {
  const deleteMovie = () => setMovies((prev) => {
    return prev.filter((el) => el !== movie)
  })


  return (
    <button className={styles.movieCard} role='button' onClick={deleteMovie}>
      <div className={styles.imageWrap}>
        <img className={styles.image} src={movie.image} alt={movie.name} />
        <div className={styles.overlay}>
          <h3>{movie.name}</h3>
        </div>
      </div>
    </button>
  )
}