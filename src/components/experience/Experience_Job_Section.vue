<template>
    <v-sheet color="black"
             :class="[sheetPadding, sheetMargin]"
             dark>

        <span class="display-1">{{ title }}</span>
        <div v-if="subTitle">
            <span class="headline" style="color: #AAAAAA">{{ subTitle }}</span>
        </div>
        <div class="pt-10">
            <p class="text-h5 font-weight-medium" :key="paragraph" v-for="paragraph in paragraphs">
                {{ paragraph }}
            </p>
        </div>
    </v-sheet>
</template>

<script>
    export default {
        name: "Experience_Job_Section",
        props: ['title', 'subTitle', 'paragraphs'],
        computed: {
            sheetPadding() {
                console.log(this.$vuetify.breakpoint.name);
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs': return 'pa-10';
                    case 'sm': return 'pa-10';
                    default: return 'pa-12'
                }
            },
            sheetMargin() {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs': return 'mt-10 mb-10';
                    case 'sm': return 'mt-10 mb-10';
                    default: return 'ma-10'
                }
            }
        }
    }
</script>

<style scoped>

</style>
