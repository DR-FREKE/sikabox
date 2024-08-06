import clsx from "clsx";
import { CountryType } from "../lib/types";

const DetailRow = ({ title, value, no_border }: { title: string; value: string; no_border?: boolean }) => (
  <div className={clsx("py-3 flex justify-between items-center", no_border ? "border-none" : "border-b")}>
    <span>{title}</span>
    <span>{value}</span>
  </div>
);

export const DetailView = ({ data }: { data: CountryType }) => {
  return (
    <div className="flex flex-col gap-5">
      <DetailRow title="Capital" value={data?.capital.join(", ")} />
      <DetailRow title="Language Spoken" value={Object.values(data?.languages ?? {})?.join(", ")} />
      <DetailRow title="Timezone" value={data.timezones.join(", ")} />
      <DetailRow
        title="Currency"
        value={Object.values(data.currencies ?? {})
          .map((currency: any) => `${currency.name} (${currency.symbol})`)
          .join(", ")}
        no_border
      />
    </div>
  );
};
