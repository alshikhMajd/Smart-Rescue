<template>
  <q-card class="container q-px-md q-py-sm q-my-md column" style="max-width: 400px">
    <q-card-section>
      <div class="title">Medizinische Daten</div>
    </q-card-section>

    <q-card-section class="q-pt-xs">
      <div style="color: #596270; font-size: 16px">Medizinische Erkrankungen</div>
      <div class="q-mt-sm">
        <q-chip
          label="Diabetes Typ 1"
          :style="{
            'background-color': '#FBC8C8',
            color: '#680C14',
            'font-size': '16px',
          }"
          class="q-mr-sm"
        />
        <q-chip
          label="Bluthochdruck"
          :style="{
            'background-color': '#FBC8C8',
            color: '#680C14',
            'font-size': '16px',
          }"
        />
      </div>
    </q-card-section>

    <q-card-section class="q-pt-xs">
      <div style="color: #596270; font-size: 16px">Allergien</div>
      <div class="q-mt-sm">
        <q-chip
          label="Pencillin"
          :style="{
            'background-color': '#F4A8A8',
            color: '#250407',
            'font-size': '16px',
          }"
          class="q-mr-sm"
        />
        <q-chip
          label="Erdnüsse"
          :style="{
            'background-color': '#F4A8A8',
            color: '#250407',
            'font-size': '16px',
          }"
        />
      </div>
    </q-card-section>

    <q-card-section class="q-pt-xs" style="max-width: 400px">
 
      <div style="color: #596270; font-size: 16px;">Aktuelle Medikamente</div>

 
      <div class="q-mt-sm">
        <q-chip
          label="Insulin (NovoRapid) | 3x täglich"
          style="background-color: #e53935; color: #fff; border-radius: 12px;"
          class="q-mb-sm"
        />
        <q-chip
          label="Metformin | 3x täglich"
          style="background-color: #e53935; color: #fff; border-radius: 12px;"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  width: calc(100% - 32px);
  border-radius: 15px;
}
.title {
  font-size: 18px;
}
</style>
