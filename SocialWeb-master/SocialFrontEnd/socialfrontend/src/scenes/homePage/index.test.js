import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import HomePage from './index';
import { Provider } from 'react-redux';
import { store } from "../../state/index";


// describe('HomePage', () => {
//     it('renders the UserWidget and MyPostWidget', () => {
//       const { getByTestId } = render(<HomePage />);
  
//       // Verify that the UserWidget is rendered
//       const userWidget = getByTestId('user-widget');
//       expect(userWidget).toBeInTheDocument();
  
//       // Verify that the MyPostWidget is rendered
//       const myPostWidget = getByTestId('my-post-widget');
//       expect(myPostWidget).toBeInTheDocument();
//     });
  
//     it('renders the PostsWidget when the user is logged in', () => {
//       // Mock the user ID and picture path in the Redux store
//       const store = {
//         user: {
//           _id: '123',
//           picturePath: 'SocialFrontEnd/socialfrontend/public/assets/linkedin.png',
//         },
//       };
  
//       const { getByTestId } = render(<HomePage />, { store });
  
//       // Verify that the PostsWidget is rendered
//       const postsWidget = getByTestId('posts-widget');
//       expect(postsWidget).toBeInTheDocument();
//     });
//   });


describe("HomePage", () => {
    it("should render the Navbar component", () => {
      render(      
      <Provider store={store}>
        <HomePage />
      </Provider>);
      expect(screen.getByRole("header")).toBeInTheDocument();
    });
  
    it("should render the UserWidget component", () => {
      render(      
      <Provider store={store}>
        <HomePage />
      </Provider>);
      expect(screen.getByRole("img")).toBeInTheDocument();
    });
  
    it("should render the MyPostWidget component", () => {
      render(     
     <Provider store={store}>
        <HomePage />
      </Provider>);
      expect(screen.getByRole("article")).toBeInTheDocument();
    });
  
    it("should render the PostsWidget component", () => {
      render(      
      <Provider store={store}>
        <HomePage />
      </Provider>);
      expect(screen.getByRole("list")).toBeInTheDocument();
    });
  
    it("should render the AdvertWidget component on non-mobile screens", () => {
      render(     
     <Provider store={store}>
        <HomePage />
      </Provider>);
      expect(screen.queryByRole("advert")).toBeNull();
  
      render( 
     <Provider store={store}>
        <HomePage isNonMobileScreens />
      </Provider>);
      expect(screen.getByRole("advert")).toBeInTheDocument();
    });
  
    it("should render the FriendListWidget component on non-mobile screens", () => {
      render(      
      <Provider store={store}>
        <HomePage />
      </Provider>);
      expect(screen.queryByRole("friendlist")).toBeNull();
  
      render( 
     <Provider store={store}>
        <HomePage isNonMobileScreens />
      </Provider>);
      expect(screen.getByRole("friendlist")).toBeInTheDocument();
    });
  });


//   it('should run', () => {
//     console.log(store);
//   })