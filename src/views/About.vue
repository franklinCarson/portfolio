<template>
    <v-container>
        <div v-if="$vuetify.breakpoint.xs">
            <About_Mobile/>
        </div>
        <div v-else>
            <About_Desktop/>
        </div>
    </v-container>
</template>
<script>
    import About_Mobile from "../components/about/About_Mobile";
    import About_Desktop from "../components/about/About_Desktop";
    export default {
        components: {About_Desktop, About_Mobile}
    }
</script>