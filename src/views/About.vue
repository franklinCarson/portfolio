<template>
  <v-container :class="{'pa-0': $vuetify.breakpoint.xsOnly}">
    <v-img
            dark
            src="@/assets/images/profileMobilev2.png"

    >
      <v-overlay
              absolute
              color="black"
      >
        <v-row justify="center">
          <span :class="{'display-4': $vuetify.breakpoint.smAndUp, 'display-1': $vuetify.breakpoint.xsOnly}">About Me</span>
        </v-row>

        <v-row justify="center" class="pr-10 pl-10" >
          <v-col class="text-center">
            <span :class="{'display-1': $vuetify.breakpoint.smAndUp}">
              I'm Carson, the people person that finds his zen in code. I architect creative, user inspired solutions. I create teams inspired with autonomy and the intrinsic desire for excellence.
            </span>
          </v-col>
        </v-row>
      </v-overlay>
    </v-img>
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
               Few people can say their wife actually is their best fried. I'm lucky to be one of the few. We are a "dog parents", and he keeps us on our toes. Also very exciting, we are expecting! So, I guess we are also soon to be "human parents?" Either way, family is the most important thing in my life and I love all the members of mine dearly.
            </span>
        </v-col>
      </v-row>
      <v-img
        src="@/assets/images/blackLabv2.jpg"

        >

      </v-img>
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
            Mountain Biking
          </span>
      </v-row>
      <v-row class="pa-3 pt-4 text-center pl-10 pr-10">
        <v-col>
            <span :class="{'headline': $vuetify.breakpoint.lgAndUp}">
               Few people can say their wife actually is their best fried. I'm lucky to be one of the few. We are a "dog parents", and he keeps us on our toes. Also very exciting, we are expecting! So, I guess we are also soon to be "human parents?" Either way, family is the most important thing in my life and I love all the members of mine dearly.
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
               Few people can say their wife actually is their best fried. I'm lucky to be one of the few. We are a "dog parents", and he keeps us on our toes. Also very exciting, we are expecting! So, I guess we are also soon to be "human parents?" Either way, family is the most important thing in my life and I love all the members of mine dearly.
            </span>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>

</template>
