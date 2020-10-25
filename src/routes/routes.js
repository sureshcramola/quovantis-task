import Login from "../containers/Login/Login";
import Dashboard from "../containers/Dashboard/Dashboard";
import UserDetail from "../containers/UserDetail/UserDetail";
import PageNotFound from "../components/PageNotFound";

const routes = [
  {
    path: "/login",
    exact: true,
    component: Login,
    private: false
  },
  {
    path: "/users",
    exact: false,
    component: Dashboard,
    private: true
  },
  {
    path: "/user/:id",
    exact: false,
    component: UserDetail,
    private: true
  },
  {
    exact: false,
    component: PageNotFound,
    private: false
  }
];

export default routes;