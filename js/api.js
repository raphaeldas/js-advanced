async function fetchFromGeoAdmin(api, path) {
    const response = await fetch(`https://api3.geo.admin.ch/rest/services/api/${api}${path}`, {
        method: 'GET'
    });
    console.log(response);
    const json = await response.json();
    // console.log(json);
    return json;
}

export { fetchFromGeoAdmin };