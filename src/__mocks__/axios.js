// __mocks__/axios.js
const mockAxios = jest.genMockFromModule('axios');

mockAxios.get.mockImplementation((url) => {
  if (url === '/api/data') {
    return Promise.resolve({
      data: {
        title: "ACME Recipe O'Master",
        tags: ["Pizza", "Burger"],
      },
    });
  }
  return Promise.reject(new Error('Not Found'));
});

export default mockAxios;
