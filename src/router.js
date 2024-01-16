import { createRouter, createWebHistory } from "vue-router";

import ContactCoach from "./pages/request/ContactCoach.vue";
import ReceivedRequests from "./pages/request/ReceivedRequests.vue";
import CoachDetails from "./pages/coaches/CoachDetails.vue";
import CoachesList from "./pages/coaches/CoachesList.vue";
import CoachRegister from "./pages/coaches/CoachRegister.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesList },
    {
      path: "/coaches/:id",
      component: CoachDetails,
      children: [{ path: "/contact", component: ContactCoach }], // /coaches/id/contact
    },
    { path: "/register", component: CoachRegister },
    { path: "/requests", component: ReceivedRequests },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
