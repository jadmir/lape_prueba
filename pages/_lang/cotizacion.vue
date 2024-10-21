<template>
  <div class="Cotizacion ed-container">
    <div class="ed-item">
      <h3 style="text-align: center;">{{ $t('cotizacion.title') }}</h3>
    </div>

    <form class="ed-item ed-container" style="justify-content: center;">
      <div class="form-group ed-item l-50">
        <label for="nombre_empresa">
          {{ $t('cotizacion.nombre_empresa') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="nombre_empresa"
          v-model="nombreEmpresa"
          autocomplete="off"
          type="text"
          class="form-control"
          :placeholder="$t('cotizacion.nombre_empresa')"
        />
      </div>
      <div class="form-group ed-item l-50">
        <label for="nombre">
          {{ $t('cotizacion.nombre') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="nombre"
          v-model="nombre"
          autocomplete="off"
          type="text"
          class="form-control"
          :placeholder="$t('cotizacion.nombre')"
        />
      </div>
      <div class="form-group ed-item l-50">
        <label for="direccion">
          {{ $t('cotizacion.direccion') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="direccion"
          v-model="direccion"
          autocomplete="off"
          type="text"
          class="form-control"
          :placeholder="$t('cotizacion.direccion')"
        />
      </div>
      <div class="form-group ed-item l-50">
        <label for="celular">
          {{ $t('cotizacion.celular') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="celular"
          v-model="celular"
          autocomplete="off"
          type="text"
          class="form-control"
          :placeholder="$t('cotizacion.celular')"
        />
      </div>
      <div class="form-group ed-item l-50">
        <label for="email">
          {{ $t('cotizacion.email') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="email"
          v-model="email"
          autocomplete="off"
          type="email"
          class="form-control"
          :placeholder="$t('cotizacion.email')"
        />
      </div>
      <div class="form-group ed-item l-50">
        <label for="fecha">
          {{ $t('cotizacion.fecha') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="fecha"
          v-model="fecha"
          autocomplete="off"
          type="date"
          class="form-control"
          :placeholder="$t('cotizacion.fecha')"
        />
      </div>

      <div class="form-group ed-item">
        <label>{{ $t('cotizacion.sele') }}</label>
        <select v-model="producto" class="form-control">
          <!-- PRODUCTOS LAPE -->
          <optgroup :label="$t('gastel.title')">
            <option>GASTEL 0.5m x 10cm</option>
            <option>GASTEL 1m x 10cm</option>
            <option>GASTEL 2m x 10cm</option>
            <option>GASTEL 5m x 10cm</option>
            <option>GASTEL 10m x 10cm</option>
            <option>GASTEL 20m x 10cm</option>
            <option>GASTEL 1m x 20cm</option>
            <option>GASTEL 2m x 20cm</option>
            <option>GASTEL 5m x 20cm</option>
            <option>GASTEL 10m x 20cm</option>
            <option>GASTEL 20m x 20cm</option>
          </optgroup>

          <optgroup :label="$t('galeno.title')">
            <option>GALENO 2" x 5yd</option>
            <option>GALENO 3" x 5yd</option>
            <option>GALENO 4" x 5yd</option>
            <option>GALENO 5" x 5yd</option>
            <option>GALENO 6" x 5yd</option>
            <option>GALENO 8" x 5yd</option>
            <option>GALENO 10" x 5yd</option>
            <option>GALENO 12" x 5yd</option>
          </optgroup>

          <optgroup :label="$t('alvend.title')">
            <option>ALVEND PLUS 3" x 3yd</option>
            <option>ALVEND PLUS 4" x 3yd</option>
            <option>ALVEND PLUS 6" x 3yd</option>
          </optgroup>

          <optgroup :label="$t('medibelt.title')">
            <option>MEDIBELT 3 BANDAS S</option>
            <option>MEDIBELT 3 BANDAS M</option>
            <option>MEDIBELT 3 BANDAS L</option>
            <option>MEDIBELT 4 BANDAS XS</option>
            <option>MEDIBELT 4 BANDAS S</option>
            <option>MEDIBELT 4 BANDAS M</option>
            <option>MEDIBELT 4 BANDAS L</option>
          </optgroup>

          <optgroup :label="$t('beesure.title')">
            <option>BEESURE XS</option>
            <option>BEESURE S</option>
            <option>BEESURE M</option>
            <option>BEESURE L</option>
            <option>BEESURE XL</option>
          </optgroup>

          <optgroup :label="$t('optimacast.title')">
            <option>OPTIMACAST Azul 2" x 4yd</option>
            <option>OPTIMACAST Azul 3" x 4yd</option>
            <option>OPTIMACAST Azul 4" x 4yd</option>
            <option>OPTIMACAST Azul 5" x 4yd</option>
            <option>OPTIMACAST Blanco 2" x 4yd</option>
            <option>OPTIMACAST Blanco 3" x 4yd</option>
            <option>OPTIMACAST Blanco 4" x 4yd</option>
            <option>OPTIMACAST Blanco 5" x 4yd</option>
            <option>OPTIMACAST Verde 2" x 4yd</option>
            <option>OPTIMACAST Verde 3" x 4yd</option>
            <option>OPTIMACAST Verde 4" x 4yd</option>
            <option>OPTIMACAST Verde 5" x 4yd</option>
          </optgroup>

          <optgroup :label="$t('yestel.title')">
            <option>YESTEL 4" x 5yd</option>
            <option>YESTEL 6" x 5yd</option>
            <option>YESTEL 8" x 5yd</option>
            <option>YESTEL 4" x 3yd</option>
            <option>YESTEL 6" x 3yd</option>
            <option>YESTEL 8" x 3yd</option>
          </optgroup>

          <!-- PRODUCTOS ALSO -->
          <optgroup :label="$t('transtel.title')">
            <option>TRANSTEL TS-02 (20 gotas = 1ml)</option>
          </optgroup>

          <optgroup :label="$t('uritel.title')">
            <option>URITEL 1000ml</option>
            <option>URITEL 2000ml</option>
          </optgroup>

          <optgroup :label="$t('gastel_stern.title')">
            <option>GASTEL PLUS 1m x 100m</option>
            <option>GASTEL PLUS 1yd x 100yd</option>
          </optgroup>

          <optgroup :label="$t('david.title')">
            <option>PD5 DØ 5mm x 100mm</option>
            <option>PD10 DØ 10mm x 100mm</option>
            <option>PD12 DØ 12mm x 100mm</option>
            <option>PD15 DØ 15mm x 100mm</option>
            <option>PCD5 DØ 5mm x 100mm</option>
            <option>PCD10 DØ 10mm x 100mm</option>
            <option>PCD12 DØ 12mm x 100mm</option>
            <option>PCD15 DØ 15mm x 100mm</option>
          </optgroup>

          <optgroup :label="$t('globex_cpolvo.title')">
            <option>GLOVEX XS</option>
            <option>GLOVEX S</option>
            <option>GLOVEX M</option>
            <option>GLOVEX L</option>
          </optgroup>

          <optgroup :label="$t('guantex_latex.title')">
            <option>GUANTEX LATEX XS</option>
            <option>GUANTEX LATEX S</option>
            <option>GUANTEX LATEX M</option>
            <option>GUANTEX LATEX L</option>
          </optgroup>

          <optgroup :label="$t('guantex.title')">
            <option value="GUANTEX DE NITRILO XS"
              >GUANTEX {{ lg === 'es' ? 'DE NITRILO' : 'NITRILE' }} XS</option
            >
            <option value="GUANTEX DE NITRILO S"
              >GUANTEX {{ lg === 'es' ? 'DE NITRILO' : 'NITRILE' }} S</option
            >
            <option value="GUANTEX DE NITRILO M"
              >GUANTEX {{ lg === 'es' ? 'DE NITRILO' : 'NITRILE' }} M</option
            >
            <option value="GUANTEX DE NITRILO L"
              >GUANTEX {{ lg === 'es' ? 'DE NITRILO' : 'NITRILE' }} L</option
            >
          </optgroup>

          <optgroup :label="$t('captel.title')">
            <option value="CAPTEL BLANCO"
              >CAPTEL {{ lg === 'es' ? 'BLANCO' : 'WHITE' }}</option
            >
            <option value="CAPTEL CELESTE"
              >CAPTEL {{ lg === 'es' ? 'CELESTE' : 'SKY BLUE' }}</option
            >
          </optgroup>

          <optgroup :label="$t('cleanseat.title')">
            <option value="CLEAN SEAT 10 UNIDADES"
              >CLEAN SEAT 10 {{ lg === 'es' ? 'UNIDADES' : 'UNITS' }}</option
            >
          </optgroup>

          <optgroup :label="$t('cover.title')">
            <option>
              COVER SHOES 25g/m
              <sup>2</sup>
            </option>
            <option>
              COVER SHOES 30g/m
              <sup>2</sup>
            </option>
          </optgroup>

          <optgroup :label="$t('venoset.title')">
            <option>VENOSET IV-01</option>
            <option>VENOSET IV-02</option>
            <option>VENOSET IV-03</option>
            <option>VENOSET IV-04</option>
            <option>VENOSET IV-05</option>
            <option>VENOSET IV-06</option>
          </optgroup>

          <optgroup :label="$t('masctel.title')">
            <option value="MASCTEL BLANCO"
              >MASCTEL {{ lg === 'es' ? 'BLANCO' : 'WHITE' }}</option
            >
            <option value="MASCTEL CELESTE"
              >MASCTEL {{ lg === 'es' ? 'CELESTE' : 'SKY BLUE' }}</option
            >
          </optgroup>

          <!-- <optgroup label="ADHETEL - CINTA MÉDICA, HIPOALERGÉNICA">
            <option>ADHETEL PORE - 1/2" x 5yd</option>
            <option>ADHETEL PORE - 1" x 5yd</option>
            <option>ADHETEL PORE - 2" x 5yd</option>
            <option>ADHETEL PORE - 3" x 5yd</option>
            <option>ADHETEL PORE - 4" x 5yd</option>
            <option>ADHETEL PORE - 1/2" x 10yd</option>
            <option>ADHETEL PORE - 1" x 10yd</option>
            <option>ADHETEL PORE - 2" x 10yd</option>
            <option>ADHETEL PORE - 2" x 10yd</option>
            <option>ADHETEL PORE - 3" x 10yd</option>
            <option>ADHETEL PORE - 4" x 10yd</option>

            <option>ADHETEL CLEAR - 1/2" x 5yd</option>
            <option>ADHETEL CLEAR - 1" x 5yd</option>
            <option>ADHETEL CLEAR - 2" x 5yd</option>
            <option>ADHETEL CLEAR - 3" x 5yd</option>
            <option>ADHETEL CLEAR - 4" x 5yd</option>
            <option>ADHETEL CLEAR - 1/2" x 10yd</option>
            <option>ADHETEL CLEAR - 1" x 10yd</option>
            <option>ADHETEL CLEAR - 2" x 10yd</option>
            <option>ADHETEL CLEAR - 2" x 10yd</option>
            <option>ADHETEL CLEAR - 3" x 10yd</option>
            <option>ADHETEL CLEAR - 4" x 10yd</option>

            <option>ADHETEL SILK - 1/2" x 5yd</option>
            <option>ADHETEL SILK - 1" x 5yd</option>
            <option>ADHETEL SILK - 2" x 5yd</option>
            <option>ADHETEL SILK - 3" x 5yd</option>
            <option>ADHETEL SILK - 4" x 5yd</option>
            <option>ADHETEL SILK - 1/2" x 10yd</option>
            <option>ADHETEL SILK - 1" x 10yd</option>
            <option>ADHETEL SILK - 2" x 10yd</option>
            <option>ADHETEL SILK - 2" x 10yd</option>
            <option>ADHETEL SILK - 3" x 10yd</option>
            <option>ADHETEL SILK - 4" x 10yd</option>
          </optgroup>-->
        </select>
      </div>

      <div class="ed-item text-center">
        <button
          v-if="!load"
          :disabled="!producto"
          type="button"
          class="btn btn-primary"
          @click="addProducto"
        >
          {{ $t('cotizacion.add') }}
        </button>
      </div>

      <div
        class="ed-item ed-container"
        style="margin: 25px; justify-content: center;"
      >
        <div v-for="(p, i) in productos" :key="i" class="card">
          <div class="card-header">{{ p.name }}</div>
          <div class="card-body">
            <label>{{ $t('cotizacion.can') }}</label>
            <input
              v-model="p.cantidad"
              pattern="Cantidad"
              class="form-control"
              type="number"
            />
          </div>
          <div class="footer-header">
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="deleteProducto(p)"
            >
              {{ $t('cotizacion.el') }}
            </button>
          </div>
        </div>
      </div>

      <div class="ed-item">
        <p style="color: red; font-size: 0.8em;">
          * {{ $t('cotizacion.campos') }}
        </p>
      </div>

      <div class="ed-item text-center" style="margin-bottom: 15px;">
        <load v-if="load" />
        <button
          v-if="dataValid && !load"
          type="button"
          class="btn btn-primary"
          @click="sendCotizacion"
        >
          {{ $t('cotizacion.solicitar') }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import swal from 'sweetalert2'

import Load from '../../components/Load'

export default {
  name: 'Cotizacion',

  components: { Load },

  data() {
    return {
      nombreEmpresa: '',
      nombre: '',
      direccion: '',
      celular: '',
      email: '',
      fecha: '',

      producto: null,
      productos: [],

      load: false,
    }
  },

  computed: {
    apiURL() {
      return process.env.apiURL
    },

    dataValid() {
      return (
        this.nombreEmpresa !== '' &&
        this.nombre !== '' &&
        this.direccion !== '' &&
        this.celular !== '' &&
        this.email !== '' &&
        this.fecha !== '' &&
        this.productos.length > 0
      )
    },

    lg() {
      return this.$i18n.locale
    },
  },

  methods: {
    addProducto() {
      if (this.productos.some((p) => p.name === this.producto)) {
        alert('El producto ya se encuentra añadido')
        return
      }

      const producto = {
        name: this.producto,
        cantidad: 0,
        index: this.productos.length + 1,
      }

      this.productos = [...this.productos, producto]
      this.producto = null
    },

    deleteProducto({ index }) {
      this.productos = this.productos.filter((p) => p.index !== index)
    },

    async sendCotizacion() {
      const e = this.productos.some((p) => p.cantidad <= 0)

      if (e) {
        swal.fire(
          'LABORATORIOS LAPE',
          'No puede solicitar 0 unidades de un producto',
          'error'
        )
        return
      }

      this.load = true
      try {
        // https://api-lape.herokuapp.com/api/mail
        const res = await this.$axios.post(`${this.apiURL}cotizacion`, {
          nombre_empresa: this.nombreEmpresa,
          nombre: this.nombre,
          direccion: this.direccion,
          celular: this.celular,
          email: this.email,
          fecha: this.fecha,
          productos: this.productos,
        })

        const { status } = res

        if (status === 200) {
          swal.fire(
            'LABORATORIOS LAPE',
            'Su cotización fue solicitada',
            'success'
          )

          this.$router.push({ path: '/' })
        }
      } catch (err) {
        swal.fire(
          'LABORATORIOS LAPE',
          'No se pudo enviar su cotización, intente nuevamente por favor',
          'error'
        )
      }
      this.load = false
    },
  },

  head() {
    return { title: this.$t('cotizacion.title') }
  },
}
</script>

<style lang="scss" scoped>
.Cotizacion {
  // position: relative;
  // height: 100vh;
  // top: 85px;
  transform: translateY(100px);
  // min-height: 50vh;
}

optgroup[label] {
  background: #2c3f84;
  color: white;
}

option {
  background: white;
  color: black;
}
</style>
