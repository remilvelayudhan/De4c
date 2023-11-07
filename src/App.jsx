import './App.css';
import { StartServies } from './page/StartServies/StartServies';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import "@popperjs/core";
import "bootstrap"



import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Route,  createRoutesFromElements, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Footer } from './components/footer/Footer';
import { Account } from './page/account/Account';
import { Information } from './page/information/Information';
import { Address } from './page/address/Address';
import { CalenderDate } from './page/date/CalenderDate';
import { AccountInfo } from './page/accountInfo/AccountInfo';
import { Header } from './components/header/Header';
import { Home } from './page/home/Home';
import { Layout } from './page/layout/Layout';
import { Preference } from './page/preference/Preference';
import { ConfirmOrder } from './page/confirmOrder/ConfirmOrder';
import { Profile } from './page/profile/Profile';
import { AddressDeatils } from './page/addressDetails/AddressDeatils';

function App() {

  const Router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout />}>
          <Route path='/' index element={<Home />} />
          <Route path='/start' element={<StartServies />} />
          <Route path='/account' element={<Account />} />
          <Route path='/account-info' element={<AccountInfo />} />
          <Route path='/address' element={<Address />} />
          <Route path='/address-details' element={<AddressDeatils />} />
          <Route path='/date' element={<CalenderDate />} />
          <Route path='/info' element={<Information />} />
          <Route path='/preference' element={<Preference />} />
          <Route path='/confirmorder' element={<ConfirmOrder />} />
          <Route path='/profile' element={<Profile />} />
        </Route>

      </>
    ))

  return (
      <RouterProvider router={Router} />
  )
}

export default App


