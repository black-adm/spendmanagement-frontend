import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

type TogglePasswordButtonProps = {
  showPassword: boolean;
  toggleShowPassword: () => void;
};

export function TogglePasswordButton({
  showPassword,
  toggleShowPassword,
}: TogglePasswordButtonProps) {
  return (
    <button type="button" onClick={toggleShowPassword} className="pr-4 bg-none">
      {showPassword ? (
        <EyeOpenIcon className="size-5" />
      ) : (
        <EyeClosedIcon className="size-5" />
      )}
    </button>
  );
}
