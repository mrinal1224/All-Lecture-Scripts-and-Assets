# Topic : Local Storage II - hook
## Problem Statement 

You need to create a custom hook called useLocalStorage(key, initialValue) that can be used to store and retrieve data from local storage. You should use the key prop as the key for the data in local storage and initialValue as the initial value.

The hook should return an object with two properties:

* the current value of the data, which should be initialized to the value stored in local storage (if it exists), or the initialValue argument (if it doesn't)
* a function that can be used to update the value of the data in local storage

Every time the value of the data is updated, the hook should update the corresponding value in local storage.

Please see the example below for the required return object.

We have already written some starting code for you.


## Demo 
<img src ="https://www.reacterry.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fcoding-platform%2Ffa94c51c-7b77-48a8-97eb-769d921bd376_localstorage1.gif%3Fauto%3Dcompress%2Cformat&w=3840&q=75">

### code stub 
```jsx
export const useLocalStorage = (key, initialValue) => {
    // Write the body of the hook here
  return {};
};

const App = () => {
  const {value, setValue} = useLocalStorage('inputValue', '');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default App;
```

## hints
* Use the useState hook to create a state variable for the value of the data to be stored in local storage. Initialise the state variable using the useState hook's initialiser function.

* Use the useEffect hook to write the data to local storage whenever it changes. Make sure to pass the value and the key to useEffect's dependencies array to ensure that it only updates when the value changes.


## solution 
```jsx
import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? storedValue : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return {value, setValue};
};

const App = () => {
  const {value, setValue} = useLocalStorage('inputValue', '');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default App;
```



## solution  
```jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const animalData = [
  { name: 'Eagle', class: 'Birds' },
  { name: 'Penguin', class: 'Birds' },
  { name: 'Parrot', class: 'Birds' },
  { name: 'Lion', class: 'Mammals' },
  { name: 'Tiger', class: 'Mammals' },
  { name: 'Elephant', class: 'Mammals' },
  { name: 'Cobra', class: 'Reptiles' },
  { name: 'Lizard', class: 'Reptiles' },
  { name: 'Tortoise', class: 'Reptiles' },
  { name: 'Salmon', class: 'Fish' },
  { name: 'Shark', class: 'Fish' },
  { name: 'Trout', class: 'Fish' },
];

const LabelFilter = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);

  const toggleClass = (animalClass) => {
    if (selectedClasses.includes(animalClass)) {
      setSelectedClasses(selectedClasses.filter((c) => c !== animalClass));
    } else {
      setSelectedClasses([...selectedClasses, animalClass]);
    }
  };

  const animalClasses = Array.from(new Set(animalData.map((animal) => animal.class)));

  const filteredAnimals = animalData.filter((animal) =>
    selectedClasses.length === 0 ? true : selectedClasses.includes(animal.class)
  );

  return (
    <Wrapper>
      <div data-testid='labels-wrapper-id' className='label-container'>
        {animalClasses.map((animalClass) => (
          <div 
            data-testid='label-id'
            className='label'
            key={animalClass}
            style={{
              backgroundColor: selectedClasses.includes(animalClass) && '#333',
              color: selectedClasses.includes(animalClass) && '#fff',
            }}
            onClick={() => toggleClass(animalClass)}
          >
            {animalClass}
          </div>
        ))}
      </div>
      <div data-testid='tile-container-id' className='tile-container'>
        {filteredAnimals.map((animal) => (
          <div data-testid='animal-tile-id' className='tile' key={animal.name}>{animal.name}</div>
        ))}
      </div>
    </Wrapper>
  );
};

export default LabelFilter;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
  margin: 24px;
  gap: 24px;

  .label-container {
    display: flex;
    flex-direction: row;
    gap: 12px;

    .label {
      background-color: #fff;
      color: #333;
      border: 1px solid #333;
      border-radius: 4px;
      margin-bottom: 8px;
      padding: 6px 12px;
      cursor: pointer;
      transition: 0.1s ease-in-out;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .tile-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;

    .tile {
      background-color: #333;
      color: #fff;
      padding: 12px;
      border-radius: 4px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      min-width: 120px;
    }
  }
`;
```