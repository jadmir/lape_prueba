<template>
  <div class="ed-container ProductoDetail">
    <div style="text-align: center;" class="ed-item">
      <img
        class="ProductoDetail--Image"
        src="/caja-arreglada-adhetel.webp"
        alt="Adhetel"
      />
    </div>

    <div class="ed-item">
      <p class="ProductoDetail--Description">{{ $t('adhetel.t1') }}</p>
    </div>

    <div class="Section ed-item">
      <h6>
        <strong>{{ $t('medidas') }}</strong>
      </h6>

      <ul>
        <li>1/2” x 5yd</li>
        <li>1” x 5yd</li>
        <li>2” x 5yd</li>
        <li>3” x 5yd</li>
        <li>4” x 5yd</li>
        <li>1/2” x 10yd</li>
        <li>1” x 10yd</li>
        <li>2” x 10yd</li>
        <li>3” x 10yd</li>
        <li>4” x 10yd</li>
      </ul>
    </div>

    <div class="Section ed-item">
      <h6>
        <strong>{{ $t('certificacion') }}</strong>
      </h6>

      <ul>
        <li>{{ $t('c1') }}</li>
        <li>{{ $t('c2') }}</li>
        <li>{{ $t('c3') }}</li>
        <li>{{ $t('c4') }}</li>
      </ul>
    </div>

    <div class="Certificaciones">
      <div class="Certificaciones--Group ed-container">
        <div class="LogoCertificado">
          <img style="width: 80px;" src="/iso9001-104x105.webp" alt="ISO9001" />
        </div>

        <div class="LogoCertificado">
          <img style="width: 80px;" src="/BPA-104x104.webp" alt="BPA" />
        </div>

        <div class="LogoCertificado">
          <img style="width: 80px;" src="/logo_bpm-104x104.webp" alt="BPM" />
        </div>

        <div class="LogoCertificado">
          <img
            style="width: 80px;"
            src="/iso1348-104x104.webp"
            alt="ISO-13485"
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
          src="/Also-medica-sac-logo-300x85.webp"
          alt="LOGO-ALSO"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Optimacast',

  head() {
    return {
      title: 'Adhetel',
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
