<template>
    <v-sheet color="black"
             class="pa-12 ma-10 rounded-lg"
             dark>

        <span class="display-1">{{ title }}</span>
        <div v-if="subTitle">
            <span class="headline" style="color: #AAAAAA">{{ subTitle }}</span>
        </div>
        <div class="pt-10">
            <p class="subtitle-1 font-weight-medium" :key="paragraph" v-for="paragraph in paragraphs">
                {{ paragraph }}
            </p>
        </div>
    </v-sheet>
</template>

<script>
    export default {
        name: "Experience_Job_Section",
        props: ['title', 'subTitle', 'paragraphs']
    }
</script>

<style scoped>

</style>