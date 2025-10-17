import Footer from "../../components/Footer";
import CreateTripForm from "./CreateTripForm";
import { useParams } from "react-router-dom";
import TripConfigurator from "./TripConfigurator";
import { TripList } from "./TripList";


const Trips = () => {
  return (
    <>
      <div className="container">
        <div className="content">
         
          <TripList />
        </div>
        <Footer />
      </div>
    </>
  );
};

const CreateTrips = () => {
  return (
    <>
      <div className="container">
        <div className="content">
          
          <CreateTripForm />
        </div>
        <Footer />
      </div>
    </>
  );
};

const TripModify = () => {
  const { id } = useParams();

  return (
    <>
      <div className="container">
        <div className="content">
          
          <TripConfigurator id={id} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export { Trips, CreateTrips, TripModify };
