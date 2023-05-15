import { ReactElement } from "react";

const withVisibilityGuard = (WrappedComponent:() => ReactElement, searchKeys:string[]) =>{
  const isEmpty = (value:any) => {
    if (typeof value !== "object" || value === null) {
      return value === undefined || value === null;
    }
    return Array.isArray(value) ? value.length === 0 : Object.keys(value).length === 0;
  }
  return (props:any) => {
    const hasAllSearchKeys = searchKeys.every(searchKey => {
      const value = searchKey.split('.').reduce((obj, key) => obj && obj[key], props);
      console.log(value)
      return !isEmpty(value);
    });
    
    return hasAllSearchKeys ? <WrappedComponent {...props} /> : null;
  }
}

export default withVisibilityGuard;
