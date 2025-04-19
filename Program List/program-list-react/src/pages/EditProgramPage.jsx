import React, { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditProgramPage = ({ updateProgramSubmit }) => {
  const program = useLoaderData();
  const [title, setTitle] = useState(program.title);
  const [description, setDescription] = useState(program.description);
  const [duration, setDuration] = useState(program.duration);
  const [start, setStart] = useState(program.start);
  const [mentorName, setMentorName] = useState(program.mentor.name);
  const [mentorAbout, setMentorAbout] = useState(program.mentor.about);
  const [contactEmail, setContactEmail] = useState(program.mentor.email);
  const [contactPhone, setContactPhone] = useState(program.mentor.phone);

  const navigate = useNavigate();
  const { id } = useParams();

  const submitForm = (e) => {
    e.preventDefault();

    const updateProgram = {
      id,
      title,
      description,
      duration,
      start,
      mentor: {
        name: mentorName,
        about: mentorAbout,
        email: contactEmail,
        phone: contactPhone,
      },
    };

    updateProgramSubmit(updateProgram);

    toast.success("Program Updated Successfully");

    return navigate(`/programs/${id}`);
  };
  return (
    <>
      <section className="bg-bg">
        <div className="container m-auto max-w-2xl py-24">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={submitForm}>
              <h2 className="text-3xl text-center font-semibold mb-6">
                Update Program
              </h2>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Program Name
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="eg. Full Stack Web Development"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Add any additional details here..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Duration
                </label>
                <select
                  id="duration"
                  name="duration"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                >
                  <option value="Less than 1 week">Under 1 week</option>
                  <option value="2 weeks">2 weeks</option>
                  <option value="3 weeks">3 weeks</option>
                  <option value="4 weeks">4 weeks</option>
                  <option value="Less than 6 months">Less than 6 months</option>
                  <option value="More than 6 months">More than 6 months</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  id="start"
                  name="start"
                  className="border rounded w-full py-2 px-3 mb-2"
                  required
                  value={start}
                  onChange={(e) => setStart(e.target.value)}
                />
              </div>

              <h3 className="text-2xl mb-5">Mentor Info</h3>

              <div className="mb-4">
                <label
                  htmlFor="company"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Mentor Name
                </label>
                <input
                  type="text"
                  id="mentorName"
                  name="mentorName"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Mentor Name"
                  value={mentorName}
                  onChange={(e) => setMentorName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="mentor_about"
                  className="block text-gray-700 font-bold mb-2"
                >
                  About Mentor
                </label>
                <textarea
                  id="mentor_about"
                  name="mentor_about"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="What does your mentor do?"
                  value={mentorAbout}
                  onChange={(e) => setMentorAbout(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contact_email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Contact Email
                </label>
                <input
                  type="email"
                  id="contact_email"
                  name="contact_email"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Email address for applicants"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="contact_phone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Contact Phone
                </label>
                <input
                  type="tel"
                  id="contact_phone"
                  name="contact_phone"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Optional phone for applicants"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                />
              </div>

              <div>
                <button
                  className="bg-hover hover:bg-primary text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Update Program
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditProgramPage;
