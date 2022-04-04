import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Modal } from '../index';

//COMPONENTS
import { Button, DropdownList } from '../../index';

//SERVICES
import {
  postPairMapUpdate,
  // getCountryCode,
  getCity,
  getPairs,
} from '../../../services';

//ACTIONS
import { Creators as PairsActions } from '../../../store/ducks/pairs';

//ASSETS
import networkImg from '../../../assets/network.png';
import loadingImg from '../../../assets/load.svg';

//UTILS
import { countriesList } from '../../../utils';

//STYLES
import {
  ModalButtonContainer,
  ModalWrapper,
  ModalImage,
  ModalForm,
  ModalFormWrapper,
  ModalFormRow,
  ModalFormInput,
  Input,
  Autocomplete,
  ListFloat,
  LoadingFloat,
  Loading,
  FormWrapper,
  ErrorText,
} from './styles.js';

export default function ModalPairUpdate({ show, hide, save }) {
  //REDUX
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const updatingPair = useSelector((state) => state.pairs.updatingPair);

  //GENERAL HOOKS
  const [formData, setFormData] = useState({
    name: '',
    login: '',
    sex: '',
    password: '',
    confirmPassword: '',
    country: '',
    countryCode: '',
    city: '',
    birthCity: '',
    cityBirth: null,
  });
  const [citiesList, setCitiesList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [searchingCity, setSearchingCity] = useState(false);
  const [cityTimeout, setCityTimeout] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    if (formData.city === '') {
      setMessage('Insira os dados!');
      setLoading(false);
      return false;
    } else if (formData.birthCity === '') {
      setMessage('Selecione uma cidade de nascimento da lista apresentada!');
      setLoading(false);
      return false;
    } else {
      setLoading(true);

      try {
        const updateResponse = await postPairMapUpdate(
          updatingPair.Id,
          formData.birthCity.id
        );
        const pairsResponse = await getPairs();

        dispatch(
          PairsActions.setPairGraph(
            `data:image/svg+xml;utf8,${encodeURIComponent(
              updateResponse.data.Astrologia.MapaAstral
            )}`
          )
        );
        dispatch(PairsActions.setPairs(pairsResponse.data));
        setLoading(false);

        save();
      } catch (e) {
        if (e.response) {
          setMessage('Ocorreu um erro no update!');
          setLoading(false);
        }
      }
    }
  };

  // const handleCountrySelect = async (e) => {
  //   console.log(e.trim());
  //   var code = await getCountryCode(e.trim());
  //   setFormData({
  //     ...formData,
  //     country: e,
  //     countryCode: code.data,
  //   });
  // };

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

  useEffect(() => {
    if (cityTimeout) clearTimeout(cityTimeout);
    setCityTimeout(
      setTimeout(async () => {
        if (formData.city) {
          if (formData.city.length > 3) {
            setSearchingCity(true);
            const response = await getCity(formData.countryCode, formData.city);
            if (response.data.data.length > 0) {
              const arr = response.data.data;
              setSearchingCity(false);
              setCitiesList(arr);
            }
            // const arrCities = [];
            // arr.map((el, index) => {
            //   if (el.country_code === 'BR') {
            //     arrCities.push(el);
            //   }
            // });
            // console.log(arrCitys)
            // setCitiesList(arrCities);
          }
        }
      }, 1000)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.city]);

  return (
    <Modal
      show={show}
      hide={hide}
      title={
        <ModalWrapper>
          <h4>Precisamos revisar alguns dados!</h4>
          <h5>Insira novamente os dados do local de nascimento do par</h5>
        </ModalWrapper>
      }
      maxWidth="25vw"
      maxWidthResponsive="75vw"
      coloredBackground
    >
      <ModalButtonContainer>
        <ModalForm onSubmit={(e) => handleSubmit(e)}>
          <ModalFormRow>
            <ModalFormWrapper borderBottom>
              <ModalFormInput width="50%">
                {/* <DropdownList
                  placeholder="País natal"
                  list={countriesList}
                  value={formData.country}
                  setValue={(e) => handleCountrySelect(e)}
                  readOnly
                /> */}
              </ModalFormInput>
              <ModalFormInput width="50%">
                <Input
                  disabled={formData.country === ''}
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
              </ModalFormInput>
            </ModalFormWrapper>
          </ModalFormRow>
          <ModalImage>
            <img src={networkImg} alt="network.png" />
          </ModalImage>
          <FormWrapper>
            <Button type="submit" loading={loading}>
              SALVAR
            </Button>
          </FormWrapper>
          <FormWrapper>
            <ErrorText>{message}</ErrorText>
          </FormWrapper>
        </ModalForm>
      </ModalButtonContainer>
    </Modal>
  );
}
