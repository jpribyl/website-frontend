//greeting needs to be an exact path... 
//import Greeting from '../views/greeting'

import Soop from '../views/greeting'

var indexRoutes = [
    { 
        path: "/soop", 
        name: "soop", 
        component: Soop,
        faicon: 'briefcase'
    },
];

export default indexRoutes;
