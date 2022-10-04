import { ChangeEvent, useState } from "react";

export enum HairColor {
  Blond = "Your hair is blonde, good for you",
  Brown = "Cool hair color",
  Pink = "Wow that is so cool",
}
interface Props {
  name: string;
  age: number;
  email: string;
  hairColor: HairColor;
}

export const Person = ({ name, age, email, hairColor }: Props) => {
  const [country, setCountry] = useState<string | null>(null);

  type NameType = "Pedro" | "Jack";
  const nameForType: NameType = "Jack";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
      <input placeholder="Write down your country..." onChange={handleChange} />

      {country}
      {hairColor}
    </div>
  );
};
