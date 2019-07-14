//greeting needs to be an exact path... 
//import Greeting from '../views/greeting'

import Bio from '../views/bio'
import Projects from '../views/projects'
import Greeting from '../views/greeting'
import Soop from '../views/soop'
import Skills from '../views/skills'

var indexRoutes = [
    { 
        sidebar: true,
        path: "/", 
        name: "greeting", 
        component: Greeting ,
        faicon: 'dot-circle',
        fastyle: 'regular'
    },
    { 
        sidebar: true,
        path: "/bio", 
        name: "bio", 
        component: Bio,
        faicon: 'home'
    },
    { 
        sidebar: true,
        path: "/skills", 
        name: "skills", 
        component: Skills,
        faicon: 'cogs'
    },
    { 
        sidebar: true,
        path: "/projects", 
        name: "projects", 
        component: Projects,
        faicon: 'briefcase'
    },
    { 
        sidebar: false,
        path: "/soop", 
        name: "soop", 
        component: Soop,
        faicon: 'briefcase'
    },
];

export default indexRoutes;
