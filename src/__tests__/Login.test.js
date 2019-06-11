import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import 'jest-dom/extend-expect';
import {
  render,
  fireEvent,
  cleanup,
  getByTestId
} from '@testing-library/react';
// import Login from '../components/Login';
import {
  Authenticator,
  AuthenticationContext
} from '../components/Authenticator';

import '../utils/i18n';

window.matchMedia = jest.fn().mockImplementation(query => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn()
  };
});

afterEach(cleanup);

test('logs in user in the authenticator provider', () => {
  const { container } = render(
    <MemoryRouter>
      <Authenticator>
        <AuthenticationContext.Consumer>
          {({ loginUser, logoutUser, authState }) => (
            <div>
              <span>{`${authState.loggedIn}`}</span>
              <button
                data-testid="login-button"
                onClick={() => loginUser({})}
              />
              <button
                data-testid="logout-button"
                onClick={() => logoutUser({})}
              />
            </div>
          )}
        </AuthenticationContext.Consumer>
      </Authenticator>
    </MemoryRouter>
  );

  expect(container.querySelector('span').textContent).toEqual('false');
  fireEvent.click(getByTestId(container, 'login-button'));
  expect(container.querySelector('span').textContent).toEqual('true');
  fireEvent.click(getByTestId(container, 'logout-button'));
  expect(container.querySelector('span').textContent).toEqual('false');
});
