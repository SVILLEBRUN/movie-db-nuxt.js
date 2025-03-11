export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();
    const { checkAuth } = useAuth();

    if(authStore.isLoggedIn === null) {
        checkAuth();
    }

    const publicRoutes = ['/login', '/register'];
    const isPublicRoute = publicRoutes.includes(to.path);

    // Si l'utilisateur est connecté et essaie d'aller sur login/register, on le redirige à l'accueil
    if (authStore.isLoggedIn && isPublicRoute) {
        return navigateTo('/');
    }

    // Si l'utilisateur n'est pas connecté et essaie d'aller ailleurs que login/register, on le redirige vers /login
    if (!authStore.isLoggedIn && !isPublicRoute) {
        return navigateTo('/login');
    }

    return;
});