using FluentValidation;
using Lab2_Movie.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lab2_Movie.ModelValidators
{
    public class MovieValidator : AbstractValidator<Movie>
	{
		// read more: https://www.carlrippon.com/fluentvalidation-in-an-asp-net-core-web-api/
		public MovieValidator(MoviesDbContext context)
		{
			RuleFor(x => x.Title)
				.Length(1, 100);
			RuleFor(x => x.Description)
				.Length(10, 500);
			RuleFor(x => x.Director)
				.Length(1, 100);
			RuleFor(x => x.DurationInMin)
				.InclusiveBetween(40, 180);
			RuleFor(x => x.DateAdded)
				.LessThan(DateTime.Now);
			RuleFor(x => x.Rating).InclusiveBetween(1, 10);
		}
	}
}
