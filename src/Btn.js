
const Btn = ({ name, children, ...props}) => {
    return         <button {...props} className="button">{name} {children}</button>       
           
} 
export default Btn;