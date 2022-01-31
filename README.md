# LOGS

#### 16-17/01/2022:

React app creation.
Creation of src/components
Creation of page Home.js
Install react-router-dom
Install react material UI
building header and footer based on free blog template :
https://github.com/mui-org/material-ui/tree/v4.x/docs/src/pages/getting-started/templates/blog

#### 18/01/2022:

Fetching post from my DRF blog_api.
sidebar : API call to FFVL.
trouble : I want it to update automaticly at some set interval an rerenders, using hooks.
Knowing that a balise send datas every 10min I currently fecth datas every 10min.
Goal is to make a new request only when  balise udpdates.
So if balise has sent datas at 17:36 (dateIso) I should only send another fetch request at 17:46.

#### 19/01/2022:

Firstly I'm using setInterval and clearInterval into useEffect set at 600000ms.
Secondly I may create a function to calculate precise delay based on dateIso.
and calculate next update time. (for fecthing)
Inserted a cover image.
Reworked architecture and folders.

#### 20/01/2022:

More on fetching datas from django rest api. Created a "detail" view (single post view).
Added a new route.
Used useParams to get slug from the url.

#### 21/01/2022:

Implemented react markdown.
https://www.npmjs.com/package/react-markdown

Implemented react-google-map
https://react-google-maps-api-docs.netlify.app/#section-getting-started

console.cloud.google.com/google/maps-apis/
Stored API key in a .env for dev purposes only.

Polyline path needs to be [{lat: 37.772, lng: -122.214}, {lat: 21.291, lng: -157.821}]

#### 23/01/2022:

Implemented polyline from a Json file.
Json file are created from an existing flight URL with a python scripts.

#### 31/01/2022:

Begun to build gallery display.

## NEEDS MANY IMPROVMENTS