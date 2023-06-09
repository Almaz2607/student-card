export function validator(data, config) {
  const errors = {};

  function validate(validateMethod, data, config) {
    let statusValidate;
    switch (validateMethod) {
      case "isRequired":
        statusValidate = data.trim() === "";
        break;
      case "isURL":
        const urlRegExp = /^https?:\/\/\S+\.\S+$/g;
        statusValidate = !urlRegExp.test(data);
        break;
      case "isBirthYear":
        const curYear = new Date().getFullYear();
        const isNotValidLength = data.length < config.value;
        const isNotValidYear = Number(data) > curYear;
        statusValidate = isNotValidLength || isNotValidYear;
        break;
      default:
        break;
    }
    if (statusValidate) return config.message;
  }

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );

      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }

  return errors;
}
