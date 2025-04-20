import { ReactNode } from "react";

export default function NoSSR({ 
    children
}: Readonly<{
    children: ReactNode
}>) {
    const isServer = () => typeof window === 'undefined';

    return isServer()
        ? null
        : (<>{ children }</>)
}