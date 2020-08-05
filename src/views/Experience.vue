<template>
    <v-sheet class="pb-10" style="background-color: #0D0D10">
        <Experience_Header/>
        <Experience_Job_List/>
    </v-sheet>
</template>

<script>
    import Experience_Header from "../components/experience/Experience_Header";
    import Experience_Job_List from "../components/experience/Experience_Job_List";
    export default {
        name: "Experience",
        components: {Experience_Header, Experience_Job_List}
    }
</script>

<style scoped>

</style>
