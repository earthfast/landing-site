import { tv } from "tailwind-variants";
import cx from "classnames";

const buttonStyles = tv({
  base: "rounded-xl focus:outline-none focus:shadow-outline",
  variants: {
    variant: {
      primary: "bg-primary-light dark:bg-primary-dark text-white",
      inverted:
        "bg-transparent text-primary-light dark:text-white border border-primary-light dark:border-white",
      text: "bg-transparent text-primary hover:underline",
    },
    size: {
      small: "text-sm py-2 px-2",
      medium: "text-base py-[0.906rem] px-4 leading-5",
      large: "text-lg py-4 px-6",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

type ButtonProps = {
  variant?: "primary" | "inverted" | "text";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  variant = "primary",
  size = "medium",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cx(className, buttonStyles({ variant, size }))} {...props}>
      {children}
    </button>
  );
}

export default Button;
