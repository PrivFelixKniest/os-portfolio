import Image from "next/image";

export function ProjectPage({
  title,
  icon,
  description,
  projectImages,
}: {
  title: string;
  icon: string;
  description: string;
  projectImages?: string[];
}) {
  const headerImage =
    projectImages && projectImages.length > 0 ? projectImages[0] : undefined;

  const displayImages = projectImages
    ? projectImages.slice(1, projectImages.length)
    : [];

  const leftDisplayImages = displayImages.slice(
    0,
    Math.round(displayImages.length / 2)
  );
  const rightDisplayImages = displayImages.slice(
    Math.round(displayImages.length / 2),
    displayImages.length
  );

  return (
    <section className="h-full w-full bg-gray-900/80 p-5 md:p-10 overflow-y-auto">
      <header className="flex items-center gap-4 sm:flex-row flex-col">
        <Image
          src={icon}
          height={40}
          width={40}
          alt="Application Icon"
          className="rounded-full"
        />
        <h1 className="font-bold text-lg md:text-2xl ">{title}</h1>
      </header>
      {headerImage && (
        <Image
          alt="Header Image of the project"
          src={headerImage}
          height={800}
          width={1200}
          className="w-full object-cover mb-12 mt-12 shadow-xl shadow-sky-950/10 rounded-lg "
        />
      )}
      <p>{description}</p>
      <div
        aria-label="project image collage"
        className="flex gap-5 md:flex-row flex-col mt-12"
      >
        {[leftDisplayImages, rightDisplayImages].map((imageRow, idxRow) => {
          return (
            <div key={idxRow} className="flex gap-5 flex-col">
              {imageRow.map((image, idx) => {
                return (
                  <Image
                    key={idx}
                    alt="Image describing this project"
                    src={image}
                    height={800}
                    width={1200}
                    className="w-full object-cover rounded-md"
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}
