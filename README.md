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

