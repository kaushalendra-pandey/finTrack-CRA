export const numberGreaterThanZero = (props, propName, componentName) => {
    componentName = componentName || 'DefaultComponent';
  
    if (props[propName]) {
      let value = props[propName];
      if (typeof value === 'number') {
          return value > 0 ? null : new Error(`${propName} in ${componentName} is less than 0.`);
      }
    }
  
    return null
  }