<template>
  <div class="mb-12">
    <Parallax></Parallax>
    <v-container :class="{'pa-0': $vuetify.breakpoint.xsOnly}">
      <div :key="topic.title" v-for="topic in topics">
        <Topic
                :icon="topic.icon"
                :title="topic.title"
                :text="topic.text"
                :view-link="topic.viewLink"
                />
      </div>
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
        icon: "mdi-account-question-outline",
        title: "About Me",
        text: "I'm Carson, the people person that finds his zen in code. I architect creative, user inspired solutions. I create teams inspired with autonomy and the intrinsic desire for excellence.",
        viewLink: "/about"
      },
      {
        icon: "mdi-hail",
        title: "Experience",
        text: "I have had the amazing opportunity of being able to manage a small development team for the last four years. It has been my pleasure to work along side some of the most creative and hard working people.",
        viewLink: "/experience"
      },
      {
        icon: "mdi-math-compass",
        title: "Skills",
        text: "Through the course of work and my education I have had the opportunity to learn several technical languages and skills.",
        viewLink: "/skills"
      },
      {
        icon: "mdi-school-outline",
        title: "Education",
        text: "I will graduate from Brigham Young University with a Bachelor's of Science in Computers Science in December of 2020.",
        viewLink: "/education"
      },
    ]
  }),
}
</script>
