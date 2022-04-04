import React, { useState } from 'react';

//COMPONENTS
import { Button } from '../../components';

//SERVICES
import { postPasswordRecovery } from '../../services';

//STYLE
import {
  Container,
  Text,
  Form,
  FormWrapper,
  FormRow,
  Input,
  ErrorText,
} from './styles';

export default function FormPasswordRecovery(props) {
  const [login, setLogin] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (login === '' || login === null || login === undefined) {
      setMessage('EMAIL INVÁLIDO');
      setLoading(false);
      return false;
    }

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await postPasswordRecovery(login);
      setMessage(
        'UM EMAIL FOI ENVIADO PARA VOCÊ COM SUA NOVA SENHA :)'
      );
      setLoading(false);
    } catch (e) {
      console.log(e.response);
      if (e.response.status === 404)
        setMessage('ESSE EMAIL NÃO FOI ENCONTRADO NO SISTEMA!');
      else setMessage('OCORREU UM ERRO NA MUDANÇA DE SENHA!');
      setLoading(false);
    }
  };

  return (
    <Container>
      <Text>Digite o email abaixo para recuperar a senha!</Text>
      <Text responsive>
        Enviaremos um email com o link para alteração de senha
      </Text>
      <Form onSubmit={(e) => handlePassword(e)}>
        <FormWrapper>
          <FormRow>
            <Input
              type="email"
              placeholder="Email"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </FormRow>
          <FormRow>
            <Button type="submit" loading={loading}>
              Enviar
            </Button>
          </FormRow>
          <FormRow>
            <ErrorText>{message}</ErrorText>
          </FormRow>
        </FormWrapper>
      </Form>
    </Container>
  );
}
