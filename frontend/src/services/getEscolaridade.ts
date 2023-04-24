import Ischooling from "@/types/interfaceshcooling";
import api from "./api";

export async function getEscolaridade() {
    try {
      const response = await api.get("/escolaridade");
      const data = response.data;
      return data
    } catch (error) {
      console.log(error);
      alert('erro inesperado!');
    }
  }