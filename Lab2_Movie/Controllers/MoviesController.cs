using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Lab2_Movie.Models;
using Lab2_Movie.ViewModels;

namespace Lab2_Movie.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly MoviesDbContext _context;

        public MoviesController(MoviesDbContext context)
        {
            _context = context;
        }

        // GET: api/Movies
        /// <summary>
        /// Gets a list of all the movies
        /// </summary>
        /// <param name="from">Filter movies added from this date time (inclusive). Leave empty for no lower limit.</param>
        /// <param name="to">Filter movies add up to this date time (inclusive). Leave empty for no upper limit.</param>
        /// <returns>A list of Movie objects.</returns> 
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MovieWithNrOfComments>>> GetMovies(
            [FromQuery] DateTimeOffset? from = null, 
            [FromQuery] DateTimeOffset? to = null)
        {
            IQueryable<Movie> result = _context.Movies.Include(f => f.Comments);
            if (from != null)
            {
                result = result.Where(f => from <= f.DateAdded);
            }
            if (to != null)
            {
                result = result.Where(f => f.DateAdded <= to);
            }

            /*       <th>Title</th>
            <th>Description</th>
            <th>MovieUpKeepGenre</th>
            <th>DurationInMin</th>
            <th>YearofRelease</th>
            <th>Director</th>
            <th>DateAdded</th>
            <th>Rating</th>
            <th>WasWatched</th>
            <th>Comments</th>*/

            var resultList = await result
            .OrderByDescending(m => m.YearOfRelease)
            .Select(m => new MovieWithNrOfComments
            {
                Id = m.Id, 
                Title = m.Title,
                Genre = m.Genre,
                DurationInMin = m.DurationInMin,
                YearOfRelease = m.YearOfRelease,
                Director = m.Director,
                DateAdded = m.DateAdded,
                Rating = m.Rating,
                WasWatched = m.WasWatched,
                NumberOfComments = m.Comments.Count
            })
            .ToListAsync();
        return resultList;
    }
        // GET: api/Movies/5
        /// <summary>
        /// Get Movies with an unique id
        /// </summary>
        /// <remark>
        /// Sample request:
        /// 
        ///   GET  /api/Movies/5 
        /// 
        /// </remark>
        /// <param name="id">The ID for the movie we're searching for</param>
        /// <returns>Movie with that id</returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<Movie>> GetMovie(long id)
        {
            var movie = _context.Movies;

            if (movie == null)
            {
                return NotFound();
            }

            return await movie.Include(e => e.Comments).SingleOrDefaultAsync(e => e.Id == id); ;
        }

        // PUT: api/Movies/5
        /// <summary>
        /// Add or Update a Movie
        /// </summary>
        /// <param name="id">The ID of the Movie </param>
        /// <param name="movie"></param>
        /// <returns>The updated or created Movie</returns>
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMovie(long id, Movie movie)
        {
            if (id != movie.Id)
            {
                return BadRequest();
            }

            _context.Entry(movie).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MovieExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Movies
        /// <summary>
        /// Add/Create a new Movie
        /// </summary>
        /// /// <remarks>
        /// Sample request:
        ///     
        ///    POST/    {
        ///		 "title" : "The title",
	    ///         "description" : "This is a  very nice movie",
	    ///         "genre" : "Action",
	    ///         "durationInMin" : 100,
	    ///         "yearOfRelease" : 2000,
	    ///         "director" : "Who Cares",
	    ///         "dateAdded" : "2017-09-08T19:01:55.714942+03:00",
	    ///         "rating" : 10,
	    ///         "wasWatched" : false,
	    ///         "comments" : [
		///         {
		///             "text": "I recommend",
		///             "important" :true
        ///          }
		///          ]
        ///         }
        /// 
        /// </remarks>
        /// <param name="movie">Movie we want to add </param>
        /// <returns>Ok if everything is fine</returns>
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Movie>> PostMovie(Movie movie)
        {
            _context.Movies.Add(movie);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMovie", new { id = movie.Id }, movie);
        }

        // DELETE: api/Movies/5
        /// <summary>
        /// Delete a movie with a certain id
        /// </summary>
        /// /// <remarks>
        /// Sample request:
        ///     
        ///             api/Movies/2
        /// 
        /// </remarks>
        /// <param name="id">Id for the movie we want to delete</param>
        /// <returns>Ok if it was deleted, nok otherwise</returns>
        [HttpDelete("{id}")]
        public async Task<ActionResult<Movie>> DeleteMovie(long id)
        {
            var movie = await _context.Movies.FindAsync(id);
            if (movie == null)
            {
                return NotFound();
            }

            _context.Movies.Remove(movie);
            await _context.SaveChangesAsync();

            return movie;
        }

        private bool MovieExists(long id)
        {
            return _context.Movies.Any(e => e.Id == id);
        }
    }
}
