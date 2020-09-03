<template>
  <v-container>
    <Introduction resume="true"/>
    <h1>Resume</h1>
    <Work />
    <Volunteer />
    <Education/>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Introduction from "@/components/about/Introduction";
import Work from "@/components/resume/Work";
import Volunteer from "@/components/resume/Volunteer";
import Education from "@/components/resume/Education";

export default {
  name: "Resume",
  components: {
    Introduction,
    Work,
    Volunteer,
    Education
  },
};
</script>
