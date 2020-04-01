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
                    <v-icon class="pt-3 pr-1" @click="contactButtonClicked">
                        mdi-comment-outline
                    </v-icon>
                </v-col>
            </v-row>
        </v-app-bar>

        <v-content>
            <router-view></router-view>
            <Contact ref="contact"/>
        </v-content>
        <Footer/>
    </v-app>
</template>

<script>
    import Nav from "./components/Nav";
    import Footer from "./components/Footer";
    import Contact from "./components/Contact";

    export default {
        components: {
            Contact,
            Footer,
            Nav,
        },
        props: {
            source: String,
        },
        data: () => ({}),
        methods: {
            navButtonClicked: function () {
                this.$refs.nav.toggleDrawer()
            },
            contactButtonClicked: function () {
                this.$refs.contact.toggleShown()
            }
        }
    }
</script>