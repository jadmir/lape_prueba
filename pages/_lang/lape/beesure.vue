<template>
  <div class="ed-container ProductoDetail">
    <div style="text-align: center;" class="ed-item">
      <img
        class="ProductoDetail--Image"
        src="/BeeSure-guantes.webp"
        alt="Beesure"
      />
    </div>

    <div class="ed-item">
      <p class="ProductoDetail--Description">{{ $t('beesure.t1') }}</p>
    </div>

    <div class="Section ed-item">
      <h6>
        <strong>{{ $t('medidas') }}</strong>
      </h6>

      <ul>
        <li>XS</li>
        <li>S</li>
        <li>M</li>
        <li>L</li>
      </ul>
    </div>

    <div class="Section ed-item">
      <h6>
        <strong>{{ $t('precauciones') }}</strong>
      </h6>

      <ul>
        <li>{{ $t('p1') }}</li>
        <li>{{ $t('p2') }}</li>
        <li>{{ $t('p3') }}</li>
        <li>{{ $t('p4') }}</li>
      </ul>
    </div>

    <div class="Section ed-item">
      <h6>
        <strong>{{ $t('almacenamiento') }}</strong>
      </h6>

      <ul>
        <li>{{ $t('a2') }}</li>
        <li>{{ $t('a3') }}</li>
        <li>{{ $t('a4') }}</li>
        <li>{{ $t('a7') }}</li>
      </ul>
    </div>

    <div class="Section ed-item">
      <h6>
        <strong>{{ $t('certificacion') }}</strong>
      </h6>

      <ul>
        <li>{{ $t('c2') }}</li>
        <li>{{ $t('c3') }}</li>
        <li>{{ $t('c4') }}</li>
        <li>{{ $t('c6') }}</li>
        <li>{{ $t('c5') }}</li>
      </ul>
    </div>

    <div class="Certificaciones">
      <div class="Certificaciones--Group ed-container">
        <div class="LogoCertificado">
          <img style="width: 80px;" src="/BPA-104x104.webp" alt="BPA" />
        </div>

        <div class="LogoCertificado">
          <img
            style="width: 80px;"
            src="/iso1348-104x104.webp"
            alt="ISO-13485"
          />
        </div>

        <div class="LogoCertificado">
          <img style="width: 80px;" src="/iso9001-104x105.webp" alt="ISO9001" />
        </div>

        <div class="LogoCertificado">
          <img style="width: 80px;" src="/CE-1-e1491223740315.webp" alt="CCE" />
        </div>

        <div class="LogoCertificado">
          <img
            style="width: 80px;"
            src="/fda-blanco-e1491223863739.webp"
            alt="FDA"
          />
        </div>
      </div>
    </div>

    <div style="margin: 15px auto;" class="ed-item">
      <h6>
        <strong>{{ $t('importado') }}</strong>
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
  name: 'Beesure',

  // components: { CertificacionItem },

  head() {
    return {
      title: 'Beesure',
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
