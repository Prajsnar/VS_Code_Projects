
function ProfilePicture() {

    const imageUrl = 'https://placehold.jp/3d4070/ffffff/100x100.png'

    const handleClick = (e) => e.target.style.display = "none";

    return(
        <img onClick={(e) => handleClick(e)}src={imageUrl}></img>
    )
}

export default ProfilePicture