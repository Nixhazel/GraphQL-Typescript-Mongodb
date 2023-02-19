import jwt from "jsonwebtoken";
export const generateToken = ({ email, id }) => {
    const token = jwt.sign({ email, id }, "secret", { expiresIn: "1d" });
    return token;
};
export const decode = (token) => {
    const decoded = jwt.verify(token, "secret");
    return decoded;
};
