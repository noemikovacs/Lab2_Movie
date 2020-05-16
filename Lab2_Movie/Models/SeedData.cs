using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lab2_Movie.Models
{
    public class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new MoviesDbContext(serviceProvider.GetRequiredService<DbContextOptions<MoviesDbContext>>()))
            {
                // Look for any movies.
                if (context.Movies.Any())
                {
                    return;   // DB table has been seeded
                }

                context.Movies.AddRange(
                    new Movie
                    {
                        Title = "First Movie",
                        Description = "description of the movie",
                        Genre = Genre.Horror,
                        DurationInMin = 120,
                        YearOfRelease = 2001,
                        Director = "Who Cares",
                        DateAdded = DateTime.Now,
                        Rating = 10,
                        WasWatched = false
                    },

                    new Movie
                    {
                        Title = "Second Movie",
                        Description = "description of the movie",
                        Genre = Genre.Comedy,
                        DurationInMin = 150,
                        YearOfRelease = 1998,
                        Director = "Who Cares 1",
                        DateAdded = DateTime.Now,
                        Rating = 1,
                        WasWatched = false
                    }
                );
                context.SaveChanges();
            }
        }
    }
}
