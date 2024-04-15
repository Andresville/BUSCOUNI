import { Down, DropdownFilters, DropdownList, SidebarContainer, SidebarTitle } from "../UI Kit/DesignSidebar";
import FlechaAbajo from "../../assets/FlechaAbajo.svg"

export const Siderbar = () => {
  return (
    <SidebarContainer>
                    <SidebarTitle>Filtros</SidebarTitle>
                    <DropdownFilters>
                        <DropdownList>Modalidad
                            <Down src={FlechaAbajo} alt="arrowdown" />
                        </DropdownList>

                        <DropdownList>Institución
                            <Down src={FlechaAbajo} alt="arrowdown" />
                        </DropdownList>

                        <DropdownList>Tipo
                            <Down src={FlechaAbajo} alt="arrowdown" />
                        </DropdownList>

                        <DropdownList>Duración
                            <Down src={FlechaAbajo} alt="arrowdown" />
                        </DropdownList>

                        <DropdownList>Público/Privado
                            <Down src={FlechaAbajo} alt="arrowdown" />
                        </DropdownList>
                    </DropdownFilters>
                </SidebarContainer>
  )
}