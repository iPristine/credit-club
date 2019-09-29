export const fetchWrapper = (
    url,
    { method = 'GET', lang = null, csrfToken = null, body = null } = {},
  ) => {
    if (!url) {
      throw new Error('Url should be specified');
    }
    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
    };
  
    if (process.env.REACT_APP_USERNAME && process.env.REACT_APP_PASSWORD) {
      /* eslint-disable prefer-template */
      headers.Authorization =
        'Basic ' +
        Buffer.from(
          process.env.REACT_APP_USERNAME + ':' + process.env.REACT_APP_PASSWORD,
        ).toString();
      /* eslint-enable prefer-template */
    }
  
    if (lang) {
      headers['Accept-Language'] = lang;
    }
  
    if (csrfToken) {
      headers['X-CSRFToken'] = csrfToken;
    }
  
    const options = {
      method,
      headers,
      credentials: 'include',
    };
  
    if (body) {
      options.body = body;
    }
  
    return fetch(url, options)
      .then(handleFetchErrors)
      .then(handleJSON);
  };
  
  export const handleFetchErrors = async res =>
    Promise.resolve({
      ok: res.ok,
      statusText: res.statusText,
      status: res.status,
      response: await res.text(),
    });
  
  export const handleJSON = res => {
    if (res.ok) {
      try {
        return JSON.parse(res.response);
      } catch (e) {
        return res.response;
      }
    } else {
      let toThrow = null;
      try {
        toThrow = JSON.parse(res.response);
      } catch (e) {
        toThrow = Error(res.statusText || res.status);
      }
      throw toThrow;
    }
  };
  