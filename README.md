# React Quotes Application
React Quotes (or Inspiration Bank) is a web application that allows users to search for quotes from famous people and save them for future reference.

## Table of Contents
 * [How it works](#how-it-works)
 * [Overview of functions](#overview-of-functions)
  * [History](#history)
 * [Future enhancements](#future-enhancements)

 ## How it works

 When the app is opened, any quotes saved from local storage are retrieved and added to state. Any saved quotes are passed into the SavedQuotes component for rendering.
 When the user searches for a quote for a specific person, that input is used in an API call to a quotes API. A random quote from that author is displayed if available, and a custom error message is displayed if not. The Random Quote button calls the API endpoint that returns a random quote.

 API responses are displayed on screen and the user has an option to save the quote. When a quote is saved, it is saved to localstorage then retrieved immediately so it can be stored in state. Once in state, it is passed into the SavedQuotes component, which triggers a re-render.

 

 ## Overview of functions

 ### getRandomQuote
 Asynchronous function that calls the API endpoint that returns a random quote

### getQuoteFromSpecificPerson

Asynchronous function tied to a submit event. Takes the user's input (presumed to be an author) and calls the random quote API endpoint in order to return a random quote from that author. 

If no author name is entered, an error is returned. This is to prevent this function from returning a completely random quote (i.e. a copy of the function mentioned above). 

If the user searches for an author for which there is no quote, a custom error is returned. Otherwise, the API response is saved to state.

 ### saveQuote
 When the save button is pressed, the funcion looks for the current quote in the list of saved quotes in state. If there is a match, an error is displayed, else the quote is added to a copy of the saved quotes array and passed as an argument to the saveToLocalStorage function.

 ### saveToLocalStorage
 Turns the new array (the copy of the saved quotes array from state with quote appended) into a string. This is to allow it to be saved in local storage.
 Localstorage setItem method is called and new quotes array is saved.

 Quote is immediately retrieved so it can be added to state and trigger a re-render.


### getFromLocalStorage
New quotes array is retrieved from local storage and converted into an array. This is then saved to state.


### removeQuote

Works by copying the array of saved quotes from state and filtering out the one with an id that matches the selected quote.

This is then saved to localstorage immediately to trigger the re-render.

### closeWarning

Boolean that controls whether the warningBox component is displayed or not.



  ## History
  Originally passed quote as whole object down to displayquotes component but that caused issues with using default props (necessary to prevent errors using the app for the first time).Passed individual attributes down instead. 
  
  Error encountered when no props passed down to displayquote component - resolved with use of default props.

  Warning message functionality - getting the box to open and close as necessary. Wasn't saving the prop that was passed down into state. attempted to use one warning object (containing message and display status) instead of two to minimise the amount of state created. Using setdisplaywarning as its own functioncaused too many rerenders. Used hook instead. Changed back into message and status combination because couldn't control display status in warningbox component. Resolved by creating a function in the parent component (App) and passing that down to the child component. State maintained in the parent component.

  Error when implementing local storage functionality. Number of saved quotes in localstorage array was always one quote behind the number of saved quotes in the state array. Fixed with the following data flow / process chain:

  * When the save button is clicked, the array of quotes from state is copied and the new quote is added using the concat method. The new array of quotes (i.e. not the one from state) is passed down into the local storage save function.

  * The localstorage save function takes the new array of quotes, converts it into JSON and saves it to localstorage with the key "quotesInLocalStorage". The new array is immediately retrieved from localstorage so it can be saved to state and passed down into other components

* The getfromlocalstorage function retrieves the new quotes array from localstorage, parses it and saves it to state.

* The updated state causes the new array of quotes to be passed down into the savedquotes component and rendered.


 ## Future enhancements

 Future enhancements will replace the search bar with a data list. This is so users will have a sense of which authors are available to search for and remove guesswork.


