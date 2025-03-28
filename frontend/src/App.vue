<script setup>
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import ButtonCalls from '@/components/ButtonCalls.vue';
import Info from '@/components/Info.vue';
import PersonInfo from '@/components/PersonInfo.vue';
import { infos, emergencyNumbers } from './data/data.js';
import MedicalInfo from '@/components/MedicalInfo.vue'; 
import ContactInfo from './components/ContactInfo.vue';
import Update from '@/components/Update.vue'; 

</script>

<template>
  <div class="container">
    <Navbar></Navbar>
    <div class="container-em-calls">
      <ButtonCalls
        v-for="call of emergencyNumbers"
        :key="call.number"
        :number="call.number"
        :service="call.service"
      />
    </div>
  </div>
  <div class="banner-info">
    <Info class="info" :infos="infos.join(' • ')"/>
  </div>
  <div class="person-info">
    <PersonInfo class="person-info"/>
  </div>
  <div class="medical-info">
    <MedicalInfo class="medical-info"/>
  </div>
  <div class="contact-info">
    <ContactInfo class="contact-info"/>
  </div>
  <div>
    <!-- <Update></Update>  -->
    
  </div>
</template>

<style scoped>
.container-em-calls {
  height: 125px;
  width: 100%;
  background-color: white;
  border-radius: 0 0 15px 15px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}

.banner-info{
  display: flex;
  justify-content: center;
  transform: translateY(-13px);
}

.medical-info, .person-info, .contact-info{
  display: flex;
  justify-content: center;
}

</style>
