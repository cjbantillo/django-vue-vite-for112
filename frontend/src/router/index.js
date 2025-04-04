import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Login", component: () => import("../views/Login.vue") },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
    meta: { requiresAuth: true }, // Add this for protected route
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Basic navigation guard for protected routes
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("access_token");
  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
