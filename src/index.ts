interface params {
  [propName: string]: string | number
}

function jsonpget (url: string, params?: params, callback = 'callback') {
  return new Promise((resolve, reject) => {
    // get our complete url
    let completeUrl: string;
    if (params) {
      completeUrl = url + '?'
      for (let i in params) {
      completeUrl += `${i}=${params[i]}&`
    }
      completeUrl += `${callback}=myback`
    } else {
      completeUrl = `${url}?${callback}=myback`
    }

    function myback (data: any) {
      window['jsonpData'] = data
      delete window['myback']
      console.log(new Date(), 'myback')
    }

    function clearScript () {
      let script: HTMLElement = document.getElementById('for-jsonp')
      let parentNode: Node = script.parentNode
      parentNode.removeChild(script)
    }

    window['myback'] = myback

    // creste a script element
    let script: HTMLScriptElement = document.createElement('script')
    script.type = 'text/javascript'
    script.src = encodeURI(completeUrl)
    script.id = 'for-jsonp'
    script.onload = () => {
      clearScript()
      resolve(window['jsonpData'])
      delete window['jsonpData']
      console.log(new Date(), window['jsonpData'])
    }
    script.onerror = (e: any) => {
      clearScript()
      let errorText: string = `Your jsonp request to ${e.target.src} is fail, please check your url or params again.`
      reject(errorText)
    }
    let body: HTMLElement = document.body
    body.appendChild(script)
  })
}

export default jsonpget
