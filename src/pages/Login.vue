<template>
    <div id="reset" class="bg-gradient-primary-to-secondary vh-100">
        <div class="container">
            <div
                id="reset-row"
                class="row justify-content-center align-items-center"
            >
                <div id="reset-column" class="col-md-6">
                    <div id="reset-box" class="col-md-12 shadow-sm rounded">
                        <form
                            id="reset-form"
                            class="form"
                            @submit.prevent="doLogin()"
                        >
                            <div class="text-center">
                                <img
                                    src="@/assets/img/Logo.png"
                                    alt=""
                                    height="30px"
                                />
                            </div>
                            <br />
                            <br />
                            <div class="form-group">
                                <label for="email" class="text-primary"
                                    >Email</label
                                ><br />
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    v-model="email"
                                    class="form-control border"
                                    :class="
                                        !$v.email.required && submitted
                                            ? 'is-invalid border-danger border'
                                            : ''
                                    "
                                />
                                <div
                                    class="text-danger text-right"
                                    v-if="submitted && !$v.email.required"
                                >
                                    Email is required.
                                </div>
                            </div>
                            <div class="form-group pt-3">
                                <label for="password" class="text-primary"
                                    >Password:</label
                                ><br />
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    v-model="password"
                                    class="form-control border"
                                    :class="
                                        submitted && !$v.password.required
                                            ? 'is-invalid border-danger border'
                                            : ''
                                    "
                                />
                                <div
                                    class="text-danger text-right"
                                    v-if="submitted && !$v.password.required"
                                >
                                    Password is required.
                                </div>
                            </div>

                            <div class="form-group">
                                <button
                                    :disabled="submitted"
                                    type="submit"
                                    class="btn btn-danger btn-md shadow mt-3"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Button from "../components/Button.vue";
import { required } from "vuelidate/lib/validators";

export default {
    components: { Button },
    data() {
        return {
            password: "",
            email: "",
            submitted: false,
            submitRsponse: {},
        };
    },
    validations: {
        password: {
            required,
        },
        email: {
            required,
        },
    },
    beforeMount() {
        if (localStorage.getItem("user") != undefined) {
            this.$router.push({ path: "/admin" });
        }
    },
    methods: {
        doLogin() {
            this.submitted = true;
            this.$v.$touch();
            if (!this.$v.$invalid) {
                console.log("call");
                let $vm = this;
                this.$http
                    .post(process.env.VUE_APP_APIURL + `${"admin/login"}`, {
                        password: $vm.password,
                        email: $vm.email,
                        user_type: 1,
                    })
                    .then((resp) => {
                        console.log(resp);
                        $vm.submitRsponse = resp.data.data;
                        localStorage.setItem("user", resp.data.data);
                        this.$router.push({ path: "/admin" });
                    })
                    .catch(function (err) {
                        $vm.submitRsponse = err.response.data;
                        console.log(err);
                        $vm.submitted = false;
                        $vm.$swal($vm.submitRsponse.error.message);
                    });
            }
        },
    },
};
</script>
<style scoped>
@import "../assets/css/reset-password.css";
</style>