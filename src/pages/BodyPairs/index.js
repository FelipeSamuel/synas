import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { palette } from '../../theme';

//COMPONENTS
import { ProfilePhoto, Button, Sign } from '../../components';

//REDUX
import { Creators as UserActions } from '../../store/ducks/user';
import { Creators as CompatibilityActions } from '../../store/ducks/compatibility';
import { Creators as PairsActions } from '../../store/ducks/pairs';

//SERVICES
import {
  getPairsCompatibility,
  getUserHouses,
  getHouses,
  getUserMandala,
} from '../../services';

import { handleBirthDate } from '../../utils';

//STYLE
import {
  PairsContainer,
  Wrapper,
  PairsTitle,
  CarouselContainer,
  CarouselContainerResponsive,
  Carousel,
  CarouselCard,
  CardRow,
  Title,
  CardText,
  EmptyCarousel,
  TrashIconContainer,
} from './styles';

import {
  USER_COMPATIBILITY,
  USER_PAIR,
  USER_PAIRS,
} from '../../constants/variables';

import TrashIcon from '../../assets/trash.svg';

export default function BodyPairs(props) {
  //REDUX
  const dispatch = useDispatch();
  const pairs = useSelector((state) => state.pairs.pairs);
  const user = useSelector((state) => state.user.user);

  //GENERAL HOOKS
  const [clickedPair, setClickedPair] = useState();
  const [loading, setLoading] = useState([]);

  //FUNCTIONS
  // const handleLoading = (pair) => {
  //   let newArr = [...loading];
  //   newArr.forEach((el) => {
  //     if (el.id === pair.ID) pair.loading = !pair.loading;
  //   });
  //   setLoading(newArr);
  // };

  const calculateCompatibility = async (pair) => {
    props.handleOpenLoadingModal();

    pair.houses = await getUserHouses(pair);
    pair.fHouses = getHouses(pair);
    props.handlePercentage(15);

    const responsePairsCompatibility = await getPairsCompatibility(user, pair);
    props.handlePercentage(40);

    pair.graph = await getUserMandala(pair);
    props.handlePercentage(50);

    dispatch(CompatibilityActions.setCompatibility(responsePairsCompatibility));
    props.handlePercentage(60);

    localStorage.setItem(
      USER_COMPATIBILITY,
      JSON.stringify(responsePairsCompatibility)
    );
    props.handlePercentage(65);

    dispatch(PairsActions.setPair(pair));
    props.handlePercentage(75);

    localStorage.setItem(USER_PAIR, JSON.stringify(pair));
    props.handlePercentage(80);

    // eslint-disable-next-line no-unused-vars
    const pairsCopy = pairs.slice();
    const index = pairsCopy.indexOf((pairEl) => pairEl.id === pair.id);
    pairsCopy[index] = pair;
    dispatch(PairsActions.setPairs(pairsCopy));
    props.handlePercentage(95);

    localStorage.setItem(USER_PAIRS, JSON.stringify(pairsCopy));
    props.handlePercentage(100);

    props.handleCloseLoadingModal();

    // handleLoading(pair);

    props.handleTestCompatibility();
    props.handlePercentage(0);
  };

  const handleClick = async (pair) => {
    // handleLoading(pair);
    calculateCompatibility(pair);
  };

  const openDeleteModal = (id) => {
    dispatch(PairsActions.openModal(id));
  };

  const getCardsArray = (responsive) =>
    pairs.map((pair) => (
      <CarouselCard>
        <TrashIconContainer onClick={() => openDeleteModal(pair.id)}>
          <img src={TrashIcon} alt="Lixeira" />
          {/* <TrashIcon /> */}
        </TrashIconContainer>
        <ProfilePhoto small genero={pair.sex} />
        <Title>{pair.name}</Title>
        <Title>{handleBirthDate(pair.birth_date)}</Title>
        <CardRow first>
          <CardText className="text">Signo: {pair.planets.Sun.sign}</CardText>
          <Sign colored sign={pair.planets.Sun.sign} />
        </CardRow>
        <CardRow>
          <CardText className="text">
            Ascendente: {pair.planets.Asc.sign}
          </CardText>
          <Sign colored sign={pair.planets.Asc.sign} />
        </CardRow>
        <CardRow last>
          <CardText className="text">Lua: {pair.planets.Moon.sign}</CardText>
          <Sign colored sign={pair.planets.Moon.sign} />
        </CardRow>
        <Button
          loading={pair.loading}
          onClick={() => {
            // dispatch(PairsActions.setUpdatingPair(pair));
            setClickedPair(pair);
            handleClick(pair);
          }}
          fontSize={'0.75em'}
        >
          TESTAR COMPATIBILIDADE
        </Button>
      </CarouselCard>
    ));

  useEffect(() => {
    if (loading.length === 0 && pairs) {
      // eslint-disable-next-line array-callback-return
      pairs.map((pair) => {
        loading.push({
          active: false,
          id: pair.id,
        });
      });
    }
  }, [pairs, loading]);

  useEffect(() => {
    if (props.finishedUpdate) calculateCompatibility(clickedPair);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.finishedUpdate]);

  useEffect(() => {
    if (loading.length === 0 && pairs) {
      // eslint-disable-next-line array-callback-return
      pairs.map((pair) => {
        loading.push({
          active: false,
          id: pair.id,
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PairsContainer>
      <Wrapper>
        <PairsTitle>Compatibilidades anteriores</PairsTitle>
        <CarouselContainer>
          {pairs ? (
            pairs.length !== 0 ? (
              <Carousel
                slides={getCardsArray(false)}
                navIconColor={palette.purple}
                navSize={5}
                slidesShown={3}
                style={{
                  '& div': {
                    backgroundColor: 'red',
                  },
                }}
              />
            ) : (
              <EmptyCarousel>
                Você ainda não fez nenhuma compatibilidade!
              </EmptyCarousel>
            )
          ) : (
            <EmptyCarousel>
              Você ainda não fez nenhuma compatibilidade!
            </EmptyCarousel>
          )}
        </CarouselContainer>
        <CarouselContainerResponsive>
          {pairs ? (
            pairs.length !== 0 ? (
              <Carousel
                slides={getCardsArray(true)}
                navIconColor={palette.purple}
                navSize={10}
                slidesShown={1}
              />
            ) : (
              <EmptyCarousel>
                Você ainda não fez nenhuma compatibilidade!
              </EmptyCarousel>
            )
          ) : (
            <EmptyCarousel>
              Você ainda não fez nenhuma compatibilidade!
            </EmptyCarousel>
          )}
        </CarouselContainerResponsive>
      </Wrapper>
    </PairsContainer>
  );
}
