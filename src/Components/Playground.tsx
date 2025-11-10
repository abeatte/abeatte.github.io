import { Suspense } from "react";
import Secret from "./Secret"
import Loading from "./Loading";

export default function Playground() {
    return (
        <Suspense fallback={<Loading />}>
            <Secret />
        </Suspense>
    );
}