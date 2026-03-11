const User = (props) => {
    return (
        <article>
            <h2>Nom d'utilisateur {props.username}</h2>
            <a href="auroregql@gmail.com">Email de l'utilisateur {props.email}</a>
        </article>
        )
}

export default User;