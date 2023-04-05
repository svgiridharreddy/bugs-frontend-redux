import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBugs, getUnresolvedBugs } from '../store/bugs';


const BugsList = () => {
  const dispatch = useDispatch();
  const bugs = useSelector(getUnresolvedBugs)
  useEffect(()=> {
    dispatch(loadBugs)
  },[])
  return (  
    <ul>
     {bugs.map(
      bug => 
      <li key={bug.id}>{bug.description}<button onClick={()=> this.props.resolveBug(bug.id)}>Resolve</button></li>
    )}
     </ul>
  );
}
 
export default BugsList;