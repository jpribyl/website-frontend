//greeting needs to be an exact path... 
//import Greeting from '../views/greeting'

import Bio from '../views/bio'
import Projects from '../views/projects'
import Greeting from '../views/greeting'
import Soop from '../views/soop'
import Skills from '../views/skills'
import Resume from '../views/resume'

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
        firstChild: '#devops',
        name: "projects", 
        component: Projects,
        openSubMenuPage: true,
        faicon: 'server',
        content: [
            {
                label: 'devops',
                to: '/projects#devops',
                hash: '#devops'
            },
            {
                label: 'data science',
                to: '/projects#datascience',
                hash: '#datascience'
            },
            {
                label: 'open source',
                to: '/projects#opensource',
                hash: '#opensource'
            },
            {
                label: 'hardware',
                to: '/projects#hardware',
                hash: '#hardware'
            },
            {
                label: 'physics',
                to: '/projects#physics',
                hash: '#physics'
            },
        ],
    },
    { 
        sidebar: false,
        path: "/soop", 
        name: "soop", 
        component: Soop,
        faicon: 'book-open'
    },
    { 
        sidebar: true,
        path: "/resume", 
        name: "resume", 
        component: Resume,
        faicon: 'briefcase'
    },
];

export default indexRoutes;
