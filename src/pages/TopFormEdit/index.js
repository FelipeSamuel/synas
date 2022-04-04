import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//COMPONENTS
import { Button } from '../../components';

//ACTIONS
import { Creators as UserActions } from '../../store/ducks/user';

//SERVICES
import { putUser } from '../../services';

//STYLE
import {
  Container,
  FormWrapper,
  FormRow,
  FormInput,
  Modal,
  Select,
  Text,
  Form,
  Input,
  ErrorText,
} from './styles';

export default function TopFormEdit(props) {
  //REDUX
  const dispatch = useDispatch();
  const userRedux = useSelector((state) => state.user.user);

  //GENERAL HOOKS
  const [user, setUser] = useState(userRedux);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    login: '',
    sex: 'Masculino',
    password: '',
    confirmPassword: '',
    // startDate: null,
    // startTime: null,
    // city: '',
    // birthCity: '',
    // state: '',
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [modalMsg, setModalMsg] = useState('');

  //FUNCTIONS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    if (
      formData.name === '' ||
      formData.name === null ||
      formData.name === undefined
    ) {
      setErrorMsg('NOME INVÁLIDO');
      setLoading(false);
      return false;
    }
    if (
      formData.login === '' ||
      formData.login === null ||
      formData.login === undefined
    ) {
      setErrorMsg('EMAIL INVÁLIDO');
      setLoading(false);
      return false;
    }
    // if (
    //   formData.startDate === '' ||
    //   formData.startDate === null ||
    //   formData.startDate === undefined
    // ) {
    //   setErrorMsg('DATA DE NASCIMENTO INVÁLIDA');
    //   setLoading(false);
    //   return false;
    // }
    // if (
    //   formData.startTime === '' ||
    //   formData.startTime === null ||
    //   formData.startTime === undefined
    // ) {
    //   setErrorMsg('HORA DE NASCIMENTO INVÁLIDA');
    //   setLoading(false);
    //   return false;
    // }
    // if (
    //   formData.city === '' ||
    //   formData.city === null ||
    //   formData.city === undefined
    // ) {
    //   setErrorMsg('CIDADE INVÁLIDA');
    //   setLoading(false);
    //   return false;
    // }
    if (
      formData.sex === '' ||
      formData.sex === null ||
      formData.sex === undefined
    ) {
      setErrorMsg('SEXO INVÁLIDO');
      setLoading(false);
      return false;
    }

    // const month =
    //   formData.startDate.getMonth() < 9
    //     ? '0' + (formData.startDate.getMonth() + 1)
    //     : formData.startDate.getMonth() + 1;

    // const birth =
    //   month +
    //   '/' +
    //   formData.startDate.getDate() +
    //   '/' +
    //   formData.startDate.getFullYear() +
    //   ' ' +
    //   formData.startTime.getHours() +
    //   ':' +
    //   formData.startTime.getMinutes() +
    //   ':00';

    // const profileParams = JSON.stringify({
    //   Genero: formData.sex,
    //   // DataNascimento: birth,
    //   // Cidade: {
    //   //   place_name: formData.birthCity.place_name,
    //   //   latitude: formData.birthCity.latitude,
    //   //   longitude: formData.birthCity.longitude,
    //   //   timezone_id: formData.birthCity.timezone_id,
    //   //   country_code: formData.birthCity.country_code,
    //   // },
    // });

    const userParams = JSON.stringify({
      Nome: formData.name,
    });

    try {
      const editUserResponse = await putUser(user.Id, userParams);

      localStorage.setItem('synas@user', JSON.stringify(editUserResponse.data));
      localStorage.setItem('synas@userId', JSON.stringify(editUserResponse.data.Id));
      dispatch(UserActions.setUserData(editUserResponse.data));

      setModalMsg('EDITADO COM SUCESSO!');
      setLoading(false);
    } catch {
      setModalMsg('OCORREU UM ERRO! EDIÇÃO NÃO CONCLUÍDA.');
      setLoading(false);
    }
  };

  // const handleCities = async (event, city) => {
  //   setFormData({
  //     ...formData,
  //     [city]: event.target.value,
  //   });
  //   // console.log(formData.cidadesLista)
  //   if (formData.city.length > 3) {
  //     const response = await getCity(formData.city);
  //     const arr = response.data.geonames;

  //     const arrCities = [];
  //     arr.map((el, index) => {
  //       if (el.country_code === 'BR') {
  //         arrCities.push(el);
  //       }
  //     });
  //     // console.log(arrCitys)
  //     setCitiesList(arrCities);
  //   }
  // };

  // const handleCitySelect = (i) => {
  //   setFormData({
  //     ...formData,
  //     birthCity: citiesList[i],
  //     city: citiesList[i].place_name,
  //   });
  //   setCitiesList(null);
  // };

  // const CityList = (props) => {
  //   const list = props.list;
  //   const listItem = list.map((el, i) => (
  //     <div key={i} onClick={() => handleCitySelect(i)}>
  //       {el.place_name}
  //     </div>
  //   ));
  //   return <ListFloat>{listItem}</ListFloat>;
  // };

  useEffect(() => {
    setUser(userRedux);
  }, [userRedux]);

  useEffect(() => {
    // const birthdate = user.Perfil.DataNascimento.split('T')
    //   .splice(0, 1)
    //   .join('')
    //   .split('-');
    // const year = birthdate[0];
    // const month = birthdate[1];
    // const day = birthdate[2];

    // const birthtime = user.Perfil.DataNascimento.split('T')
    //   .splice(-1)
    //   .join('')
    //   .split(':');
    // const hour = birthtime[0];
    // const minutes = birthtime[1];
    // const seconds = birthtime[2];

    // const completeDate = new Date(year, month - 1, day, hour, minutes, seconds);

    setFormData({
      id: user.Id,
      name: user.Nome,
      login: user.Login,
      sex: user.Perfil.Genero,
      // startDate: completeDate,
      // startTime: completeDate,
      // city: user.Perfil.Cidade.Place_name,
      // state: '',
      // birthCity: user.Perfil.Cidade,
    });
  }, [user, setFormData]);

  return (
    <Container>
      <Text>Edite aqui seus dados :)</Text>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <FormRow>
          <FormWrapper>
            <FormInput width="50%">
              <Input
                type="text"
                placeholder="Nome"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </FormInput>
            <FormInput width="50%">
              <Select
                onChange={(e) =>
                  setFormData({ ...formData, sex: e.target.value })
                }
              >
                <option disabled defaultValue value="">
                  Sexo
                </option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </Select>
            </FormInput>
          </FormWrapper>
        </FormRow>
        {/* <FormRow>
          <FormWrapper>
            <FormInput width="50%">
              <FormHelper>
                <DateCustomPicker
                  selected={formData.startDate}
                  maxDate={new Date()}
                  showYearDropdown
                  dateFormat="dd/MM/yyyy"
                  locale="pt-BR"
                  placeholderText="Data de nascimento"
                  onChange={(e) => setFormData({ ...formData, startDate: e })}
                  customInput={
                    <InputMask
                      mask="99/99/9999"
                      maskPlaceholder="dd/mm/yyyy"
                      value="12"
                    />
                  }
                />
              </FormHelper>
            </FormInput>
            <FormInput width="50%">
              <FormHelper>
                <DateCustomPicker
                  selected={formData.startTime}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={1}
                  timeCaption="Hora"
                  dateFormat="HH:mm"
                  locale="pt-BR"
                  placeholderText="Hora de nascimento"
                  onChange={(e) => setFormData({ ...formData, startTime: e })}
                  customInput={
                    <InputMask
                      mask="99:99"
                      maskPlaceholder="hh:mm"
                      value="12"
                    />
                  }
                />
              </FormHelper>
            </FormInput>
          </FormWrapper>
        </FormRow>
        <FormRow>
          <FormWrapper>
            <FormInput width="100%">
              <Input
                type="text"
                placeholder="Cidade"
                value={formData.city}
                onChange={(e) => handleCities(e, 'city')}
              />
              <Autocomplete>
                {citiesList && formData.city !== '' ? (
                  <CityList list={citiesList} />
                ) : null}
              </Autocomplete>
            </FormInput>
          </FormWrapper>
        </FormRow> */}
        <FormWrapper>
          <Button loading={loading}>SALVAR</Button>
        </FormWrapper>
        <FormWrapper>
          <ErrorText>{errorMsg}</ErrorText>
        </FormWrapper>
      </Form>
      <Form responsive onSubmit={(e) => handleSubmit(e)}>
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
              <Select
                onChange={(e) =>
                  setFormData({ ...formData, sex: e.target.value })
                }
              >
                <option disabled defaultValue value="">
                  Sexo
                </option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </Select>
            </FormInput>
          </FormWrapper>
        </FormRow>
        {/* <FormRow>
          <FormWrapper>
            <FormInput width="100%">
              <FormHelper>
                <DateCustomPicker
                  selected={formData.startDate}
                  maxDate={new Date()}
                  showYearDropdown
                  dateFormat="dd/MM/yyyy"
                  locale="pt-BR"
                  placeholderText="Data de nascimento"
                  onChange={(e) => setFormData({ ...formData, startDate: e })}
                  customInput={
                    <InputMask
                      mask="99/99/9999"
                      maskPlaceholder="dd/mm/yyyy"
                      value="12"
                    />
                  }
                />
              </FormHelper>
            </FormInput>
          </FormWrapper>
        </FormRow>
        <FormRow>
          <FormWrapper>
            <FormInput width="100%">
              <FormHelper>
                <DateCustomPicker
                  selected={formData.startTime}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={1}
                  timeCaption="Hora"
                  dateFormat="HH:mm"
                  locale="pt-BR"
                  placeholderText="Hora de nascimento"
                  onChange={(e) => setFormData({ ...formData, startTime: e })}
                  customInput={
                    <InputMask
                      mask="99:99"
                      maskPlaceholder="hh:mm"
                      value="12"
                    />
                  }
                />
              </FormHelper>
            </FormInput>
          </FormWrapper>
        </FormRow>
        <FormRow>
          <FormWrapper>
            <FormInput width="100%">
              <Input
                type="text"
                placeholder="Cidade"
                value={formData.city}
                onChange={(e) => handleCities(e, 'city')}
              />
              <Autocomplete>
                {citiesList && formData.city !== '' ? (
                  <CityList list={citiesList} />
                ) : null}
              </Autocomplete>
            </FormInput>
          </FormWrapper>
        </FormRow> */}
        <FormWrapper>
          <Button loading={loading}>SALVAR</Button>
        </FormWrapper>
        <FormWrapper>
          <ErrorText>{errorMsg}</ErrorText>
        </FormWrapper>
      </Form>
      <Modal>{modalMsg}</Modal>
    </Container>
  );
}
