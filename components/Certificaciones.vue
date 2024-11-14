<template>
  <div id="certificaciones" class="Certificaciones">
    <h1>
      <strong>{{ $t('certificaciones.nacional') }}</strong>
    </h1>

    <div style="height: 60px;" />

    <div class="Certificaciones--Group ed-container">
      <certificacion-item
        :image="{ img: '/BPL-PNG.webp', alt: 'BPL' }"
        :width="104"
        :height="105"
        :primary-text="$t('certificaciones.bpl')"
        grid="m-30"
      />

      <certificacion-item
        :image="{ img: '/logo_bpm-104x104.webp', alt: 'BPM' }"
        :width="104"
        :height="104"
        :primary-text="$t('certificaciones.bpm_1')"
        grid="m-30"
      />

      <certificacion-item
        :image="{ img: '/BPA-104x104.webp', alt: 'BPA' }"
        :width="104"
        :height="104"
        :primary-text="$t('certificaciones.bpa_1')"
        grid="m-30"
      />

      <!--<certificacion-item
        :image="{ img: '/iso9001-104x105.webp', alt: 'ISO9001' }"
        :width="104"
        :height="105"
        :primary-text="$t('certificaciones.iso_1')"
        :secondary-text="$t('certificaciones.iso_2')"
        :alternative-text="$t('certificaciones.iso_3')"
        :third-text="$t('certificaciones.iso_4')"
        grid="m-30"
      />-->

      <!--<certificacion-item
        :image="{ img: '/iso1348-104x104.webp', alt: 'ISO-13485' }"
        :width="104"
        :height="104"
        :primary-text="$t('certificaciones.iso13485_1')"
        :secondary-text="$t('certificaciones.iso13485_2')"
        :alternative-text="$t('certificaciones.iso_3')"
        :third-text="$t('certificaciones.iso_4')"
        grid="m-30"
      />-->
    </div>

    <div>
      <politicas-button />
    </div>

    <div style="height: 60px;" />

    <h1>
      <strong>{{ $t('certificaciones.internacional') }}</strong>
    </h1>

    <div style="height: 60px;" />

    <div class="Certificaciones--Group ed-container">
      <certificacion-item
        :image="{ img: '/fda-blanco-e1491223863739.webp', alt: 'FDA' }"
        :width="192"
        :height="104"
        :primary-text="$t('certificaciones.fda_1')"
        grid="m-30"
      />

      <certificacion-item
        :image="{ img: '/logo_bpm-104x104.webp', alt: 'BPM' }"
        :width="104"
        :height="104"
        :primary-text="$t('certificaciones.bpm1_1')"
        grid="m-30"
      />

      <certificacion-item
        :image="{ img: '/CE-1-e1491223740315.webp', alt: 'CCE' }"
        :width="145"
        :height="104"
        :primary-text="$t('certificaciones.cce_1')"
        grid="m-30"
      />
    </div>

    <div class="Certificaciones--Group ed-container">
      <certificacion-item
        :image="{ img: '/iso9001-104x105.webp', alt: 'ISO9001' }"
        :width="104"
        :height="105"
        :primary-text="$t('certificaciones.iso1_1')"
        secondary-text="ISO-9001"
        grid="m-30"
      />

      <certificacion-item
        :image="{ img: '/iso1348-104x104.webp', alt: 'ISO-13485' }"
        :width="104"
        :height="104"
        :primary-text="$t('certificaciones.iso13485_1')"
        :secondary-text="$t('certificaciones.iso13485_2')"
        grid="m-30"
      />
    </div>
  </div>
</template>

<script>
import CertificacionItem from './CertificacionItem.vue'
import PoliticasButton from './PoliticasButton.vue'

export default {
  name: 'Certificaciones',

  components: { CertificacionItem, PoliticasButton },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
.Certificaciones {
  padding-top: 60px;
  padding-bottom: 10px;
  background-image: url('/forradasazul.webp') !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  font-family: 'Open Sans', sans-serif;

  h1 {
    text-align: center;
    color: #ffffff;
    font-size: 32px;
    margin: 0;
  }

  p {
    margin: 0;
  }

  &--Item {
    text-align: center;
    padding: 0 15px;
    margin-bottom: 40px;
  }

  &--Group {
    justify-content: center;
  }
}
</style>
