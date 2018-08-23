export default function MijnOverzichtService (serviceUrl) {
  let url = serviceUrl + '/mijnoverzicht.json'
  // component should have categories and alert object
  this.get = function () {
    return fetch(url, {credentials: 'include'}
    ).then((response) => response.json()
    )
      .then((jsonResponse) => {
        return jsonResponse
      })
      .catch(function (e) {
        throw e
      })
  }
}
