import React, { useState, useEffect } from "react";
import ProgramListing from "./ProgramListing";
import Spinner from "./Spinner";

const ProgramListings = ({ isHome = false }) => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrograms = async () => {
      const apiUrl = isHome ? "/api/programs?_limit=3" : "/api/programs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setPrograms(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);
  return (
    <>
      <section className="bg-bg px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">
            {isHome ? "Recent Programs" : "Explore Programs"}
          </h2>

          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {programs.map((program) => (
                <ProgramListing key={program.id} program={program} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProgramListings;
