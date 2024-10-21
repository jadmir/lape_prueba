<template>
  <div class="ed-container ProductoDetail">
    <div style="text-align: center;" class="ed-item">
      <img class="ProductoDetail--Image" src="/toallas.webp" alt="Masctel" />
    </div>

    <div class="ed-item">
      <p class="ProductoDetail--Description">
        {{ $t('cleanseat.t1') }}
        {{ $t('cleanseat.t2') }}
        {{ $t('cleanseat.t3') }}
        {{ $t('cleanseat.t4') }}
      </p>
    </div>

    <div class="Section ed-item">
      <h6>
        <strong>{{ $t('precauciones') }}</strong>
      </h6>

      <ul>
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
      </ul>
    </div>

    <div style="margin: 15px auto;" class="ed-item">
      <h6>
        <strong>{{ $t('importado') }}</strong>
      </h6>

      <div style="text-align: center;">
        <img
          style="width: 150px;"
          src="/Also-medica-sac-logo-300x85.webp"
          alt="LOGO-ALSO"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import CertificacionItem from '@/components/CertificacionItem.vue'
export default {
  name: 'Masctel',

  // components: { CertificacionItem },

  head() {
    return {
      title: 'Masctel',
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
