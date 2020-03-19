<template>
    <v-app id="inspire">
        <Nav ref="nav"></Nav>

        <v-app-bar
                app
                color="black"
                dark
        >
            <v-row>
                <v-col>
                    <v-app-bar-nav-icon @click.stop="navButtonClicked"/>
                </v-col>
                <v-col>
                    <v-toolbar-title class="pt-2 text-center">CF</v-toolbar-title>
                </v-col>
                <v-col align="end">
<!--                    <v-icon class="pt-3 pr-1" @click="navButtonClicked">-->
<!--                        mdi-comment-outline-->
<!--                    </v-icon>-->
                </v-col>
            </v-row>
        </v-app-bar>

        <v-content>
            <router-view></router-view>
        </v-content>
        <v-footer
                color="black"
                app
                dark
                class="pa-0"
        >
            <v-row class="ma-0">
                <v-col justify="start">
                    &copy; 2020
                </v-col>
                <v-col justify="end" class="text-end">
                    <a style="text-decoration: none"
                       class="white--text"
                       href="https://github.com/franklinCarson/portfolio/tree/feature/vue"
                       target="_blank"
                    >
                        Github
                    </a>
                </v-col>
            </v-row>
        </v-footer>
    </v-app>
</template>

<script>
    import Nav from "./components/Nav";

    export default {
        components: {
            Nav,
        },
        props: {
            source: String,
        },
        data: () => ({}),
        methods: {
            navButtonClicked: function () {
                this.$refs.nav.toggleDrawer()
            }
        }
    }
</script>