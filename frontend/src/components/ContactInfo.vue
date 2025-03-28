<template>
   <q-page class="q-pa-md flex flex-center">
    <q-card class="emergency-card">
      <q-card-section>
        <div class="text-h6">Notfallkontakte</div>
      </q-card-section>

      <q-card-section class="contact">
        <div class="text-bold">John Johnson</div>
        <div class="role">Vater</div>
        <div class="phone">+43 660 1234567</div>
        <q-btn round flat icon="call" class="call-button"/>
      </q-card-section>

      <q-card-section class="contact">
        <div class="text-bold">Anna Maria</div>
        <div class="role">Mutter</div>
        <div class="phone">+43 676 9876543</div>
        <q-btn round flat icon="call" class="call-button"/>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.emergency-card {
  width: calc(100% - 32px);
  background-color: rgba(254, 202, 202, 0.2);
  border-radius: 15px;
  padding: 16px;
}

.contact {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(254, 202, 202, 0.5);
  border-radius: 10px;
  padding: 12px;
  margin-top: 10px;
}

.role {
  color: red;
  font-weight: bold;
}

.phone {
  font-size: 16px;
}

.call-button {
  background: rgba(255, 0, 0, 0.17);
  color: red;
}
</style>