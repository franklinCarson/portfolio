<template>
    <div>
        <v-overlay v-if="shown"
                   z-index="6"
        >
            <v-card light
                    min-width="450">
                <v-row class="pt-3 pr-5">
                    <v-spacer/>
                    <v-btn icon
                           @click="closeButtonClicked">
                        <v-icon>
                            mdi-close
                        </v-icon>
                    </v-btn>
                </v-row>
                <div class="pr-10 pl-10 pb-10">
                    <span class="display-1 pl-2">
                        Contact Me
                    </span>
<!--                    <v-card-subtitle>-->
<!--                        Ward Employment Specialist-->
<!--                    </v-card-subtitle>-->

                    <v-row class="pa-3 pt-6">
                        <v-col>
                            <v-chip
                                    label
                                    color="highlight"
                                    dark
                            >
                                <v-icon left>
                                    mdi-phone
                                </v-icon>
                                Phone:
                            </v-chip>
                        </v-col>
                        <v-col>
                            <div class="pt-1 text-end">
                                (801) 669-3727
                            </div>
                        </v-col>

                    </v-row>
                    <v-row class="pa-3">
                        <v-col>
                            <v-chip
                                    label
                                    color="highlight"
                                    dark
                            >
                                <v-icon left>
                                    mdi-email-outline
                                </v-icon>
                                Email:
                            </v-chip>
                        </v-col>
                        <v-col>
                            <div class="pt-1 text-end">
                                franklin.carson@gmail.com
                            </div>
                        </v-col>

                    </v-row>
                </div>
            </v-card>
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
            },
            closeButtonClicked: function () {
                this.toggleShown()
            }
        }
    }
</script>

<style scoped>

</style>