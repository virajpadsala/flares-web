import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Notifications from "@/pages/Notifications.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Typography from "@/pages/Typography.vue";
import TableList from "@/pages/TableList.vue";
import Home from "@/pages/Home.vue";
import Privacy from "@/pages/Privacy.vue";
import Terms from "@/pages/terms.vue";
import ResetPassword from "@/pages/ResetPassword.vue";
import MapsView from "@/pages/MapsView.vue";
import Login from "@/pages/Login.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    component: Privacy
  },
  {
    path: "/term-of-condition",
    name: "term-of-condition",
    component: Terms
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: ResetPassword
  },
  {
    path: "/map",
    name: "map",
    component: MapsView
  },
  {
    path: "/admin/login",
    name: "admin-login",
    component: Login
  },
  {
    path: "/admin",
    name:"admin",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "stats",
        name: "stats",
        component: UserProfile
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      },
      {
        path: "maps",
        name: "maps",
        component: Maps
      },
      {
        path: "typography",
        name: "typography",
        component: Typography
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList
      }
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
