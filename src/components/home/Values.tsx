import { Fragment } from "react";
import { values } from "@/content/site";

export function Values() {
  return (
    <section aria-label="Our values" className="border-y border-line">
      <ul className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-6 sm:justify-between sm:px-8">
        {values.map((v, i) => (
          <Fragment key={v}>
            {i > 0 && <li aria-hidden className="text-terracotta">✦</li>}
            <li className="label text-ink-soft">{v}</li>
          </Fragment>
        ))}
      </ul>
    </section>
  );
}
