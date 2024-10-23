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
          type="string"
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
        </label>
        <input
          id="fecha_respuesta"
          v-model="fechaRespuesta"
          autocomplete="off"
          type="date"
          class="form-control"
          readonly
        />
      </div>
      <div class="form-group ed-item l-50">
        <label for="observaciones">
          {{ $t('book.observaciones') }}
        </label>
        <input
          id="observaciones"
          v-model="observaciones"
          autocomplete="off"
          type="text"
          class="form-control mt-10"
          :placeholder="$t('book.observaciones')"
          readonly
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
import swal from 'sweetalert2'

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
      observaciones:
        'Nos comunicaremos con usted durante la fecha establecida.',
    }
  },
  computed: {
    name() {
      return this.$route.query.name || 'No se recibió nombre'
    },
  },
  mounted() {
    this.fechaRespuesta = this.calcularFechaRespuesta()
  },
  methods: {
    validarCampos() {
      if (
        !this.fechaIncidente ||
        !this.nombreRazon ||
        !this.solicitante ||
        !this.domicilio ||
        !this.documento ||
        !this.correo ||
        !this.tipo ||
        !this.monto ||
        !this.descripcion ||
        !this.reclamoQueja ||
        !this.detalle ||
        !this.pedido
      ) {
        swal.fire(
          'Campos vacíos',
          'Todos los campos con * son obligatorios',
          'error'
        )
        return false
      }
      return true
    },
    calcularFechaRespuesta() {
      const fechaActual = new Date()
      fechaActual.setDate(fechaActual.getDate() + 30)
      const opciones = { year: 'numeric', month: '2-digit', day: '2-digit' }
      const fechaFormateada = fechaActual.toLocaleDateString('en-CA', opciones)
      return fechaFormateada
    },
    async addLibro() {
      if (!this.validarCampos()) {
        return
      }

      this.fechaRespuesta = this.calcularFechaRespuesta()

      try {
        const data = {
          empresa: this.$route.query.name,
          fechaIncidente: this.fechaIncidente,
          nombreRazon: this.nombreRazon,
          solicitante: this.solicitante,
          domicilio: this.domicilio,
          documento: this.documento,
          correo: this.correo,
          apoderado: this.apoderado,
          tipo: this.tipo,
          monto: this.monto,
          descripcion: this.descripcion,
          reclamoQueja: this.reclamoQueja,
          detalle: this.detalle,
          pedido: this.pedido,
          fechaRespuesta: this.fechaRespuesta,
          observaciones: this.observaciones,
        }
        const response = await this.$axios.post(
          'https://nest-prueba.onrender.com/send-mail',
          data
        )
        if (response.status === 200) {
          swal.fire(
            `${this.$route.query.name}`,
            'El libro de Reclamaciones fue enviado correctamente',
            'success'
          )
          // Limpiar todos los campos del formulario
          this.fechaIncidente = ''
          this.nombreRazon = ''
          this.solicitante = ''
          this.domicilio = ''
          this.documento = ''
          this.correo = ''
          this.apoderado = ''
          this.tipo = ''
          this.monto = ''
          this.descripcion = ''
          this.reclamoQueja = ''
          this.detalle = ''
          this.pedido = ''
        }
      } catch (error) {
        error('Error al enviar el correo:', error)
        swal.fire(
          `${this.$route.query.name}`,
          'Hubo un error al enviar el Libro de Reclamaciones',
          'error'
        )
      }
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
