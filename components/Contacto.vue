<template>
  <div id="contacto" class="Contacto ed-container">
    <h1 class="ed-item" style="text-align: center; color: #2e3f85;">
      <strong>{{ $t('contacto.title') }}</strong>
    </h1>

    <div class="ed-item">
      <p style="text-align: center; font-size: 18px;">
        {{ $t('contacto.subtitle') }}
      </p>
    </div>

    <div
      class="ed-item ed-container Contacto--Form l-50"
      style="justify-content: center;"
    >
      <form class="ed-item" @submit.prevent="sendEmail">
        <div class="field" tabindex="1">
          <label for="username">
            <i class="far fa-user"></i>
            {{ $t('contacto.nombre') }}
            <span style="color: red !important;">*</span>
          </label>
          <input
            v-model="message.nombre"
            autocomplete="off"
            name="username"
            type="text"
            placeholder="e.g. john doe"
            required
          />
        </div>
        <div class="field" tabindex="2">
          <label for="email">
            <i class="far fa-envelope"></i>
            {{ $t('contacto.email') }}
            <span style="color: red !important;">*</span>
          </label>
          <input
            v-model="message.email"
            autocomplete="off"
            name="email"
            type="text"
            placeholder="email@domain.com"
            required
          />
        </div>
        <div class="field" tabindex="3">
          <label for="message">
            <i class="far fa-edit"></i>
            {{ $t('contacto.mensaje') }}
            <span style="color: red !important;">*</span>
          </label>
          <textarea
            v-model="message.message"
            autocomplete="off"
            name="message"
            placeholder="Escribir aquí"
            required
          ></textarea>
        </div>
        <load v-if="load" />
        <button v-else type="submit">{{ $t('contacto.enviar') }}</button>
      </form>
    </div>

    <div class="Contacto--Data ed-item l-50">
      <div class="Contacto--Data--Content">
        <div>
          <h2 style="color: #ffcc00; font-size: 18px;">
            <font-awesome-icon
              style="color: #ffffff; font-size: 22px; margin-right: 10px;"
              :icon="['fas', 'clock']"
            />
            {{ $t('contacto.horario') }}
          </h2>
          <div style="color: #fff;">
            <ul>
              <li>Lunes – Viernes : 09:00 – 18:00</li>
              <li>Sábados : 09:00 – 13:00</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 style="color: #ffcc00; font-size: 18px;">
            <font-awesome-icon
              style="color: #ffffff; font-size: 22px; margin-right: 10px;"
              :icon="['fa', 'envelope']"
            />Email
          </h2>
          <div style="color: #fff;">
            <ul>
              <li>ventas@lapelaboratorios.com</li>
              <li>asistenteadministracion@lapelaboratorios.com</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 style="color: #ffcc00; font-size: 18px;">
            <font-awesome-icon
              style="color: #ffffff; font-size: 22px; margin-right: 10px;"
              :icon="['fa', 'phone-square']"
            />
            {{ $t('contacto.telefono') }}
          </h2>
          <div style="color: #fff;">
            <ul>
              <li>+51 433-3003</li>
              <li>+51 424-9022</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 style="color: #ffcc00; font-size: 18px;">
            <font-awesome-icon
              style="
                color: #ffffff;
                font-size: 24px;
                margin-right: 10px;
                font-weight: bold;
              "
              :icon="['fab', 'whatsapp']"
            />
            {{ $t('contacto.cel') }}
          </h2>
          <div style="color: #fff;">
            <ul>
              <li>+51 995 099 915</li>
              <li>+51 943 609 433</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 style="color: #ffcc00; font-size: 18px;">
            <font-awesome-icon
              style="color: #ffffff; font-size: 22px; margin-right: 10px;"
              :icon="['fa', 'map-marker']"
            />
            {{ $t('contacto.direccion') }}
          </h2>
          <div style="color: #fff;">
            <ul>
              <li>Jr. Yavari Nº 378 – Breña</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 style="color: #ffcc00; font-size: 18px;">
            <font-awesome-icon
              style="color: #ffffff; font-size: 22px; margin-right: 10px;"
              :icon="['fa', 'book']"
            />
            {{ $t('contacto.libro') }}
          </h2>
          <div style="color: #fff;">
            <router-link
              :to="{
                path: '/libro',
                query: { name: 'lape S. A.' },
              }"
            >
              {{ $t('book.titulo_lape') }}
            </router-link>
          </div>
        </div>
        <div>
          <h2 style="color: #ffcc00; font-size: 18px;">
            <font-awesome-icon
              style="color: #ffffff; font-size: 22px; margin-right: 10px;"
              :icon="['fa', 'book']"
            />
            {{ $t('contacto.libro') }}
          </h2>
          <div style="color: #fff;">
            <router-link
              :to="{
                path: '/libro',
                query: { name: 'Also Medica SAC' },
              }"
            >
              {{ $t('book.titulo_also') }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert2'
import Load from './Load'
export default {
  name: 'Contacto',
  components: { Load },

  data() {
    return {
      message: {
        message: '',
        email: '',
        nombre: '',
      },
      load: false,
    }
  },

  computed: {
    apiURL() {
      return process.env.apiURL
    },
  },

  methods: {
    async sendEmail() {
      this.load = true
      try {
        const res = await this.$axios.post(`${this.apiURL}mail`, this.message)

        const { status } = res

        if (status === 200) {
          swal.fire('LABORATORIOS LAPE', 'Su mensaje fue enviado', 'success')
          this.message.message = ''
          this.message.nombre = ''
          this.message.email = ''
        }
      } catch (err) {
        swal.fire(
          'LABORATORIOS LAPE',
          'No se pudo enviar su mensaje, intente nuevamente por favor',
          'error'
        )
      }
      this.load = false
    },
  },
}
</script>

<style lang="scss" scoped>
$material-form-label: #000000;
$material-form-label-focus: #3f51b5;
$material-form-line: #000000;
$material-form-line-focus: $material-form-label-focus;
$material-form-input-text: $material-form-label;
$material-form-input-text-focus: $material-form-label-focus;
$material-form-field-invalid-foreground: #d50000;

$material-dropdown-hoverBackground: #e8eaf6;
$material-dropdown-selectedBackground: #9fa8da;
$material-labelOffset: 25px;
$material-textInputPaddingTopBottom: 10px;

.material-form-field {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  position: relative;
  display: block;
  color: $material-form-label;
  padding: $material-labelOffset 0 10px 0;

  &::after {
    content: '\00A0';
    display: block;
    color: $material-form-field-invalid-foreground;
    font-size: 12px;
    padding-top: 5px;
  }

  .material-form-field-label {
    position: absolute;
    display: block;
    top: $material-labelOffset + $material-textInputPaddingTopBottom;
    left: 0px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
    pointer-events: none;
    cursor: text;
  }

  input {
    padding: $material-textInputPaddingTopBottom 0
      $material-textInputPaddingTopBottom 0;
    display: block;
    width: 100%;
    // border: none;
    font-size: 14px;
    color: $material-form-input-text;
    // border-bottom: 1px solid $material-form-line;
    outline: none;

    &:invalid {
      outline: none;
      box-shadow: none;
    }

    &:valid,
    &:focus {
      & ~ .material-form-field-label {
        top: $material-labelOffset - ($material-textInputPaddingTopBottom + 5);
        font-size: 12px;
      }
    }

    &:focus {
      // outline: none;
      // color: $material-form-input-text-focus;
      padding: $material-textInputPaddingTopBottom - 2;
      border-width: 2px;
      border-color: $material-form-line-focus;

      & ~ .material-form-field-label {
        color: $material-form-label-focus;
      }

      & ~ .material-dropdown {
        /*
        If you want to animate this you will need to use some js to calculate it
        Optionally, you can simply display:block/none
        */
        height: 228px;
        box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
        transition: 0.2s ease-out height, step-start box-shadow 0.2s;
        -moz-transition: 0.2s ease-out height, step-start box-shadow 0.2s;
        -webkit-transition: 0.2s ease-out height, step-start box-shadow 0.2s;
      }
    }
  }
  textarea {
    padding: $material-textInputPaddingTopBottom 0
      $material-textInputPaddingTopBottom 0;
    display: block;
    width: 100%;
    // border: none;
    font-size: 14px;
    color: $material-form-input-text;
    // border-bottom: 1px solid $material-form-line;
    outline: none;

    &:invalid {
      outline: none;
      box-shadow: none;
    }

    &:valid,
    &:focus {
      & ~ .material-form-field-label {
        top: $material-labelOffset - ($material-textInputPaddingTopBottom + 5);
        font-size: 12px;
      }
    }

    &:focus {
      // outline: none;
      // color: $material-form-input-text-focus;
      padding: $material-textInputPaddingTopBottom - 2;
      border-width: 2px;
      border-color: $material-form-line-focus;

      & ~ .material-form-field-label {
        color: $material-form-label-focus;
      }

      & ~ .material-dropdown {
        /*
        If you want to animate this you will need to use some js to calculate it
        Optionally, you can simply display:block/none
        */
        height: 228px;
        box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
        transition: 0.2s ease-out height, step-start box-shadow 0.2s;
        -moz-transition: 0.2s ease-out height, step-start box-shadow 0.2s;
        -webkit-transition: 0.2s ease-out height, step-start box-shadow 0.2s;
      }
    }
  }

  &.material-form-field-invalid {
    color: $material-form-field-invalid-foreground;

    &::after {
      content: attr(data-validationError);
    }

    input:focus ~ .material-form-field-label {
      color: $material-form-field-invalid-foreground;
    }
  }
}

.Contacto {
  padding-top: 60px !important;
  background-image: url(/fondo-seccion.webp) !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  font-family: 'Open Sans', sans-serif;

  &--Data {
    padding: 10px 30px;
    justify-content: center;
    align-items: center;
    display: flex;
    &--Content {
      width: 97%;
      height: 100%;
      padding-top: 40px !important;
      padding-right: 10px !important;
      padding-bottom: 40px !important;
      padding-left: 10px !important;
      background-image: url('/forradasazul.webp') !important;
      background-position: center !important;
      background-repeat: no-repeat !important;
      background-size: cover !important;

      @media screen and (min-width: 640px) {
        width: 80%;
        padding-left: 30px !important;
        padding-right: 30px !important;
      }

      @media screen and (min-width: 1024px) {
        width: 70%;
      }

      ul {
        list-style: none;
        li {
          text-decoration: none;
          font-size: 0.6em;
          margin: 1px auto;
          @media screen and (min-width: 640px) {
            font-size: 0.75em;
          }
        }
      }
    }
  }
}

@import url('https://fonts.googleapis.com/css?family=Saira+Semi+Condensed&display=swap');

$all: all 0.5s ease;
$sai: 'Saira Semi Condensed', sans-serif;

$c5: #555;
$ins: inset;
$o-t: 0 -8px 6px -6px $c5;
$o-b: 0 8px 6px -6px $c5;
$o-l: -8px 0 6px -6px $c5;
$o-r: 8px 0 6px -6px $c5;
$o-tl: -8px -8px 6px -6px $c5;
$o-tr: 8px -8px 6px -6px $c5;
$o-bl: -8px 8px 6px -6px $c5;
$o-br: 8px 8px 6px -6px $c5;
$o-tb: $o-t, $o-b;
$o-lr: $o-l, $o-r;
$o-glow: 0 0 10px 2px $c5;
$i-t: $ins $o-b;
$i-b: $ins $o-t;
$i-l: $ins $o-r;
$i-r: $ins $o-l;
$i-tl: $ins $o-tr;
$i-tr: $ins $o-tl;
$i-bl: $ins $o-br;
$i-br: $ins $o-bl;
$i-tb: $ins $o-b, $ins $o-t;
$i-lr: $ins $o-r, $ins $o-l;
$i-glow: $ins $o-glow;
$bl: block;
$in: inline;
$ib: inline-block;
$fl: flex;
$gr: grid;
$rl: relative;
$ab: absolute;
$fx: fixed;
$r: row;
$rr: row-reverse;
$c: column;
$cr: column-reverse;
$nw: nowrap;
$w: wrap;
$wr: wrap-reverse;
$bs: baseline;
$ce: center;
$fs: flex-start;
$fe: flex-end;
$sa: space-around;
$sb: space-between;
$st: stretch;
$rnw: $r $nw;
$rw: $r $w;
$rwr: $r $wr;
$rrnw: $rr $nw;
$rrw: $rr $w;
$rrwr: $rr $wr;
$cnw: $c $nw;
$cw: $c $w;
$cwr: $c $wr;
$crnw: $cr $nw;
$crw: $cr $w;
$crwr: $cr $wr;
$ta-c: center;
$ta-l: left;
$ta-r: right;
$ta-j: justify;
$va-b: baseline;
$va-m: middle;
$va-sb: sub;
$va-sp: super;
$va-tp: top;
$va-ttp: text-top;
$va-bt: bottom;
$va-tbt: text-bottom;

@mixin bg(
  $bg-i: null,
  $bg-s: null,
  $bg-r: null,
  $bg-p: null,
  $bg-a: null,
  $bg-b: null,
  $bg-c: null,
  $bg-o: null
) {
  background-image: $bg-i;
  background-size: $bg-s;
  background-repeat: $bg-r;
  background-position: $bg-p;
  background-attachment: $bg-a;
  background-blend-mode: $bg-b;
  background-clip: $bg-c;
  background-origin: $bg-o;
}

@mixin br(
  $br-tp: null,
  $br-rg: null,
  $br-bt: null,
  $br-lf: null,
  $br-im: null,
  $br-isr: null,
  $br-iwd: null,
  $br-irp: null,
  $br-iot: null,
  $br-isl: null
) {
  border-top: $br-tp;
  border-right: $br-rg;
  border-bottom: $br-bt;
  border-left: $br-lf;
  border-image: $br-im;
  border-image-source: $br-isr;
  border-image-width: $br-iwd;
  border-image-repeat: $br-irp;
  border-image-outset: $br-iot;
  border-image-slice: $br-isl;
}

@mixin bm(
  $bm-wd: null,
  $bm-hg: null,
  $bm-mxwd: null,
  $bm-mxhg: null,
  $bm-miwd: null,
  $bm-mihg: null,
  $bm-mg: null,
  $bm-pd: null,
  $bm-tp: null,
  $bm-rg: null,
  $bm-bt: null,
  $bm-lf: null,
  $bm-dp: null,
  $bm-ps: null
) {
  width: $bm-wd;
  height: $bm-hg;
  max-width: $bm-mxwd;
  max-height: $bm-mxhg;
  min-width: $bm-miwd;
  min-height: $bm-mihg;
  margin: $bm-mg;
  padding: $bm-pd;
  top: $bm-tp;
  right: $bm-rg;
  bottom: $bm-bt;
  left: $bm-lf;
  display: $bm-dp;
  position: $bm-ps;
}

@mixin fb(
  $fb-ff: null,
  $fb-ai: null,
  $fb-ac: null,
  $fb-as: null,
  $fb-jc: null,
  $fb-fl: null,
  $fb-fb: null,
  $fb-fg: null,
  $fb-fs: null,
  $fb-fo: null
) {
  flex-flow: $fb-ff;
  align-items: $fb-ai;
  align-content: $fb-ac;
  align-self: $fb-as;
  justify-content: $fb-jc;
  flex: $fb-fl;
  flex-basis: $fb-fb;
  flex-grow: $fb-fg;
  flex-shrink: $fb-fs;
  order: $fb-fo;
}

@mixin other(
  $ot-zi: null,
  $ot-op: null,
  $ot-br: null,
  $ot-of: null,
  $ot-ofx: null,
  $ot-ofy: null,
  $ot-vis: null,
  $ot-tsi: null,
  $ot-tsf: null,
  $ot-cr: null,
  $ot-bs: null
) {
  z-index: $ot-zi;
  opacity: $ot-op;
  border-radius: $ot-br;
  overflow: $ot-of;
  overflow-x: $ot-ofx;
  overflow-y: $ot-ofy;
  visibility: $ot-vis;
  transition: $ot-tsi;
  transform: $ot-tsf;
  cursor: $ot-cr;
  box-shadow: $ot-bs;
}

@mixin tf(
  $tf-cl: null,
  $tf-fm: null,
  $tf-fs: null,
  $tf-fw: null,
  $tf-ls: null,
  $tf-lh: null,
  $tf-ta: null,
  $tf-td: null,
  $tf-ti: null,
  $tf-ts: null,
  $tf-tt: null,
  $tf-to: null,
  $tf-va: null,
  $tf-whs: null,
  $tf-wb: null,
  $tf-ws: null,
  $tf-ww: null,
  $tf-wm: null
) {
  color: $tf-cl;
  font-family: $tf-fm;
  font-size: $tf-fs;
  font-weight: $tf-fw;
  letter-spacing: $tf-ls;
  line-height: $tf-lh;
  text-align: $tf-ta;
  text-decoration: $tf-td;
  text-indent: $tf-ti;
  text-shadow: $tf-ts;
  text-transform: $tf-tt;
  text-overflow: $tf-to;
  vertical-align: $tf-va;
  white-space: $tf-whs;
  word-break: $tf-wb;
  word-spacing: $tf-ws;
  word-wrap: $tf-ww;
  writing-mode: $tf-wm;
}

@mixin flex-center($flow) {
  @if $flow {
    @include fb($fb-ff: $flow);
  }

  @include fb($fb-ai: $ce, $fb-jc: $ce);
}

@mixin pseudo {
  @include bm($bm-dp: $bl, $bm-ps: $ab);
  content: '';
}

form {
  @include tf($tf-fm: $sai);
  @include other($ot-tsi: $all);
  @include bm(500px, $bm-dp: $fl);
  @include flex-center($cw);

  div,
  label,
  input,
  textarea {
    @include bm(100%);
  }
}

.field:nth-of-type(2) {
  @include bm($bm-mg: 16px 0);
}

label,
input,
textarea {
  @include bm($bm-pd: 8px);
}

label,
[placeholder] {
  @include tf(#555);
}

label i {
  @include bm($bm-mg: 0 10px 0 0);
}

.field:focus-within label {
  @include tf(#000, $tf-ls: 2px);
}

input,
textarea {
  background: rgba(247, 247, 247, 0.5);
  border: none;
  @include other($ot-br: 4px, $ot-bs: $o-b);

  &:focus {
    background: rgba(255, 255, 255, 1);
    @include other($ot-bs: none);
  }
}

textarea {
  resize: none;

  &::-webkit-scrollbar {
    @include bm(0);
  }
}

button {
  background: rgb(46, 63, 133);
  @include bm($bm-pd: 8px 16px, $bm-mg: 16px 0 50px 0);
  @include tf(#fff);
  border: none;
  @include other($ot-br: 4px, $ot-cr: pointer, $ot-bs: $o-b);

  // &:hover {
  //     @include tf($tf-ls: 2px);
  //     @include other($ot-bs: none)
  // }
}

@media (max-width: 425px) {
  form {
    @include bm(100%);
  }
}
</style>
