<template>
  <q-card class="container q-px-md q-py-md column" style="max-width: 400px">
    <q-card-section class="section-container">
      <div class="row no-wrap">
        <div class="avatar-border">
          <q-avatar size="71px">
            <img src="../data/Screenshot_2024-09-24_132802.png" alt="Avatar" />
          </q-avatar>
        </div>

        <div class="q-ml-lg column" style="line-height: 1.2">
          <div class="name">Max Mustermann</div>

          <div class="date">DOB: 05/12/2000</div>

          <div>
            <q-chip color="pink-1" style="color: #680c14"> 25 Jahre </q-chip>
          </div>
        </div>
      </div>
    </q-card-section>

    <q-card-section>
      <div class="row q-col-gutter-md q-mb-md">
        <div class="col-6">
          <div class="info-box">
            <div class="title">Blutgruppe</div>
            <div class="value">A+</div>
          </div>
        </div>

        <div class="col-6">
          <div class="info-box">
            <div class="title">Gewicht</div>
            <div class="value">70 kg</div>
          </div>
        </div>
      </div>

      <div class="row q-col-gutter-md">
        <!-- Größe -->
        <div class="col-6">
          <div class="info-box">
            <div class="title">Größe</div>
            <div class="value">183 cm</div>
          </div>
        </div>

        <div class="col-6">
          <div class="info-box">
            <div class="title">Geschlecht</div>
            <div class="value">Männlich</div>
          </div>
        </div>
      </div>

      <div class="row q-col-gutter-md q-mt-xs">
        <div class="col-12">
          <div class="info-box row items-center no-wrap">
            <div class="col">
              <div class="title">Wohnadresse</div>
              <div class="value-special">
                Hauptstr. 15, Stg. 3, Tür 12,<br />
                1010 Wien, Österreich
              </div>
            </div>

            <div class="col-auto">
              <q-icon name="pin_drop" size="40px" class="icon" />
            </div>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup></script>

<style lang="scss" scoped>
.info-box {
  background-color: #ffe1e1;
  border-radius: 15px;
  padding: 12px;
}

.container {
  width: calc(100% - 32px);
  border-radius: 15px;
}

.person-card {
  box-shadow: none;
  width: 100%;
}

.name {
  font-size: 18px;
  font-weight: normal;
}
.date {
  font-size: 16px;
  color: #959595;
  font-weight: normal;
}
.title {
  font-size: 14px;
  color: #596270;
  font-weight: normal;
}
.value {
  font-size: 18px;
  color: #680c14;
  font-weight: bold;
}
.value-special {
  font-size: 16px;
  color: #680c14;
  font-weight: bold;
}

.icon {
  display: inline-block;
  background: linear-gradient(90deg, rgba(204, 0, 0, 1) 0%, rgba(136, 0, 0, 1) 100%);

  /* Wichtig: Clip den Hintergrund auf den Text */
  -webkit-background-clip: text;
  background-clip: text;

  /* Der Text selbst wird transparent, damit nur der Hintergrundverlauf sichtbar ist */
  -webkit-text-fill-color: transparent;
  color: transparent;
}
</style>
