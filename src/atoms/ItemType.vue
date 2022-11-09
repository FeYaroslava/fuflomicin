<template>
  <div>
    <div v-if="type === 1">
      <font-awesome-icon class='fuflomicine' icon="fa-solid fa-pills"/>
    </div>
    <div v-if="type === 2">
      <font-awesome-icon class="homeopathy" icon="fa-solid fa-mortar-pestle"/>
    </div>
    <div v-if="type === 3">
      <font-awesome-icon class="forbid" icon="fa-solid fa-ban"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemType",
  props: ['type']
}
</script>

<style scoped>
.fuflomicine {
  color: #007bff;
}

.homeopathy {
  color: #ffc107;
}

.forbid {
  color: #dc3545;
}

</style>
