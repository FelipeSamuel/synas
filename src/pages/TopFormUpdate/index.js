// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// //COMPONENTS
// import { Button, DropdownList } from '../../components';

// //ACTIONS
// import { Creators as UserActions } from '../../store/ducks/user';
// import { Creators as PairsActions } from '../../store/ducks/pairs';

// //SERVICES
// import {
//   postUserMapUpdate,
//   getCountryCode,
//   getCity,
//   getPairs,
// } from '../../services';

// //ASSETS
// import loadingImg from '../../assets/load.svg';

// //STYLE
// import {
//   Container,
//   FormWrapper,
//   FormRow,
//   FormInput,
//   Autocomplete,
//   ListFloat,
//   Text,
//   Form,
//   Input,
//   ErrorText,
//   LoadingFloat,
//   Loading,
// } from './styles';
// import { countriesList } from '../../utils';

// export default function TopFormUpdate(props) {
//   //REDUX
//   const dispatch = useDispatch();
//   const userRedux = useSelector((state) => state.user.user);

//   //GENERAL HOOKS
//   const [user] = useState(userRedux);
//   const [formData, setFormData] = useState({
//     name: '',
//     login: '',
//     sex: '',
//     password: '',
//     confirmPassword: '',
//     country: '',
//     countryCode: '',
//     city: '',
//     birthCity: '',
//     cityBirth: null,
//   });
//   const [birth] = useState({
//     year: '',
//     month: '',
//     day: '',
//     hour: '',
//     min: '',
//   });
//   const [citiesList, setCitiesList] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [cityTimeout, setCityTimeout] = useState(0);
//   const [searchingCity, setSearchingCity] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     if (formData.city === '') {
//       setMessage('Insira os dados!');
//       setLoading(false);
//       return false;
//     } else if (formData.birthCity === '') {
//       setMessage('Selecione uma cidade de nascimento da lista apresentada!');
//       setLoading(false);
//       return false;
//     } else {
//       setLoading(true);

//       try {
//         const updateResponse = await postUserMapUpdate(
//           user.id,
//           formData.birthCity.id
//         );
//         const pairsResponse = await getPairs(user.id);

//         dispatch(UserActions.setUserData(updateResponse.data));
//         dispatch(
//           UserActions.setUserGraph(
//             `data:image/svg+xml;utf8,${encodeURIComponent(
//               updateResponse.data.Astrologia.MapaAstral
//             )}`
//           )
//         );
//         dispatch(PairsActions.setPairs(pairsResponse.data));

//         setMessage('Obrigado! Agora você será redirecionado :)');
//         setLoading(false);

//         // window.location.reload(false);
//         props.handleLogin();
//       } catch (e) {
//         if (e.response) {
//           setMessage('Ocorreu um erro no update!');
//           setLoading(false);
//         }
//       }
//     }
//   };

//   const handleCountrySelect = async (e) => {
//     console.log(e.trim());
//     var code = await getCountryCode(e.trim());
//     setFormData({
//       ...formData,
//       country: e,
//       countryCode: code.data,
//     });
//   };

//   const handleCities = async (event, city) => {
//     setFormData({
//       ...formData,
//       [city]: event.target.value,
//       birthCity: '',
//     });
//   };

//   const handleCitySelect = (i) => {
//     setFormData({
//       ...formData,
//       birthCity: citiesList[i],
//       city: citiesList[i].name,
//     });
//     setCitiesList(null);
//   };

//   const CityList = (props) => {
//     const list = props.list;
//     const listItem = list.map((el, i) => (
//       <div key={i} onClick={() => handleCitySelect(i)}>
//         {el.formattedName}
//       </div>
//     ));
//     return <ListFloat>{listItem}</ListFloat>;
//   };

