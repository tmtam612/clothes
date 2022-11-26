import React from 'react';
import { render, screen } from "@testing-library/react";
import App from './App';
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import axios from "axios";

test('renders learn react link', () => {
  console.log(1111);
  // render(
  //   <Provider store={store}>
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>
  //   </Provider>
  // );
  // const linkElement = screen.getAllByText(/Sign Up/i);
  // expect(linkElement).equal(linkElement);
});
