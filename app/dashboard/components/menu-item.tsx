"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { DrawerContext } from "@/components/ui/drawer";

type Props = {
    children: React.ReactNode,
    href: string,
}

function MenuItem({ children, href }: Props) {
    const { onClose } = useContext(DrawerContext);

    const pathName = usePathname();
    const isActive = pathName === href;
    return (
        <Link className={cn("p-2 block hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground", isActive && "bg-primary hover:bg-primary dark:hover:bg-primary text-foreground hover:text-primary-primary-foreground")} href={href} onClick={onClose}>{children}</Link>
    )
}

export default MenuItem