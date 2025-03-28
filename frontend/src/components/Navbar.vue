<template>
  <div>
    <q-iconate>
      <div>
        <q-toolbar class="text-white bar">
          <q-icon name="emergency" size="40px" />

          <q-toolbar-title class="text-bold text-h6 title">EmergencyCard</q-toolbar-title>

          <q-btn class="switch-button"><q-icon name="nightlight" class="switch"></q-icon></q-btn>
        </q-toolbar>
      </div>
    </q-iconate>
  </div>
</template>

<script setup>

</script>

<style scoped>

.bar {
  height: 52px;
  width: 100%;
  background: linear-gradient(90deg, rgba(211,47,47,1) 0%, rgba(255,179,179,1) 100%);
}
.title {
  padding-left: 1rem;
}
.switch-button {
  border-radius: 100%;
  background-color: white;
  opacity: 80%;
  width: 35px;
  height: 35px;
}
.switch {
  color: #FF0000;
  size: 19px;
}

</style>
