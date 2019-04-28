using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;


namespace Arifs.JRC.DataModel
{
   public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options):base(options)
        {
             
        }
        public virtual DbSet<PushSubscriptionModel> PushSubscriptionModels { get; set; }
        public virtual DbSet<Article> Articles { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Tag> Tags { get; set; }
        public virtual DbSet<Author> Authors { get; set; }
        public virtual DbSet<Fatawa> Fatawas { get; set; }
        public virtual DbSet<FatawaAnswer> FatawaAnswers { get; set; }


    }
}
