import {
  axiosCompatibilityCreate,
  axiosLPCreate,
  axiosMandalaCreate,
} from '../constants/axios';
import {
  COMPATIBILITY_TOKEN,
  USER_PAIRS,
  USER_STORAGE_NAME,
  USER_TOKEN_STORAGE_NAME,
} from '../constants/variables';
import { getSign } from '../utils/index';

const api = {};

export const getLogin = async (login, password) => {
  const api = await axiosLPCreate();

  const response = await api.post(`/auth`, {
    email: login,
    password: password,
  });

  const user = response.data.user;
  const token = response.data.token;

  user.graph = await getUserMandala(user);
  user.planets = await getUserPlanets(user);
  user.houses = await getUserHouses(user);
  user.fHouses = getHouses(user);

  localStorage.setItem(USER_TOKEN_STORAGE_NAME, token);
  localStorage.setItem(USER_STORAGE_NAME, JSON.stringify(user));

  return user;
};

export const postSignup = async (params) => {
  const api = await axiosLPCreate();

  const response = await api.post(`/register`, params);

  const user = response.data.user;

  const loginResponse = await api.post(`/auth`, {
    email: user.email,
    password: params.password,
  });

  const token = loginResponse.data.token;

  user.graph = await getUserMandala(user);
  user.planets = await getUserPlanets(user);
  user.houses = await getUserHouses(user);
  user.fHouses = getHouses(user);

  localStorage.setItem(USER_TOKEN_STORAGE_NAME, token);
  localStorage.setItem(USER_STORAGE_NAME, JSON.stringify(user));

  return response;
};

export const getUserMandala = async (user) => {
  const api = await axiosMandalaCreate();

  const graphResponse = await api.post(`/mandala`, {
    name: user.name,
    tz: user.birth_tz,
    long_deg: user.birth_lng_deg,
    long_min: user.birth_lng_min,
    lat_deg: user.birth_lat_deg,
    lat_min: user.birth_lat_min,
    birth_date: user.birth_date,
    ubt: 0,
  });

  return graphResponse.data.image;
};

export const getUserPlanets = async (user) => {
  const api = await axiosMandalaCreate();

  const response = await api.post(`/fplanets`, {
    name: user.name,
    birth_date: user.birth_date,
    long_deg: user.birth_lng_deg,
    long_min: user.birth_lng_min,
    lat_deg: user.birth_lat_deg,
    lat_min: user.birth_lat_min,
    ubt: 0,
    tz: user.birth_tz,
  });

  return response.data;
};

export const getUserHouses = async (user) => {
  const api = await axiosMandalaCreate();

  const response = await api.post(`/houses`, {
    name: user.name,
    birth_date: user.birth_date,
    long_deg: user.birth_lng_deg,
    long_min: user.birth_lng_min,
    lat_deg: user.birth_lat_deg,
    lat_min: user.birth_lat_min,
    ubt: 0,
    tz: user.birth_tz,
  });

  return response.data;
};

export const postPair = async (params) => {
  const api = await axiosLPCreate();

  const response = await api.post(`/test-users`, {
    name: params.name,
    sex: params.sex,
    birth_date: params.birth_date,
    birth_lng_deg: params.birth_lng,
    birth_lng_min: params.birth_lng_min,
    birth_lat_deg: params.birth_lat,
    birth_lat_min: params.birth_lat_min,
    birth_tz: params.birth_tz,
    country: params.country,
    city: params.city,
  });

  return response.data;
};

export const getCity = async (city) => {
  const api = await axiosMandalaCreate();
  const response = await api.post('/places', { name: city });

  return response;
};

export const getBirthCoord = async (address) => {
  const api = await axiosMandalaCreate();
  const response = await api.post('/coordinates', { address: address });

  return response.data;
};

export const getPairsCompatibility = async (user, pair) => {
  const mapOne = {
    Mapa1Nome: user.name,
    Mapa1Genero: user.sex === 'M' ? 'Masculino' : 'Feminino',
    Mapa1SolGrau: user.planets.Sun.deg,
    Mapa1SolMin: user.planets.Sun.min,
    Mapa1SolCasa: user.fHouses.Sun,
    Mapa1LuaGrau: user.planets.Moon.deg,
    Mapa1LuaMin: user.planets.Moon.min,
    Mapa1LuaCasa: user.fHouses.Moon,
    Mapa1MarteGrau: user.planets.Mars.deg,
    Mapa1MarteMin: user.planets.Mars.min,
    Mapa1MarteCasa: user.fHouses.Mars,
    Mapa1VenusGrau: user.planets.Venus.deg,
    Mapa1VenusMin: user.planets.Venus.min,
    Mapa1VenusCasa: user.fHouses.Venus,
    Mapa1MercGrau: user.planets.Mercury.deg,
    Mapa1MercMin: user.planets.Mercury.min,
    Mapa1MercCasa: user.fHouses.Mercury,
    Mapa1AscGrau: user.planets.Asc.deg,
    Mapa1AscMin: user.planets.Asc.min,
    Mapa1AscCasa: user.fHouses.Asc,
  };

  const mapTwo = {
    Mapa2Nome: pair.name,
    Mapa2Genero: pair.sex === 'M' ? 'Masculino' : 'Feminino',
    Mapa2SolGrau: pair.planets.Sun.deg,
    Mapa2SolMin: pair.planets.Sun.min,
    Mapa2SolCasa: pair.fHouses.Sun,
    Mapa2LuaGrau: pair.planets.Moon.deg,
    Mapa2LuaMin: pair.planets.Moon.min,
    Mapa2LuaCasa: pair.fHouses.Moon,
    Mapa2MarteGrau: pair.planets.Mars.deg,
    Mapa2MarteMin: pair.planets.Mars.min,
    Mapa2MarteCasa: pair.fHouses.Mars,
    Mapa2VenusGrau: pair.planets.Venus.deg,
    Mapa2VenusMin: pair.planets.Venus.min,
    Mapa2VenusCasa: pair.fHouses.Venus,
    Mapa2MercGrau: pair.planets.Mercury.deg,
    Mapa2MercMin: pair.planets.Mercury.min,
    Mapa2MercCasa: pair.fHouses.Mercury,
    Mapa2AscGrau: pair.planets.Asc.deg,
    Mapa2AscMin: pair.planets.Asc.min,
    Mapa2AscCasa: pair.fHouses.Asc,
  };

  const api = await axiosCompatibilityCreate();

  const presetResponse = await api.get('/preset');

  const preset = presetResponse.data.data.find((preset) => preset.in_use);

  const response = await api.post('/compatibility', {
    ...mapOne,
    ...mapTwo,
    ...preset,
  });

  return response.data;
};

