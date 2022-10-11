<script>
import mockData from "../../json/mockData.json";
export default {
  data() {
    return {
      myJson: mockData,
      name: null,
      country: null,
      city: null,
      email: null,
      errors: [],
      showError: false,
    };
  },
  methods: {
    addNewData() {
      if (this.name && this.city && this.email && this.country) {
        const newData = {
          "Name Surname": this.name,
          City: this.city,
          Email: this.email,
          Country: this.country,
        };

        fetch("../../json/mockData.json", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newData),
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => {
            console.error(err);
          });
      } else {
        this.errors = [];
        if (!this.name) this.errors.push("Name required.");
        if (!this.city) this.errors.push("city required.");
        if (!this.email) this.errors.push("email required.");
        if (!this.country) this.errors.push("country required.");
        this.showError = true;
      }
    },
    closeError() {
      this.showError = false;
    },
  },
};
</script>

<template>
  <div class="container add-item">
    <header>
      <router-link to="/"
        ><img src="../../assets/tesodev-logo.jpg" alt="logo"
      /></router-link>
      <button class="return-btn" @click="$router.back()">
        <i class="fa">&#8592;</i>
        Return to List Page
      </button>
    </header>
    <div style="padding-right: 40%">
      <label class="label"> Name Surname </label> <br />
      <form @submit.prevent="addNewData">
        <input
          required
          maxlength="60"
          minlength="4"
          v-model="name"
          label="Name Surname"
          placeholder="   Enter name and surname"
        />
      </form>
      <br /><br />
      <label class="label"> Country </label> <br />
      <form>
        <input
          maxlength="40"
          minlength="2"
          v-model="country"
          label="Name Surname"
          placeholder="   Enter a country"
        />
      </form>
      <br /><br />
      <label class="label"> City </label> <br />
      <form>
        <input
          maxlength="40"
          minlength="2"
          v-model="city"
          label="Name Surname"
          placeholder="   Enter a city"
        />
      </form>
      <br /><br />
      <label class="label"> Email </label> <br />
      <form>
        <input
          type="email"
          v-model="email"
          label="Name Surname"
          placeholder="   Enter a e-mail (abc@xyz.com)"
        />

        <br /><br />

        <button type="button" class="add-btn" @click="addNewData()">Add</button>
      </form>
    </div>
    <div>
      <section v-show="showError" class="section alert-section">
        <div class="alert alert-custom">
          <div class="alert-container">
            <button
              @click="closeError()"
              type="button"
              class="close-icon"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span>clear</span>
            </button>
            <b class="alert-info" v-for="(error, index) in errors" :key="index">
              <br />{{ error }}</b
            >
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../App.css";
.return-btn {
  font-size: 24px;
  height: 31px;
  border: none;
  background-color: inherit;
  padding-left: 70px;
}
.add-item {
  display: flex;
  flex-direction: column;
  header {
    margin: 15px 0 50px 0;
    display: flex;
    align-items: center;

    img {
      width: 205px;
      height: 80px;
      padding-left: 37px;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    width: 590px;
    height: 46px;
    margin-left: 25%;
    gap: 75px;

    input {
      background: #ffffff;
      border: 1.5px solid #484848;
      border-radius: 12px;
      position: absolute;
      width: 590px;
      color: rgba(100, 100, 100, 0.5);
      height: 46px;
    }
    .add-btn {
      border-radius: 12px;
      border: rgba(41, 78, 152, 0.72);

      margin-left: auto;
      color: #ffffff;
      background-color: rgba(41, 78, 152, 0.72);
      padding: 13px 40px;
    }
  }
}
label {
  padding-left: 25%;
  color: #686868;
}
.error-message {
  display: none;
  color: red;
}

/* ✨ The magic ✨ */
form.errors {
  :invalid {
    border-color: red;
  }
  .error-message {
    display: block;
  }
}
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i,600,700");
$black: #66615b;
$grey: #ccc;
$white: #fff;
$yellow: #ff0;
$green: #8bc34a;
$blue: #29d2e4;
$orange: #f87d09;
$dark-pink: #e91e63;
$purple: #9c27b0;
$light-purple: #efedff;
$main-background: $light-purple;
*,
:after,
:before {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  font: normal 16px/1.2 "Josefin Sans", sans-serif;
  background: $main-background;
}

.title {
  margin: 0 0 30px;
  text-align: center;
}

.section {
  padding-top: 8.5%;
  text-align: center;
  width: 20%;
  float: right;
  .alert {
    &:not(:first-child) {
      margin-top: 15px;
    }
  }
}

// Alerts
@mixin alert-variant(
  $alert-vertical-padding,
  $alert-horizontal-padding,
  $background,
  $border-color,
  $text-color
) {
  background-color: $background;
  border: 1px solid $border-color;
  color: $text-color;
  padding: $alert-vertical-padding $alert-horizontal-padding;
  .alert-icon {
    float: left;
    margin-right: 15px;
  }
  .alert-info {
    margin: 0 10px 0 0;
    text-transform: uppercase;
    font-size: 14px;
  }
  .alert-container {
    position: relative;
    max-width: 960px;
    margin: 0 auto;
  }
  .close-icon {
    float: right;
    color: #000;
    margin-top: 0;
    margin-left: 0;
    width: 21px;
    height: 21px;
    position: relative;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    text-indent: -999px;
    overflow: hidden;
    white-space: nowrap;
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 8px;
      width: 15px;
      height: 2px;
      left: 0;
    }
    &:before {
      background-color: #fff;
      transform: rotate(-45deg);
    }
    &:after {
      background-color: #fff;
      transform: rotate(45deg);
    }
  }
}

.alert {
  @include alert-variant(15px, 20px, $blue, $blue, #fff);
  &.alert-custom {
    @include alert-variant(null, null, $black, $black, null);
  }
  &.alert-info {
    @include alert-variant(null, null, $blue, $blue, null);
  }
  &.alert-success {
    @include alert-variant(null, null, $green, $green, null);
  }
  &.alert-warning {
    @include alert-variant(null, null, $orange, $orange, null);
  }
  &.alert-danger {
    @include alert-variant(null, null, $dark-pink, $dark-pink, null);
  }
}
label {
  display: block;
  margin-top: 1em;
}
</style>
