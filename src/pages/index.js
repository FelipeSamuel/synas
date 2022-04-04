import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTransition } from 'react-spring';

//COMPONENTS
import {
  BodySection,
  Button,
  Footer,
  TopSection,
  ModalLoading,
  ModalPairUpdate,
  ModalProfile,
  ModalSignup,
  ModalTerms,
} from '../components';
import PairDeleteWarning from '../components/Modal/PairDeleteWarning';

//TOP SECTION COMPONENTS
// import TopFormEdit from './TopFormEdit';
import TopFormLogin from './TopFormLogin';
import TopFormSignup from './TopFormSignup';
import TopFormPasswordRecovery from './TopFormPasswordRecovery';
// import TopFormUpdate from './TopFormUpdate';
import TopLoggedIn from './TopLoggedIn';

//BODY SECTION COMPONENTS
import BodyHome from './BodyHome';
import BodyLoggedIn from './BodyLoggedIn';
import BodyCompatibility from './BodyCompatibility';
import BodyPairs from './BodyPairs';

//ASSETS
import homeImage from '../assets/image.png';
import network from '../assets/network.png';

//STYLE
import {
  MainContainer,
  GlobalStyle,
  TopSlideContainer,
  AnimatedTopDiv,
  AnimatedBodyDiv,
  FormSlideLeft,
  Image,
  CallToActionWrapper,
  CallToActionText,
  SignupButtonContainer,
  SignupButton,
  BodySlideContainer,
  Wrapper,
  WrapperResponsive,
} from './styles';

import { getPairs } from '../services';
import { Creators as PairsActions } from '../store/ducks/pairs';

