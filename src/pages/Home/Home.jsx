import "./Home.scss";
import CompanyRepresentation from "../../components/CompanyRepresentation/CompanyRepresentation";
import OurServices from "../../components/OurServices/OurServices";
import TypesOfCargo from "../../components/TypesOfCargo/TypesOfCargo";
import ContactDetails from "../../components/ContactDetails/ContactDetails";
import WorkScheme from "../../components/WorkScheme/WorkScheme";
import Cooperation from "../../components/Cooperation/Cooperation";
import CustomsClearance from "../../components/CustomsClearance/CustomsClearance";

function Home() {
    return (
        <div className="home">
            <CompanyRepresentation />
            <OurServices />
            <WorkScheme />
            <Cooperation />
            <TypesOfCargo />
            <CustomsClearance />
            <ContactDetails />
        </div>
    )
}

export default Home;