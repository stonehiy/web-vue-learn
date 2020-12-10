<!--  -->
<template>
  <div>
    <ul>
      <li v-for="(user, index) in users" v-bind:key="index">
        {{ user.name }} {{ index }}
      </li>
    </ul>
    <button @click="changeTitle()">事件传值（子传父）</button>
  </div>
</template>

<script>
export default {
  name: "Users",
  props: {
    users: {
      type: Array,
      require: true
    }
  },

  data() {
    return {
      //users: []
    };
  },

  components: {},

  computed: {},

  methods: {
    changeTitle() {
      this.$emit("changeTitle", "子传父1111111");
    }
  }
};
</script>
<style lang="css" scoped></style>
