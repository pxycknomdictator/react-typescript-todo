import { nanoid } from "nanoid";

export const generateRandomId = (rounds: number): string => nanoid(rounds);
