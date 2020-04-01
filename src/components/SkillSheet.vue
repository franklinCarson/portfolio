<template>
    <v-sheet
            class="mt-3 pa-3"
            color="neutral"
    >
        <v-row justify="center">
            <v-icon
                    size="100"
                    color="black"
                    class="pt-5"
            >
                {{icon}}
            </v-icon>
        </v-row>
        <v-row justify="center" class="pt-4">
          <span :class="{'display-3': $vuetify.breakpoint.smAndUp, 'display-1': $vuetify.breakpoint.xsOnly}">
            {{title}}
          </span>
        </v-row>
        <v-row class="pa-3 pt-4 text-center pl-10 pr-10">
            <v-col>
            <span :class="{'headline': $vuetify.breakpoint.lgAndUp}">
                {{ text }}
            </span>
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script>
    export default {
        name: "SkillSheet",
        props: ['icon', 'title', 'text']
    }
</script>

<style scoped>

</style>