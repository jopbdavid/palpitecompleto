"use server";
import { generateTourImage, getSingleTour } from "@/utils/action";
import TourInfo from "@/components/TourInfo";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
// const url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=`;

const singleProduct = async ({ params }) => {
  //   const { id } = params;
  //   const tour = await getSingleTour(id);

  //   if (!tour) {
  //     redirect("/tours");
  //   }
  // const tourImage = await generateTourImage({
  //   city: tour.city,
  //   country: tour.country,
  // });

  //   const { data } = await axios(`${url}${tour.city}`);

  //   const tourImage = data?.results[0]?.urls?.raw;

  return (
    <h1>Placeholders</h1>
    // <div>
    //   <Link href="/tours" className="btn btn-secondary mb-12">
    //     Back to tours
    //   </Link>
    //   {tourImage ? (
    //     <div>
    //       <Image
    //         src={tourImage}
    //         width={300}
    //         height={300}
    //         className="rounded-xl shadow-xl mb-16 h-96 w-96 object-cover"
    //         alt={tour.title}
    //         priority
    //       />
    //     </div>
    //   ) : null}
    //   <TourInfo tour={tour} />
    // </div>
  );
};

export default singleProduct;
