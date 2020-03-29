const formMixin = {
  data() {
    return {
      error: "",
      valid: false,
      email: "",
      loadingForm: false,
      password: "",
      ruleName: [
        name => name.length > 0 || "Ingrese un nombre",
        name => name.length < 15 || "Ingrese un nombre corto"
      ],
      ruleEmail: [
        email => this.validateEmail(email) || "Ingrese un correo válido"
      ],
      rulePassword: [password => password.length > 8 || "Mínimo 8 caracteres"],
      rulePassword2: [
        password2 => this.password === password2 || "No coinciden"
      ]
    };
  },
  methods: {
    validateEmail(email) {
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  }
};

export { formMixin };
