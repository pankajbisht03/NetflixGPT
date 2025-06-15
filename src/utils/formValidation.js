export const checkValidations = (email, password) => {
    const isValidEmail = /^\S+@\S+\.\S+$/.test(email);
    const isValidPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    if(!isValidEmail) return "Email is not Valid";
    if(!isValidPassword) return "Password is not Valid";
    return null

}