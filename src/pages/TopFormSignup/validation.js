import { emailValidate } from '../../utils';

export const requiredFields = ({ formData, birth, checkbox }) => {
  if (emptyFields({ formData, birth, checkbox })) {
    throw new Error('Dados incompletos!');
  }
};

export const validateDates = (birth) => {
  const today = new Date();

  if (
    birth.year > today.getFullYear() - 18 ||
    birth.year < today.getFullYear() - 118
  )
    throw new Error(
      `Insira um ano de nascimento entre ${today.getFullYear() - 18} e ${
        today.getFullYear() - 118
      }`
    );

  if (isInvalidBirthMonth(birth))
    throw new Error(`Insira um mês de nascimento entre 1 e 12`);

  if (isInvalidBirthDay31(birth))
    throw new Error('Insira um dia de nascimento entre 1 e 31');

  if (isInvalidBirthDayFev(birth))
    throw new Error('Insira um dia de nascimento entre 1 e 29');

  if (isInvalidBirthDayFor30(birth))
    throw new Error('Insira um dia de nascimento entre 1 e 30');
};

export const validateEmail = (email) => {
  if (!emailValidate(email)) throw new Error('Insira um email válido!');
};

export const validatePassword = (password, confirmPassword) => {
  if (password !== confirmPassword)
    throw new Error('As senhas não correspondem!');
};

const emptyFields = ({ formData, birth, checkbox }) =>
  formData.name === '' ||
  formData.sex === '' ||
  formData.email === '' ||
  birth.year === '' ||
  birth.month === '' ||
  birth.day === '' ||
  (!checkbox && (birth.hour === '' || birth.min === '')) ||
  formData.city === '' ||
  formData.password === '' ||
  formData.confirmPassword === '';

const isInvalidBirthDay31 = (birth) =>
  (birth.month === 1 ||
    birth.month === 3 ||
    birth.month === 5 ||
    birth.month === 7 ||
    birth.month === 8 ||
    birth.month === 10 ||
    birth.month === 12) &&
  (birth.day < 1 || birth.day > 31);

const isInvalidBirthDayFor30 = (birth) =>
  (birth.month === 4 ||
    birth.month === 6 ||
    birth.month === 9 ||
    birth.month === 11) &&
  (birth.day < 1 || birth.day > 30);

const isInvalidBirthMonth = (birth) => birth.month < 1 || birth.month > 12;

const isInvalidBirthDayFev = (birth) =>
  birth.month === 2 && (birth.day < 1 || birth.day > 29);
