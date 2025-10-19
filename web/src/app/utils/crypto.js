const bcrypt = require("bcryptjs");

const saltRounds = 12;

export async function hashPassword(password) {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error("Erro ao criptografar senha");
  }
}

export async function verifyPassword(password, hashedPassword) {
  try {
    const isValid = await bcrypt.compare(password, hashedPassword);
    return isValid;
  } catch (error) {
    throw new Error("Erro ao verificar senha");
  }
}
