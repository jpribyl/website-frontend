//greeting needs to be an exact path... 
//import Greeting from '../views/greeting'

import Bio from '../views/bio'
import Portfolio from '../views/portfolio'
import Greeting from '../views/greeting'
import Soop from '../views/greeting'

var indexRoutes = [
    { 
        path: "/", 
        name: "home", 
        component: Greeting ,
        faicon: 'home'
    },
    { 
        path: "/bio", 
        name: "bio", 
        component: Bio,
        faicon: 'book'
    },
    { 
        path: "/portfolio", 
        name: "portfolio", 
        component: Portfolio,
        faicon: 'briefcase'
    },
];

export default indexRoutes;
