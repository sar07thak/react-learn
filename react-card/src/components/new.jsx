const Profile = () => {
   
    return(
        <>
        <ProfileCard name="sarthak" age={21}  />
        </>
    )
}

const ProfileCard = (Props) =>{
    return(
        <>
          {Props}
        </>
    )
}




export default Profile ;