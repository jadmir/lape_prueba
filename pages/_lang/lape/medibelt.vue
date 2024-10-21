<template>
  <div class="ed-container ProductoDetail">
    <div style="text-align: center;" class="ed-item">
      <img
        class="ProductoDetail--Image"
        src="/MediBelt-fajas-Lape.webp"
        alt="Optimacast"
      />
    </div>

    <div class="ed-item">
      <p class="ProductoDetail--Description">{{ $t('medibelt.t1') }}</p>
    </div>

    <div class="Section ed-item">
      <h6>
        <strong>{{ $t('medidas') }}</strong>
      </h6>

      <ul>
        <li>S</li>
        <li>M</li>
        <li>L</li>
        <li>XL</li>
      </ul>
    </div>

    <div style="margin: 15px auto;" class="ed-item">
      <h6>
        <strong>{{ $t('fabricado') }}</strong>
      </h6>

      <div style="text-align: center;">
        <img
          style="width: 150px;"
          src="/LAPE-dispositivos-medicos-300x143.webp"
          alt="LOGO-LAPE"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import CertificacionItem from '@/components/CertificacionItem.vue'
export default {
  name: 'Medibelt',

  // components: { CertificacionItem },

  head() {
    return {
      title: 'Medibelt',
    }
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

.ProductoDetail {
  font-family: 'Open Sans', sans-serif;
  font-size: 0.8em;
  transform: translateY(100px);
  padding: 0;

  &--Image {
    max-width: 70%;
  }

  &--Description {
    font-size: 0.95em;
    padding: 0.5em;
    margin: 0;
    letter-spacing: 0.1em;
    text-align: justify;
  }
}

ul {
  li {
    list-style: none;
    margin: 5px auto;
  }
}

.Certificaciones {
  background-image: url('/forradasazul.webp') !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  font-family: 'Open Sans', sans-serif;
  width: 100vw;
  padding: 10px;

  &--Item {
    text-align: center;
    padding: 0 15px;
    margin-bottom: 40px;
  }

  &--Group {
    justify-content: center;
  }
}

.LogoCertificado {
  margin: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Section {
  margin: 5px 10px;
  font-size: 0.9em;
}
</style>
