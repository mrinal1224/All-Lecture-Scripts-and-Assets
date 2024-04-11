## Que 1. How children component can talk to parent component 
1.  through state
2. passing params in functions call that is passed as props from parent to child 
3. through re-rendering itself

## Que 2. what happens when a parent component updates it's state  ?
1. It re-renders
2. it re-renders itself, it's siblings and it's descendent
3. it re-renders itself and it's descendent

## Que 3. What of the following version of useEffect is best for loading the conetent once just once in the life time
1. useEffect(handler,[]);
2. useEffect(handler);
3. useEffect(handler,[dep1])

## Que 4. When does cleanup of a useEffect is fired ?
1. Before next render
2. after props are passed to children
3. After first useEffect call
4. just before making next useEffect call or unmount

