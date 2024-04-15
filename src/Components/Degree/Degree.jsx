import { NavDegree, NavDegreeLi, NavDegreeUl, SearchDegree, TitleDegree } from "../UI Kit/DesignDegree";
import {white, blue} from "../UI Kit/Variables";

export const Degree = () => {
  return (
    <>
    <TitleDegree>Carreras mas buscadas</TitleDegree>
    <SearchDegree>
        <NavDegree>
            <NavDegreeUl>
                <NavDegreeLi t={white} ct={blue}>Programacion</NavDegreeLi>
                <NavDegreeLi f={blue} cf={white}>Economicas</NavDegreeLi>
                <NavDegreeLi f={blue} cf={white}>Medicina</NavDegreeLi>
                <NavDegreeLi f={blue} cf={white}>Derecho</NavDegreeLi>
            </NavDegreeUl>
        </NavDegree>
    </SearchDegree>
    </>
  )
}