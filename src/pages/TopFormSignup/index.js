import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

//COMPONENTS
import { Button, DropdownList } from '../../components';

//ACTIONS
import { Creators as UserActions } from '../../store/ducks/user';

//SERVICES
import { postSignup, getCity, getBirthCoord } from '../../services';

//ASSETS
import dangerImg from '../../assets/danger.svg';
import loadingImg from '../../assets/load.svg';

//STYLE
import {
  Container,
  FormWrapper,
  FormRow,
  FormInput,
  Autocomplete,
  ListFloat,
  Text,
  Form,
  Input,
  ErrorText,
  Checkbox,
  CheckboxLabel,
  SeparationLine,
  SeparationText,
  CheckboxWrapper,
  ModalTitleWrapper,
  ModalBodyWrapper,
  ModalBodyRow,
  LoadingFloat,
  Loading,
} from './styles';

import {
  requiredFields,
  validateDates,
  validateEmail,
  validatePassword,
} from './validation';

export default function TopFormSignup(props) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sex: '',
    password: '',
    confirmPassword: '',
    city: '',
    birthCity: '',
    cityBirth: null,
  });
  const [birth, setBirth] = useState({
    year: '',
    month: '',
    day: '',
    hour: '',
    min: '',
  });
  const [citiesList, setCitiesList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [cityTimeout, setCityTimeout] = useState(0);
  const [searchingCity, setSearchingCity] = useState(false);

  const handleSubmitPartOne = (e) => {
    e.preventDefault();
    setMessage('');

    try {
      requiredFields({ formData, birth, checkbox });
      validateDates(birth);
      validateEmail(formData.email);
      validatePassword(formData.password, formData.confirmPassword);

      if (!termsAccepted)
        throw new Error('Termos de Uso precisam ser aceitos!');

      if (formData.birthCity === '')
        throw new Error(
          'Selecione uma cidade de nascimento da lista apresentada!'
        );
    } catch (error) {
      setMessage(error.message);
      setLoading(false);
      return false;
    }

    // eslint-disable-next-line no-useless-escape
    props.handleSignupModal(
      <ModalTitle formData={formData} birth={birth} checkbox={checkbox} />,
      <ModalBody checkbox={checkbox} />,
      handleSubmitPartTwo
    );
  };

  const handleSubmitPartTwo = useCallback(async () => {
    setLoading(true);

    const date = `${birth.year}-${birth.month}-${birth.day}`;
    const time = checkbox ? '12:00:00' : `${birth.hour}:${birth.min}:00`;

    const initialSignupParams = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.confirmPassword,
      birth_date: `${date} ${time}`,
      document: 'empty',
      city: formData.birthCity.name,
      sex: formData.sex === 'Masculino' ? 'M' : 'F',
    };

    try {
      const coord = await getBirthCoord(formData.birthCity.name);

      const signupParams = {
        ...initialSignupParams,
        birth_tz: -3,
        birth_lat_min: coord.lat_min,
        birth_lat_deg: coord.lat_deg,
        birth_lng_min: coord.lng_min,
        birth_lng_deg: coord.lng_deg,
      };

      const signupResponse = await postSignup(signupParams);

      dispatch(UserActions.setUserData(signupResponse.data.user));

      setMessage('Cadastro realizado! Você será redirecionado :)');
      setLoading(false);

      props.handleSignup();
    } catch (e) {
      if (e.response) {
        if (e.response.status === 409)
          setMessage('Esse email já possui cadastro!');
        else setMessage('Ocorreu um erro no cadastro!');
        setLoading(false);
      }
    }
  }, [birth, formData, checkbox, dispatch, props]);

  const handleCities = async (event, city) => {
    setFormData({
      ...formData,
      [city]: event.target.value,
      birthCity: '',
    });
  };

  const handleCitySelect = (i) => {
    setFormData({
      ...formData,
      birthCity: citiesList[i],
      city: citiesList[i].name,
    });
    setCitiesList(null);
  };

  const CityList = (props) => {
    const list = props.list;
    const listItem = list.map((el, i) => (
      <div key={i} onClick={() => handleCitySelect(i)}>
        {el.formattedName}
      </div>
    ));
    return <ListFloat>{listItem}</ListFloat>;
  };

  const handleCheckbox = () => {
    setCheckbox((prevState) => !prevState);
  };

  useEffect(() => {
    if (cityTimeout) clearTimeout(cityTimeout);

    const timer = setTimeout(async () => {
      // console.log(formData.cidadesLista)
      if (formData.city && formData.city.length > 3) {
        setSearchingCity(true);
        const response = await getCity(formData.city);
        if (response.data.data.length > 0) {
          const arr = response.data.data;
          setSearchingCity(false);
          setCitiesList(arr);
        }
      }
    }, 1000);

    setCityTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.city]);

  let daysOptions = null;
  const daysOptionsFeb = Array.from(new Array(29), (val, index) => index + 1);
  const daysOptionsLess = Array.from(new Array(30), (val, index) => index + 1);
  const daysOptionsFull = Array.from(new Array(31), (val, index) => index + 1);

  if (birth.month === 2) daysOptions = daysOptionsFeb;
  else if (
    birth.month === 4 ||
    birth.month === 6 ||
    birth.month === 9 ||
    birth.month === 11
  )
    daysOptions = daysOptionsLess;
  else daysOptions = daysOptionsFull;

  return (
    <Container>
      <Text>
        Faça sua
        <span>análise da compatibilidade astrológica gratuitamente :)</span>
      </Text>
      <Form onSubmit={(e) => handleSubmitPartOne(e)}>
        <FormRow>
          <FormWrapper>
            <FormInput width="100%">
              <Input
                type="text"
                placeholder="Nome"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </FormInput>
          </FormWrapper>
          <FormWrapper>
            <FormInput width="100%">
              <DropdownList
                placeholder="Sexo"
                list={['Masculino', 'Feminino']}
                value={formData.sex}
                setValue={(e) => setFormData({ ...formData, sex: e })}
                readOnly
              />
            </FormInput>
          </FormWrapper>
        </FormRow>
        <FormRow>
          <FormWrapper>
            <FormInput width="33%">
              <Input
                type="text"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </FormInput>
            <FormInput width="33%">
              <Input
                type="password"
                placeholder="Senha"
                autoComplete="false"
                value={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                }}
              />
            </FormInput>
            <FormInput width="33%">
              <Input
                type="password"
                placeholder="Confirme a senha"
                autoComplete="false"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
            </FormInput>
          </FormWrapper>
        </FormRow>
        <SeparationLine>
          <div />
          <span>Dados de nascimento</span>
          <div />
        </SeparationLine>
        <FormRow>
          <FormWrapper>
            <FormInput width="22%">
              <DropdownList
                placeholder="Dia"
                list={daysOptions}
                value={birth.day}
                setValue={(e) => setBirth({ ...birth, day: e })}
                readOnly
              />
            </FormInput>
            <SeparationText>/</SeparationText>
            <FormInput width="22%">
              <DropdownList
                placeholder="Mês"
                list={Array.from(new Array(12), (val, index) => index + 1)}
                value={birth.month}
                setValue={(e) => setBirth({ ...birth, month: e })}
                readOnly
              />
            </FormInput>
            <SeparationText>/</SeparationText>
            <FormInput width="22%">
              <DropdownList
                placeholder="Ano"
                list={Array.from(
                  new Array(101),
                  (val, index) => new Date().getFullYear() - index - 18
                )}
                value={birth.year}
                setValue={(e) => setBirth({ ...birth, year: e })}
                readOnly
              />
            </FormInput>
            <SeparationText>,</SeparationText>
            <FormInput width="16%">
              <DropdownList
                disabled={checkbox}
                placeholder="Hora"
                list={Array.from(new Array(24), (val, index) =>
                  ('0' + index).slice(-2)
                )}
                value={birth.hour}
                setValue={(e) => setBirth({ ...birth, hour: e })}
                readOnly
              />
            </FormInput>
            <SeparationText>:</SeparationText>
            <FormInput width="16%">
              <DropdownList
                disabled={checkbox}
                placeholder="Min"
                list={Array.from(new Array(60), (val, index) =>
                  ('0' + index).slice(-2)
                )}
                value={birth.min}
                setValue={(e) => setBirth({ ...birth, min: e })}
                readOnly
              />
            </FormInput>
          </FormWrapper>
        </FormRow>
        <FormRow>
          <FormWrapper borderBottom>
            <FormInput width="50%">
              <Input
                type="text"
                placeholder="Cidade natal"
                value={formData.city}
                onChange={(e) => handleCities(e, 'city')}
              />
              <Autocomplete>
                {citiesList && !searchingCity && formData.city !== '' ? (
                  <CityList list={citiesList} />
                ) : searchingCity && formData.city !== '' ? (
                  <LoadingFloat>
                    <Loading src={loadingImg} />
                  </LoadingFloat>
                ) : null}
              </Autocomplete>
            </FormInput>
          </FormWrapper>
        </FormRow>
        <FormRow borderBottom>
          <FormWrapper>
            <FormInput width="100%">
              <CheckboxWrapper>
                <Checkbox
                  type="checkbox"
                  checked={checkbox}
                  onChange={handleCheckbox}
                />
                <CheckboxLabel>Não sei a hora de nascimento</CheckboxLabel>
              </CheckboxWrapper>
            </FormInput>
          </FormWrapper>
        </FormRow>
        <FormRow>
          <FormWrapper>
            <FormInput width="100%">
              <CheckboxWrapper>
                <Checkbox
                  type="checkbox"
                  onChange={() => setTermsAccepted(!termsAccepted)}
                />
                <CheckboxLabel>
                  Eu aceito os{' '}
                  <span onClick={props.handleModal}>Termos de Uso</span> do
                  Synas.
                </CheckboxLabel>
              </CheckboxWrapper>
            </FormInput>
          </FormWrapper>
        </FormRow>
        <FormWrapper>
          <Button type="submit" loading={loading}>
            SALVAR
          </Button>
        </FormWrapper>
        <FormWrapper>
          <ErrorText>{message}</ErrorText>
        </FormWrapper>
      </Form>
      <Form responsive onSubmit={(e) => handleSubmitPartOne(e)}>
        <FormRow>
          <FormWrapper>
            <FormInput width="100%">
              <Input
                type="text"
                placeholder="Nome"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </FormInput>
          </FormWrapper>
        </FormRow>
        <FormRow>
          <FormWrapper>
            <FormInput width="100%">
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </FormInput>
          </FormWrapper>
        </FormRow>
        <FormRow>
          <FormWrapper>
            <FormInput width="100%">
              <Input
                type="password"
                placeholder="Senha"
                autoComplete="false"
                value={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                }}
              />
            </FormInput>
          </FormWrapper>
        </FormRow>
        <FormRow>
          <FormWrapper>
            <FormInput width="100%">
              <Input
                type="password"
                placeholder="Confirme a senha"
                autoComplete="false"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
            </FormInput>
          </FormWrapper>
        </FormRow>
        <FormRow>
          <FormWrapper>
            <FormInput width="100%">
              <DropdownList
                placeholder="Sexo"
                list={['Masculino', 'Feminino']}
                value={formData.sex}
                setValue={(e) => setFormData({ ...formData, sex: e })}
                readOnly
              />
            </FormInput>
          </FormWrapper>
        </FormRow>
        <SeparationLine>
          <div />
          <span>Dados de nascimento</span>
          <div />
        </SeparationLine>
        <FormRow>
          <FormWrapper>
            <FormInput width="33%">
              <DropdownList
                placeholder="Dia"
                list={Array.from(new Array(31), (val, index) => index + 1)}
                value={birth.day}
                setValue={(e) => setBirth({ ...birth, day: e })}
                readOnly
              />
            </FormInput>
            <SeparationText>/</SeparationText>
            <FormInput width="33%">
              <DropdownList
                placeholder="Mês"
                list={Array.from(new Array(12), (val, index) => index + 1)}
                value={birth.month}
                setValue={(e) => setBirth({ ...birth, month: e })}
                readOnly
              />
            </FormInput>
            <SeparationText>/</SeparationText>
            <FormInput width="33%">
              <DropdownList
                placeholder="Ano"
                list={Array.from(
                  new Array(101),
                  (val, index) => new Date().getFullYear() - index - 18
                )}
                value={birth.year}
                setValue={(e) => setBirth({ ...birth, year: e })}
                readOnly
              />
            </FormInput>
          </FormWrapper>
        </FormRow>
        <FormRow>
          <FormWrapper>
            <FormInput width="50%">
              <DropdownList
                disabled={checkbox}
                placeholder="Hora"
                list={Array.from(new Array(24), (val, index) =>
                  ('0' + index).slice(-2)
                )}
                value={birth.hour}
                setValue={(e) => setBirth({ ...birth, hour: e })}
                readOnly
              />
            </FormInput>
            <SeparationText>:</SeparationText>
            <FormInput width="50%">
              <DropdownList
                disabled={checkbox}
                placeholder="Min"
                list={Array.from(new Array(60), (val, index) =>
                  ('0' + index).slice(-2)
                )}
                value={birth.min}
                setValue={(e) => setBirth({ ...birth, min: e })}
                readOnly
              />
            </FormInput>
          </FormWrapper>
        </FormRow>
        <FormRow>
          <FormWrapper>
            <FormInput width="50%">
              <Input
                type="text"
                placeholder="Cidade natal"
                value={formData.city}
                onChange={(e) => handleCities(e, 'city')}
              />
              <Autocomplete>
                {citiesList && formData.city !== '' ? (
                  <CityList list={citiesList} />
                ) : null}
              </Autocomplete>
            </FormInput>
            {/* <FormInput width="50%">
              <Input
                type="text"
                placeholder="Estado"
                value={formData.state}
                onChange={e =>
                  setFormData({ ...formData, state: e.target.value })
                }
              />
            </FormInput> */}
          </FormWrapper>
        </FormRow>
        <FormRow borderBottom>
          <FormWrapper>
            <FormInput width="100%">
              <CheckboxWrapper>
                <Checkbox
                  type="checkbox"
                  checked={checkbox}
                  onChange={handleCheckbox}
                />
                <CheckboxLabel>Não sei a hora de nascimento</CheckboxLabel>
              </CheckboxWrapper>
            </FormInput>
          </FormWrapper>
        </FormRow>
        <FormRow>
          <FormWrapper>
            <FormInput width="100%">
              <CheckboxWrapper>
                <Checkbox
                  type="checkbox"
                  onChange={() => setTermsAccepted(!termsAccepted)}
                />
                <CheckboxLabel>
                  Eu aceito os{' '}
                  <span onClick={props.handleModal}>Termos de Uso</span> do
                  Synas.
                </CheckboxLabel>
              </CheckboxWrapper>
            </FormInput>
          </FormWrapper>
        </FormRow>
        <FormWrapper>
          <Button type="submit" loading={loading}>
            SALVAR
          </Button>
        </FormWrapper>
        <FormWrapper>
          <ErrorText>{message}</ErrorText>
        </FormWrapper>
      </Form>
    </Container>
  );
}

const ModalTitle = ({ formData, birth, checkbox }) => (
  <ModalTitleWrapper>
    <div>
      <b>
        {formData.name} - {birth.day}/{birth.month}/{birth.year}
      </b>
    </div>
    <div>
      Nascido(a) em {formData.birthCity.cityName} às{' '}
      {checkbox ? '12' : birth.hour}h {checkbox ? '00' : birth.min}min
    </div>
  </ModalTitleWrapper>
);

const ModalBody = (props) => (
  <ModalBodyWrapper>
    <ModalBodyRow>
      <img src={dangerImg} alt="danger" />
      <span>
        <b>Certifique-se de que suas informações estão corretas!</b> Elas serão
        usadas para o cálculo de seu mapa astral, e você{' '}
        <b>não poderá modificá-las após o cadastro!</b>
      </span>
    </ModalBodyRow>
    {props.checkbox && (
      <ModalBodyRow>
        <img src={dangerImg} alt="danger" />
        <span>
          Já que você não sabe a hora de seu nascimento, utilizaremos 12:00
          (meio-dia) para o cálculo de seu mapa astral.{' '}
          <b>Os resultados podem não ser precisos por causa disso!</b>
        </span>
      </ModalBodyRow>
    )}
  </ModalBodyWrapper>
);
