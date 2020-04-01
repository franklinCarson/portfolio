<template>
    <div>
        <v-overlay v-if="shown">
            I'm excited to hear from you
            Phone: (801) 669 - 3727
        </v-overlay>
    </div>
</template>

<script>
    export default {
        name: "Contact",
        data: () => ({
            shown: false
        }),
        methods: {
            toggleShown: function () {
                this.shown = !this.shown
            }
        }
    }
</script>

<style scoped>

</style>