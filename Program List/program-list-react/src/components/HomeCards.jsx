import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const HomeCards = () => {
  return (
    <>
      <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-xl">
            <Card border="border" borderColor="border-gray-200">
              <h2 className="text-2xl font-bold">For Members</h2>
              <p className="mt-2 mb-4">
                Browse our programs and join our community to learn and grow as
                a developer
              </p>
              <Link
                to="/programs"
                className="inline-block bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded-xl"
              >
                Explore Programs
              </Link>
            </Card>
            <Card bg="bg-tertiary">
              <h2 className="text-2xl font-bold">For Mentors</h2>
              <p className="mt-2 mb-4">
                Add your programs and help others learn and grow as a developer
              </p>
              <Link
                to="/add-program"
                className="inline-block bg-hover hover:bg-primary text-white font-bold py-2 px-4 rounded-xl"
              >
                Add Program
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCards;
