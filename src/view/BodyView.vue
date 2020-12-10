<!--  -->
<template>
  <div>{{ name }}</div>
</template>

<script>
export default {
  name: "BodyView",

  components: {},

  data() {
    return {
      name: ""
    };
  },

  computed: {},

  methods: {},

  created() {
    let params = this.$route.params;
    console.log(params);
    this.name = params.tab;
  }
};
</script>
<style lang="css" scoped></style>
