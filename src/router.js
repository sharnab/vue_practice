import { createRouter, createWebHistory } from "vue-router";

import CoachList from "./pages/coaches/CoachList";
import CoachRegistration from "./pages/coaches/CoachRegistration";
import CoachDetails from "./pages/coaches/CoachDetails";

import ContactCoach from "./pages/requests/ContactCoach";
import RequestReceived from "./pages/requests/RequestReceived";

import NotFound from "./pages/NotFound";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachList },
        { 
            path: '/coaches/:id', 
            component: CoachDetails,
            props: true, 
            children: [
                { path: '/contact', component: ContactCoach }, //coaches/coach_id/contact
            ]
        },
        { path: '/register', component: CoachRegistration },
        { path: '/requests', component: RequestReceived },
        { path: '/:notFound(.*)', component: NotFound },
        
    ],
});

export default router;