# Title : Label group by  dashboard

## Problem statement

* The task is to finish implementing the component LabelFilter; an interactive dashboard with filters displaying different types of animals.

Luckily all of the designs have already been nearly implemented, all you have to do is to finish building out the filtering logic.

Changes needed:

* When a label is selected it should have the following styles applied to it: color of #fff and background color of #333.
* When a class label is selected only the animal belonging to the selected class should be displayed. So when the user clicks on birds, only the birds tiles should be visible.
* When more than one label are selected then animals belonging to both of those classes should be displayed. So when the user clicks on birds and mammals, both the birds and the mammal tiles should be visible.

## demo 
<img src="https://www.reacterry.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fcoding-platform%2F951f6b0a-9e0f-4acb-80b2-e69ff823ffb1_dashboard.gif%3Fauto%3Dcompress%2Cformat&w=3840&q=75">


## sample code 
```jsx
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
    /***
     * 
     * You don’t need to worry about styling your application as we have already done it for you. But if you wish to update the styles, you can use styled-components, inline style or tailwindcss.
    * Check out the demo gif to make sure that you understand what you’re meant to build.
    * Do not edit the data-testid attributes.
    * Do not edit the animalData object.
     * 
     * */ 
  const animalClasses = Array.from(new Set(animalData.map((animal) => animal.class)));

  return (
    <Wrapper>
      <div data-testid='labels-wrapper-id' className='label-container'>
        {animalClasses.map((animalClass) => (
          <div 
            data-testid='label-id'
            className='label'
            key={animalClass}
          >
            {animalClass}
          </div>
        ))}
      </div>
      <div data-testid='tile-container-id' className='tile-container'>
        {animalData.map((animal) => (
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