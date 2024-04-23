import CienciaEInnovacionSanLuis from "../../assets/CienciaEInnovacionSanLuis.svg";
import { NavLink } from "react-router-dom";
import { LogoBrand, NavBarUl, NavBarLi, StyledBrand, TitleBrand, NavBarP } from "../UI Kit/DesignNav";

export const NavBar = () => {
    return (

        <StyledBrand>
            <LogoBrand src={CienciaEInnovacionSanLuis} alt="Logo" />
            <TitleBrand>Busco UNI</TitleBrand>

            <NavBarUl>
                <NavBarLi>
                <NavLink to={'/'}>
                    <NavBarP>Inicio</NavBarP>
                </NavLink>
                <NavLink to={'/'}>
                    <NavBarP>Sobre Nosotros</NavBarP>
                </NavLink>
                <NavLink to={'/universities'}>
                    <NavBarP>Buscar UNI</NavBarP>
                </NavLink>
                <NavLink to={'/'}>
                    <NavBarP>Comparador</NavBarP>
                </NavLink>
                <NavLink to={'/vocation'}>
                    <NavBarP>Test Vocacional</NavBarP>
                </NavLink>
                </NavBarLi>
            </NavBarUl>
        </StyledBrand>


    );
};