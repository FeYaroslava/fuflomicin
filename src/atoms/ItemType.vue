<template>
  <div>
    <div v-if="type === 1">
      <IconFuflo/>
    </div>
    <div v-if="type === 2">
      <IconHomeopathy/>
    </div>
    <div v-if="type === 3">
      <IconForbid/>
    </div>
  </div>
</template>

<script>
import IconForbid from "./icons/IconForbid";
import IconFuflo from "./icons/IconFuflo";
import IconHomeopathy from "./icons/IconHomeopathy";
export default {
  name: "ItemType",
  props: ['type'],
  components: {
    IconForbid,
    IconFuflo,
    IconHomeopathy
  }
}
</script>

<style scoped>

</style>
