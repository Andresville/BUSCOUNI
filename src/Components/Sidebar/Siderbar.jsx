import { useState } from "react";
import { DropdownFilters, DropdownList, SearchSidebar, SidebarContainer, SidebarTitle } from "../UI Kit/DesignSidebar";
import { Down } from "../UI Kit/DesignSidebar";
import FlechaAbajo from "../../assets/FlechaAbajo.svg";

export const Siderbar = ({ onSearch }) => {
  const [modalidad, setModalidad] = useState("");
  const [nombre, setNombre] = useState("");
  const [duracion, setDuracion] = useState("");
  const [publicoPrivado, setPublicoPrivado] = useState("");

  const handleModalidadChange = (e) => {
    const searchTerm = e.target.value;
    setModalidad(searchTerm);
    onSearch(searchTerm);
  };

  const handleNombreChange = (e) => {
    const searchTerm = e.target.value;
    setNombre(searchTerm);
    onSearch(searchTerm);
  };

  const handleDuracionChange = (e) => {
    const searchTerm = e.target.value;
    setDuracion(searchTerm);
    onSearch(searchTerm);
  };

  const handlePublicoPrivadoChange = (e) => {
    const searchTerm = e.target.value;
    setPublicoPrivado(searchTerm);
    onSearch(searchTerm);
  };

  return (
    <SidebarContainer>
      <SidebarTitle>Filtros</SidebarTitle>
      <DropdownFilters>
        <DropdownList>Modalidad
          <Down src={FlechaAbajo} alt="arrowdown" />
          <SearchSidebar
          value={modalidad}
          onChange={handleModalidadChange}
          placeholder="Modalidad"
        />
        </DropdownList>
        
        <DropdownList>Institución
          <Down src={FlechaAbajo} alt="arrowdown" />
          <SearchSidebar
          value={nombre}
          onChange={handleNombreChange}
          placeholder="Nombre"
        />
        </DropdownList>
        
        <DropdownList>Duración
          <Down src={FlechaAbajo} alt="arrowdown" />
          <SearchSidebar
          value={duracion}
          onChange={handleDuracionChange}
          placeholder="Duración"
        />
        </DropdownList>
        
        <DropdownList>Público/Privado
          <Down src={FlechaAbajo} alt="arrowdown" />
          <SearchSidebar
          value={publicoPrivado}
          onChange={handlePublicoPrivadoChange}
          placeholder="Público/Privado"
        />
        </DropdownList>
        
      </DropdownFilters>
    </SidebarContainer>
  );
};
