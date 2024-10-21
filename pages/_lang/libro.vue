<template>
  <div class="Libro ed-container">
    <div class="ed-item">
      <h3 style="text-align: center;">{{ $t('book.titulo') }}</h3>
      <h3 style="text-align: center;">{{ name }}</h3>
    </div>

    <form class="ed-item ed-container" style="justify-content: center;">
      <div class="form-group ed-item l-50">
        <label for="incidente">
          {{ $t('book.incidente') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="fecha_incidente"
          v-model="fechaIncidente"
          autocomplete="off"
          type="date"
          class="form-control"
        />
      </div>
      <div class="form-group ed-item l-50">
        <label for="nombre_razon">
          {{ $t('book.nombre_razon') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="nombre_razon"
          v-model="nombreRazon"
          autocomplete="off"
          type="text"
          class="form-control"
          :placeholder="$t('book.nombre_razon')"
        />
      </div>
      <div class="form-group ed-item">
        <p class="text-left font-weight-bold">{{ $t('book.subtitulo1') }}</p>
      </div>
      <div class="form-group ed-item l-50">
        <label for="solicitante">
          {{ $t('book.solicitante') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="solicitante"
          v-model="solicitante"
          autocomplete="off"
          type="text"
          class="form-control"
          :placeholder="$t('book.solicitante')"
        />
      </div>
      <div class="form-group ed-item l-50">
        <label for="domicilio">
          {{ $t('book.domicilio') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="domicilio"
          v-model="domicilio"
          autocomplete="off"
          type="text"
          class="form-control"
          :placeholder="$t('book.domicilio')"
        />
      </div>
      <div class="form-group ed-item l-50">
        <label for="documento">
          {{ $t('book.documento') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="documento"
          v-model="documento"
          autocomplete="off"
          type="text"
          class="form-control mt-10"
          :placeholder="$t('book.documento')"
        />
      </div>
      <div class="form-group ed-item l-50">
        <label for="correo">
          {{ $t('book.correo') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="correo"
          v-model="correo"
          autocomplete="off"
          type="email"
          class="form-control mt-10"
          :placeholder="$t('book.correo')"
        />
      </div>
      <div class="form-group ed-item">
        <label for="apoderado">
          {{ $t('book.apoderado') }}
        </label>
        <input
          id="apoderado"
          v-model="apoderado"
          autocomplete="off"
          type="text"
          class="form-control mt-10"
          :placeholder="$t('book.apoderado_descripcion')"
        />
      </div>
      <div class="form-group ed-item">
        <p class="text-left font-weight-bold">{{ $t('book.subtitulo2') }}</p>
      </div>
      <div class="form-group ed-item l-50">
        <label for="tipo">
          {{ $t('book.tipo') }}
          <span style="color: red !important;">*</span>
        </label>
        <select v-model="tipo" class="form-control">
          <optgroup :label="$t('book.selec')">
            <option>Producto</option>
            <option>Servicio</option>
          </optgroup>
        </select>
      </div>
      <div class="form-group ed-item l-50">
        <label for="monto">
          {{ $t('book.monto') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="monto"
          v-model="monto"
          autocomplete="off"
          type="text"
          class="form-control mt-10"
          :placeholder="$t('book.monto')"
        />
      </div>
      <div class="form-group ed-item">
        <label for="descripcion">
          {{ $t('book.descripcion') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="descripcion"
          v-model="descripcion"
          autocomplete="off"
          type="text"
          class="form-control mt-10"
          :placeholder="$t('book.descripcion')"
        />
      </div>
      <div class="form-group ed-item">
        <p class="text-left font-weight-bold">{{ $t('book.subtitulo3') }}</p>
      </div>
      <div class="form-group ed-item l-50">
        <label for="reclamo_queja">
          {{ $t('book.reclamo_queja') }}
          <span style="color: red !important;">*</span>
        </label>
        <select v-model="reclamoQueja" class="form-control">
          <optgroup :label="$t('book.reclamo_queja')">
            <option>Queja</option>
            <option>Reclamo</option>
          </optgroup>
        </select>
      </div>
      <div class="form-group ed-item l-50">
        <label for="detalle">
          {{ $t('book.detalle') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="detalle"
          v-model="detalle"
          autocomplete="off"
          type="text"
          class="form-control mt-10"
          :placeholder="$t('book.detalle_descripcion')"
        />
      </div>
      <div class="form-group ed-item">
        <label for="pedido">
          {{ $t('book.pedido') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="pedido"
          v-model="pedido"
          autocomplete="off"
          type="text"
          class="form-control mt-10"
          :placeholder="$t('book.pedido_descripcion')"
        />
      </div>
      <div class="form-group ed-item">
        <p class="text-left font-weight-bold">{{ $t('book.subtitulo4') }}</p>
      </div>
      <div class="form-group ed-item l-50">
        <label for="fecha_respuesta">
          {{ $t('book.fecha_respuesta') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="fecha_respuesta"
          v-model="fechaRespuesta"
          autocomplete="off"
          type="date"
          class="form-control"
        />
      </div>
      <div class="form-group ed-item l-50">
        <label for="observaciones">
          {{ $t('book.observaciones') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="observaciones"
          v-model="observaciones"
          autocomplete="off"
          type="text"
          class="form-control mt-10"
          :placeholder="$t('book.observaciones')"
        />
      </div>
      <div class="ed-item text-center">
        <button type="button" class="btn btn-primary" @click="addLibro">
          {{ $t('book.add') }}
        </button>
      </div>
      <div class="ed-item">
        <p style="color: red; font-size: 0.8em;">* {{ $t('book.campos') }}</p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Libro',

  data() {
    return {
      fechaIncidente: '',
      nombreRazon: '',
      solicitante: '',
      domicilio: '',
      documento: '',
      correo: '',
      apoderado: '',
      tipo: '',
      monto: '',
      descripcion: '',
      reclamoQueja: '',
      detalle: '',
      pedido: '',
      fechaRespuesta: '',
      observaciones: '',
    }
  },
  computed: {
    name() {
      return this.$route.query.name || 'No se recibió nombre'
    },
  },
  methods: {
    addLibro() {
      const correoData = {
        from: {
          email: 'MS_D2SEuM@trial-3yxj6ljprk1ldo2r.mlsender.net',
        },
        to: [
          {
            email: 'jadmir1111@gmail.com',
          },
        ],
        subject: this.detalle.subject,
        date: this.fechaIncidente.date,
        text: this.nombreRazon.text,
        text1: this.solicitante.text1,
        text2: this.domicilio.text2,
        text3: this.documento.text3,
        correo: this.correo.correo,
        text4: this.apoderado.text4,
        selec: this.tipo.selec,
        text5: this.monto.text5,
        text6: this.descripcion.text6,
        selec2: this.reclamoQueja.selec2,
        text7: this.pedido.text7,
        date2: this.fechaRespuesta.date2,
        text8: this.observaciones.text8,
      }
      const headers = {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization:
          'Bearer mlsn.d816d34b51fb98b9b6445d754dce5d8ba97b197440ae808d60ab7962e799dbc6',
      }
      const request = this.$axios.post(
        'https://api.mailersend.com/v1/email',
        correoData,
        { headers }
      )

      request
        .then((response) => {
          console.log('Correo enviado con éxito:', response.data)
          alert('Correo enviado con éxito')
        })
        .catch((error) => {
          console.error('Error al enviar el correo:', error)
          alert('Hubo un error al enviar el correo')
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.Libro {
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
