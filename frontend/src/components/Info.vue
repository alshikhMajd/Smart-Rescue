<template>
  <div class="container">
    <q-banner class="info">
      <div class="box">
        <div class="row items-center q-mb-sm">
          <q-icon name="warning" class="icon q-mr-xs" size="25px"></q-icon>
          <span class="text-information">Wichtige Information</span>
        </div>

        <div>
          <span v-text="infos" class="information"></span>
        </div>
      </div>
    </q-banner>
  </div>
</template>

<script setup>
const props = defineProps({
  infos: String,
});
</script>

<style lang="scss" scoped>
.info {
  background-color: #fef2f2;
  width: 362px;
  height: 99px;

  display: flex;
  align-items: center;

  border-radius: 15px;
  box-shadow: none;
  box-shadow: inset 0 0 0 2px #d32f2f;
  animation: pulse-broder 2s infinite alternate;
}
.icon {
  color: #ff3535;
}
.text-information {
  color: #bd2727;
  font-size: 16px;
  font-weight: bold;
}
.information {
  color: #dc2626;
  font-size: 14px;
}
.box{
  padding-left: 8px;
}

@keyframes pulse-broder{
  0%{
    box-shadow: inset 0 0 0 2px #d32f2f;
  }
  50%{
    box-shadow: inset 0 0 0 2px #fef2f2;
  }
  100%{
    box-shadow: inset 0 0 0 2px #d32f2f;
  }
}
</style>
