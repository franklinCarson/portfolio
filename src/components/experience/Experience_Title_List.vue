<template>
    <v-sheet style="background-color: #0D0D10; padding-top: 3em !important;"
             class="pa-12">
        <Experience_Job_Section :key="job.title"
                                v-for="job in jobs"
                                :title="job.title"
                                :sub-title="job.subTitle"
                                :paragraphs="job.paragraphs"
                                class="mb-8"/>
    </v-sheet>
</template>

<script>
    import Experience_Job_Section from "./Experience_Job_Section";
    export default {
        name: "Experience_Title_List",
        components: {Experience_Job_Section},
        data: () => ({
            jobs: [
                {
                    title: 'Software Department Head',
                    subTitle: 'Legal Tender Services: Alpine, UT — 2016 - Present',
                    paragraphs: [
                        'At Legal Tender Services, I was responsible for leading a team to develop custom accounting software for a unique financial institution. The software consisted of two main applications, a member-facing application, and an administrative application. Working together, the two apps were responsible for managing all the assets and accounts on the platform.',
                        'As the leader of my team, I implemented an agile development process, enabling us to respond quickly to evolving business needs. Also, I created training programs allowing the business to hire untrained software developers.',
                        'In addition to managing the team, I was the lead developer on the project. I was responsible for several parts of the development process, such as: architecting the applications, designing the data model, writing most of the RESTful API, implementing large portions of the frontend application, and designing the deployment process of the software to AWS.',
                    ]
                },
                {
                    title: 'Account Executive',
                    subTitle: 'Legal Tender Services: Alpine, UT — 2015 - 2016',
                    paragraphs: [
                        'In this position, I motivated the membership to use our services, handled customer concerns, and provided timely answers to questions. I also had the opportunity to present at multiple conferences.',
                    ]
                },
                {
                    title: 'Non-work Related Projects',
                    subTitle: '',
                    paragraphs: [
                        'I organized a group of peers to develop an application to manage a person’s pantry items. I was responsible for modeling the data, writing a significant part of the Node Express API, and writing a native IOS frontend in SwiftUI. Additionally, I was the Scrum Master for the project.',
                    ]
                }
            ]
        })
    }
</script>

<style scoped>

</style>