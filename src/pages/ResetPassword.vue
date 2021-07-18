<template>
    <div id="reset">
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
                            <h3 class="text-primary text-center">
                                Create new password
                            </h3>
                            <p class="text-center reset-password-message">
                                Your new password must be different from
                                pervious passwords
                            </p>
                            <div class="form-group pt-3">
                                <label for="password" class="text-primary"
                                    >Password:</label
                                ><br />
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    v-model="password"
                                    class="form-control"
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
                                <div
                                    class="text-danger text-right"
                                    v-if="!$v.password.minLength"
                                >
                                    Password must have at least
                                    {{ $v.password.$params.minLength.min }}
                                    letters.
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-primary"
                                    >Re-enter Password:</label
                                ><br />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    v-model="confirmPassword"
                                    class="form-control"
                                    :class="
                                        !$v.confirmPassword.sameAsPassword ||
                                        (!$v.confirmPassword.required &&
                                            submitted)
                                            ? 'is-invalid border-danger border'
                                            : ''
                                    "
                                />
                                <div
                                    class="text-danger text-right"
                                    v-if="
                                        submitted &&
                                        !$v.confirmPassword.required
                                    "
                                >
                                    Re-enter password please.
                                </div>
                                <div
                                    class="text-danger text-right"
                                    v-if="!$v.confirmPassword.sameAsPassword"
                                >
                                    Please make sure your passwords match.
                                </div>
                            </div>
                            <div class="form-group">
                                <button
                                    :disabled="submitted"
                                    type="submit"
                                    class="btn btn-danger btn-md shadow"
                                >
                                    Reset Password
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
import {
    required,
    minLength,
    maxLength,
    sameAs,
} from "vuelidate/lib/validators";

export default {
    components: { Button },
    data() {
        return {
            password: "",
            confirmPassword: "",
            submitted: false,
            submitRsponse: {},
        };
    },
    validations: {
        password: {
            required,
            minLength: minLength(8),
            maxLength: maxLength(18),
        },
        confirmPassword: {
            required,
            sameAsPassword: sameAs("password"),
        },
    },
    methods: {
        doLogin() {
            this.submitted = true;
            this.$v.$touch();
            if (!this.$v.$invalid) {
                console.log("call");
                let $vm = this;
                this.$http
                    .post(
                        process.env.VUE_APP_APIURL +
                            `${"auth/change-password"}`,
                        {
                            password: $vm.password,
                            token: $vm.$route.query.key,
                        }
                    )
                    .then((resp) => {
                        // console.log(resp);
                        $vm.submitRsponse = resp.data.data;
                        $vm.$swal($vm.submitRsponse.message);
                    })
                    .catch(function (err) {
                        $vm.submitRsponse = err.response.data;
                        // console.log(err);
                        $vm.$swal($vm.submitRsponse.error);
                    });
            }
        },
    },
};
</script>
<style scoped>
@import "../assets/css/reset-password.css";
</style>