export default function Home(props) {
  const dispatch = useDispatch();

  //REDUX
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchPairs = async () => {
      const pairs = await getPairs();
      dispatch(PairsActions.setPairs(pairs));
    };

    fetchPairs();
  }, []);

  //GENERAL HOOKS
  const [showModal, setShowModal] = useState({
    loading: false,
    pairUpdate: false,
    profile: false,
    signup: false,
    terms: false,
  });

  const [profileModal, setProfileModal] = useState({
    title: null,
    body: null,
  });

  const [signupModal, setSignupModal] = useState({
    title: null,
    body: null,
    handleSubmitPartTwo: null,
  });

  const [loadingModalPercentage, setLoadingModalPercentage] = useState(0);
  const [loading] = useState({
    signup: false,
    facebook: false,
  });

  const [finishedUpdate, setFinishedUpdate] = useState(false);
  const bodyRef = useRef(null);

  //TOP SLIDES
  const [activeTopSlide, setActiveTopSlide] = useState(user ? 4 : 0);
  const [topSlides] = useState([
    //home
    {
      slide: 'home',
      content: ({ style }) => (
        <AnimatedTopDiv style={{ ...style }}>
          <Wrapper>
            <CallToActionWrapper>
              <CallToActionText>
                Nos ajude a começar e experimente nossa ferramenta de{' '}
                <span>
                  análise da compatibilidade astrológica gratuitamente :){' '}
                </span>
              </CallToActionText>
              <Button onClick={() => handleChangeTopSlide(1)} fontSize="16px">
                QUERO TESTAR AGORA
              </Button>
            </CallToActionWrapper>
            <Image smallDisplay={props.smallDisplay}>
              <img src={homeImage} alt="home" />
            </Image>
          </Wrapper>
          <WrapperResponsive>
            <CallToActionText>
              Faça uma análise completa da <b>compatibilidade astrológica</b>
            </CallToActionText>
            <Image smallDisplay={props.smallDisplay}>
              <img src={network} alt="network.png" />
            </Image>
            {/* <FBButtonContainer>
              <Button facebook loading={loading.facebook}>
                ENTRAR COM FACEBOOK
              </Button>
              <SeparationLine>
                <div />
                <span>OU</span>
                <div />
              </SeparationLine>
            </FBButtonContainer> */}
            <TopFormLogin
              history={props.history}
              handleForgotPassword={() => handleChangeTopSlide(3)}
              handleSignup={() => handleChangeTopSlide(2)}
              handleSignin={() => {
                handleChangeTopSlide(4);
                handleChangeBodySlide(1);
              }}
              handleLoginNotUpdated={() => handleChangeTopSlide(6)}
            />
            <SignupButtonContainer responsive>
              <SignupButton
                loading={loading.signup}
                transparency={0.7}
                width="60%"
                height="32px"
                fontSize="10px"
                onClick={() => handleChangeTopSlide(2)}
              >
                NÃO TENHO CADASTRO
              </SignupButton>
            </SignupButtonContainer>
          </WrapperResponsive>
        </AnimatedTopDiv>
      ),
    },
    //login
    {
      slide: 'login',
      content: ({ style }) => (
        <AnimatedTopDiv column style={{ ...style }}>
          <Wrapper>
            <FormSlideLeft>
              <CallToActionText>
                Faça sua{' '}
                <span>
                  análise da compatibilidade astrológica gratuitamente :)
                </span>
              </CallToActionText>
              <TopFormLogin
                history={props.history}
                handleLogin={() => {
                  handleChangeTopSlide(4);
                  handleChangeBodySlide(1);
                }}
                handleLoginNotUpdated={() => handleChangeTopSlide(6)}
                handleForgotPassword={() => handleChangeTopSlide(3)}
              />
              {/* <FBButtonContainer>
                <Button facebook loading={loading.facebook}>
                  ENTRAR COM FACEBOOK
                </Button>
              </FBButtonContainer> */}
              <SignupButtonContainer>
                <SignupButton
                  loading={loading.signup}
                  transparency={0.7}
                  width="60%"
                  height="32px"
                  fontSize="10px"
                  onClick={() => handleChangeTopSlide(2)}
                >
                  NÃO TENHO CADASTRO
                </SignupButton>
              </SignupButtonContainer>
              <SignupButtonContainer responsive>
                <SignupButton
                  loading={loading.signup}
                  transparency={0.7}
                  width="100%"
                  // height="32px"
                  // fontSize="10px"
                  onClick={() => {
                    handleChangeTopSlide(2);
                    window.scrollTo(0, 0);
                  }}
                >
                  NÃO TENHO CADASTRO
                </SignupButton>
              </SignupButtonContainer>
            </FormSlideLeft>
            <Image smallDisplay={props.smallDisplay}>
              <img src={homeImage} alt="home" />
            </Image>
          </Wrapper>
          <WrapperResponsive>
            <CallToActionText>
              Faça uma análise completa da <b>compatibilidade astrológica</b>
            </CallToActionText>
            <Image smallDisplay={props.smallDisplay}>
              <img src={network} alt="network.png" />
            </Image>
            {/* <FBButtonContainer>
              <Button facebook loading={loading.facebook}>
                ENTRAR COM FACEBOOK
              </Button>
              <SeparationLine>
                <div />
                <span>OU</span>
                <div />
              </SeparationLine>
            </FBButtonContainer> */}
            <TopFormLogin
              history={props.history}
              handleLogin={() => {
                handleChangeTopSlide(4);
                handleChangeBodySlide(1);
              }}
              handleLoginNotUpdated={() => handleChangeTopSlide(6)}
              handleForgotPassword={() => handleChangeTopSlide(3)}
            />
            <SignupButtonContainer responsive>
              <SignupButton
                loading={loading.signup}
                transparency={0.7}
                width="60%"
                height="32px"
                fontSize="10px"
                onClick={() => handleChangeTopSlide(2)}
              >
                NÃO TENHO CADASTRO
              </SignupButton>
            </SignupButtonContainer>
          </WrapperResponsive>
        </AnimatedTopDiv>
      ),
    },
    //signup
    {
      slide: 'signup',
      content: ({ style }) => (
        <AnimatedTopDiv style={{ ...style }}>
          <Wrapper>
            <TopFormSignup
              handleSignup={() => {
                handleChangeTopSlide(4);
                handleChangeBodySlide(1);
              }}
              handleModal={() => {
                setShowModal({ ...showModal, terms: true });
              }}
              handleSignupModal={(
                ModalTitle,
                ModalBody,
                handleSubmitPartTwo
              ) => {
                setSignupModal({
                  title: ModalTitle,
                  body: ModalBody,
                  handleSubmitPartTwo: handleSubmitPartTwo,
                });
                setShowModal({ ...showModal, signup: true });
              }}
            />
            <Image smallDisplay={props.smallDisplay}>
              <img src={network} alt="network.png" />
            </Image>
          </Wrapper>
          <WrapperResponsive>
            <CallToActionText>
              Preencha suas informações e cadastre-se
            </CallToActionText>
            <TopFormSignup
              handleSignup={() => {
                handleChangeTopSlide(4);
                handleChangeBodySlide(1);
              }}
              handleModal={() => {
                setShowModal({ ...showModal, terms: true });
              }}
              handleSignupModal={(
                ModalTitle,
                ModalBody,
                handleSubmitPartTwo
              ) => {
                setSignupModal({
                  title: ModalTitle,
                  body: ModalBody,
                  handleSubmitPartTwo: handleSubmitPartTwo,
                });
                setShowModal({ ...showModal, signup: true });
              }}
            />
            <Button
              transparency={1}
              onClick={() => handleChangeTopSlide(0)}
              width="auto"
            >
              <p style={{ textDecoration: 'underline' }}>Voltar</p>
            </Button>
          </WrapperResponsive>
        </AnimatedTopDiv>
      ),
    },
    //passwordRecovery
    {
      slide: 'passwordRecovery',
      content: ({ style }) => (
        <AnimatedTopDiv style={{ ...style }}>
          <Wrapper>
            <TopFormPasswordRecovery />
            <Image smallDisplay={props.smallDisplay}>
              <img src={network} alt="network.png" />
            </Image>
          </Wrapper>
          <WrapperResponsive>
            <TopFormPasswordRecovery />
            <Image smallDisplay={props.smallDisplay}>
              <img src={network} alt="network.png" />
            </Image>
            <Button
              transparency={1}
              onClick={() => handleChangeTopSlide(0)}
              width="auto"
            >
              <p style={{ textDecoration: 'underline' }}>Voltar</p>
            </Button>
          </WrapperResponsive>
        </AnimatedTopDiv>
      ),
    },
    //loggedIn
    {
      slide: 'loggedIn',
      content: ({ style }) => (
        <AnimatedTopDiv style={{ ...style }}>
          <TopLoggedIn
            handleCompatibility={() => {
              handleChangeBodySlide(2);
            }}
            // handleCompatibilityScroll={() => window.scrollTo(0, bodyRef.current.offsetTop)}
            handleCompatibilityScroll={() =>
              bodyRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }
            handleProfile={() => {
              handleChangeBodySlide(1);
            }}
            handleEdit={() => handleChangeTopSlide(5)}
            handlePercentage={(percentage) => {
              setLoadingModalPercentage(percentage);
            }}
            handleOpenLoadingModal={() => {
              setShowModal({ ...showModal, loading: true });
            }}
            handleCloseLoadingModal={() => {
              setShowModal({ ...showModal, pair: false });
            }}
          />
        </AnimatedTopDiv>
      ),
    },
    // //edit
    // {
    //   slide: 'edit',
    //   content: ({ style }) => (
    //     <AnimatedTopDiv style={{ ...style }}>
    //       <Wrapper>
    //         <TopFormEdit
    //           handleEdit={() => handleChangeTopSlide(4)}
    //           history={props.history}
    //         />
    //         <Image smallDisplay={props.smallDisplay}>
    //           <img src={network} alt="network.png" />
    //         </Image>
    //       </Wrapper>
    //       <WrapperResponsive>
    //         <CallToActionText>
    //           Preencha suas informações e cadastre-se
    //         </CallToActionText>
    //         <TopFormEdit
    //           handleEdit={() => handleChangeTopSlide(4)}
    //           history={props.history}
    //         />
    //         <Button
    //           transparency={1}
    //           onClick={() => handleChangeTopSlide(4)}
    //           width="auto"
    //         >
    //           <p style={{ textDecoration: 'underline' }}>Voltar</p>
    //         </Button>
    //       </WrapperResponsive>
    //     </AnimatedTopDiv>
    //   ),
    // },
    // //update
    // {
    //   slide: 'update',
    //   content: ({ style }) => (
    //     <AnimatedTopDiv style={{ ...style }}>
    //       <Wrapper>
    //         <TopFormUpdate
    //           handleLogin={() => {
    //             handleChangeTopSlide(4);
    //             handleChangeBodySlide(1);
    //           }}
    //         />
    //         <Image smallDisplay={props.smallDisplay}>
    //           <img src={network} alt="network.png" />
    //         </Image>
    //       </Wrapper>
    //       <WrapperResponsive>
    //         <CallToActionText>
    //           Nós precisamos verificar seus dados!
    //         </CallToActionText>
    //         <TopFormUpdate
    //           handleLogin={() => {
    //             handleChangeTopSlide(4);
    //             handleChangeBodySlide(1);
    //           }}
    //         />
    //         <Button
    //           transparency={1}
    //           onClick={() => handleChangeTopSlide(0)}
    //           width="auto"
    //         >
    //           <p style={{ textDecoration: 'underline' }}>Voltar</p>
    //         </Button>
    //       </WrapperResponsive>
    //     </AnimatedTopDiv>
    //   ),
    // },
  ]);

  const handleChangeTopSlide = useCallback((i) => setActiveTopSlide(i), []);
  const topSlideTransitions = useTransition(activeTopSlide, (p) => p, {
    from: { opacity: 0, transform: 'translate3d(0,0,100%)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0%)' },
    leave: { opacity: 0, transform: 'translate3d(0,0,-50%)' },
  });

  //BODY SLIDES
  const [activeBodySlide, setActiveBodySlide] = useState(user ? 1 : 0);
  const [bodySlides] = useState([
    //home
    {
      slide: 'home',
      content: ({ style }) => (
        <AnimatedBodyDiv style={{ ...style }}>
          <BodyHome
            compatibilityClick={() => handleChangeTopSlide(1)}
            testNowClick={() => handleChangeTopSlide(1)}
          />
        </AnimatedBodyDiv>
      ),
    },
    //loggedIn
    {
      slide: 'loggedIn',
      content: ({ style }) => (
        <AnimatedBodyDiv style={{ ...style }}>
          <BodyLoggedIn
            style={{ ...style }}
            handleCompatibility={() => handleChangeBodySlide(2)}
            handleEdit={() => handleChangeTopSlide(5)}
            handleExit={() => {
              handleChangeTopSlide(1);
              localStorage.clear();
              window.location.reload(false);
            }}
            handlePercentage={(percentage) => {
              setLoadingModalPercentage(percentage);
            }}
            handleOpenLoadingModal={() => {
              setShowModal({ ...showModal, loading: true });
            }}
            handleCloseLoadingModal={() => {
              setShowModal({ ...showModal, pair: false });
            }}
          />
        </AnimatedBodyDiv>
      ),
    },
    //compatibility
    {
      slide: 'compatibility',
      content: ({ style }) => (
        <AnimatedBodyDiv style={{ ...style }}>
          <BodyCompatibility
            style={{ ...style }}
            handleEdit={() => handleChangeTopSlide(5)}
            handleCompatibility={() => {
              handleChangeBodySlide(1);
              window.location.reload(false);
            }}
            handleExit={() => {
              handleChangeTopSlide(1);
              localStorage.clear();
              window.location.reload(false);
            }}
            handleProfileModal={(ModalTitle, ModalBody) => {
              setProfileModal({
                title: ModalTitle,
                body: ModalBody,
              });
              setShowModal({ ...showModal, profile: true });
            }}
          />
        </AnimatedBodyDiv>
      ),
    },
  ]);
  const handleChangeBodySlide = useCallback((i) => setActiveBodySlide(i), []);
  const bodySlideTransitions = useTransition(activeBodySlide, (p) => p, {
    from: { opacity: 0, transform: 'translate3d(0,0,100%)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0%)' },
    leave: { opacity: 0, transform: 'translate3d(0,0,-50%)' },
  });

  return (
    // <Offline />
    <MainContainer>
      <GlobalStyle />
      <TopSection
        id="top"
        clickLogo={() => handleChangeTopSlide(0)}
        clickEnter={() => handleChangeTopSlide(1)}
        clickExit={() => {
          handleChangeTopSlide(1);
          localStorage.clear();
          window.location.reload(false);
        }}
        clickTheApp={() => handleChangeBodySlide(0)}
        clickCompatibilityTest={() => {
          handleChangeTopSlide(4);
          handleChangeBodySlide(1);
        }}
        shouldHide={activeTopSlide === 4}
      >
        <TopSlideContainer>
          {topSlideTransitions.map(({ item, props, key }) => {
            const Page = topSlides[item].content;
            return <Page key={key} style={props} />;
          })}
        </TopSlideContainer>
      </TopSection>
      <BodySection id="body">
        <BodySlideContainer ref={bodyRef}>
          {bodySlideTransitions.map(({ item, props, key }) => {
            const Page = bodySlides[item].content;
            return <Page key={key} style={props} />;
          })}
        </BodySlideContainer>
        {user && (
          <BodyPairs
            handleTestCompatibility={() => handleChangeBodySlide(2)}
            handlePercentage={(percentage) => {
              setLoadingModalPercentage(percentage);
            }}
            handleOpenLoadingModal={() => {
              setShowModal({ ...showModal, loading: true });
            }}
            handleCloseLoadingModal={() => {
              setShowModal({ ...showModal, loading: false });
            }}
            handleOpenPairUpdateModal={() => {
              setShowModal({ ...showModal, pairUpdate: true });
            }}
            finishedUpdate={finishedUpdate}
          />
        )}
      </BodySection>
      <Footer />
      <ModalTerms
        show={showModal.terms}
        hide={() => setShowModal({ ...showModal, terms: false })}
      />
      <ModalProfile
        show={showModal.profile}
        hide={() => setShowModal({ ...showModal, profile: false })}
        title={profileModal.title ? profileModal.title : ''}
        body={profileModal.body ? profileModal.body : <div></div>}
      />
      <ModalSignup
        show={showModal.signup}
        hide={() => setShowModal({ ...showModal, signup: false })}
        title={signupModal.title ? signupModal.title : ''}
        body={signupModal.body ? signupModal.body : <div></div>}
        save={() => {
          setShowModal({ ...showModal, signup: false });
          signupModal.handleSubmitPartTwo();
        }}
      />
      <ModalLoading
        show={showModal.loading}
        hide={() => setShowModal({ ...showModal, loading: false })}
        value={loadingModalPercentage}
        smallDisplay={props.smallDisplay}
      />
      <ModalPairUpdate
        show={showModal.pairUpdate}
        hide={() => setShowModal({ ...showModal, pairUpdate: false })}
        save={() => {
          setShowModal({ ...showModal, pairUpdate: false });
          setFinishedUpdate(true);
        }}
      />
      <PairDeleteWarning />
    </MainContainer>
  );
}
