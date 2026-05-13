import Image from "next/image";
interface MemeCardProps {
  title: string;
  description: string;
  imageUrl: string;
}
export const MemeCard=({title,description,imageUrl}:MemeCardProps) => {
  return (
    <div className="flex flex-row gap-4 p-4">
      <Image src={imageUrl} width={150} height={150} alt="meme" className="rounded-lg" />
      <div className="flex-1">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};
