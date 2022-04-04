export const requiredFields = ({ formData, birth, checkbox }) => {
  if (emptyFields({ formData, birth, checkbox }))
    throw new Error('Campos incompletos!');
};

const emptyFields = ({ formData, birth, checkbox }) =>
  birth.year === null &&
  birth.month === null &&
  birth.day === null &&
  (birth.hour === null || !checkbox) &&
  (birth.min === null || !checkbox) &&
  formData.birthCity === null &&
  formData.pairName === '' &&
  formData.pairSex === 'Gênero';

export const validateDates = (birth, checkbox) => {
  if (isInvalidBirthYear(birth)) throw new Error('Verifique o ano inserido');

  if (isInvalidBirthMonth(birth)) throw new Error('Verifique o mês inserido');

  if (
    birth.day < 1 ||
    isInvalidBirthDay31(birth) ||
    isInvalidBirthDayFev(birth) ||
    isInvalidBirthDayFor30(birth)
  )
    throw new Error('Verifique o dia inserido');

  if (!checkbox && isInvalidBirthHour(birth))
    throw new Error('Verifique a hora inserida');

  if (!checkbox && isInvalidBirthMinute(birth))
    throw new Error('Verifique os minutos inseridos');
};

export const validateSex = (formData) => {
  if (formData.pairSex !== 'Masculino' && formData.pairSex !== 'Feminino')
    throw new Error('Verifique o gênero inserido');
};

const isInvalidBirthYear = (birth) =>
  birth.year < 1900 || birth.year > new Date().getFullYear();

export const isInvalidBirthDayFev = (birth) =>
  birth.month === 2 && (birth.day < 1 || birth.day > 29);

export const isInvalidBirthDay31 = (birth) =>
  (birth.month === 1 ||
    birth.month === 3 ||
    birth.month === 5 ||
    birth.month === 7 ||
    birth.month === 8 ||
    birth.month === 10 ||
    birth.month === 12) &&
  (birth.day < 1 || birth.day > 31);

export const isInvalidBirthDayFor30 = (birth) =>
  (birth.month === 4 ||
    birth.month === 6 ||
    birth.month === 9 ||
    birth.month === 11) &&
  (birth.day < 1 || birth.day > 30);

export const isInvalidBirthMonth = (birth) =>
  birth.month < 1 || birth.month > 12;

export const isInvalidBirthHour = (birth) => birth.hour < 0 || birth.hour > 23;

export const isInvalidBirthMinute = (birth) => birth.min < 0 || birth.min > 59;
