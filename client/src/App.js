import './App.css'; 

import Home from './Components/Home'; 
import Navbar from './Components/Navbar'; 
import { Route, Routes ,Router} from 'react-router-dom'; 


import { useState } from 'react';
import RequireAuth from './Components/RequireAuth';
import FindRoutes from './Components/FindRoutes';

import Contactus from './Components/Contactus';


import BusTickets from './Components/BusTickets';
 import { AuthProvider } from './Components/auth';
 import ReqiureAuth from './Components/RequireAuth'
import Bookticket from './Components/Bookticket';
import TravelBus from './Components/TravelBus';
import Times from './Components/Times';
import BookingConfirmation from './Components/BookingConfirmation';
import EnterDetails from './Components/EnterDetails';
import BookingConfirmationTicket from './Components/BookingConfirmationTicket';
import Login from './Components/Login';
import Profile from './Components/Profile';


function App() {
  const [bookingDetails, setBookingDetails] = useState(null);
  return (
   <>
   <AuthProvider>
    <Navbar />
    <Routes>
      
    <Route path="/" element={<Home/>} />
      <Route path="about" element={<Contactus/>}/>
     
      <Route path="findroutes" element={<BusTickets/>}>
       
        <Route path="find-routes" element={<FindRoutes/>} />
       
      </Route>
      
   
      <Route path="book-ticket" element={<Bookticket/>}/>
      <Route path="find-routes" element={<FindRoutes/>}/>
      <Route path="travel-bus" element={<TravelBus/>}/>
      <Route path="/times" element={<Times />} /> 
    
        <Route path="/book-ticket" element={<Bookticket setBookingDetails={setBookingDetails} />} />
        <Route
          path="/booking-confirmation"
          element={<BookingConfirmation bookingDetails={bookingDetails} />}
        />
        <Route path='/login' element ={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
       <Route path="/enter-details" element={<EnterDetails />} /> 
         <Route path="/enterdetails" element={<TravelBus />} />
         <Route path="/booking-confirmation-ticket" element={<BookingConfirmationTicket />} />

    </Routes>
   </AuthProvider>
   </>
  );
}

export default App;


