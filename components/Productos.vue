<template>
  <div id="productos" class="Productos ed-container">
    <div class="ed-item">
      <h1
        style="
          text-align: center;
          color: #2e3f85;
          line-height: 0.8;
          margin-bottom: 35px;
        "
      >
        <strong>
          <span style="font-size: 30px;">{{ $t('producto.our') }}</span>
        </strong>
      </h1>
    </div>

    <!-- <div class="ed-item" style="text-align: center;">
			<cotizacion-button />
    </div>-->

    <h1
      class="ed-item"
      style="text-align: center; color: #2e3f85; font-size: 28px;"
    >
      <strong>{{ $t('producto.lape') }}</strong>
    </h1>

    <div class="ed-item ed-container" style="justify-content: center;">
      <producto-item
        :image="{ img: '/Optimacast.webp', alt: 'OPTIMACAST – Vendajes' }"
        :title="$t('optimacast.title')"
        link="lape/optimacast"
      />
      <!-- @click.native="detail('lape/optimacast')" -->

      <producto-item
        :image="{
          img: '/Alvend-algodon-en-vendas-Lape.webp',
          alt: 'ALVEND – Vendas de Algodón',
        }"
        :title="$t('alvend.title')"
        link="lape/alvend"
      />
      <!-- @click.native="detail('lape/alvend')" -->

      <producto-item
        :image="{
          img: '/MediBelt-fajas-Lape.webp',
          alt: 'MEDIBELT – Fajas Post Operatoria y Abdominal',
        }"
        :title="$t('medibelt.title')"
        link="lape/medibelt"
      />
      <!-- @click.native="detail('lape/medibelt')" -->

      <producto-item
        :image="{
          img: '/Yestel-vendadeyeso-Lape.webp',
          alt: 'YESTEL – Vendas de Yeso',
        }"
        :title="$t('yestel.title')"
        link="lape/yestel"
      />
      <!-- @click.native="detail('lape/yestel')" -->

      <producto-item
        :image="{
          img: '/Galeno-vendaselasticas-Lape.webp',
          alt: 'GALENO – Vendas Elásticas',
        }"
        :title="$t('galeno.title')"
        link="lape/galeno"
      />
      <!-- @click.native="detail('lape/galeno')" -->

      <producto-item
        :image="{
          img: '/Gastel-gasa-fraccionada-Lape-png.webp',
          alt: 'GASTEL – Gasa Fraccionada',
        }"
        :title="$t('gastel.title')"
        link="lape/gastel"
      />
      <!-- @click.native="detail('lape/gastel')" -->

      <producto-item
        :image="{
          img: '/BeeSure-guantes.webp',
          alt: 'BEESURE – Guantes de Examen',
        }"
        :title="$t('beesure.title')"
        link="lape/beesure"
      />
      <!-- @click.native="detail('lape/beesure')" -->
    </div>

    <h1
      class="ed-item"
      style="text-align: center; color: #2e3f85; font-size: 28px;"
    >
      <strong>{{ $t('producto.also') }}</strong>
    </h1>

    <div class="ed-item ed-container" style="justify-content: center;">
      <producto-item
        :image="{
          img: '/Transtel-transfusion-de-sangre-Also.webp',
          alt: 'TRANSTEL – Transfusión de Sangre',
        }"
        :title="$t('transtel.title')"
        link="also/transtel"
      />
      <!-- @click.native="detail('also/transtel')" -->

      <!-- <producto-item
        :image="{
          img: '/caja-arreglada-adhetel.webp',
          alt: 'ADHETEL – Cinta Médica, Hipoalergénica',
        }"
        :title="$t('adhetel.title')"
        link="also/adhetel"
      />-->
      <!-- @click.native="detail('also/adhetel')" -->

      <producto-item
        :image="{
          img: '/Uritel-bolsa-de-orina-Also.webp',
          alt: 'URITEL – Bolsa de Orina Descartable',
        }"
        :title="$t('uritel.title')"
        link="also/uritel"
      />
      <!-- @click.native="detail('also/uritel')" -->

      <producto-item
        :image="{ img: '/captel.webp', alt: 'CAPTEL – Gorros Descartables' }"
        :title="$t('captel.title')"
        link="also/captel"
      />
      <!-- @click.native="detail('also/captel')" -->

      <producto-item
        :image="{
          img: '/toallas.webp',
          alt: 'CLEAN SEAT – Protectores Desechables Para Inodoro',
        }"
        :title="$t('cleanseat.title')"
        link="also/cleanseat"
      />
      <!-- @click.native="detail('also/cleanseat')" -->

      <producto-item
        :image="{ img: '/masctel.webp', alt: 'Masctel' }"
        :title="$t('masctel.title')"
        link="also/masctel"
      />
      <!-- @click.native="detail('lape/masctel')" -->

      <producto-item
        :image="{ img: '/productos-also/david.webp', alt: 'David' }"
        :title="$t('david.title')"
        link="also/david"
      />
      <!-- @click.native="detail('lape/masctel')" -->

      <producto-item
        :image="{ img: '/productos-also/venoset.webp', alt: 'Venoset' }"
        :title="$t('venoset.title')"
        link="also/venoset"
      />
      <!-- @click.native="detail('lape/masctel')" -->

      <producto-item
        :image="{ img: '/productos-also/glovex-cpolvo.webp', alt: 'Glovex' }"
        :title="$t('globex_cpolvo.title')"
        link="also/glovex-cpolvo"
      />
      <!-- @click.native="detail('lape/masctel')" -->

      <producto-item
        :image="{ img: '/productos-also/guantex.webp', alt: 'Guantex' }"
        :title="$t('guantex.title')"
        link="also/guantex"
      />
      <!-- @click.native="detail('lape/masctel')" -->

      <producto-item
        :image="{
          img: '/productos-also/guantex-latex.webp',
          alt: 'Guantex Latex',
        }"
        :title="$t('guantex_latex.title')"
        link="also/guantex-latex"
      />
      <!-- @click.native="detail('lape/masctel')" -->

      <producto-item
        :image="{ img: '/productos-also/cover-shoes.webp', alt: 'Cover Shoes' }"
        :title="$t('cover.title')"
        link="also/cover-shoes"
      />
      <!-- @click.native="detail('lape/masctel')" -->

      <producto-item
        :image="{
          img: '/productos-also/gastel-plus.webp',
          alt: 'GASTEL PLUS – Gasa Hospitalaria',
        }"
        :title="$t('gastel_stern.title')"
        link="also/gastel-plus"
      />
      <!-- @click.native="detail('lape/gastel-stern')" -->
    </div>
  </div>
</template>

<script>
import ProductoItem from './ProductoItem.vue'
export default {
  name: 'Productos',
  components: { ProductoItem },

  methods: {
    detail(url) {
      this.$router.push(url)
    },
  },
}
</script>