export const getHouses = (user) => {
  const houses = {};

  for (const key in user.planets) {
    const planet = user.planets[key];
    const sign = getSign(planet.sign);

    const houseSign = user.houses.find((house) => house.sign === sign);

    if (houseSign) {
      let houseNumber = getHouseNumber(houseSign);
      const house = getHouseByAngle(planet, houseSign, houseNumber);

      houses[key] = house;
    }
  }

  return houses;
};

const getHouseNumber = (house) => {
  if (house.house.search('House') !== -1)
    return parseInt(house.house.split(' ')[1]);
  else if (house.house.search('Ascendant') !== -1) return 1;
  else if (house.house.search('MC') !== -1) return 10;
};

const getHouseByAngle = (planet, houseSign, houseNumber) => {
  let house = 0;

  if (planet.deg > houseSign.angle) house = houseNumber;
  else if (planet.deg < houseSign.angle) house = houseNumber - 1;
  else if (planet.deg == houseSign.angle && +planet.min >= +houseSign.min)
    house = houseNumber;
  else if (planet.deg == houseSign.angle && +planet.min < +houseSign.min)
    house = houseNumber - 1;

  if (house <= 0) house = 12;
  else if (house > 12) house = 1;

  return house;
};

export const getPairs = async () => {
  const api = await axiosLPCreate();
  const response = await api.get(`/test-users`);
  const pairs = response.data;

  localStorage.setItem(USER_PAIRS, JSON.stringify(pairs));

  return pairs;
};

export const postCompatibilityLogin = async () => {
  const api = await axiosCompatibilityCreate();
  const response = await api.post(`/auth`, {
    email: process.env.REACT_APP_COMPATIBILITY_LOGIN,
    password: process.env.REACT_APP_COMPATIBILITY_PASSWORD,
  });

  localStorage.setItem(COMPATIBILITY_TOKEN, response.data.data.access_token);

  return response.data.data;
};

export const deletePair = async (id) => {
  const api = await axiosLPCreate();
  const response = await api.delete(`/test-users/${id}`);

  return response;
};

// ---------------------------- abaixo disso após funcionar deletar ---------------------------------------------------

export const postPreamble = async () => {
  const response = await api.post(`/preamble`);

  console.log(response.data);
  return response;
};

export const postUserMapUpdate = async (userId, placeId) => {
  const response = await api.post(
    `/astrologia/update?userId=${userId}&placeId=${placeId}`
  );
  console.log(response);
  return response;
};

export const postPairMapUpdate = async (pairId, placeId) => {
  const response = await api.post(
    `/astrologia/update/par?pairId=${pairId}&placeId=${placeId}`
  );
  console.log(response);
  return response;
};

export const postMailingTest = async () => {
  const response = await api.post(`/test_mailing`);
  console.log(response);
  return response;
};

export const postPasswordRecovery = async (login) => {
  // const response = await api.post(`/password_recovery`, {
  //   "login": login,
  // });
  const responseUser = await api.get(`/usuario/email?email=${login}`);
  const response = await api.post(
    `/password_recovery/id=${responseUser.data.Id}`
  );
  console.log(response);
  return response;
};

export const postPasswordRedefine = async (params) => {
  const response = await api.post(`/password_redefine`, params);
  console.log(response);
  return response;
};

export const postProfile = async (userId, placeId, params) => {
  const response = await api.post(
    `/cadastro/perfil/userId=${userId}/placeId=${placeId}`,
    params
  );
  const graphResponse = await api.post(
    `/astrologia/grafico/user?userId=${userId}`
  );

  localStorage.setItem('synas@login', true);
  localStorage.setItem('synas@user', JSON.stringify(response.data));
  localStorage.setItem('synas@userId', JSON.stringify(response.data.Id));
  localStorage.setItem(
    'synas@userGraph',
    `data:image/svg+xml;utf8,${encodeURIComponent(graphResponse.data)}`
  );

  console.log(response);
  return response;
};

export const putUser = async (userId, params) => {
  const response = await api.put(`/usuario/userId=${userId}`, params);
  console.log(response);
  return response;
};

export const putProfile = async (userId, params) => {
  const response = await api.put(`/usuario/perfil/userId=${userId}`, params);
  console.log(response);
  return response;
};
