import Image, { StaticImageData } from "next/image";

interface InputWithIconProps {
  icon: StaticImageData;
  placeholder: string;
  input: (item: string) => void;
  value: string;
}

export const InputIcon = ({
  input,
  value,
  icon,
  placeholder,
}: InputWithIconProps) => {
  return (
    <div className="flex flex-row gap-9 justify-center items-center">
      <Image src={icon} alt={`${placeholder} icon`} className="w-8 h-8" />
      <input
        className="inputIcon"
        placeholder={placeholder}
        onChange={e => input(e.target.value)}
        value={value}
      />
    </div>
  );
};
