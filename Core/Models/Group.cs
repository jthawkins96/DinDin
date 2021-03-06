﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DinDin.Core.Models
{
    public class Group
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<UserGroup> UserGroups { get; set; }

        public Group()
        {
            UserGroups = new List<UserGroup>();
        }
    }
}
