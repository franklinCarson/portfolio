<template>
    <v-footer
            color="black lighten-2"
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
                   href="https://github.com/franklinCarson"
                   target="_blank"
                >
                    Github
                </a>
                |
                <a style="text-decoration: none"
                   class="white--text"
                   href="https://gitlab.com/franklin_carson"
                   target="_blank"
                >
                    GitLab
                </a>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>