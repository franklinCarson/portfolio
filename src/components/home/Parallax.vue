<template>
    <v-parallax
            dark
            src="@/assets/images/forestv3.png"
            :height="$vuetify.breakpoint.xs ? 400 : 500"
            class="elevation-2"
    >
        <v-overlay
                absolute
                color="darkGrey"
        >
            <v-row justify="center">
                <span :class="{'display-4': $vuetify.breakpoint.smAndUp, 'display-1': $vuetify.breakpoint.xsOnly}">Carson Franklin</span>
            </v-row>
            <v-divider/>
            <v-row justify="center">
                <span :class="{'display-1': $vuetify.breakpoint.smAndUp}">Software Developer</span>
            </v-row>

        </v-overlay>
    </v-parallax>
</template>

<script>
    export default {
        name: "Parallax"
    }
</script>

<style scoped>

</style>