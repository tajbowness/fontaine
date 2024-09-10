/**
 * @description Use when covering a lot of components, unnecessary if its just one. 
 */
export default function ErrorCheck(props) {
  if (props.hasError) {throw new Error("hasError: Manually Thrown - ErrorCheck.jsx")};  
  return;
}