<template>
  <div>
    <div id="home" class="Home">
      <div class="Home-Banner">
        <div class="carousel-wrapper">
          <VueSlickCarousel v-bind="slickOptions">
            <div class="slider-1"></div>
            <div class="slider-2"></div>
            <div class="slider-3"></div>
          </VueSlickCarousel>
        </div>
        <div class="BannerContent">
          <div class="Home-Banner-Img lape">
            <img :src="$t('home.banner_img')" />
          </div>

          <div class="Home-Banner-Img also">
            <img :src="$t('home.banner_img2')" />
          </div>

          <div class="Home-Banner-Buttons ed-container">
            <div class="ed-item m-50 Home-Banner-Cotizacion">
              <cotizacion-button />
            </div>
            <div class="ed-item m-50 Home-Banner-Catalogo">
              <catalogo-button />
            </div>
          </div>
        </div>
      </div>

      <div class="Home-Description ed-item ed-container">
        <div
          class="Home-Description--Seccion Home-Description--Text ed-item m-50"
        >
          <h1 class="Home-Description--Title ed-item">
            <strong> {{ $t('home.subtitle') }} </strong>
          </h1>
          <p class="Home-Description--Text--Content">
            {{ $t('home.content') }}
          </p>
          <p class="Home-Description--Text--Content">
            {{ $t('home.content_2') }}
          </p>
        </div>

        <div
          class="Home-Description--Seccion Home-Description--Image ed-item m-50"
        >
          <img src="/4_1.webp" alt />
        </div>
      </div>
    </div>

    <certificaciones />

    <productos />

    <callme />

    <marcas />

    <contacto />

    <mapa />
  </div>
</template>

<script>
import CatalogoButton from '../../components/CatalogoButton.vue'
import CotizacionButton from '../../components/CotizacionButton.vue'
import Certificaciones from '../../components/Certificaciones.vue'
import Mapa from '../../components/Mapa.vue'
import Contacto from '../../components/Contacto.vue'
import Marcas from '../../components/Marcas.vue'
import Callme from '../../components/Callme.vue'
import Productos from '../../components/Productos.vue'
export default {
  components: {
    Productos,
    Callme,
    Marcas,
    Contacto,
    Mapa,
    Certificaciones,
    CotizacionButton,
    CatalogoButton,
  },

  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
      },
    }
  },

  head() {
    return { title: this.$t('home.title') }
  },
}
</script>

<style lang="scss" scoped>
.Home {
  &-Banner {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &-Buttons {
      @media screen and (max-width: 640px) {
        text-align: center;
      }
    }

    &-Img {
      text-align: center;
      margin: 50px auto;

      &.lape {
        // border: 1px solid red;
        display: flex;
        justify-content: flex-start;
      }

      &.also {
        display: flex;
        justify-content: flex-end;
        // border: 1px solid blue;
      }

      img {
        max-width: 80%;
        height: auto;

        @media screen and (min-width: 700px) {
          max-width: 65%;
        }

        @media screen and (min-width: 1024px) {
          max-width: 50%;
        }
      }
    }

    &-Cotizacion {
      @media screen and (min-width: 640px) {
        text-align: right;
      }
    }
  }

  &-Description {
    margin: 25px auto;
    max-width: 90%;
    align-items: center;
    justify-content: center;
    padding: 0 20px;

    &--Title {
      font-size: 26px;
      margin: 0 0 20px;
      color: #2e3f85;
      font-weight: 400;
      text-align: center;
    }

    &--Text {
      padding: 0 20px;
      font-family: 'Open Sans', sans-serif;

      margin: 20px auto;

      &--Content {
        text-align: justify;
        font-size: 14px;
      }
    }

    &--Image {
      height: auto;
      max-width: 100%;
      display: block;
      margin: 20px auto;
      justify-content: center;
      align-items: center;
      display: flex;

      img {
        border-radius: 20px;
        max-width: 80%;
      }
    }
  }
}

.BannerContent {
  position: absolute;
  // border: 1px solid red;
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

<style>
.carousel-wrapper {
  height: 100vh;
  width: 100vw;
  margin-top: 75px;
}
.slider-1 {
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-image: url('/1.webp');
  background-size: cover;
  background-position: center center;
}
.slider-2 {
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-image: url('/2.webp');
  background-size: cover;
  background-position: center center;
}
.slider-3 {
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-image: url('/3.webp');
  background-size: cover;
  background-position: center center;
}
</style>
