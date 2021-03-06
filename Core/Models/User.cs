﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DinDin.Core.Models
{
    public class User : IdentityUser
    {
        public ICollection<UserRole> UserRoles { get; set; }
        public ICollection<UserGroup> UserGroups { get; set; }
        public ICollection<Recipe> Recipes { get; set; }

        public User()
        {
            UserRoles = new List<UserRole>();
            UserGroups = new List<UserGroup>();
            Recipes = new List<Recipe>();
        }
    }
}
