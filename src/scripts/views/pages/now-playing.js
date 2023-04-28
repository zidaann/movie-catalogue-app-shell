import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const NowPlaying = {
  async render() {
    /* SEBELUM DITAMPILKAN
      return `
        <h2>Now Playing Page</h2>
      `;
    */
    // SESUDAH DITAMPILKAN
    return `
      <div class="content">
        <h2 class="content__heading">Now Playing in Cinema</h2>
        <div id="movies" class="movies">
        </div>
      </div>
    `;
  },

  async afterRender() {
    /* SEBELUM DITAMPILKAN
      // Fungsi ini akan dipanggil setelah render()
      const movie = await TheMovieDbSource.nowPlayingMovies();
      console.log(movie);
      // TODO: tampilkan movies di dalam DOM
    */

    // SESUDAH DITAMPILKAN
    const movies = await TheMovieDbSource.nowPlayingMovies();
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default NowPlaying;
