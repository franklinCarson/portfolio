<template>
    <v-navigation-drawer
            v-model="drawer"
            app
    >
        <v-list dense :key="item.icon" v-for="item in navItems">
            <v-list-item :to="item.linkTo" link>
                <v-list-item-action>
                    <v-icon>{{item.icon}}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>{{item.text}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "Nav",
        data: () => ({
            drawer: null,
            navItems: [
                {
                    text: "Home",
                    icon: "mdi-home",
                    linkTo: "/"
                },
                {
                    text: "About",
                    icon: "mdi-account-question-outline",
                    linkTo: "/about"
                },
                {
                    text: "Skills",
                    icon: "mdi-math-compass",
                    linkTo: "/skills"
                },
            ]
        }),
        methods: {
           toggleDrawer: function() {
                this.drawer = !this.drawer
           }
        }
    }
</script>

<style scoped>
</style>