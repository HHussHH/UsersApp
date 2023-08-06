import useVuelidate from "@vuelidate/core";
import { computed, reactive } from "vue";
import { minLength, helpers, email, required } from "@vuelidate/validators";

const maxPhoneLength = 12;
export const formatPhoneNumber = (value: string): string => {
  value = value.replace(/\D/g, "");

  // Проверка, начинается ли номер с 7
  if (value.charAt(0) !== "7") {
    value = "7" + value;
  }

  // Добавление символа + при его отсутствии
  if (value.charAt(0) !== "+") {
    value = "+" + value;
  }

  value = value.slice(0, maxPhoneLength);
  value = value.replace(
    /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
    "$1-$2-$3-$4-$5"
  );

  return value;
};

const rules = computed(() => ({
  firstName: {
    required: helpers.withMessage(`Поле обязательно!`, required),
    minLength: helpers.withMessage(`Длина не менее 3х символов!`, minLength(3)),
  },
  email: {
    required: helpers.withMessage(`Поле обязательно!`, required),
    email: helpers.withMessage(`Не верный форма!`, email),
  },
  phone: {
    minLength: helpers.withMessage(
      `Длина не менее ${maxPhoneLength} символов!`,
      minLength(maxPhoneLength)
    ),
  },
}));

const state = reactive({
  firstName: "",
  email: "",
  phone: "",
} as {
  firstName: string;
  email: string;
  phone: string;
});

export const validate = useVuelidate(rules, state);

export const clearError = (): void => {
  validate.value.$reset();
};
