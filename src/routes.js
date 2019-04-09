import Dashboard from "views/Dashboard.jsx";
import Icons from "views/Icons.jsx";
import Map from "views/Map.jsx";
import Notifications from "views/Notifications.jsx";
import Rtl from "views/Rtl.jsx";
import Home from "views/Home.jsx";
import Package from "views/Package.jsx";
import Share from "views/Share.jsx";
import Profile from "views/Profile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import UserProfile from "views/UserProfile.jsx";
import { homedir } from "os";

var routes = [
  //  {
  //   path: "/dashboard",
  //     name: "Dashboard",
  //    // rtlName: "لوحة القيادة",
  //     icon: "tim-icons icon-chart-pie-36",
  //    component: Dashboard,
  //    layout: "/admin"
  //  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",ar
  
  //   icon: "tim-icons icon-atom",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/map",
  //   name: "Map",
  //   rtlName: "خرائط",
  //   icon: "tim-icons icon-pin",
  //   component: Map,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: "tim-icons icon-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: "tim-icons icon-single-02",
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   // name: "Typography",
  //   // rtlName: "طباعة",
  //   // icon: "tim-icons icon-align-center",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/rtl-support",
  //   name: "RTL Support",
  //   rtlName: "ار تي ال",
  //   icon: "tim-icons icon-world",
  //   component: Rtl,
  //   layout: "/rtl"
  // }
  {
    path: "/home",
    name: 'HOME',
    icon: "tim-icons icon-world",
    component: Home,
    layout: "/user"
  },
  {
    path: "/package",
    name: 'PACKAGE',
    icon: "tim-icons icon-world",
    component: Package,
    layout: "/user"
  },
  {
    path: "/share",
    name: 'SHARE',
    icon: "tim-icons icon-world",
    component: Share,
    layout: "/user"
  },
  {
    path: "/profile",
    name: 'View Profile',
    icon: "tim-icons icon-world",
    component: Profile,
    layout: "/user"
  }
];
export default routes;
