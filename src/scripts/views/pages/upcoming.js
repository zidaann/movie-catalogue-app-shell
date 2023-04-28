import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const Upcoming = {
  async render() {
    /* SEBELUM DITAMPILKAN
    return `
        <h2>Upcoming page</h2>
      `;
    */

    // SESUDAH DITAMPILKAN
    return `
    <div class="content">
    <h2 class="content__heading">Upcoming in Cinema</h2>
    <div id="movies" class="movies">
    </div>
  </div>
    `;
  },

  async afterRender() {
    /* SEBELUM DITAMPILKAN
     // Fungsi ini akan dipanggil setelah render()
      const movie = await TheMovieDbSource.upcomingMovies();
      console.log(movie);
    // TODO: tampilkan movies di dalam DOM
     */

    // SESUDAH DITAMPILKAN
    const movies = await TheMovieDbSource.upcomingMovies();
    const moviesContainer = document.querySelector('#movies');
    // console.log(movies);
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default Upcoming;
