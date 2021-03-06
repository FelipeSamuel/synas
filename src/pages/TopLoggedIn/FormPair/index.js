import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//COMPONENTS
import { Button, DropdownList } from '../../../components';

//REDUX
import { Creators as CompatibilityActions } from '../../../store/ducks/compatibility';
import { Creators as PairsActions } from '../../../store/ducks/pairs';

//SERVICES
import {
  getCity,
  postPair,
  getPairsCompatibility,
  getBirthCoord,
  getUserMandala,
  getUserHouses,
  getHouses,
} from '../../../services';

//ASSETS
import loadingImg from '../../../assets/load.svg';

//STYLE
import {
  FormContainer,
  FormRow,
  FormItem,
  Input,
  Autocomplete,
  CheckboxWrapper,
  ListFloat,
  ErrorText,
  SeparationLine,
  Text,
  LoadingFloat,
  Loading,
} from './styles';

import {
  requiredFields,
  validateDates,
  validateSex,
} from '../../../utils/validation';
import { USER_COMPATIBILITY } from '../../../constants/variables';

export default function FormPair(props) {
  //REDUX
  const dispatch = useDispatch();
  const userRedux = useSelector((state) => state.user.user);
  const pairs = useSelector((state) => state.pairs.pairs);

  // console.log(pairs);

  //GENERAL HOOKS
  const [user, setUser] = useState(userRedux);
  const [formData, setFormData] = useState({
    city: '',
    birthCity: null,
    pairName: '',
    pairSex: '',
  });
  const [birth, setBirth] = useState({
    year: '',
    month: '',
    day: '',
    hour: '',
    min: '',
  });
  const [citiesList, setCitiesList] = useState(null);
  const [checkbox, setCheckbox] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [cityTimeout, setCityTimeout] = useState(0);
  const [searchingCity, setSearchingCity] = useState(false);

  //FUNCTIONS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      requiredFields({ formData, birth, checkbox });
      validateDates(birth);
      validateSex(formData);

      props.handleCompatibilityScroll();
      props.handleOpenLoadingModal();

      setErrorMsg('');

      const date = `${birth.year}-${birth.month}-${birth.day}`;
      const time = checkbox ? '12:00:00' : `${birth.hour}:${birth.min}:00`;

      const initialSignupParams = {
        name: formData.pairName,
        birth_date: `${date} ${time}`,
        city: formData.birthCity,
        sex: formData.pairSex === 'Masculino' ? 'M' : 'F',
      };

      const coord = await getBirthCoord(formData.birthCity);

      const signupParams = {
        ...initialSignupParams,
        birth_tz: -3,
        birth_lat_min: coord.lat_min,
        birth_lat: coord.lat_deg,
        birth_lng_min: coord.lng_min,
        birth_lng: coord.lng_deg,
        country: coord.address_components.find((comp) =>
          comp.types.find((type) => type === 'country')
        ).short_name,
      };

      const responsePair = await postPair(signupParams);
      props.handlePercentage(20);

      const pair = responsePair;
      pair.graph = await getUserMandala(pair);
      props.handlePercentage(30);

      pair.houses = await getUserHouses(pair);
      pair.fHouses = getHouses(pair);
      props.handlePercentage(50);

      const newPairs = pairs.slice();
      newPairs.push(pair);
      dispatch(PairsActions.setPairs(newPairs));
      dispatch(PairsActions.setPair(pair));
      props.handlePercentage(70);

      const responsePairsCompatibility = await getPairsCompatibility(
        user,
        pair
      );
      props.handlePercentage(80);

      dispatch(
        CompatibilityActions.setCompatibility(responsePairsCompatibility)
      );
      props.handlePercentage(90);

      localStorage.setItem(
        USER_COMPATIBILITY,
        JSON.stringify(responsePairsCompatibility)
      );
      props.handlePercentage(100);

      props.handleCloseLoadingModal();
      props.handlePercentage(0);
      props.handleCompatibility();

      setLoading(false);
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
      return false;
    }
  };

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
      birthCity: citiesList[i].formattedName,
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
            const response = await getCity(formData.city);
            if (response.data.data.length > 0) {
              const arr = response.data.data;
              setSearchingCity(false);
              setCitiesList(arr);
            }
          }
        }
      }, 1000)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.city]);

  useEffect(() => {
    setUser(userRedux);
  }, [userRedux]);

  return (
    <FormContainer>
      <FormRow>
        <FormItem>
          <Input
            placeholder="Nome do par"
            value={formData.pairName}
            onChange={(e) =>
              setFormData({ ...formData, pairName: e.target.value })
            }
          />
        </FormItem>
        <FormItem small>
          <DropdownList
            placeholder="Sexo"
            list={['Masculino', 'Feminino']}
            value={formData.pairSex}
            setValue={(e) => setFormData({ ...formData, pairSex: e })}
            readOnly
          />
        </FormItem>
      </FormRow>
      <SeparationLine>
        <div />
        <span>Dados de nascimento do par</span>
        <div />
      </SeparationLine>
      <SeparationLine />
      <FormRow>
        <FormItem>
          <DropdownList
            placeholder="Dia"
            list={Array.from(new Array(31), (val, index) => index + 1)}
            value={birth.day}
            setValue={(e) => setBirth({ ...birth, day: e })}
            readOnly
          />
        </FormItem>
        <Text>/</Text>
        <FormItem>
          <DropdownList
            placeholder="M??s"
            list={Array.from(new Array(12), (val, index) => index + 1)}
            value={birth.month}
            setValue={(e) => setBirth({ ...birth, month: e })}
            readOnly
          />
        </FormItem>
        <Text>/</Text>
        <FormItem>
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
        </FormItem>
      </FormRow>
      <FormRow>
        <FormItem small>
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
        </FormItem>
        <Text>:</Text>
        <FormItem small>
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
        </FormItem>
      </FormRow>
      <FormRow>
        <FormItem small>
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
        </FormItem>
      </FormRow>
      <FormRow borderBottom>
        <FormItem>
          <CheckboxWrapper>
            <input
              type="checkbox"
              placeholder="N??o sei a hora de nascimento"
              checked={checkbox}
              onChange={() => setCheckbox((prevState) => !prevState)}
            />
            N??o sei a hora de nascimento
          </CheckboxWrapper>
        </FormItem>
      </FormRow>
      <SeparationLine full />
      <ErrorText>{errorMsg}</ErrorText>
      <FormRow>
        <Button
          loading={loading}
          onClick={(event) => {
            handleSubmit(event);
          }}
        >
          TESTAR
        </Button>
      </FormRow>
    </FormContainer>
  );
}
