import apiInstance, { login } from '../api/api'

test('sdsdfsfsdfsfsdfsf!!!!!!!!!!!!!!!!', () => {
  const spy = jest.spyOn(apiInstance, 'post').mockImplementation(() => Promise.resolve())

  login().then(() => expect(spy).toBeCalled())
})
