<template>
    <v-row class="pt-10">
        <v-col>
            <v-card class="pa-1"
                    dark
                    color="black"
                    :height="CARD_HEIGHT"
            >
                <v-row>
                    <v-col class="pa-0 ma-0"/>
                    <v-col class="pa-0 ma-0">
                        <v-img src="@/assets/images/guitar.png"
                               width="350"
                        />
                    </v-col>
                    <v-col class="pa-0 ma-0"/>
                </v-row>
                <v-overlay absolute z-index="1">
                    <v-container>
                        <v-row justify="center" class="pb-8 pt-5">
                            <v-col align-self="start" class="text-center pb-12">
                                <span class="headline">Guitar</span>
                            </v-col>
                        </v-row>
                        <v-row class="pt-12 pa-5">
                            <v-col align-self="end" class="text-center" style="padding-top: 6em">
                                I have played guitar for close to 15 years. Although recently I don't get to pick it up as often as I'd like, it remains one of my favorite hobbies. I love playing anything from Jack Johnson to Guns and Roses.
                            </v-col>
                        </v-row>
                    </v-container>
                </v-overlay>
            </v-card>
        </v-col>

        <v-col>
            <v-card class="pa-3"
                    :height="CARD_HEIGHT">
                <v-row justify="center" class="text-center">
                    <v-col>
                        <span class="headline">Mountain Biking</span>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-img src="@/assets/images/mountainBike.png"
                           max-width="375"
                    />
                </v-row>
                <v-row justify="center" class="pa-3 text-center">
                    Ever since high school, I have been an avid bike rider. I have been mountain biking for ten years and have loved the sport. Also, I picked up cycling this year and will be cycling my first 100-mile rance this October.
                </v-row>
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
