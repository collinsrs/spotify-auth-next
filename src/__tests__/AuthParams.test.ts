import useAuthParams from '../components/AuthParams';

describe('AuthParams', () => {
  it('should return an object with the correct properties', () => {
    const [authParams, setAuthParams] = useAuthParams();

    expect(authParams).toHaveProperty('clientId');
    expect(authParams).toHaveProperty('responseType');
    expect(authParams).toHaveProperty('redirectUri');
    expect(authParams).toHaveProperty('code_challenge_method');
    expect(authParams).toHaveProperty('code_challenge');
  });
});
