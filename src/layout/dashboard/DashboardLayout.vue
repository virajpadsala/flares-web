<template>
    <div class="wrapper">
        <side-bar>
            <template slot="links">
                <sidebar-link to="/admin" name="Dashboard" icon="ti-panel" />
                <sidebar-link
                    to="/admin/stats"
                    name="User Profile"
                    icon="ti-user"
                />
                <sidebar-link
                    to="/admin/table-list"
                    name="Table List"
                    icon="ti-view-list-alt"
                />
                <sidebar-link to="/admin/maps" name="Map" icon="ti-map" />
            </template>
            <mobile-menu>
                <drop-down
                    class="nav-item"
                    title-classes="nav-link"
                    icon="ti-bell"
                >
                    <a class="dropdown-item">Notification</a>
                    <a class="dropdown-item" @click="logout()">Logout</a>
                </drop-down>

                <li class="divider"></li>
            </mobile-menu>
        </side-bar>
        <div class="main-panel">
            <top-navbar></top-navbar>

            <dashboard-content @click.native="toggleSidebar">
            </dashboard-content>

            <content-footer></content-footer>
        </div>
    </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
    components: {
        TopNavbar,
        ContentFooter,
        DashboardContent,
        MobileMenu,
    },
    methods: {
        toggleSidebar() {
            if (this.$sidebar.showSidebar) {
                this.$sidebar.displaySidebar(false);
            }
        },
        logout() {
            localStorage.clear();
            this.$router.push({ name: "admin-login" });
        },
    },
};
</script>
