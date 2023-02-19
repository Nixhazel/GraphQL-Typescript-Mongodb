import jwt from "jsonwebtoken";

type JsonPayload = {
    email: string
    id:string
}

export const generateToken = ({ email, id }: JsonPayload) => {
	const token = jwt.sign({ email, id }, "secret", { expiresIn: "1d" });
	return token;
};

export const decode = (token: string) => {
    const decoded = jwt.verify(token, "secret") as JsonPayload;
    return decoded
}