<template>
  <main class>
    <div>
      <header id="header" class="Header">
        <div class="Header--content">
          <div class="logos">
            <nuxt-link to="/" class="Header__Title lape">
              <!-- <img src="/logos/logo-lape.webp" alt="LOGO LAPE" /> -->
            </nuxt-link>

            <nuxt-link to="/" class="Header__Title also">
              <!-- <img src="/logos/logo-also.webp" alt="LOGO ALSO" /> -->
            </nuxt-link>
          </div>

          <button
            :class="[
              'hamburger hamburger--elastic-r to-lg',
              isActive ? 'is-active' : '',
            ]"
            type="button"
            @click="isActive = !isActive"
          >
            <span class="hamburger-box to-lg">
              <span class="hamburger-inner to-lg"></span>
            </span>
          </button>

          <nav class="Nav from-lg">
            <ul class="Nav--List">
              <li v-if="$i18n.locale === 'es'" class="Nav--List--Link">
                <a href="/#home">{{ $t('links.home') }}</a>
              </li>

              <template v-if="r === 'index' && $i18n.locale === 'es'">
                <li class="Nav--List--Link">
                  <a href="/#productos">{{ $t('links.products') }}</a>
                </li>
                <li class="Nav--List--Link">
                  <a href="/#contacto">{{ $t('links.contact') }}</a>
                </li>
                <li class="Nav--List--Link">
                  <NuxtLink to="/cotizacion">
                    {{ $t('links.cotizar') }}
                  </NuxtLink>
                </li>
              </template>

              <li v-if="$i18n.locale === 'en'" class="Nav--List--Link">
                <a href="/en/#home">{{ $t('links.home') }}</a>
              </li>

              <template v-if="r === 'lang' && $i18n.locale === 'en'">
                <li class="Nav--List--Link">
                  <a href="/en/#productos">{{ $t('links.products') }}</a>
                </li>
                <li class="Nav--List--Link">
                  <a href="/en/#contacto">{{ $t('links.contact') }}</a>
                </li>
                <li class="Nav--List--Link">
                  <NuxtLink to="/en/cotizacion">
                    {{ $t('links.cotizar') }}
                  </NuxtLink>
                </li>
              </template>

              <li v-if="$i18n.locale === 'es'" class="Nav--List--Link">
                <NuxtLink :to="`/en` + $route.fullPath" exact>
                  <img
                    class="wpml-ls-flag"
                    src="/en.webp"
                    alt="en"
                    title="English"
                  />
                  {{ $t('links.english') }}
                </NuxtLink>
              </li>
              <li v-else class="Nav--List--Link">
                <NuxtLink :to="$route.fullPath.replace(/^\/[^\/]+/, '')" exact>
                  <img
                    class="wpml-ls-flag"
                    src="/es.webp"
                    alt="es"
                    title="Español"
                  />
                  {{ $t('links.spanish') }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <nav :class="['Nav-Small to-lg']">
        <ul :class="['Nav-Small--List', isActive ? 'active' : '']">
          <li v-if="$i18n.locale === 'es'" class="Nav-Small--List-Link">
            <a href="/">{{ $t('links.home') }}</a>
          </li>

          <template v-if="r === 'index' && $i18n.locale === 'es'">
            <li class="Nav-Small--List-Link">
              <a href="/#productos">{{ $t('links.products') }}</a>
            </li>
            <li class="Nav-Small--List-Link">
              <a href="/#contacto">{{ $t('links.contact') }}</a>
            </li>
            <li class="Nav-Small--List-Link">
              <NuxtLink to="/cotizacion">{{ $t('links.cotizar') }}</NuxtLink>
            </li>
          </template>

          <li v-if="$i18n.locale === 'en'" class="Nav-Small--List-Link">
            <a href="/en">{{ $t('links.home') }}</a>
          </li>

          <template v-if="r === 'lang' && $i18n.locale === 'en'">
            <li class="Nav-Small--List-Link">
              <a href="/en/#productos">{{ $t('links.products') }}</a>
            </li>
            <li class="Nav-Small--List-Link">
              <a href="/en/#contacto">{{ $t('links.contact') }}</a>
            </li>
            <li class="Nav-Small--List-Link">
              <NuxtLink to="/en/cotizacion">{{ $t('links.cotizar') }}</NuxtLink>
            </li>
          </template>

          <li v-if="$i18n.locale === 'es'" class="Nav-Small--List-Link">
            <NuxtLink :to="`/en` + $route.fullPath" exact>
              <img src="/en.webp" alt="en" title="English" />
              {{ $t('links.english') }}
            </NuxtLink>
          </li>
          <li v-else class="Nav-Small--List-Link">
            <NuxtLink :to="$route.fullPath.replace(/^\/[^\/]+/, '')" exact>
              <img src="/es.webp" alt="es" title="Español" />
              {{ $t('links.spanish') }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <div>
      <Nuxt />
    </div>

    <Footer v-if="r == 'index' || r == 'lang'" />
  </main>
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
  name: 'Default',

  components: { Footer },

  data() {
    return {
      isActive: false,
    }
  },

  computed: {
    r() {
      return this.$route.name
    },
  },

  watch: {
    isActive(n) {
      if (n) {
        const header = document.getElementById('header')

        if (header) {
          header.classList.add('Scrolled')
        }
      }
    },
  },

  mounted() {
    document.addEventListener('scroll', (e) => {
      const header = document.getElementById('header')
      if (scrollY >= 100) {
        header.classList.add('Scrolled')
      } else {
        header.classList.remove('Scrolled')
      }
    })
  },
}
</script>

<style lang="scss">
.Nav-Small {
  &--List {
    transform: translateY(-235px);
    transition: 1s;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
    position: fixed;
    z-index: 20;
    background: white;

    &.active {
      transform: translateY(75px);
    }

    &-Link {
      width: 90%;
      margin: auto;
      padding-bottom: 5px;
      border-bottom: 1px solid #eee;
      a {
        display: block;
        color: #555;
        padding: 8px 16px;
        text-decoration: none;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}

.Header {
  height: 90px;
  position: fixed;
  z-index: 999;
  width: 100%;
  transition: 1.5s;
  // padding: 0 25px;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  height: 75px;
  margin: auto;

  &--content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    // max-width: 1200px;
    margin: auto;

    @media screen and(min-width: 1024px) {
      display: flex;
      justify-content: center;
    }

    .lape {
      background-image: url('/logos/logo-lape.webp');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      width: 120px;
      height: 60px;
      margin-right: 2em;

      @media screen and (min-width: 700px) {
        margin-right: 4em;
      }

      @media screen and (min-width: 1024px) {
        margin-right: 6em;
      }
    }

    .also {
      background-image: url('/logos/logo-also.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      width: 120px;
      height: 60px;
    }

    // &__Title {
    //   // height: 100%;
    //   // width: 50%;
    //   // display: flex;

    //   // @media screen and(min-width: 1024px) {
    //   //   width: 80%;
    //   // }

    //   img {
    //     max-width: 120px;
    //     display: block;
    //     height: 70%;
    //     margin: auto 0;
    //   }
    // }

    .hamburger {
      @media screen and(min-width: 1024px) {
        display: none !important;
      }
    }
  }
}

.Header__Link {
  font-size: 16px;
  color: #fff;
  border: 1px solid #fff;
  padding: 7px 12px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 5px;
  margin-left: 10px;
}
.Header__Link:hover {
  color: #2e2f30;
  background-color: #fff;
}
.nuxt-link-active {
  color: cyan;
}
.Content {
  padding: 50px 0;
  text-align: center;
}
.Content__Title {
  font-weight: 300;
  padding-bottom: 30px;
}

.Nav {
  width: 100%;

  &--List {
    margin: 0;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;

    &--Link {
      display: inline-block;
      margin: auto 10px;
      transition: 0.4s;

      &:hover {
        text-decoration: none;
        background: #2e3f85;
        color: #fff;
        border-radius: 15px;
        padding: 10px;
      }

      a {
        padding: 10px;
        color: #000;

        &:hover {
          text-decoration: none;
          color: #fff;
        }
      }
    }
  }
}

.logos {
  display: flex;
  align-items: center;
  margin: auto 0.5em;
}
</style>
