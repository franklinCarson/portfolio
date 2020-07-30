<template>
    <v-sheet
            class="mt-3 pa-3"
            color="neutral"
    >
        <v-row justify="center">
            <v-icon
                    size="100"
                    color="lightGrey"
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
        <v-row v-if="viewLink" class="pa-3 pt-0 pb-7" justify="center">
            <router-link
                    :to="viewLink"
                    color="link"
                    class="text-center"
                    style="text-decoration: none"
            >
                Read More

            </router-link>
            <v-icon
                    color="link"
                    size="15"
            >
                mdi-chevron-right
            </v-icon>
        </v-row>

    </v-sheet>
</template>

<script>
    export default {
        name: "Topic",
        props: ['icon', 'title', 'text', 'viewLink']
    }
</script>

<style scoped>

</style>