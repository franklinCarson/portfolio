<template>
    <v-row align="center">
        <v-col>
            <v-row justify="center">
                <v-img
                        src="@/assets/images/profileDesktop.png"
                        max-width="400"
                />
            </v-row>


        </v-col>
        <v-col justify="center">
            <v-container class="pr-10">
                <v-row>
                        <span class="display-4 font-weight-regular">
                            About Me
                        </span>
                </v-row>
                <v-row>
                    <span class="text-start display-1">
                        I'm Carson, the <span class="font-weight-bold"> people person </span> that finds his zen in <span style="font-family: Courier; color: #bf4800" class="font-weight-bold">code</span>. I am a creative architect of user-inspired solutions. I create teams inspired with autonomy and the intrinsic desire for <span class="font-weight-bold">excellence</span>.
                    </span>
                </v-row>

            </v-container>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "Title_Desktop"
    }
</script>

<style scoped>

</style>