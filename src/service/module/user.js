import requset from '../requset'
// eslint-disable-next-line new-cap
const http = new requset()
export const Login = async () => {
  return http.getRequest({
    url: '/WXAJAX.ashx',
    data: {
      Action: 'XYUSER'
    }
  })
}
