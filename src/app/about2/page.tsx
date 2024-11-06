import RetroGrid from "../reusable/retrogrid";
import Navbar from "../reusable/navbar";
import Aboutus from "../reusable/aboutus";
import Ourfeatures from "../reusable/ourfeatures";
import Ourteam2 from "../reusable/ourteam2";
import Footer from "../reusable/footer";
import Timeline from "../reusable/timeline";
const about2 = () => {
  return (
    <div>
      <Navbar />
      {/* [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [background-image:var(--white-gradient),var(--aurora)] dark:[background-image:var(--dark-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] filter blur-[10px] invert dark:invert-0 after:content-[&quot;&quot;] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:dark:[background-image:var(--dark-gradient),var(--aurora)] after:[background-size:200%,_100%] after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference pointer-events-none absolute -inset-[10px] opacity-50 will-change-transform [mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)] */}
      <RetroGrid />
      {/* now about us start */}
      <Aboutus />
      {/* our features */}
      <Ourfeatures />
      {/* our featurs end */}

      {/* timeline start  */}
      <Timeline />
      <Ourteam2 />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default about2;
