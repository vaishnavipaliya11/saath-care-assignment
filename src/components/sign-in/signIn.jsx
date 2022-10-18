import { PasswordWrapper } from "../passwords-wrapper/password-wrap"
import { Info } from "../terms-info/info"
import { UserProfile } from "../user-profile/user"
import "../../styles.css"
export const SignIn =() =>{
return(
    <div className="common-column center">
        
        <UserProfile/>
        <PasswordWrapper/>
        <Info/>
    </div>
)
}
