<template>
  <div class="mb-12">
    <Parallax></Parallax>
    <v-container :class="{'pa-0': $vuetify.breakpoint.xsOnly}">
      <v-row justify="center">
        <div :key="topic.title" v-for="topic in topics">
          <Topic
                  :icon="topic.icon"
                  :title="topic.title"
                  :text="topic.text"
                  :view-link="topic.viewLink"
          />
        </div>
      </v-row>
    </v-container>
  </div>

</template>

<script>
// @ is an alias to /src
import Parallax from "../components/home/Parallax";
import Topic from "../components/home/Topic";

export default {
  name: 'Home',
  components: {
    Parallax,
    Topic,
  },
  data: () => ({
    topics: [
      {
        icon: "mdi-hail",
        title: "Experience",
        text: "I have managed and developed software projects for almost five years. Find out how my experience could benefit your business.",
        viewLink: "/experience"
      },
      {
        icon: "mdi-school-outline",
        title: "Education",
        text: "I will graduate from Brigham Young University with a Bachelor's of Science in Computers Science in December of 2020.",
        viewLink: ""
      },
      {
        icon: "mdi-account-question-outline",
        title: "About Me",
        text: "I am the people person that finds his zen in code. I am a creative architect of user-inspired solutions. I create teams inspired with autonomy and the intrinsic desire for excellence.",
        viewLink: "/about"
      },
    ]
  }),
  created() {
    let host = window.location.hostname;
    switch(host) {
      case 'apple.cfranklinconsulting.com':
        this.topics.push({
          icon: "mdi-apple",
          title: "Why Apple?",
          text: "It has always been my dream to work at Apple. Find out why.",
          viewLink: "/whyapple"
        });
        break;
      case 'workfront.cfranklinconsulting.com':
        this.navItems.push({
          icon: "mdi-apple",
          title: "Why Workfront?",
          text: "Workfront has always been at the top of my list for companies to work for. Find out why.",
          viewLink: "/whyWorkfront"
        });
        break;
    }
  }
}
</script>
