<template>
    <v-container :class="{'pa-0': $vuetify.breakpoint.xsOnly}">
        <v-row justify="center">
            <span :class="{'display-4': $vuetify.breakpoint.smAndUp, 'display-1': $vuetify.breakpoint.xsOnly}">About Me</span>
        </v-row>
        <v-img
                dark
                src="@/assets/images/profilev2.png"
        />


        <v-sheet class=" pr-10 pl-10 pt-3">

            <v-row justify="center">
                <v-col class="text-center">
            <span :class="{'display-1': $vuetify.breakpoint.smAndUp}">
              I'm Carson, the <span class="font-weight-bold"> people person </span> that finds his zen in <span style="font-family: Courier; color: #bf4800" class="font-weight-bold">code</span>. I am a creative architect of user-inspired solutions. I create teams inspired with autonomy and the intrinsic desire for <span class="font-weight-bold">excellence</span>.
            </span>
                </v-col>
            </v-row>
        </v-sheet>
        <v-sheet
                dark
                color="#001216"
                class="mt-3 pt-3"
        >
            <v-row justify="center" class="pt-4">
          <span :class="{'display-3': $vuetify.breakpoint.smAndUp, 'display-1': $vuetify.breakpoint.xsOnly}">
            Family
          </span>
            </v-row>
            <v-row class="pa-3 pt-4 text-center pl-10 pr-10">
                <v-col>
            <span :class="{'headline': $vuetify.breakpoint.lgAndUp}">
               Few people can say their wife is actually their best friend. I'm lucky to be one of those few. We are a "dog parents," and he keeps us on our toes. We are also very excited to have welcomed our new son Tommy into our family on June 23rd of this year. Family is the most important part of my life, and I love all the members of mine dearly.
            </span>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col >
                    <v-img
                            src="@/assets/images/blackLabv2.png"
                            height="350px"
                            width="350px"
                    />
                </v-col>

            </v-row>


        </v-sheet>

        <v-sheet
                class="mt-3 pt-3"
        >

            <v-img
                    src="@/assets/images/mountainBike.png"
                    class="pt-8"
            />
            <v-row justify="center" class="pt-1">
              <span :class="{'display-3': $vuetify.breakpoint.smAndUp, 'display-1': $vuetify.breakpoint.xsOnly}">
                Mountain Biking /
              </span>
            </v-row>
            <v-row justify="center" class="pt-1">
              <span :class="{'display-3': $vuetify.breakpoint.smAndUp, 'display-1': $vuetify.breakpoint.xsOnly}">
                Cycling
              </span>
            </v-row>
            <v-row class="pa-3 pt-4 text-center pl-10 pr-10">
                <v-col>
                    <span :class="{'headline': $vuetify.breakpoint.lgAndUp}">
                        Ever since high school, I have been an avid bike rider. I have been mountain biking for ten years and have loved the sport. Also, I picked up cycling this year and will be cycling my first 100-mile rance this October.
                    </span>
                </v-col>
            </v-row>
        </v-sheet>

        <v-sheet
                dark
                color="black"
                class="mt-3 "
        >
            <v-img
                    src="@/assets/images/guitar.jpg"

            />
            <v-row justify="center" class="pt-1">
          <span :class="{'display-3': $vuetify.breakpoint.smAndUp, 'display-1': $vuetify.breakpoint.xsOnly}">
            Guitar
          </span>
            </v-row>
            <v-row class="pa-3 pt-4 text-center pl-10 pr-10">
                <v-col>
            <span :class="{'headline': $vuetify.breakpoint.lgAndUp}">
               I have played guitar for close to 15 years. Although recently I don't get to pick it up as often as I'd like, it remains one of my favorite hobbies. I love playing anything from Jack Johnson to Guns and Roses.
            </span>
                </v-col>
            </v-row>
        </v-sheet>
    </v-container>

</template>
