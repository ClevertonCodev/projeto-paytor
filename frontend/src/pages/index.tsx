import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import ButtonMY from "../components/button/index";
import handleClickStyle from "@/services/handleclickstyle";
import handleMobileNumber from "@/regex/handleMobileNumber";
import handleInputkey from "@/regex/handleInputKey";
import api from "@/services/api";
import IFormulario from "../types/interfaceformulario";
import Loader from "@/components/loader";
import Ischooling from "@/types/interfaceshcooling";
import CustomModal from "@/components/modal";
import { useRouter } from "next/router";
import { navigateToEscolaridade } from "@/services/link";


export default function FormPages() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [intended_position, setIntended] = useState<string>("");
  const [schooling, setSchooling] = useState<string>("");
  const [scholinget, setScholinget] = useState<Ischooling[]>([]);
  const [comments, setComments] = useState<string>("");
  const [curriculum, setCurriculum] = useState<File>();
  const [date_time, setDate] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  
  const router = useRouter();
  const data = {
    name: name,
    email: email,
    phone: phone,
    intended_position: intended_position,
    schooling_id: schooling,
    comments: comments,
    curriculum: curriculum,
    date_time: date_time,
  };
  
  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleClickStyle(event);
    setName(event.target.value);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleClickStyle(event);
    setEmail(event.target.value);
  };

  const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleClickStyle(event);
    setPhone(handleMobileNumber(event.target.value));
  };

  const handlePosition = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleClickStyle(event);
    setIntended(event.target.value);
  };

  const handleSchooling = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleClickStyle(event);
    setSchooling(event.target.value);
  };

  const handleComments = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleClickStyle(event);
    setComments(event.target.value);
  };

  const handleCurriculumChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file && file.size > 1024 * 1024) {
      alert(
        "O arquivo selecionado é muito grande. Por favor, selecione um arquivo até um 1MB."
      );
      event.target.value = "";
      return;
    }
    setCurriculum(file);
  };

  useEffect(() => {
    api.get("/escolaridade").then((response: { data: Ischooling[] }) => {
      setScholinget(response.data);
    })
    .catch((error) => {
      console.log(error);
      if(scholinget.length === 0){
       alert('Por favor, cadastre alguma escolaridade antes de continuar.');
        navigateToEscolaridade(router);
      }else{
        return alert('erro inesperado!');
      }
    });
  }, []);

  const Form = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    api
      .post("/formulario", data)
      .then((response: { data: IFormulario }) => {
        if (response.data) {
          alert("cadastrou com sucesso!");
          setIsLoading(false);
          setShowModal(true);
          setName("");
          setEmail("");
          setPhone("");
          setIntended("");
          setSchooling("");
          setComments("");
          setDate("");
        }
      })
      .catch((error) => {

        setIsLoading(false);
        if (error.response && error.response.data.errors) {
          const errors = error.response.data.errors;
          const errorMessages = Object.values(errors).flat();
         return alert(errorMessages.join('\n'));
        } else {
          console.log(error);
          
          setName("");
          setEmail("");
          setPhone("");
          setIntended("");
          setSchooling("");
          setComments("");
          setDate(""); 
          alert('erro inesperado!');
          
        }
      });
  };

  return (
    <Layout title="Currículum">
      {isLoading ? (
        <Loader />
      ) : (
        <section className="limiter-form mx-auto">
          <h2 className="title">Envie seu currículo</h2>
          <form id="form-pg" onSubmit={Form}>
            <div className="form-input">
              <label className="label-volume" id="name" htmlFor="name">
                Nome Completo
              </label>
              <input
                type="text"
                required
                value={name}
                onKeyDown={handleInputkey}
                onChange={handleName}
              />
            </div>
            <div className="form-input">
              <label className="label-volume" id="email" htmlFor="email">
                E-mail
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={handleEmail}
              />
            </div>

            <div className="form-input">
              <label className="label-volume" id="phone" htmlFor="phone">
                Telefone
              </label>
              <input type="text" value={phone} onChange={handlePhone} />
            </div>

            <div id="position" className="form-input">
              <label
                id="intended_position"
                className="label-volume"
                htmlFor="intended_position"
              >
                Cargo Desejado
              </label>
              <textarea
                rows={1}
                required
                value={intended_position}
                onKeyDown={handleInputkey}
                onChange={handlePosition}
              ></textarea>
            </div>

            <div className="form-input">
              <label
                className="label-volume"
                id="schooling"
                htmlFor="schooling"
              >
                Escolaridade
              </label>
              <select
                name="schooling"
                required
                value={schooling}
                onChange={handleSchooling}
              >
                <option value=""></option>
                {scholinget.map((escolaridade, index) => (
                  <option key={index} value={escolaridade.schooling}>
                    {escolaridade.schooling}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-input">
              <label id="comments" className="label-volume" htmlFor="comments">
                Observacões
              </label>
              <textarea
                rows={1}
                value={comments}
                onKeyDown={handleInputkey}
                onChange={handleComments}
              ></textarea>
            </div>

            <div className="form-input">
              <label
                className="label-volume"
                id="lcurriculum"
                htmlFor="curriculum"
              >
                Currículo
              </label>
              <input
                type="file"
                id="curriculum"
                accept=".doc, .docx, .pdf"
                onChange={handleCurriculumChange}
                required
              />
            </div>
            <div id="date" className="form-input">
              <label
                className="label-volume"
                id="datetime-local"
                htmlFor="datetime-local"
              >
                Data do Envio
              </label>
              <input
                type="datetime-local"
                id="datetime-local"
                value={date_time}
                onChange={(event) => setDate(event.target.value)}
                required
              />
            </div>
            <div className="buttons">
              <ButtonMY className="submit" type="submit">
                Enviar
              </ButtonMY>
              <ButtonMY className="reset" type="reset" >
                Resetar
              </ButtonMY>
            </div>
          </form>

          <CustomModal show={showModal} 
          onHide={
           () => setShowModal(false)
          }
          
          title={
            undefined
          }
          content={
            <>
            <h2 className="text-center">
              Currículo Cadastrado com Sucesso!
            </h2>
            <p className="text-center">Confira no seu E-mail!</p>
            </>
          } 
          headerclose={
            <ButtonMY className="btn-close" 
             onClick={() => {setShowModal(false)}} />
          } 
           footerclose={undefined}/>
        </section>
      )}
    </Layout>
  );
}
