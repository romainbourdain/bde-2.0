import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const avatarVariants = cva("", {
  variants: {
    size: {
      default:
        "w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] text-3xl sm:text-5xl",
      sm: "w-[80px] h-[80px] text-3xl",
      lg: "w-[150px] h-[150px] text-5xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export type OrganizationIconProps = {
  src: string;
  name: string;
  className?: string;
} & VariantProps<typeof avatarVariants>;

export const OrganizationIcon = ({
  src,
  name,
  className,
  size,
}: OrganizationIconProps) => {
  return (
    <Avatar className={cn(avatarVariants({ size }), className)}>
      <AvatarImage
        src={src}
        alt={name}
        className="bg-white object-contain p-1"
      />
      <AvatarFallback>
        {name.split(" ", 2).map((word) => word[0].toUpperCase())}
      </AvatarFallback>
    </Avatar>
  );
};
