<template>
    <v-row class="pt-10">
        <v-col>
            <v-card class="pa-1"
                    dark
                    color="black"
                    :height="CARD_HEIGHT"
            >
                <v-row class="pa-0 ma-0">
                    <v-col class="pa-0 ma-0"/>
                    <v-col class="pa-0 ma-0">
                        <v-img src="@/assets/images/guitar.png"
                               width="350"
                        >
                            <v-row justify="center">
                                <span class="headline">Guitar</span>
                            </v-row>
                        </v-img>
                    </v-col>
                    <v-col class="pa-0 ma-0"/>
                </v-row>
            </v-card>
        </v-col>

        <v-col>
            <v-card class="pa-3"
                    :height="CARD_HEIGHT">
                <v-row justify="center">
                    <span class="headline">Mountain Biking</span>
                    <v-img src="@/assets/images/mountainBike.png"
                         width="375"
                    />
                </v-row>
            </v-card>
        </v-col>
        <v-col>
            <v-card min-width="330"
                    :height="CARD_HEIGHT"
                    dark
                    color="black"
            >
                <v-container
                        dark
                        color="#080B12"

                        :height="CARD_HEIGHT"
                        class="pa-0 mt-1 mr-1 ml-1"
                >
                    <v-row align="end">
                        <v-img
                                src="@/assets/images/breadv3.png"
                                contain
                                aspect-ratio="1"
                                class="ma-0 pa-0"
                                min-width="300"
                                :height="CARD_HEIGHT"
                        >
                            <v-row
                                    justify="center"
                                    class="headline">
                                Cooking & Baking
                            </v-row>
                        </v-img>
                    </v-row>
                </v-container>
            </v-card>
        </v-col>

    </v-row>
</template>

<script>
    export default {
        name: "MountainBiking_Desktop",
        data: () => ({
            CARD_HEIGHT: 420
        })
    }
</script>

<style scoped>
</style>