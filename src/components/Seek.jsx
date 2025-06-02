import Heading from "./Heading";
import SmallHeading from "./SmallHeading";

export default function Seek() {
  return (
    <section className="w-full min-h-screen text-[var(--text)] flex items-start justify-center py-4">
      <div className="w-full grid grid-cols-2 gap-50">
        <div className="w-full flex flex-col gap-4">
          <Heading
            title={
              <>
                What <span className="font-ephasis font-normal">I seek</span>
              </>
            }
          />
          <SmallHeading title="I love bold design solutions that not only tackle the problem, but add a little bit of beauty to our world. The beauty of crafting narratives is neither just a job or a hobby - It's simply something I love to do." />
        </div>
      </div>
    </section>
  );
}
