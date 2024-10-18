export default  function Friend({friend}){
const {name,email}=friend;
console.log(friend);
    return(
      <div>
<h5>Name:{name}</h5>
<h5>Email:{email} </h5>
      </div>
    )

}