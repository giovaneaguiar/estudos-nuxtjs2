export default ({ redirect }) => {
    console.log('auth middleware');
    const loggedIn = false;

    if (!loggedIn) {
        //se o usuário não estiver logado, será redirecionado para home
        return redirect('/');
    }
    
}