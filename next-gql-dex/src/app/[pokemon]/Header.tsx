"use client";

import { useRouter } from "next/navigation";

type Props = {
  title: string;
  withBackButton: boolean;
};

export default function Header({
  title,
  withBackButton,
}: Props): React.ReactNode {
  const router = useRouter();

  return (
    <header>
      <div>
        {withBackButton && <button onClick={() => router.back()}>&lt;</button>}
        <h1>{title}</h1>
      </div>
    </header>
  );
}
