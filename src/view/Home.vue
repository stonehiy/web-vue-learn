<!--  -->
<template>
  <div>
    <users v-bind:users="userList" @changeTitle="updateTitle($event)"></users>
    <life></life>

    <button @click="goSlotPage()">跳转slot页面</button>
  </div>
</template>

<script>
import Users from "./Users"
import Life from "./Life"

export default {
  name: "Home",

  components: {
    Users,
    Life,
  },

  data() {
    return {
      userList: [
        { name: "lisi" },
        { name: "zhangsan" },
        { name: "wangwu" },
        { name: "wangwu1" }
      ]
    };
  },

  computed: {},

  methods: {
    updateTitle(title) {
      console.log(title);
    },
    /*跳转Slot页面 */
    goSlotPage(){
      this.$router.push({name:'SlotView'})

    }
  }
};
</script>
<style lang="css" scoped></style>
