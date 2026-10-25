export const checkValidData = (name, email, password) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isEmailValid = emailRegex.test(email);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    const isPasswordValid = passwordRegex.test(password);

    const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
    const isNameValid = nameRegex.test(name);

    if (!isNameValid) return "Name is not valid!";
    if (!isEmailValid) return "Email id is not valid!";
    if (!isPasswordValid) return "Password is not valid!";

    return null;
}