import Layout from "@/components/layout";
import Loader from "@/components/loader";
import { useState } from "react";
import handleInputkey from "@/regex/handleInputKey";
import api from "@/services/api";
import ButtonMY from "@/components/button";
import { Form } from "react-bootstrap";
import { NextRouter, useRouter } from 'next/router'
export default function Escolaridade() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [schooling, setSchooling] = useState<string>("");
  const router = useRouter();
  const navigateToEscolaridade = (router: NextRouter) => {
    router.push('/')
  }
  const data = {
    schooling: schooling
  }
  console.log(schooling, data)
  const FormScho = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    api.post("/escolaridade", data)
      .then((response: { data: any }) => {
        if (response.data) {
          alert("cadastrou com sucesso!");
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        const erro = error.response.data.errors.schooling[0]
        if(erro){
          return alert(erro)
        } 
        alert('erro inesperado!');
      });
  };
  return (
    <Layout title={"escolaridade"}>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="limiter-form mx-auto">
          <h2 className="title">Nivel Escolaridade</h2>
          <Form onSubmit={FormScho}  className="form-scho">
            <Form.Group className="" >
              <Form.Label>Escolaridade</Form.Label>
              <Form.Control
                id="schoo"
                type="text"
                value={schooling}
                required
                onChange={(event) => setSchooling(event.target.value)}
                onKeyDown={handleInputkey}
              />
            </Form.Group>
            <div className="butt">
              <ButtonMY className="submit" type="submit">
                Enviar
              </ButtonMY>
              <ButtonMY className="reset" type="button" onClick={()=> navigateToEscolaridade(router)} >
                Voltar     
              </ButtonMY>
            </div>
          </Form>
        </section>
      )}
    </Layout>
  );
}
