using Lab2_Movie.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lab2_Movie.ViewModels
{
    public class MovieWithNrOfComments
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public Genre Genre { get; set; }
        public int DurationInMin { get; set; }
        public int YearOfRelease { get; set; }
        public string Director { get; set; }
        public DateTimeOffset DateAdded { get; set; }
        public int Rating { get; set; }
        public bool WasWatched { get; set; }
        public long NumberOfComments { get; set; }

    }
}
