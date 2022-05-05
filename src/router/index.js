import Vue from "vue";
import VueRouter from "vue-router";
import PostsScreen from "../screens/PostsScreen"
import PagesScreen from "../screens/PagesScreen"
import DashboardScreen from "../screens/DashboardScreen"
import MainScreen from "../screens/MainScreen"
import LoginScreen from "../screens/LoginScreen"
import SettingsScreen from "../screens/SettingsScreen"
import UsersScreen from "../screens/UsersScreen"
import NewPostScreen from "../screens/NewPostScreen"
import EditPostScreen from "../screens/EditPostScreen"
import TemplatesScreen from "../screens/TemplatesScreen"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: MainScreen,
        redirect: { name: "DashboardScreen" },
        children: [
            {
                path: "/dashboard",
                name: "DashboardScreen",
                component: DashboardScreen,
            },
            {
                path: "/pages",
                name: "PagesScreen",
                component: PagesScreen,
            },
            {
                path: "/posts",
                name: "PostsScreen",
                component: PostsScreen,
            },
            {
                path: "/posts/new",
                name: "NewPostScreen",
                component: NewPostScreen,
            },
            {
                path: "/posts/edit/:id",
                name: "EditPostScreen",
                component: EditPostScreen,
            },
            {
                path: "/users",
                name: "UsersScreen",
                component: UsersScreen,
            },
            {
                path: "/templates",
                name: "TemplatesScreen",
                component: TemplatesScreen,
            },
            {
                path: "/settings",
                name: "SettingsScreen",
                component: SettingsScreen,
            },
        ],
    },
    {
        path: "/login",
        name: "LoginScreen",
        component: LoginScreen
    }
    
]

// const router = VueRouter.createRouter({
//     // history: VueRouter.createWebHashHistory(),
//     routes, // short for `routes: routes`
// })

const router = new VueRouter({
    // base: process.env.BASE_URL,
    routes,
    mode: 'history'
});

export default router;