# IronHack Cinema

An ongoing project / codealong to learn React fundamentals.


## Installation

### `npm install`
### `npm run start`


## Steps

### Step 0: initial commit [a5444d3]

- Initial setup, using CRA


### Step 1: Components and props [6fcce00]

- Create first components (function components)
- Passing info with props


### Step 2: State [32fce5d]

- Using State in Class components
- Setting up a counter for the Movie component


### Step 3: ES6 Modules []

- Extract components to different files, using ES6 Modules



### Step 4: Styling []

- 4.a: using variable className
- 4.b: using inline style


### Step 5: Lists & keys []
- Loading the list of movies from an array with `moviesArr.map()`


### Step 6: JSX Spread Attributes []
- Pass props using JSX Spread Attributes


### Step 7: Extract code to a specific function []
- Extract code to a specific function in charge of rendering the list of movies


### Step 8: Import data from a json file []
- Extract the data to a json file & import it


### Step 9: Dynamic list of movies []
- 9.a: Store the list of movies in State
- 9.b: Calling a method in the parent component from a child component
- 9.c: Passing the id of the movie when we invoke the method in the parent component
- 9.d: Updating state with the new list of movies
- 9.e: Updating state with an updater function (instead of an object)


### Step 10: Conditional rendering
- 10.a: Conditional rendering storing JSX in a variable
- 10.b: Conditional rendering with the logical AND operator
- 10.c: Conditional rendering with the ternary operator
- 10.d: Use conditional rendering to display msg if there are no movies available



### Step 11: Forms
- 11.a: Controlled component with one input field
- 11.b: Controlled component with multiple input fields
- 11.c: Handle form submission:
  - In the parent component, add the method createMovie()
  - When we render <AddMovie />, pass a reference to that method through props
  - When the user submits the form, invoke that method of the parent component (and pass the information about the new movie)
  - In createMovie(), update state (adding the new movie to state.moviesArr)
- 11.d: Reset the form after submit


> Creating React forms:
>
> - Create the form in our JSX (HTML tags)
>
> - Make it a "Controlled Component"
>   - Initialize state
>   - Set the input value from state (ex. `value={this.state.title}` )
>   - Add onChange event (and update state with the new value)
>
> - Handle form submission



### Bonus: Functionality to sort by title/rating

- Task: implement two buttons to sort movies by title/rating.

- Notes:
  - This is functionality is equivalent to "Iteration 3" in the LAB "IronContacts".
  - You can add the buttons on the component <Main /> (that will make your life easier because you wouldn't need to worry about communication between components)


### Bonus: Search Bar

- Task: implement a search bar, allowing to filter the movies to display.

- Notes: 
  - This functionality is equivalent to "Iteration 4" in the LAB "IronNutrition".
  - Ideally, you'd create a specific component (eg. <SearchBar /> ). In that case, you'll need to deal with communication between components (when the user types something, you will need to call a method in the parent component to update the list of movies etc.)




### Step 12: Lifting state up
- 12.a: Add a new component `<Summary />` that needs access to the list of movies (we need to lift state up to the `<Main />` component, which is the closest common ancestor).
  - Note: at this point, functionality to delete and add movies doesn't work.

- 12.b: Functionality to delete Movie


