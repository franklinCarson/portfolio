<template>
    <v-container>
        <Title_Desktop/>
        <Family_Dekstop/>
        <MountainBiking_Desktop/>
    </v-container>
</template>
<script>
    import Title_Desktop from "../components/about/Title_Desktop";
    import Family_Dekstop from "../components/about/Family_Dekstop";
    import MountainBiking_Desktop from "../components/about/MountainBiking_Desktop";
    export default {
        components: {MountainBiking_Desktop, Family_Dekstop, Title_Desktop}
    }
</script>