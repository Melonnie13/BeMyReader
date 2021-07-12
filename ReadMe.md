### Live Link : https://be-my-reader.herokuapp.com/

![splashPage](https://user-images.githubusercontent.com/76574880/125215465-2e471100-e281-11eb-9962-fd3f3458b601.png)

**Be My Reader** </h2> is a fullstack SQLAlchemy app that lets users upload whatever they happen to be reading so that blind and vision-impaired users can listen to it. Currently, sighted volunteers record audio via various methods and donate those recordings directly to specific schools for the blind. This app opens up volunteers' ability to upload audio and, more importantly, opens up access to written materials for the blind and vision-impaired. 

![audioRecorder](https://user-images.githubusercontent.com/76574880/125215479-356e1f00-e281-11eb-94c9-4ffd88fdb377.png)

Here, users can access their own computer's microphone to record what they have on hand. They can then submit a Title, Description, and choose from pre-populated categories to append to their upload. The app is entirely self-contained and does not use external APIs for its content. All content is user generated.

![audioPlayer](https://user-images.githubusercontent.com/76574880/125215485-3901a600-e281-11eb-80e6-458261e503a1.png)

While most of the usability of Be My Reader is focused on the frontend, it requires a stable state and dependable database to work effectively.

## Technologies Used for Be My Reader:
-----------------------------------------------------------------
### FrontEnd
* React.js
* Redux
* Javascript
* HTML
* Vanilla CSS
* Heroku

<img width="1004" alt="Screen Shot 2021-07-11 at 6 46 42 PM" src="https://user-images.githubusercontent.com/76574880/125216357-8ed74d80-e283-11eb-82ac-acf85fbe4a5e.png">

## Backend
* Flask
* Python
* SQLAlchemy
* PostgreSQL
* Docker
* wtforms, wtform validators

<img width="1049" alt="Screen Shot 2021-07-11 at 6 48 45 PM" src="https://user-images.githubusercontent.com/76574880/125216370-a1518700-e283-11eb-8cfc-97dad3ca8048.png">

## Useability

User's can create favorite lists, add recordings to those lists, and have access to both their lists and recordings on their user page.

![userPage](https://user-images.githubusercontent.com/76574880/125215487-3acb6980-e281-11eb-93ea-e779a420311f.png)

Where possible, all search results and audio uploads are rendered alphabetically for ease of use for the blind and visually impaired. All JSX utilizes labels for accessibility.

![search](https://user-images.githubusercontent.com/76574880/125215490-3dc65a00-e281-11eb-9ac0-d3814bf863ba.png)

## Conclusion

My biggest challenge with this project was keeping the audio blob stable through the Redux store and into the backend. That blob nearly engulfed me, but after a lifetime dedicated to volunteer and nonprofit service, I deeply enjoyed creating this project. I am still nowhere near finished and welcome input and advice for the further development. In the near future, I would like to add audio messaging and following features, as well as AWS storage services. 
