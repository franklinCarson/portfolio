<template>
    <div>
        <v-row justify="center" class="pt-10">
            <span :class="{'display-4': $vuetify.breakpoint.smAndUp, 'display-1': $vuetify.breakpoint.xsOnly}">
                Skills
            </span>
        </v-row>
        <v-row justify="center" class="pr-10 pl-10" >
            <v-col class="text-center">
            <span :class="{'display-1': $vuetify.breakpoint.smAndUp}">
              Through the course of work and my education I have had the opportunity to learn several technical languages and skills.
            </span>
            </v-col>
        </v-row>
        <div :key="skill.title" v-for="skill in skills">
            <SkillSheet :icon="skill.icon" :title="skill.title" :text="skill.text"/>
        </div>
    </div>
</template>

<script>
    import SkillSheet from "../components/SkillSheet";
    export default {
        name: "Skills",
        components: {SkillSheet},
        data: () => ({
            skills: [
                {
                    icon: "fab fa-java",
                    title: "Java",
                    text: "Java is probably my favorite backend language. I have had the chance to write several API's in it. I love organising large application into a layered architecture using the language's features."
                },
                {
                    icon: "fab fa-js-square",
                    title: "Javascript",
                    text: "Javascript is so popular these days, that I've had the opportunity to use this language both on the font end and the back end of applications."
                },
                {
                    icon: "fab fa-vuejs",
                    title: "Vue.js",
                    text: "When Vue was just getting popular in 2016, my team and I were completely redoing the front end of one of our web apps. We were able to implement the new interface in vue. I have come to love the frame work and it's elegant solutions to much of web developments issues."
                },
                {
                    icon: "fab fa-python",
                    title: "Python",
                    text: "Python is a relatively new language for me. I hadn't had the chance to use it until this year. However I've loved what I've seen."
                },
                {
                    icon: "fab fa-php",
                    title: " ",
                    text: "I am uniquely adept at PHP. It is a language I have spent a lot of time with, because one of the API's I worked on was implemented in the language. It may have, historically, a bad reputation, but I came to appreciate the language in many ways."
                },
                {
                    icon: "fas fa-database",
                    title: "SQL & DB Design",
                    text: "When designing an application, I have had the opportunity to be involved in every process of the app development, including the database design. I had the great experience of designing from scratch an efficient accounting database run on PostgreSQL."
                },
                {
                    icon: "fab fa-aws",
                    title: "",
                    text: "During my experience with work and school I've frequently used services from AWS. I am familiar with many of their products including OpsWorks, RDS, S3, Route53, EC2, Lambda, and Dynamo DB."
                },
            ]
        })
    }
</script>

<style scoped>

</style>