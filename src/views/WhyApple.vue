<template>

    <v-container
            fluid
    >
        <v-card
            color="black"
            dark
        >
            <v-img
                    src="@/assets/images/apple+profilev2.png"
                    height="350"
                    class="pt-10"
            />
            <v-row justify="center" class="text-center pt-12 pb-10 pr-10 pl-10">
                <v-col>
                    <span :class="{'display-4 font-weight-normal': $vuetify.breakpoint.mdAndUp, 'display-3': $vuetify.breakpoint.smAndDown}">
                        Why Apple?
                    </span>
                </v-col>
            </v-row>
        </v-card>

        <v-card
            color="black"
            dark
            class="mt-10"
        >
            <v-row class="text-center pa-10" align="center">
                <v-col class="text-start">
                    <span class="display-2">
                        The Dream
                    </span>
                    <p>
                        Ever since I was little I have owned Apple products. I loved the simplicity of the product and the intuitiveness of the user interface. Every time I used an Apple product it was <span class="font-weight-bold">delightful</span>. Through the iPod, I first fell in love with stories. Through the iPad, I taught people about Jesus Christ, during a 2 year religious mission for my church. And through the MacBook Pro, I discovered my passion for <span style="font-family: Courier; color: #bf4800" class="font-weight-bold">coding</span>.
                    </p>
                    <p>
                        Each experience with these beautiful products and services <span class="font-weight-bold">enriched my life</span> and changed it for the better. With each increase in quality began the formation of a <span class="font-weight-bold">dream</span>. A dream to be part of <span class="font-weight-bold">helping others</span> to feel these same kinds of experiences.
                    </p>
                </v-col>
                <v-col>
                    <v-row justify="center">
                        <v-img
                                height="350"
                                width="350"
                                src="@/assets/images/dream.jpg"
                        />
                    </v-row>
                </v-col>
            </v-row>
        </v-card>

        <v-card
                class="mt-10 pt-10 pa-10"
        >
            <v-row class="pa-3" align="center">
                <v-col align="center">
                        <v-img
                                max-width="450"
                                class="ml-1"
                                src="@/assets/images/visionv3.png"
                        />
                </v-col>
                <v-col class="text-start" align="center">
                    <span class="display-2">
                      Vision
                    </span>
                    <p>
                        Apple has always been dedicated to meshing great products with amazing services to provide the most positive impact in peoples’ lives. As Oprah said, “They’re in a billion pockets, y’all. A billion pockets.” <span class="font-weight-bold">A billion lives are being enriched every day because of what Apple is doing.</span> I have been one of those lives and now I want to be part of helping others have the same experiences.
                    </p>
                </v-col>

            </v-row>
        </v-card>


        <v-card
                class="mt-10 pa-10"
                color="black"
                dark
        >
            <v-row class="pa-3" align="center">
                <v-col>
                    <span class="display-2">
                      Hard Work
                    </span>
                    <p>
                        Accomplishing Apple’s vision is not easy. Like everything else worthwhile in life it takes extreme amounts of hard work. I am someone who has not only come to accept hard work but to crave it. When I was eight, I was diagnosed with Tactile Dyslexia. Although I was told by many that it was impossible for me to succeed as well as others due to my “learning disability,” I decided it wasn’t going to get in my way. I knew other kids may be more innately smarter than me, but I knew that I could outwork them.
                    </p>
                    <p>
                        I struggled early in my education, especially with learning to read. In an effort to help, my parents bought me an iPod Shuffle and loaded it with audiobooks. I listened and relistened to those audiobooks. I noticed after a couple of months of doing this how my ability to understand what I was reading and hearing in class increased. My vocabulary also increased, and this enabled me to better articulate questions in class. Each of these gave me an increase in confidence and I began to earn better and better grades. I went on to take several college-level classes in high school and went on to succeed at an exceptional university BYU. Dyslexia has become a blessing, one that has taught me to love hard work. Nothing gives me a greater sense of fulfillment. <span class="font-weight-bold">Apple works hard, and I want to be part of that.</span>
                    </p>
                </v-col>
                <v-col v-if="$vuetify.breakpoint.smAndUp">
                    <v-row justify="center">
                        <v-img
                                max-height="350"
                                max-width="350"
                                src="@/assets/images/hardWork.png"
                        />
                    </v-row>
                </v-col>
            </v-row>
        </v-card>

    </v-container>
</template>

<script>
    export default {
        name: "WhyApple"
    }
</script>

<style scoped>

</style>