﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DinDin.DTO
{
    public class UserGroupDto
    {
        public string Username { get; set; }
        public string UserId { get; set; }
        public int RoleId { get; set; }
        public int? GroupId { get; set; }
    }
}
