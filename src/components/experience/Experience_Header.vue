<template>
    <v-card
            color="black"
            class="rounded-0"
            >
        <v-row justify="center">
            <v-img max-width="800"
                   class="pt-5 mt-5 mb-5"
                   src="@/assets/images/laptop.png"/>
            <v-overlay z-index="1" style="padding-top: 15em" absolute color="clear">
                <span class="text-h4 text-sm-h3 text-md-h2 font-weight-medium">Experience</span>
            </v-overlay>
        </v-row>
    </v-card>
</template>

<script>
    export default {
        name: "Experience_Header",
        computed: {
        }
    }
</script>

<style scoped>

</style>
