import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';

//COMPONENTS
import { Button } from '../../components';

//ACTIONS
import { Creators as UserActions } from '../../store/ducks/user';
// import { Creators as PairsActions } from '../../store/ducks/pairs';

//SERVICES
import { getLogin } from '../../services';

//STYLE
import {
  Form,
  Input,
  ErrorText,
  Container,
  FormContainer,
  FormComponent,
} from './styles';

export default function TopFormLogin(props) {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setErrorMsg(null);
    if (login === '' || login === null || login === undefined) {
      setErrorMsg('Insira um email');
      return false;
    } else if (password === '' || password === null || password === undefined) {
      setErrorMsg('Insira uma senha');
      return false;
    } else {
      try {
        setLoading(true);

        const user = await getLogin(login, password);
        dispatch(UserActions.setUserData(user));

        setLoading(false);
        window.location.reload(false);
      } catch (e) {
        if (e.response.status === 401) {
          setLoading(false);
          setErrorMsg('Credenciais incorretas');
          return false;
        }

        setLoading(false);
        setErrorMsg('Erro de conexão com a internet');
      }
    }
  }

  return (
    <Container>
      <Form onSubmit={(e) => submit(e)}>
        <FormContainer>
          <FormComponent>
            <Input
              type="email"
              placeholder="Email"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </FormComponent>
          <FormComponent>
            <Input
              type="password"
              placeholder="Senha"
              autoComplete="false"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormComponent>
          <FormComponent small>
            <ErrorText>{errorMsg}</ErrorText>
          </FormComponent>
          <FormComponent>
            <Button loading={loading}>ENTRAR</Button>
          </FormComponent>
        </FormContainer>
      </Form>
    </Container>
  );
}
