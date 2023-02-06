import { Divider } from "@components/ui/Divider";

interface Props {
  title: string;
}

export const ArticleImgHeader = ({ title }: Props) => {
  return (
    <>
      <div className="relative mx-auto flex flex-col items-center ">
        <div className="mx-auto w-full -translate-y-1/2 bg-primary p-6 pb-12 text-base-100 shadow lg:w-4/5">
          <h2 className="text-4xl uppercase text-base-100">{title}</h2>
        </div>
        <Divider />
      </div>
    </>
  );
};
