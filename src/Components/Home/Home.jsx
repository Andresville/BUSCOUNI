import { Banner } from "../Banner/Banner"
import { Degree } from "../Degree/Degree"
import { DegreeCard } from "../DegreeCard/DegreeCard"
import { Search } from "../Search/Search"


export const Home = () => {
  return (
    <>
    <Banner />
    <Search />
    <Degree />
    <DegreeCard />
    </>
  )
}