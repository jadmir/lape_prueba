<template>
  <div class="ed-container Marcas">
    <div class="ed-item m-50 Marcas--Image">
      <figure>
        <div>
          <img src="/maquinas.webp" alt="maquinas" />
        </div>
      </figure>
    </div>

    <div class="ed-item m-50 ed-container">
      <h1 class="ed-item Title">
        <strong>{{ $t('producto.lape_marcas') }}</strong>
      </h1>

      <div class="ed-item ed-container Items">
        <marca img="/marcas-lape/galeno.webp" alt="Galeno" />

        <marca img="/marcas-lape/yestel.webp" alt="Yestel" />

        <marca img="/marcas-lape/alvend-plus.webp" alt="Alvend" />

        <marca img="/marcas-lape/gastel.webp" alt="Gastel" />

        <marca img="/marcas-lape/medibelt.webp" alt="Medibelt" />

        <marca img="/marcas-lape/optimacast.webp" alt="Optimacast" />

        <marca img="/marcas-lape/beesure2.webp" alt="BEESURE FIT LATEX" />
      </div>

      <h1 class="ed-item Title">
        <strong>{{ $t('producto.also_marcas') }}</strong>
      </h1>

      <div class="ed-item ed-container Items">
        <!--<marca img="/marcas-also/glovex-polvo.webp" alt="Glovex Con Polvo" />-->
        <marca img="/marcas-also/shoe-covers.webp" alt="Shoe Covers" />
        <marca img="/marcas-also/gastel-plus.webp" alt="Gastel Plus" />
        <marca img="/marcas-also/guantex.webp" alt="Guantex" />
        <!--<marca img="/marcas-also/david.webp" alt="David" />-->
        <marca
          img="/marcas-also/glovex-examen.webp"
          alt="GUANTEX -GUANTES DE LATEX PARA EXAMEN "
        />
        <marca img="/marcas-also/uritel.webp" alt="Uritel" />
        <marca img="/marcas-also/captel.webp" alt="Captel" />
        <marca img="/marcas-also/venoset.webp" alt="Venoset" />
        <marca img="/marcas-also/masctel.webp" alt="Masctel" />
        <marca img="/marcas-also/clean-seat.webp" alt="Clean Seat" />
      </div>

      <!-- <div class="ed-item" style="border: 1px solid red; margin-bottom: 15px"></div> -->
    </div>
  </div>
</template>

<script>
import Marca from './Marca.vue'
export default {
  name: 'Marcas',
  components: { Marca },
}
</script>

<style lang="scss" scoped>
.Marcas {
  &--Image {
    justify-content: center;
    align-items: center;
    display: flex;
  }
}
.Title {
  text-align: center;
  font-size: 28px;
  color: #2e3f85;
  margin: 25px auto;
}

.Items {
  justify-content: center;
  align-items: center;
}
</style>
