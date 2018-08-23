
export default function AuthenticatedService (contextPath) {
  let url = contextPath + '/authenticated'
  // component should have categories and alert object
  this.get = function () {
    return fetch(url, {credentials: 'include'}
    ).then((response) => response.json()
    )
      .then((jsonResponse) => {
        let authenticated = jsonResponse.authenticated
        if (
          !authenticated
        ) {
          window.location = contextPath + '/login.html'
        }
        console.log(jsonResponse.authenticated)
      })
      .catch(function (e) {
        throw e
      })
  }
}