//   useEffect(() => {
//     if (cityTimeout) clearTimeout(cityTimeout);
//     setCityTimeout(
//       setTimeout(async () => {
//         // console.log(formData.cidadesLista)
//         if (formData.city) {
//           if (formData.city.length > 3) {
//             setSearchingCity(true);
//             const response = await getCity(formData.countryCode, formData.city);
//             if (response.data.data.length > 0) {
//               const arr = response.data.data;
//               setSearchingCity(false);
//               setCitiesList(arr);
//             }
//             // const arrCities = [];
//             // arr.map((el, index) => {
//             //   if (el.country_code === 'BR') {
//             //     arrCities.push(el);
//             //   }
//             // });
//             // console.log(arrCitys)
//             // setCitiesList(arrCities);
//           }
//         }
//       }, 1000)
//     );
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [formData.city]);

//   // eslint-disable-next-line no-unused-vars
//   let daysOptions = null;
//   const daysOptionsFeb = Array.from(new Array(29), (val, index) => index + 1);
//   const daysOptionsLess = Array.from(new Array(30), (val, index) => index + 1);
//   const daysOptionsFull = Array.from(new Array(31), (val, index) => index + 1);

//   if (birth.month === 2) daysOptions = daysOptionsFeb;
//   else if (
//     birth.month === 4 ||
//     birth.month === 6 ||
//     birth.month === 9 ||
//     birth.month === 11
//   )
//     daysOptions = daysOptionsLess;
//   else daysOptions = daysOptionsFull;

//   return (
//     <Container>
//       <Text>Nós precisamos confirmar alguns dados com você!</Text>
//       <Form onSubmit={(e) => handleSubmit(e)}>
//         <FormRow>
//           <FormWrapper borderBottom>
//             <FormInput width="50%">
//               <DropdownList
//                 placeholder="País natal"
//                 list={countriesList}
//                 value={formData.country}
//                 setValue={(e) => handleCountrySelect(e)}
//                 readOnly
//               />
//             </FormInput>
//             <FormInput width="50%">
//               <Input
//                 disabled={formData.country === ''}
//                 type="text"
//                 placeholder="Cidade natal"
//                 value={formData.city}
//                 onChange={(e) => handleCities(e, 'city')}
//               />
//               <Autocomplete>
//                 {citiesList && !searchingCity && formData.city !== '' ? (
//                   <CityList list={citiesList} />
//                 ) : searchingCity && formData.city !== '' ? (
//                   <LoadingFloat>
//                     <Loading src={loadingImg} />
//                   </LoadingFloat>
//                 ) : null}
//               </Autocomplete>
//             </FormInput>
//           </FormWrapper>
//         </FormRow>
//         <FormWrapper>
//           <Button type="submit" loading={loading}>
//             SALVAR
//           </Button>
//         </FormWrapper>
//         <FormWrapper>
//           <ErrorText>{message}</ErrorText>
//         </FormWrapper>
//       </Form>
//       <Form responsive onSubmit={(e) => handleSubmit(e)}>
//         <FormRow>
//           <FormWrapper>
//             <FormInput width="50%">
//               <DropdownList
//                 placeholder="País natal"
//                 list={countriesList}
//                 value={formData.country}
//                 setValue={(e) => handleCountrySelect(e)}
//                 readOnly
//               />
//             </FormInput>
//             <FormInput width="50%">
//               <Input
//                 disabled={formData.country === ''}
//                 type="text"
//                 placeholder="Cidade natal"
//                 value={formData.city}
//                 onChange={(e) => handleCities(e, 'city')}
//               />
//               <Autocomplete>
//                 {citiesList && formData.city !== '' ? (
//                   <CityList list={citiesList} />
//                 ) : null}
//               </Autocomplete>
//             </FormInput>
//             {/* <FormInput width="50%">
//               <Input
//                 type="text"
//                 placeholder="Estado"
//                 value={formData.state}
//                 onChange={e =>
//                   setFormData({ ...formData, state: e.target.value })
//                 }
//               />
//             </FormInput> */}
//           </FormWrapper>
//         </FormRow>
//         <FormWrapper>
//           <Button type="submit" loading={loading}>
//             SALVAR
//           </Button>
//         </FormWrapper>
//         <FormWrapper>
//           <ErrorText>{message}</ErrorText>
//         </FormWrapper>
//       </Form>
//     </Container>
//   );
// }
