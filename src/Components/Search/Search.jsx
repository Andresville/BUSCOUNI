import { useState } from 'react';
import { ButtonSearch, InputSearch, InputSearchContainer, SearchContainer, TextSearch } from "../UI Kit/DesignSearch"


export const Search = () => {

  const [carrera, setCarrera] = useState("");
  const [universidad, setUniversidad] = useState("");

  const handleSearch = () => {
    let searchTerm = "";
    if (carrera) {
      searchTerm = `/universities-degree/${carrera.toLowerCase().charAt(0).toUpperCase() + carrera.toLowerCase().slice(1).split(' ').join('_')}`;
    } else if (universidad) {
      searchTerm = `/universities/${universidad.toLowerCase().split(' ').join('_')}`;
    }
    window.location.href = searchTerm;
  };


  console.log(carrera);
  console.log(universidad);

  return (
    <SearchContainer>
      <TextSearch>¿Que queres estudiar?</TextSearch>
      <InputSearchContainer>
        <InputSearch type="text" 
        placeholder="Busca por carrera" 
        value={carrera}
        onChange={(e) => setCarrera(e.target.value)}
          />
        <InputSearch type="text" 
        placeholder="Busca por universidad"
        value={universidad}
        onChange={(e) => setUniversidad(e.target.value)}
         />
        <ButtonSearch onClick={handleSearch}>Buscar</ButtonSearch>
        </InputSearchContainer>
    </SearchContainer>
  )
}