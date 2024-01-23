<template>
  <form @submit.prevent="submitForm">
    <div :class="{ invalid: !firstName.isVal }" class="form-controll">
      <label for="firstname">First Name</label>
      <input
        type="text"
        id="firstname"
        v-model.trim="firstName.val"
        @blur="clearErrors('firstName')"
      />
      <p v-if="!firstName.isVal">First Name must not be empty</p>
    </div>
    <div :class="{ invalid: !lastName.isVal }" class="form-controll">
      <label for="lastname">Last Name</label>
      <input
        type="text"
        id="lastname"
        v-model.trim="lastName.val"
        @blur="clearErrors('lastName')"
      />
      <p v-if="!lastName.isVal">Last Name must not be empty</p>
    </div>
    <div :class="{ invalid: !description.isVal }" class="form-controll">
      <label for="description">Description</label>
      <textarea
        @blur="clearErrors('description')"
        name="description"
        id="description"
        rows="5"
        v-model.trim="description.val"
      ></textarea>
      <p v-if="!description.isVal">Description must not be empty</p>
    </div>
    <div :class="{ invalid: !rate.isVal }" class="form-controll">
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        id="rate"
        v-model.number="rate.val"
        @blur="clearErrors('rate')"
      />
      <p v-if="!rate.isVal">Rate must be greater than 0</p>
    </div>
    <div :class="{ invalid: !areas.isVal }" class="form-controll">
      <h3>Areas of Expertise</h3>
      <div>
        <input
          @blur="clearErrors('areas')"
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.val"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input
          @blur="clearErrors('areas')"
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.val"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="areas.val"
          @blur="clearErrors('areas')"
        />
        <label for="career">Career Advisory</label>
      </div>
      <p v-if="!areas.isVal">Please check at least one expertise</p>
    </div>
    <p v-if="!formIsValid">Please fix the all above errors and submit again!</p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ["save-data"],
  data() {
    return {
      firstName: {
        val: "",
        isVal: true,
      },
      lastName: {
        val: "",
        isVal: true,
      },
      description: {
        val: "",
        isVal: true,
      },
      rate: {
        val: null,
        isVal: true,
      },
      areas: {
        val: [],
        isVal: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearErrors(input) {
      this[input].isVal = true;
    },
    validateForm() {
      this.formIsValid = true;

      if (this.firstName.val == "") {
        this.formIsValid = false;
        this.firstName.isVal = false;
      }
      if (this.lastName.val == "") {
        this.formIsValid = false;
        this.lastName.isVal = false;
      }
      if (this.description.val == "") {
        this.formIsValid = false;
        this.description.isVal = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.formIsValid = false;
        this.rate.isVal = false;
      }
      if (this.areas.val.length === 0) {
        this.areas.isVal = false;
        this.formIsValid = false;
      }
      console.log(this.areas.val);
    },
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      const formData = {
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        description: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val,
      };
      this.$emit("save-data", formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
